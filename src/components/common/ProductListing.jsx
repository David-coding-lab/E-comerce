import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react'
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
  showNewArrival = true,
  emptyTitle = 'No products found',
  emptyDescription = 'Try a different search or category.',
}) {
  return (
    <Box marginInline={designSystem.defaultMargin} pt='40px'>
      <BackButton mb='0' />

      <SectionHeader
        badgeText={badgeText}
        title={title}
        rightContent={rightContent}
        stackOnMobile={Boolean(rightContent)}
      />

      {productList.length > 0 ? (
        <SimpleGrid
          mt={{ base: '30px', md: '50px' }}
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          gridRowGap={{ base: '24px', md: '40px' }}
          gridColumnGap={{ base: '16px', md: '40px' }}
        >
          {productList.map((product) => (
            <GoodsCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      ) : (
        <Box
          mt={{ base: '30px', md: '50px' }}
          border='1px solid'
          borderColor='gray.200'
          borderRadius='12px'
          py={{ base: '48px', md: '64px' }}
          px='20px'
          textAlign='center'
        >
          <Text fontSize='lg' fontWeight='semibold'>
            {emptyTitle}
          </Text>
          <Text color='gray.500' mt='8px'>
            {emptyDescription}
          </Text>
        </Box>
      )}

      {showNewArrival && (
        <>
          <Divider mt='70px' mb='70px' />
          <NewArrival />
        </>
      )}
    </Box>
  )
}

export default ProductListing
