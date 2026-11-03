import { Box } from '@chakra-ui/react'
import { products } from '../data/products'
import Countdown from '../components/home/Countdown'
import ProductListing from '../components/common/ProductListing'

function FlashSalePage() {
  return (
    <ProductListing
      badgeText='Today’s'
      title='Flash Sales'
      rightContent={
        <Box ml='auto'>
          <Countdown />
        </Box>
      }
      products={products}
    />
  )
}

export default FlashSalePage
