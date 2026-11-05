import { useState } from 'react'
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
import { useLocation } from 'react-router-dom'
import BackButton from '../components/common/BackButton'
import { getSizesForCategory } from '../data/categories'
import { products } from '../data/products'
import { useCart } from '../context/cartContext'
import { designSystem } from '../styles/theme'
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
  const { items: cartItems, updateSize } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [localSizes, setLocalSizes] = useState({})

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
  const subtotal = items.reduce(
    (total, item) => total + parsePrice(item.product.currentPrice) * item.quantity,
    0,
  )
  const shipping = subtotal > 140 ? 0 : 10

  return (
    <Box paddingInline={designSystem.defaultMargin} pb={{ base: '60px', md: '80px' }}>
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
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
                Billing Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Input sx={inputStyles} placeholder='First name' />
                <Input sx={inputStyles} placeholder='Last name' />
                <Input sx={inputStyles} placeholder='Email address' />
                <Input sx={inputStyles} placeholder='Phone number' />
                <Input sx={inputStyles} placeholder='Street address' gridColumn={{ md: 'span 2' }} />
                <Input sx={inputStyles} placeholder='City' />
                <Input sx={inputStyles} placeholder='Postal code' />
                <Input sx={inputStyles} placeholder='Country' gridColumn={{ md: 'span 2' }} />
                <Box gridColumn={{ md: 'span 2' }}>
                  <Textarea
                    sx={{ ...inputStyles, h: '120px', py: '12px' }}
                    placeholder='Order notes (optional)'
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

            <HStack justifyContent='space-between' mb='12px'>
              <Text color='gray.600'>Subtotal</Text>
              <Text fontWeight='medium'>{formatPrice(subtotal)}</Text>
            </HStack>
            <HStack justifyContent='space-between'>
              <Text color='gray.600'>Shipping</Text>
              <Text fontWeight='medium'>
                {shipping === 0 ? 'Free' : formatPrice(shipping)}
              </Text>
            </HStack>

            <Divider my='16px' />

            <HStack justifyContent='space-between'>
              <Text fontWeight='semibold'>Total</Text>
              <Text fontWeight='bold' fontSize='20px'>
                {formatPrice(subtotal + shipping)}
              </Text>
            </HStack>

            <HStack mt='20px'>
              <Input sx={inputStyles} placeholder='Coupon code' />
              <Button
                variant='outline'
                h='48px'
                flexShrink='0'
                _hover={{ bgColor: designSystem.secondary }}
              >
                Apply
              </Button>
            </HStack>

            <Button
              w='100%'
              h='56px'
              mt='20px'
              borderRadius='4px'
              bgColor={designSystem.secondary2}
              color='white'
              fontWeight='normal'
              _hover={{ opacity: 0.85 }}
            >
              Pay Now
            </Button>


          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Checkout
