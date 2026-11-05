import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { memo, useState } from 'react'
import Rating from '../common/Rating'
import Like from '../common/Like'
import { designSystem } from '../../styles/theme'
import { useProductActions } from '../../context/productViewContext'
import { preloadImages } from '../../utils/preloadImages'

const cardStyles = {
  w: '100%',
  minW: '0',
  boxShadow: 'none',
  borderRadius: '0',
  fontFamily: designSystem.font1,
  mb: '20px',
}

const imageBoxStyles = {
  w: '100%',
  h: { base: '200px', sm: '220px', md: '250px' },
  backgroundColor: designSystem.secondary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}

const addToCartStyles = {
  w: '100%',
  h: '41px',
  borderRadius: '0',
  color: 'white',
  bgColor: 'black',
  fontWeight: 'normal',
  visibility: { base: 'visible', lg: 'hidden' },
  opacity: { base: '1', lg: '0' },
  position: 'absolute',
  transition: 'visibility .5s ease-in-out, opacity .5s ease-in-out',
  _hover: { bgColor: '#454444' },
  _groupHover: {
    visibility: 'visible',
    opacity: '1',
  },
}

const colorSwatchStyles = {
  borderRadius: '50%',
  border: '1px solid black',
  cursor: 'pointer',
  w: '20px',
  h: '20px',
}

function GoodsCard({ product }) {
  const {
    image,
    discountPercent,
    name,
    currentPrice,
    oldPrice,
    rating,
    hasBadge,
    badgeColor,
    showColors,
    otherColors,
    productImages,
  } = product

  const { openProduct } = useProductActions()
  const [activeImage, setActiveImage] = useState(image)

  const badgeBg =
    badgeColor === 'red' ? designSystem.secondary2 : designSystem.secondary3

  return (
    <Card sx={cardStyles}>
      <CardBody
        display='flex'
        position='relative'
        width='100%'
        h={{ base: '200px', sm: '220px', md: '250px' }}
        p='0'
        role='group'
      >
        <Box
          sx={imageBoxStyles}
          onClick={() => openProduct(product)}
          onMouseEnter={() => preloadImages(productImages)}
        >
          <Image
            w={{ base: '120px', sm: '150px', md: '170px' }}
            h={{ base: '110px', sm: '135px', md: '152px' }}
            objectFit='contain'
            src={activeImage}
            alt={name}
            zIndex='1'
            decoding='async'
          />
        </Box>

        <Button sx={addToCartStyles} bottom='0'>
          Add to Cart
        </Button>

        <Box
          display='flex'
          justifyContent='space-between'
          justifyItems='center'
          position='absolute'
          width='100%'
          pt='15px'
        >
          {hasBadge && (
            <Badge
              marginTop='10px'
              marginLeft='10px'
              bgColor={badgeBg}
              color='white'
              fontWeight='normal'
              h='26px'
              w='55px'
              display='grid'
              placeContent='center'
            >
              {discountPercent}
            </Badge>
          )}

          <Like />
        </Box>
      </CardBody>

      <CardFooter display='block' p='0' pb='15px'>
        <Text mb='5px' fontSize={{ base: 'sm', md: 'md' }}>
          {name}
        </Text>

        <HStack mb='5px'>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{currentPrice}</Text>
          {oldPrice && (
            <Text as='s' fontSize={{ base: 'sm', md: 'md' }}>
              {oldPrice}
            </Text>
          )}
        </HStack>

        <Rating rating={rating} />

        {showColors && (
          <Flex gap='20px'>
            <Box
              sx={colorSwatchStyles}
              bgColor={designSystem.secondary2}
              onClick={() => setActiveImage(image)}
            />
            <Box
              sx={colorSwatchStyles}
              bgColor={designSystem.secondary}
              onClick={() => setActiveImage(otherColors[0])}
            />
          </Flex>
        )}
      </CardFooter>
    </Card>
  )
}

export default memo(GoodsCard)
