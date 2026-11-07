import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../components/common/BackButton'
import { getSizesForCategory } from '../data/categories'
import {
  FREE_SHIPPING_THRESHOLD,
  deliveryLocations,
  getDeliveryLocation,
} from '../data/deliveryLocations'
import { products } from '../data/products'
import { useCart } from '../context/cartContext'
import { designSystem } from '../styles/theme'
import { saveLastOrder } from '../utils/orderStorage'
import { formatPrice, parsePrice } from '../utils/price'

const inputStyles = {
  bgColor: designSystem.secondary,
  border: 'none',
  borderRadius: '4px',
  h: '48px',
}

const sectionStyles = {
  bgColor: 'white',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '12px',
  p: { base: '20px', md: '32px' },
}

function createOrderNumber() {
  return `#${Date.now().toString().slice(-5)}`
}

const paymentMethods = [
  {
    value: 'card',
    label: 'Credit / Debit Card',
    description: 'Visa, Mastercard, Verve',
  },
  {
    value: 'bank',
    label: 'Bank Transfer',
    description: 'Pay directly from your bank account',
  },
  {
    value: 'cash',
    label: 'Cash on Delivery',
    description: 'Pay when your order arrives',
  },
]

function getOrderItems(locationState, cartItems) {
  if (locationState?.product) {
    return [
      {
        product: locationState.product,
        quantity: Math.max(1, locationState.quantity ?? 1),
        size:
          locationState.size ??
          getSizesForCategory(locationState.product.category)[0] ??
          null,
      },
    ]
  }

  if (cartItems.length > 0) {
    return cartItems
  }

  return [products[0], products[5]].map((product) => ({
    product,
    quantity: 1,
    size: getSizesForCategory(product.category)[0] ?? null,
  }))
}

