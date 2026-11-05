import {
  Box,
  Button,
  CloseButton,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from '../common/Rating'
import Like from '../common/Like'
import { designSystem } from '../../styles/theme'
import { useProductActions } from '../../context/productViewContext'
import { getSizesForCategory } from '../../data/categories'
import fastDeliveryIcon from '../../assets/Icons/icon-delivery.png'
import returnIcon from '../../assets/Icons/Icon-return.png'

const overlayStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1',
}

const modalStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  zIndex: '10',
  backgroundColor: 'white',
  w: { base: 'calc(100vw - 24px)', lg: '90vw' },
  maxW: '1200px',
  maxH: '90vh',
  overflowY: 'auto',
  p: { base: '16px', md: '20px' },
  border: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
}

const thumbnailStyles = {
  h: { base: '56px', md: '90px', lg: '160px' },
  w: { base: '56px', md: '90px', lg: '170px' },
  display: 'grid',
  placeContent: 'center',
  flexShrink: 0,
  cursor: 'pointer',
  mb: { base: '0', xl: '16px' },
  bgColor: designSystem.secondary,
}

const colourSwatchStyles = {
  borderRadius: '50%',
  border: '1px solid black',
  cursor: 'pointer',
  w: '20px',
  h: '20px',
}

const sizeBoxStyles = {
  minW: '32px',
  h: '32px',
  px: '6px',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  display: 'grid',
  placeContent: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color .2s ease, color .2s ease',
  _hover: {
    backgroundColor: designSystem.secondary2,
    borderColor: designSystem.secondary2,
    color: 'white',
  },
}

const selectedSizeStyles = {
  backgroundColor: designSystem.secondary2,
  borderColor: designSystem.secondary2,
  color: 'white',
}

const quantityBoxStyles = {
  fontWeight: 'black',
  cursor: 'pointer',
  borderRight: '1px solid rgba(0, 0, 0, 0.5)',
  bgColor: 'none',
}

