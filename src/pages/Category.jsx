import { Box, Divider, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { designSystem } from '../styles/theme'
import { getProductsByCategory } from '../data/products'
import { getCategoryBySlug, slugToTitle } from '../data/categories'
import BannerLinks from '../components/home/BannerLinks'
import FlashSale from '../components/home/FlashSale'
import FlashProductBanner from '../components/home/FlashProductBanner'
import SectionHeader from '../components/common/SectionHeader'
import BackButton from '../components/common/BackButton'
import ServiceHighlights from '../components/common/ServiceHighlights'

function Category() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)
  const title = category?.label ?? slugToTitle(categorySlug)
  const categoryProducts = getProductsByCategory(categorySlug)

  return (
    <Box marginInline={designSystem.defaultMargin}>
      <BackButton mt='40px' />

      <BannerLinks />

      <SectionHeader badgeText='Category' title={title} />

      <Box mt='60px'>
        {categoryProducts.length > 0 ? (
          <FlashSale
            key={`${categorySlug}-flash-sale`}
            badgeText='Today’s'
            sectionTitle={`${title} Flash Sales`}
            allowNavigation
            products={categoryProducts}
            viewAllPath='/flash-sale'
          />
        ) : (
          <Box
            border='1px solid'
            borderColor='gray.200'
            borderRadius='12px'
            py='60px'
            px='20px'
            textAlign='center'
          >
            <Text fontSize='lg' fontWeight='semibold'>
              No products in {title} yet
            </Text>
            <Text color='gray.500' mt='8px'>
              Check back later or explore another category.
            </Text>
          </Box>
        )}
      </Box>

      {categoryProducts.length > 0 && (
        <>
          <Divider mb='70px' />

          <FlashSale
            key={`${categorySlug}-best-selling`}
            badgeText='This Month'
            sectionTitle={`Best Selling in ${title}`}
            allowNavigation={false}
            products={categoryProducts}
            width={{ base: 'auto', md: '190px' }}
            buttonContent='View All'
            viewAllPath='/best-selling'
          />
        </>
      )}

      <FlashProductBanner productId='jbl-boombox-3' />

      <ServiceHighlights />
    </Box>
  )
}

export default Category
