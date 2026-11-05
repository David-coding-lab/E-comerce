import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useProductActions } from '../../context/productViewContext'

const bannerStyles = {
  bgColor: '#000000',
  alignItems: 'center',
  flexDirection: { base: 'column', md: 'row' },
  gap: { base: '8px', md: '24px', lg: '40px' },
  pl: { base: '24px', sm: '40px', md: '56px', lg: '100px' },
  pr: { base: '24px', sm: '40px', md: '24px', lg: '40px' },
  w: { base: '100%', lg: 'auto' },
  flex: '1',
  minW: '0',
  minH: { base: 'auto', md: '300px' },
  mt: { base: '24px', md: '40px' },
  ml: { base: '0', lg: '45px' },
  overflow: 'hidden',
  borderRadius: { base: '6px', lg: '0' },
}

const contentStyles = {
  color: 'white',
  flex: '1',
  minW: '0',
  py: { base: '24px', md: '32px' },
  w: { base: '100%', md: 'auto' },
}

const imageBoxStyles = {
  w: { base: '100%', md: '300px', lg: '400px' },
  h: { base: '200px', sm: '240px', md: '300px' },
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const imageStyles = {
  maxW: '100%',
  maxH: '100%',
  objectFit: 'contain',
}

const shopNowStyles = {
  mt: '20px',
  p: '0',
  h: 'auto',
  bgColor: 'transparent',
  color: 'white',
  fontWeight: 'normal',
  borderBottom: '1px solid',
  borderRadius: '0',
  _hover: { bgColor: 'transparent', opacity: 0.8 },
  _active: { bgColor: 'transparent' },
}

function PromoBanner({
  image,
  imageAlt = '',
  product,
  onShopNow,
  shopNowLabel = 'Shop Now',
  children,
}) {
  const { openProduct } = useProductActions()

  const handleShopNow = () => {
    if (onShopNow) {
      onShopNow(product)
      return
    }

    if (product) {
      openProduct(product)
    }
  }

  return (
    <Flex sx={bannerStyles}>
      <Box sx={contentStyles}>
        {children}

        {(product || onShopNow) && (
          <Button
            sx={shopNowStyles}
            rightIcon={<ArrowForwardIcon />}
            onClick={handleShopNow}
          >
            {shopNowLabel}
          </Button>
        )}
      </Box>

      {image && (
        <Box sx={imageBoxStyles}>
          <Image src={image} alt={imageAlt} sx={imageStyles} />
        </Box>
      )}
    </Flex>
  )
}

export default PromoBanner
