import { Box, Divider, SimpleGrid } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'
import { products } from '../../data/products'
import SectionHeader from './SectionHeader'
import BackButton from './BackButton'
import GoodsCard from '../product/GoodsCard'
import NewArrival from '../home/NewArrival'

function ProductListing({
  badgeText,
  title,
  rightContent,
  products: productList = products,
}) {
  return (
    <Box marginInline={designSystem.defaultMargin} pt='40px'>
      <BackButton mb='0' />

      <SectionHeader
        badgeText={badgeText}
        title={title}
        rightContent={rightContent}
      />

      <SimpleGrid
        mt='50px'
        columns={4}
        gridRowGap='40px'
        gridColumnGap='40px'
      >
        {productList.map((product) => (
          <GoodsCard key={product.id} product={product} />
        ))}
      </SimpleGrid>

      <Divider mt='70px' mb='70px' />

      <NewArrival />
    </Box>
  )
}

export default ProductListing
