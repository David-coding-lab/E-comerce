import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  IconButton,
  Image,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/common/BackButton'
import { useCart } from '../context/cartContext'
import { getSizesForCategory } from '../data/categories'
import { designSystem } from '../styles/theme'
import { formatPrice, parsePrice } from '../utils/price'
import cartIcon from '../assets/Icons/Cart1.png'

const sectionStyles = {
  bgColor: 'white',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '12px',
  p: { base: '16px', sm: '20px', md: '32px' },
}

const quantityButtonStyles = {
  variant: 'ghost',
  h: 'full',
  minW: '34px',
  borderRadius: '0',
  fontWeight: 'bold',
  _hover: { bgColor: designSystem.secondary },
  _disabled: { opacity: 0.4, cursor: 'not-allowed' },
}

function Cart() {
  const navigate = useNavigate()
  const { items, itemCount, subtotal, removeItem, updateQuantity, updateSize } =
    useCart()

  const shipping = subtotal > 140 ? 0 : 10
  const total = subtotal + shipping

  return (
    <Box paddingInline={designSystem.defaultMargin} pb={{ base: '60px', md: '80px' }}>
      <Box maxW='1200px' w='100%' mx='auto'>
        <BackButton mt='40px' />

        <Flex
          justify='space-between'
          align='center'
          flexWrap='wrap'
          gap='8px'
          mb={{ base: '24px', md: '32px' }}
        >
          <Text
            as='h1'
            fontFamily={designSystem.font2}
            fontSize={designSystem.headingSize1}
            fontWeight='bold'
          >
            Shopping Cart
          </Text>
          <Text color='gray.500'>
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </Text>
        </Flex>

        {items.length === 0 ? (
          <Box sx={sectionStyles} textAlign='center' py={{ base: '48px', md: '72px' }}>
            <Image
              src={cartIcon}
              alt=''
              boxSize='56px'
              objectFit='contain'
              mx='auto'
              mb='16px'
              opacity='0.5'
            />
            <Text fontSize='xl' fontWeight='semibold'>
              Your cart is empty
            </Text>
            <Text color='gray.500' mt='8px' mb='24px'>
              Looks like you have not added anything to your cart yet.
            </Text>
            <Button
              h='52px'
              px='28px'
              borderRadius='4px'
              bgColor={designSystem.secondary2}
              color='white'
              fontWeight='normal'
              _hover={{ opacity: 0.85 }}
              onClick={() => navigate('/')}
            >
              Return To Shop
            </Button>
          </Box>
        ) : (
          <Grid
            templateColumns={{ base: '1fr', lg: 'minmax(0, 1.5fr) minmax(320px, 0.8fr)' }}
            gap={{ base: '24px', md: '32px', lg: '40px' }}
            alignItems='start'
          >
            <Box sx={sectionStyles}>
              <VStack align='stretch' spacing='0' divider={<Divider />}>
                {items.map((item) => {
                  const unitPrice = parsePrice(item.product.currentPrice)
                  const lineTotal = unitPrice * item.quantity
                  const sizes = getSizesForCategory(item.product.category)

                  return (
                    <Flex
                      key={item.key}
                      direction={{ base: 'column', md: 'row' }}
                      align={{ md: 'center' }}
                      gap={{ base: '12px', md: '16px' }}
                      py={{ base: '16px', md: '20px' }}
                    >
                      <HStack flex='1' minW='0' w='100%' spacing='12px'>
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          boxSize={{ base: '60px', sm: '68px', md: '80px' }}
                          objectFit='contain'
                          bgColor={designSystem.secondary}
                          borderRadius='8px'
                          p='6px'
                          flexShrink='0'
                        />
                        <Box minW='0'>
                          <Text fontWeight='medium' noOfLines={2} fontSize={{ base: 'sm', md: 'md' }}>
                            {item.product.name}
                          </Text>
                          {sizes.length > 0 ? (
                            <HStack spacing='8px' mt='4px'>
                              <Text fontSize='sm' color='gray.500'>
                                Size
                              </Text>
                              <Select
                                size='xs'
                                w='auto'
                                minW='72px'
                                value={item.size ?? sizes[0]}
                                aria-label={`Size for ${item.product.name}`}
                                bgColor={designSystem.secondary}
                                border='none'
                                borderRadius='4px'
                                fontSize='sm'
                                onChange={(event) =>
                                  updateSize(item.key, event.target.value)
                                }
                              >
                                {sizes.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </Select>
                            </HStack>
                          ) : (
                            item.size && (
                              <Text fontSize='sm' color='gray.500'>
                                Size: {item.size}
                              </Text>
                            )
                          )}
                          <Text
                            display={{ base: 'block', md: 'none' }}
                            mt='4px'
                            fontSize='sm'
                            color='gray.600'
                          >
                            {formatPrice(unitPrice)}
                          </Text>
                        </Box>
                      </HStack>

                      <HStack
                        w={{ base: '100%', md: 'auto' }}
                        justify='space-between'
                        gap={{ base: '8px', sm: '12px', md: '16px' }}
                      >
                        <Text
                          display={{ base: 'none', md: 'block' }}
                          w='80px'
                          flexShrink='0'
                        >
                          {formatPrice(unitPrice)}
                        </Text>

                        <HStack
                          border='1px solid'
                          borderColor='gray.300'
                          borderRadius='4px'
                          spacing='0'
                          h='36px'
                          flexShrink='0'
                        >
                          <Button
                            {...quantityButtonStyles}
                            aria-label='Decrease quantity'
                            isDisabled={item.quantity <= 1}
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                          >
                            -
                          </Button>
                          <Text w={{ base: '30px', sm: '36px' }} textAlign='center' fontSize='sm'>
                            {item.quantity}
                          </Text>
                          <Button
                            {...quantityButtonStyles}
                            aria-label='Increase quantity'
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </HStack>

                        <Text
                          fontWeight='semibold'
                          w={{ base: 'auto', md: '84px' }}
                          textAlign='right'
                          flexShrink='0'
                        >
                          {formatPrice(lineTotal)}
                        </Text>

                        <IconButton
                          icon={<SmallCloseIcon />}
                          aria-label={`Remove ${item.product.name}`}
                          variant='ghost'
                          size='sm'
                          flexShrink='0'
                          onClick={() => removeItem(item.key)}
                          _hover={{ color: designSystem.secondary2 }}
                        />
                      </HStack>
                    </Flex>
                  )
                })}
              </VStack>
            </Box>

            <Box
              sx={sectionStyles}
              position={{ lg: 'sticky' }}
              top={{ lg: '24px' }}
            >
              <Text fontWeight='semibold' fontSize={designSystem.headingSize2} mb='20px'>
                Cart Totals
              </Text>

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
                  {formatPrice(total)}
                </Text>
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
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>

              <Button
                variant='outline'
                w='100%'
                h='48px'
                mt='12px'
                borderRadius='4px'
                fontWeight='normal'
                onClick={() => navigate('/')}
              >
                Return To Shop
              </Button>
            </Box>
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default Cart
