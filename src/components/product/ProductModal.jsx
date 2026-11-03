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
import Rating from '../common/Rating'
import Like from '../common/Like'
import { designSystem } from '../../styles/theme'
import { useProductView } from '../../context/productViewContext'
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
  w: '90vw',
  p: '20px',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
}

const thumbnailStyles = {
  h: '160px',
  w: '170px',
  display: 'grid',
  placeContent: 'center',
  cursor: 'pointer',
  mb: '16px',
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
  w: '32px',
  h: '32px',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  display: 'grid',
  placeContent: 'center',
  borderRadius: '4px',
  _hover: {
    backgroundColor: designSystem.secondary2,
    borderColor: designSystem.secondary2,
    color: 'white',
  },
}

const quantityBoxStyles = {
  fontWeight: 'black',
  cursor: 'pointer',
  borderRight: '1px solid rgba(0, 0, 0, 0.5)',
  bgColor: 'none',
}

const sizes = ['XS', 'S', 'M', 'L', 'XL']

function ProductModal({ product }) {
  const { closeProduct } = useProductView()
  const [currentImage, setCurrentImage] = useState(product.image)
  const [quantity, setQuantity] = useState(0)

  const { name, rating, currentPrice, otherColors, productImages } = product

  return (
    <>
      <Box sx={overlayStyles} onClick={closeProduct} />

      <Flex sx={modalStyles}>
        <Container maxW='fit-content' m='0'>
          {productImages.map((image, index) => (
            <Box
              key={image}
              sx={thumbnailStyles}
              onClick={() => setCurrentImage(image)}
            >
              <Image src={image} alt={`${name} view ${index + 1}`} />
            </Box>
          ))}
        </Container>

        <Container
          maxW='50vw'
          h='700px'
          bgColor={designSystem.secondary}
          ml='10px'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image w='50%' objectFit='cover' src={currentImage} alt={name} />
        </Container>

        <Box ml='70px'>
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
            <HStack mt='24px' gap='24px'>
              <Text fontFamily={designSystem.font1}>Colors: </Text>
              <HStack>
                <Box
                  sx={colourSwatchStyles}
                  bgColor={designSystem.secondary2}
                  onClick={() => setCurrentImage(product.image)}
                />
                {otherColors.map((color) => (
                  <Box
                    key={color}
                    sx={colourSwatchStyles}
                    bgColor={designSystem.secondary}
                    onClick={() => setCurrentImage(color)}
                  />
                ))}
              </HStack>
            </HStack>

            <HStack gap='24px' mt='30px'>
              <Text fontFamily={designSystem.font2} fontWeight='semibold'>
                Size:{' '}
              </Text>
              <HStack>
                {sizes.map((size) => (
                  <Box key={size} sx={sizeBoxStyles}>
                    {size}
                  </Box>
                ))}
              </HStack>
            </HStack>

            <HStack mt='24px'>
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
                    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1))
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
                w='150px'
                borderRadius='4px'
                color='white'
                _hover={{ opacity: 0.8 }}
              >
                Buy Now
              </Button>

              <Like />
            </HStack>

            <Container
              width='420px'
              display='grid'
              placeContent='center'
              h='180px'
              border='1px solid rgba(0, 0, 0, 0.5)'
              fontFamily={designSystem.font1}
              fontSize='14px'
              gap='16px'
              m='0'
              mt='40px'
              p='0'
              borderRadius='4px'
            >
              <HStack>
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

              <HStack>
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

        <CloseButton onClick={closeProduct} />
      </Flex>
    </>
  )
}

export default ProductModal