function ProductModal({ product }) {
  const navigate = useNavigate()
  const { closeProduct } = useProductActions()
  const [currentImage, setCurrentImage] = useState(product.image)
  const [quantity, setQuantity] = useState(1)
  const sizes = getSizesForCategory(product.category)
  const [selectedSize, setSelectedSize] = useState(sizes[0] ?? null)

  const { name, rating, currentPrice, colors = [], productImages } = product

  const handleBuyNow = () => {
    closeProduct()
    navigate('/checkout', {
      state: { product, quantity, size: selectedSize },
    })
  }

  return (
    <>
      <Box sx={overlayStyles} onClick={closeProduct} />

      <Flex
        sx={modalStyles}
        flexDirection={{ base: 'column', xl: 'row' }}
        alignItems={{ base: 'stretch', xl: 'flex-start' }}
      >
        <Container
          maxW='fit-content'
          m='0'
          p='0'
          display={{ base: 'flex', xl: 'block' }}
          gap='10px'
          overflowX='auto'
          flexShrink='0'
        >
          {productImages.map((image, index) => (
            <Box
              key={image}
              sx={thumbnailStyles}
              onClick={() => setCurrentImage(image)}
            >
              <Image
                src={image}
                alt={`${name} view ${index + 1}`}
                decoding='async'
              />
            </Box>
          ))}
        </Container>

        <Container
          flex='1'
          minW='0'
          maxW={{ base: '100%', xl: '50vw' }}
          w={{ base: '100%', xl: 'auto' }}
          h={{ base: '280px', md: '420px', xl: '700px' }}
          bgColor={designSystem.secondary}
          ml={{ base: '0', xl: '10px' }}
          mt={{ base: '16px', xl: '0' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            w={{ base: '75%', sm: '60%', md: '50%' }}
            maxH='100%'
            objectFit='cover'
            src={currentImage}
            alt={name}
          />
        </Container>

        <Box
          ml={{ base: '0', xl: '70px' }}
          mt={{ base: '24px', xl: '0' }}
          w={{ base: '100%', xl: 'auto' }}
          flex='1'
          minW='0'
        >
          <Box>
            <Text fontSize={designSystem.headingSize1} fontWeight='semibold'>
              {name}
            </Text>
            <HStack>
              <Rating rating={rating} textColor='rgba(0, 0, 0, 0.5)' />
              <Text color='black'> | </Text>
              <Text color={designSystem.secondary3}> In Stock</Text>
            </HStack>
            <Text fontSize='24px' mt='16px'>
              {currentPrice}
            </Text>
            <Text
              fontFamily={designSystem.font1}
              fontSize={designSystem.textSize1}
              mt='24px'
            >
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive
            </Text>
          </Box>

          <Divider mt='24px' />

          <Box>
            {colors.length > 0 && (
              <HStack mt='24px' gap='24px' flexWrap='wrap'>
                <Text fontFamily={designSystem.font1}>Colors: </Text>
                <HStack>
                  {colors.map((color) => (
                    <Box
                      key={color.name ?? color.image}
                      sx={{
                        ...colourSwatchStyles,
                        bgColor: color.value,
                        boxShadow:
                          currentImage === color.image
                            ? `0 0 0 2px white, 0 0 0 4px ${designSystem.secondary2}`
                            : 'none',
                      }}
                      title={color.name}
                      aria-label={color.name}
                      onClick={() => setCurrentImage(color.image)}
                    />
                  ))}
                </HStack>
              </HStack>
            )}

            {sizes.length > 0 && (
              <HStack gap='24px' mt='30px' flexWrap='wrap'>
                <Text fontFamily={designSystem.font2} fontWeight='semibold'>
                  Size:{' '}
                </Text>
                <HStack gap='8px' flexWrap='wrap'>
                  {sizes.map((size) => (
                    <Box
                      key={size}
                      role='button'
                      aria-pressed={selectedSize === size}
                      sx={{
                        ...sizeBoxStyles,
                        ...(selectedSize === size ? selectedSizeStyles : {}),
                      }}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Box>
                  ))}
                </HStack>
              </HStack>
            )}

            <HStack mt='24px' gap='16px' flexWrap='wrap'>
              <Flex
                w='160px'
                h='44px'
                borderRadius='4px'
                border='1px solid rgba(0, 0, 0, 0.5)'
              >
                <Text
                  w='40px'
                  pl='15px'
                  pt='3px'
                  sx={quantityBoxStyles}
                  onClick={() =>
                    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
                  }
                >
                  _
                </Text>
                <Text
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  w='80px'
                  sx={quantityBoxStyles}
                >
                  {quantity}
                </Text>
                <Text
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  color='white'
                  bg={designSystem.secondary2}
                  w='40px'
                  sx={quantityBoxStyles}
                  onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
                >
                  +
                </Text>
              </Flex>

              <Button
                bg={designSystem.secondary2}
                w={{ base: '100%', sm: '150px' }}
                borderRadius='4px'
                color='white'
                _hover={{ opacity: 0.8 }}
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>

              <Like />
            </HStack>

            <Container
              width={{ base: '100%', lg: '420px' }}
              maxW='420px'
              display='grid'
              placeContent='center'
              h='auto'
              minH='180px'
              border='1px solid rgba(0, 0, 0, 0.5)'
              fontFamily={designSystem.font1}
              fontSize='14px'
              gap='16px'
              m='0'
              mt={{ base: '24px', lg: '40px' }}
              p={{ base: '16px', lg: '0' }}
              borderRadius='4px'
            >
              <HStack alignItems='flex-start'>
                <Image src={fastDeliveryIcon} alt='' />
                <Box>
                  <Text fontWeight='medium' fontSize='16px'>
                    Free Delivery
                  </Text>
                  <Text textDecor='underline'>
                    Enter your postal code for Delivery Availability
                  </Text>
                </Box>
              </HStack>

              <Divider />

              <HStack alignItems='flex-start'>
                <Image src={returnIcon} alt='' />
                <Box>
                  <Text fontWeight='medium' fontSize='16px'>
                    Return Delivery
                  </Text>
                  <Text>Free 30 Days Delivery Returns. Details</Text>
                </Box>
              </HStack>
            </Container>
          </Box>
        </Box>

        <CloseButton onClick={closeProduct} position='absolute' top='12px' right='12px' />
      </Flex>
    </>
  )
}

export default ProductModal