function OrderItem({ item, sizes, onSizeChange }) {
  const { product, quantity, size } = item
  const lineTotal = parsePrice(product.currentPrice) * quantity

  return (
    <HStack align='flex-start' spacing='16px'>
      <Image
        src={product.image}
        alt={product.name}
        boxSize='64px'
        objectFit='contain'
        bgColor={designSystem.secondary}
        borderRadius='8px'
        p='6px'
        flexShrink='0'
      />
      <Box flex='1' minW='0'>
        <Text fontWeight='medium' noOfLines={2}>
          {product.name}
        </Text>
        <HStack mt='8px' spacing='12px' flexWrap='wrap' rowGap='8px'>
          {sizes.length > 0 && (
            <HStack spacing='8px'>
              <Text fontSize='sm' color='gray.500'>
                Size
              </Text>
              <Select
                size='sm'
                w='auto'
                minW='76px'
                value={size ?? sizes[0]}
                aria-label={`Size for ${product.name}`}
                bgColor={designSystem.secondary}
                border='none'
                borderRadius='4px'
                fontSize='sm'
                onChange={(event) => onSizeChange(event.target.value)}
              >
                {sizes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
          )}
          <Text fontSize='sm' color='gray.500'>
            Qty: {quantity}
          </Text>
        </HStack>
      </Box>
      <Text fontWeight='semibold' whiteSpace='nowrap'>
        {formatPrice(lineTotal)}
      </Text>
    </HStack>
  )
}

function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { items: cartItems, updateSize, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [localSizes, setLocalSizes] = useState({})
  const [locationId, setLocationId] = useState(deliveryLocations[0].id)
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const processingTimer = useRef(null)

  useEffect(
    () => () => window.clearTimeout(processingTimer.current),
    [],
  )

  const selectedLocation = getDeliveryLocation(locationId)

  const items = getOrderItems(location.state, cartItems).map((item) => {
    if (item.key) {
      return item
    }

    const overriddenSize = localSizes[item.product.id]

    return overriddenSize ? { ...item, size: overriddenSize } : item
  })

  const handleSizeChange = (item, size) => {
    if (item.key) {
      updateSize(item.key, size)
      return
    }

    setLocalSizes((previousSizes) => ({
      ...previousSizes,
      [item.product.id]: size,
    }))
  }
  const handleCustomerChange = (event) => {
    const { name, value } = event.target

    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      [name]: value,
    }))
  }

  const handleLocationChange = (event) => {
    const nextLocation = getDeliveryLocation(event.target.value)

    setLocationId(nextLocation.id)
    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      city: previousCustomer.city || nextLocation.city,
    }))
  }

  const subtotal = items.reduce(
    (total, item) => total + parsePrice(item.product.currentPrice) * item.quantity,
    0,
  )
  const originalShipping = selectedLocation.shipping
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shipping = isFreeShipping ? 0 : originalShipping
  const tax = Number((subtotal * selectedLocation.taxRate).toFixed(2))
  const total = Number((subtotal + shipping + tax).toFixed(2))

  const handlePlaceOrder = (event) => {
    event.preventDefault()

    if (isProcessing) {
      return
    }

    const order = {
      orderNumber: createOrderNumber(),
      createdAt: new Date().toISOString(),
      items: items.map((item) => {
        const price = parsePrice(item.product.currentPrice)

        return {
          id: item.product.id,
          name: item.product.name,
          image: item.product.image,
          price,
          quantity: item.quantity,
          size: item.size,
          lineTotal: Number((price * item.quantity).toFixed(2)),
        }
      }),
      subtotal,
      shipping,
      originalShipping,
      freeShipping: isFreeShipping,
      tax,
      taxLabel: selectedLocation.taxLabel,
      total,
      location: selectedLocation,
      deliveryMethod: 'Standard Delivery',
      paymentMethod:
        paymentMethods.find((method) => method.value === paymentMethod)?.label ??
        'Credit / Debit Card',
      billing: {
        ...customer,
        country: selectedLocation.country,
      },
    }

    setIsProcessing(true)
    processingTimer.current = window.setTimeout(() => {
      saveLastOrder(order)
      clearCart()
      navigate('/order-confirmation', { state: { order } })
    }, 1100)
  }

  return (
    <Box
      as='form'
      onSubmit={handlePlaceOrder}
      paddingInline={designSystem.defaultMargin}
      pb={{ base: '60px', md: '80px' }}
    >
      <Box maxW='1200px' w='100%' mx='auto'>
        <BackButton mt='40px' />

        <Text
          as='h1'
          fontFamily={designSystem.font2}
          fontSize={designSystem.headingSize1}
          fontWeight='bold'
          mb={{ base: '24px', md: '32px' }}
        >
          Checkout
        </Text>

        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0, 1.4fr) minmax(320px, 0.8fr)' }}
          gap={{ base: '32px', lg: '40px' }}
          alignItems='start'
        >
          <VStack align='stretch' spacing={{ base: '24px', md: '30px' }}>
            <Box sx={sectionStyles}>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='8px'>
                Delivery Location
              </Text>
              <Text fontSize='sm' color='gray.600' mb='20px'>
                Choose where your order should be delivered. Shipping fees and
                taxes update automatically.{' '}
                <Text as='span' fontWeight='semibold' color='green.600'>
                  Free delivery on orders of {formatPrice(FREE_SHIPPING_THRESHOLD)} or more.
                </Text>
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box gridColumn={{ md: 'span 2' }}>
                  <Text as='label' htmlFor='delivery-location' fontSize='sm' fontWeight='medium' mb='8px' display='block'>
                    Delivery location
                  </Text>
                  <Select
                    id='delivery-location'
                    name='deliveryLocation'
                    value={locationId}
                    onChange={handleLocationChange}
                    sx={{ ...inputStyles, h: '48px' }}
                    required
                  >
                    {deliveryLocations.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box
                  bgColor={isFreeShipping ? 'green.50' : designSystem.secondary}
                  border='1px solid'
                  borderColor={isFreeShipping ? 'green.200' : 'transparent'}
                  borderRadius='8px'
                  p='12px'
                >
                  <Text fontSize='sm' color='gray.500'>
                    Shipping fee
                  </Text>
                  {isFreeShipping ? (
                    <HStack spacing='8px' align='baseline'>
                      <Text
                        as='s'
                        color='gray.400'
                        fontWeight='medium'
                      >
                        {formatPrice(originalShipping)}
                      </Text>
                      <Text fontWeight='bold' color='green.600'>
                        Free
                      </Text>
                    </HStack>
                  ) : (
                    <Text fontWeight='semibold'>{formatPrice(shipping)}</Text>
                  )}
                </Box>
                <Box bgColor={designSystem.secondary} borderRadius='8px' p='12px'>
                  <Text fontSize='sm' color='gray.500'>
                    Estimated delivery
                  </Text>
                  <Text fontWeight='semibold'>{selectedLocation.eta}</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box sx={sectionStyles}>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
                Billing Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Input
                  sx={inputStyles}
                  placeholder='First name'
                  name='firstName'
                  value={customer.firstName}
                  onChange={handleCustomerChange}
                  autoComplete='given-name'
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='Last name'
                  name='lastName'
                  value={customer.lastName}
                  onChange={handleCustomerChange}
                  autoComplete='family-name'
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='Email address'
                  name='email'
                  type='email'
                  value={customer.email}
                  onChange={handleCustomerChange}
                  autoComplete='email'
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='Phone number'
                  name='phone'
                  type='tel'
                  value={customer.phone}
                  onChange={handleCustomerChange}
                  autoComplete='tel'
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='Street address'
                  name='address'
                  value={customer.address}
                  onChange={handleCustomerChange}
                  autoComplete='street-address'
                  gridColumn={{ md: 'span 2' }}
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='City'
                  name='city'
                  value={customer.city}
                  onChange={handleCustomerChange}
                  autoComplete='address-level2'
                  required
                />
                <Input
                  sx={inputStyles}
                  placeholder='Postal code'
                  name='postalCode'
                  value={customer.postalCode}
                  onChange={handleCustomerChange}
                  autoComplete='postal-code'
                  required
                />
                <Box gridColumn={{ md: 'span 2' }}>
                  <Textarea
                    sx={{ ...inputStyles, h: '120px', py: '12px' }}
                    placeholder='Order notes (optional)'
                    name='notes'
                    value={customer.notes}
                    onChange={handleCustomerChange}
                  />
                </Box>
              </SimpleGrid>
            </Box>

            <Box sx={sectionStyles}>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
                Payment Method
              </Text>

              <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                <VStack align='stretch' spacing='12px'>
                  {paymentMethods.map((method) => (
                    <Box
                      key={method.value}
                      border='1px solid'
                      borderColor={
                        paymentMethod === method.value ? designSystem.secondary2 : 'gray.200'
                      }
                      borderRadius='8px'
                      p='16px'
                    >
                      <Radio value={method.value} colorScheme='red' alignItems='flex-start'>
                        <Box>
                          <Text fontWeight='medium'>{method.label}</Text>
                          <Text fontSize='sm' color='gray.500'>
                            {method.description}
                          </Text>
                        </Box>
                      </Radio>
                    </Box>
                  ))}
                </VStack>
              </RadioGroup>

              {paymentMethod === 'card' && (
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt='24px'>
                  <Input
                    sx={inputStyles}
                    placeholder='Card number'
                    gridColumn={{ md: 'span 2' }}
                  />
                  <Input sx={inputStyles} placeholder='Name on card' gridColumn={{ md: 'span 2' }} />
                  <Input sx={inputStyles} placeholder='Expiry date (MM/YY)' />
                  <Input sx={inputStyles} placeholder='CVC' />
                </SimpleGrid>
              )}

              {paymentMethod === 'bank' && (
                <Text mt='20px' fontSize='sm' color='gray.600'>
                  You will receive our bank account details after placing the order.
                </Text>
              )}

              {paymentMethod === 'cash' && (
                <Text mt='20px' fontSize='sm' color='gray.600'>
                  Have the exact amount ready when your order is delivered.
                </Text>
              )}
            </Box>
          </VStack>

          <Box
            sx={sectionStyles}
            position={{ lg: 'sticky' }}
            top={{ lg: '24px' }}
          >
            <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
              Order Summary
            </Text>

            <VStack align='stretch' spacing='16px' divider={<Divider />}>
              {items.map((item) => (
                <OrderItem
                  key={item.key ?? item.product.id}
                  item={item}
                  sizes={getSizesForCategory(item.product.category)}
                  onSizeChange={(size) => handleSizeChange(item, size)}
                />
              ))}
            </VStack>

            <Divider my='20px' />

            {isFreeShipping && (
              <Box
                bgColor='green.50'
                border='1px solid'
                borderColor='green.200'
                borderRadius='8px'
                px='12px'
                py='10px'
                mb='16px'
              >
                <Text fontSize='sm' fontWeight='semibold' color='green.700'>
                  Free delivery unlocked
                </Text>
                <Text fontSize='xs' color='green.700' mt='2px'>
                  Shipping fee {formatPrice(originalShipping)} has been slashed.
                </Text>
              </Box>
            )}

            <HStack justifyContent='space-between' mb='12px'>
              <Text color='gray.600'>Subtotal</Text>
              <Text fontWeight='medium'>{formatPrice(subtotal)}</Text>
            </HStack>
            <HStack justifyContent='space-between'>
              <Text color='gray.600'>Shipping</Text>
              {isFreeShipping ? (
                <HStack spacing='8px'>
                  <Text as='s' color='gray.400' fontWeight='medium'>
                    {formatPrice(originalShipping)}
                  </Text>
                  <Text fontWeight='semibold' color='green.600'>
                    Free
                  </Text>
                </HStack>
              ) : (
                <Text fontWeight='medium'>{formatPrice(shipping)}</Text>
              )}
            </HStack>
            <Text
              fontSize='xs'
              color={isFreeShipping ? 'green.600' : 'gray.500'}
              mt='6px'
              mb='12px'
            >
              {isFreeShipping
                ? 'Free delivery applied to this order.'
                : `Add ${formatPrice(Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal))} more for free delivery.`}
            </Text>
            <HStack justifyContent='space-between'>
              <Text color='gray.600'>Tax ({selectedLocation.taxLabel})</Text>
              <Text fontWeight='medium'>{formatPrice(tax)}</Text>
            </HStack>

            <Divider my='16px' />

            <HStack justifyContent='space-between'>
              <Text fontWeight='semibold'>Total</Text>
              <Text fontWeight='bold' fontSize='20px'>
                {formatPrice(total)}
              </Text>
            </HStack>

            <HStack mt='20px'>
              <Input sx={inputStyles} placeholder='Coupon code' />
              <Button
                type='button'
                variant='outline'
                h='48px'
                flexShrink='0'
                _hover={{ bgColor: designSystem.secondary }}
              >
                Apply
              </Button>
            </HStack>

            <Button
              type='submit'
              w='100%'
              h='56px'
              mt='20px'
              borderRadius='4px'
              bgColor={designSystem.secondary2}
              color='white'
              fontWeight='normal'
              _hover={{ opacity: 0.85 }}
              isLoading={isProcessing}
              loadingText='Processing payment...'
            >
              Simulate Payment
            </Button>
            <Text fontSize='xs' color='gray.500' textAlign='center' mt='10px'>
              This is a demo checkout. No real payment will be processed.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Checkout
