import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { designSystem } from '../styles/theme'
import { readLastOrder } from '../utils/orderStorage'
import { formatPrice } from '../utils/price'

const sectionStyles = {
  bgColor: 'white',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '12px',
  p: { base: '20px', md: '28px' },
}

const infoRowStyles = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
}

function OrderItem({ item }) {
  return (
    <HStack align='flex-start' spacing='14px'>
      <Image
        src={item.image}
        alt={item.name}
        boxSize='64px'
        objectFit='contain'
        bgColor={designSystem.secondary}
        borderRadius='8px'
        p='6px'
        flexShrink='0'
      />
      <Box flex='1' minW='0'>
        <Text fontWeight='medium' noOfLines={2}>
          {item.name}
        </Text>
        <Text fontSize='sm' color='gray.500' mt='4px'>
          Qty: {item.quantity}
          {item.size ? ` • Size: ${item.size}` : ''}
        </Text>
      </Box>
      <Text fontWeight='semibold' whiteSpace='nowrap'>
        {formatPrice(item.lineTotal)}
      </Text>
    </HStack>
  )
}

function ExpectationStep({ number, title, description }) {
  return (
    <HStack align='flex-start' spacing='14px'>
      <Box
        boxSize='32px'
        flexShrink='0'
        display='grid'
        placeItems='center'
        borderRadius='full'
        bgColor={designSystem.secondary2}
        color='white'
        fontWeight='semibold'
      >
        {number}
      </Box>
      <Box>
        <Text fontWeight='semibold'>{title}</Text>
        <Text fontSize='sm' color='gray.600' mt='4px'>
          {description}
        </Text>
      </Box>
    </HStack>
  )
}

function OrderConfirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const order = location.state?.order ?? readLastOrder()

  if (!order) {
    return (
      <Box
        paddingInline={designSystem.defaultMargin}
        pb={{ base: '60px', md: '80px' }}
      >
        <Box maxW='720px' mx='auto' pt={{ base: '48px', md: '72px' }}>
          <Box sx={sectionStyles} textAlign='center' py={{ base: '48px', md: '64px' }}>
            <Text
              as='h1'
              fontFamily={designSystem.font2}
              fontSize={designSystem.headingSize1}
              fontWeight='bold'
            >
              No recent order found
            </Text>
            <Text color='gray.600' mt='10px' mb='24px'>
              Complete a demo checkout to see your order confirmation here.
            </Text>
            <Button
              h='52px'
              px='28px'
              borderRadius='4px'
              bgColor={designSystem.secondary2}
              color='white'
              fontWeight='normal'
              _hover={{ opacity: 0.85 }}
              onClick={() => navigate('/checkout')}
            >
              Go to Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }

  const items = order.items ?? []
  const billing = order.billing ?? {}
  const fullName =
    [billing.firstName, billing.lastName].filter(Boolean).join(' ') || 'Customer'
  const formattedDate = new Date(order.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const wasFreeShipping = order.freeShipping ?? order.shipping === 0
  const originalShipping = order.originalShipping ?? order.shipping

  return (
    <Box
      paddingInline={designSystem.defaultMargin}
      pb={{ base: '60px', md: '80px' }}
    >
      <Box maxW='1100px' w='100%' mx='auto' pt={{ base: '40px', md: '64px' }}>
        <Flex direction='column' align='center' textAlign='center' mb={{ base: '32px', md: '44px' }}>
          <CheckCircleIcon
            boxSize={{ base: '56px', md: '72px' }}
            color='green.500'
            mb='16px'
          />
          <Text
            as='h1'
            fontFamily={designSystem.font2}
            fontSize={designSystem.headingSize1}
            fontWeight='bold'
          >
            Thank you for your order!
          </Text>
          <Text color='gray.600' mt='10px' maxW='640px'>
            Your payment was successful and your order is confirmed. We are
            getting everything ready for you.
          </Text>
          <Badge
            mt='18px'
            px='14px'
            py='7px'
            borderRadius='full'
            bgColor='green.100'
            color='green.800'
            fontSize='sm'
            textTransform='none'
          >
            Order {order.orderNumber}
          </Badge>
          <Text fontSize='sm' color='gray.500' mt='10px'>
            Placed on {formattedDate}
          </Text>
        </Flex>

        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)' }}
          gap={{ base: '24px', md: '32px' }}
          alignItems='start'
        >
          <Box sx={sectionStyles}>
            <Flex justify='space-between' align='center' mb='20px'>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2}>
                Order Summary
              </Text>
              <Text fontSize='sm' color='gray.500'>
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </Text>
            </Flex>

            <VStack align='stretch' spacing='16px' divider={<Divider />}>
              {items.map((item) => (
                <OrderItem key={`${item.id}-${item.size ?? 'default'}`} item={item} />
              ))}
            </VStack>

            <Divider my='20px' />

            <HStack justifyContent='space-between' mb='12px'>
              <Text color='gray.600'>Subtotal</Text>
              <Text fontWeight='medium'>{formatPrice(order.subtotal)}</Text>
            </HStack>
            <HStack justifyContent='space-between'>
              <Text color='gray.600'>Shipping</Text>
              {wasFreeShipping ? (
                <HStack spacing='8px'>
                  {originalShipping > 0 && (
                    <Text as='s' color='gray.400' fontWeight='medium'>
                      {formatPrice(originalShipping)}
                    </Text>
                  )}
                  <Text fontWeight='semibold' color='green.600'>
                    Free
                  </Text>
                </HStack>
              ) : (
                <Text fontWeight='medium'>{formatPrice(order.shipping)}</Text>
              )}
            </HStack>
            {wasFreeShipping && (
              <Text fontSize='xs' color='green.600' mt='6px' mb='12px'>
                Free delivery applied — shipping fee slashed.
              </Text>
            )}
            <HStack justifyContent='space-between' mt={wasFreeShipping ? '0' : '12px'}>
              <Text color='gray.600'>Tax ({order.taxLabel})</Text>
              <Text fontWeight='medium'>{formatPrice(order.tax)}</Text>
            </HStack>

            <Divider my='16px' />

            <HStack justifyContent='space-between'>
              <Text fontWeight='semibold'>Total paid</Text>
              <Text fontWeight='bold' fontSize='20px'>
                {formatPrice(order.total)}
              </Text>
            </HStack>
          </Box>

          <VStack align='stretch' spacing='24px'>
            <Box sx={sectionStyles}>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='18px'>
                Delivery Details
              </Text>
              <Text fontWeight='medium'>{fullName}</Text>
              <Text mt='8px' color='gray.600'>
                {billing.address}
              </Text>
              <Text color='gray.600'>
                {[billing.city, billing.postalCode].filter(Boolean).join(', ')}
              </Text>
              <Text color='gray.600'>{billing.country}</Text>
              {billing.phone && (
                <Text color='gray.600' mt='4px'>
                  {billing.phone}
                </Text>
              )}

              <Divider my='18px' />

              <HStack sx={infoRowStyles}>
                <Text fontSize='sm' color='gray.500'>
                  Delivery method
                </Text>
                <Text fontSize='sm' fontWeight='medium' textAlign='right'>
                  {order.deliveryMethod}
                </Text>
              </HStack>
              <HStack sx={infoRowStyles} mt='10px'>
                <Text fontSize='sm' color='gray.500'>
                  Estimated delivery
                </Text>
                <Text fontSize='sm' fontWeight='medium' textAlign='right'>
                  {order.location?.eta}
                </Text>
              </HStack>
            </Box>

            <Box sx={sectionStyles}>
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='18px'>
                Payment & Billing
              </Text>
              <HStack sx={infoRowStyles}>
                <Text fontSize='sm' color='gray.500'>
                  Payment method
                </Text>
                <Text fontSize='sm' fontWeight='medium' textAlign='right'>
                  {order.paymentMethod}
                </Text>
              </HStack>
              <HStack sx={infoRowStyles} mt='10px'>
                <Text fontSize='sm' color='gray.500'>
                  Receipt sent to
                </Text>
                <Text fontSize='sm' fontWeight='medium' textAlign='right' wordBreak='break-all'>
                  {billing.email}
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Grid>

        <Box sx={sectionStyles} mt={{ base: '24px', md: '32px' }}>
          <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
            What to expect next
          </Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap='20px'>
            <ExpectationStep
              number='1'
              title='Confirmation email sent'
              description={`A receipt and order details have been sent to ${billing.email}.`}
            />
            <ExpectationStep
              number='2'
              title='We are packing your order'
              description='Our warehouse has been notified and is preparing your items for dispatch.'
            />
            <ExpectationStep
              number='3'
              title='Tracking link coming'
              description='Once your package is dispatched, we will email you a tracking link.'
            />
          </Grid>
        </Box>

        <Flex justify='center' mt={{ base: '28px', md: '36px' }}>
          <Button
            h='52px'
            px='32px'
            borderRadius='4px'
            bgColor={designSystem.secondary2}
            color='white'
            fontWeight='normal'
            _hover={{ opacity: 0.85 }}
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default OrderConfirmation
