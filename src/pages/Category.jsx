import { Box, Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { designSystem } from '../styles/theme'
import { products } from '../data/products'
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

  return (
    <Box marginInline={designSystem.defaultMargin}>
      <BackButton mt='40px' />

      <BannerLinks />

      <SectionHeader badgeText='Category' title={title} />

      <Box mt='60px'>
        <FlashSale
          badgeText='Today’s'
          sectionTitle={`${title} Flash Sales`}
          allowNavigation
          products={products}
          viewAllPath='/flash-sale'
        />
      </Box>

      <Divider mb='70px' />

      <FlashSale
        badgeText='This Month'
        sectionTitle={`Best Selling in ${title}`}
        allowNavigation={false}
        products={products}
        width={{ base: 'auto', md: '190px' }}
        buttonContent='View All'
        viewAllPath='/best-selling'
      />

      <FlashProductBanner productId='jbl-boombox-3' />

      <ServiceHighlights />
    </Box>
  )
}

export default Category
