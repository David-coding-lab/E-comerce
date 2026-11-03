import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useProductView } from '../../context/productViewContext'

const bannerStyles = {
  bgColor: '#000000',
  alignItems: 'center',
  gap: '40px',
  pl: '100px',
  pr: '40px',
  w: '80vw',
  minH: '300px',
  mt: '40px',
  ml: '45px',
  overflow: 'hidden',
}

const contentStyles = {
  color: 'white',
  flex: '1',
  minW: '0',
  py: '32px',
}

const imageBoxStyles = {
  w: '400px',
  h: '300px',
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
  const { openProduct } = useProductView()

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
