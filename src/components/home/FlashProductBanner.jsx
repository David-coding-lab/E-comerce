import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import jblImage from '../../assets/jblimage.png'
import { getProductById } from '../../data/products'
import { useProductActions } from '../../context/productViewContext'
import { designSystem } from '../../styles/theme'

const defaultCountdown = [
  { value: '23', unit: 'Hours' },
  { value: '05', unit: 'Days' },
  { value: '59', unit: 'Minutes' },
  { value: '35', unit: 'Seconds' },
]

const timerStyles = {
  w: { base: '48px', md: '67px' },
  h: { base: '48px', md: '67px' },
  borderRadius: '50%',
  display: 'grid',
  placeContent: 'center',
  bgColor: 'white',
}

function FlashProductBanner({
  productId,
  eyebrow = 'Categories',
  title = 'Enhance Your Music Experience',
  countdown = defaultCountdown,
  image,
  imageAlt,
}) {
  const { openProduct } = useProductActions()
  const product = getProductById(productId)
  const bannerImage = image ?? product?.image ?? jblImage

  const handleBuyNow = () => {
    if (product) {
      openProduct(product)
    }
  }

  return (
    <Container
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      mt={{ base: '80px', md: '110px', lg: '140px' }}
      mb={{ base: '48px', md: '71px' }}
      bgColor='#000000'
      maxW='100%'
      w='100%'
      h={{ base: 'auto', md: '420px' }}
      py={{ base: '32px', md: '0' }}
      px={{ base: '24px', sm: '40px', md: '0' }}
      alignItems='center'
      position='relative'
      overflow='hidden'
      fontFamily={designSystem.font1}
    >
      <Box ml={{ base: '0', md: '56px' }} w={{ base: '100%', md: 'auto' }}>
        <Text color={designSystem.secondary3} fontSize={{ base: 'sm', md: 'md' }}>
          {eyebrow}
        </Text>
        <Text
          as='h2'
          maxW='430px'
          marginBlock={{ base: '20px', md: '32px' }}
          color='white'
          letterSpacing={{ base: '1px', md: '2px' }}
          fontFamily={designSystem.font2}
          fontSize={designSystem.headingSize1}
          fontWeight='bold'
        >
          {title}
        </Text>

        <HStack fontFamily={designSystem.font1} gap={{ base: '8px', sm: '12px', md: '15px' }}>
          {countdown.map((timer) => (
            <Box key={timer.unit} sx={timerStyles}>
              <Text textAlign='center' fontSize={{ base: '9px', md: '12px' }} fontWeight='medium'>
                {timer.value} <br /> {timer.unit}
              </Text>
            </Box>
          ))}
        </HStack>

        <Button
          fontWeight='medium'
          mt={{ base: '24px', md: '40px' }}
          w={{ base: '100%', sm: '171px' }}
          h={{ base: '48px', md: '56px' }}
          bgColor={designSystem.secondary3}
          color='white'
          isDisabled={!product}
          onClick={handleBuyNow}
          _hover={{ backgroundColor: '#00A843' }}
        >
          Buy Now
        </Button>
      </Box>

      <Box
        display={{ base: 'none', md: 'block' }}
        position='absolute'
        w={{ md: '320px', lg: '460px' }}
        h={{ md: '320px', lg: '460px' }}
        bgColor='#D9D9D9'
        opacity='20%'
        filter='blur(20px)'
        left='60%'
        borderRadius='50%'
      />

      <Image
        zIndex='1'
        w={{ base: '100%', sm: '360px', md: '400px', lg: '650px' }}
        maxH={{ base: '240px', md: '420px' }}
        objectFit='contain'
        mt={{ base: '24px', md: '0' }}
        ml={{ base: '0', md: 'auto' }}
        src={bannerImage}
        alt={imageAlt ?? product?.name ?? ''}
      />
    </Container>
  )
}

export default FlashProductBanner
