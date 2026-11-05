import { Box, Divider, Grid } from '@chakra-ui/react'
import { designSystem } from '../styles/theme'
import { products } from '../data/products'
import BannerLinks from '../components/home/BannerLinks'
import FlashSale from '../components/home/FlashSale'
import FlashProductBanner from '../components/home/FlashProductBanner'
import NewArrival from '../components/home/NewArrival'
import Countdown from '../components/home/Countdown'
import SectionHeader from '../components/common/SectionHeader'
import CategoryCard from '../components/common/CategoryCard'
import ServiceHighlights from '../components/common/ServiceHighlights'
import cellPhoneIcon from '../assets/Icons/Category-CellPhone.svg'
import computerIcon from '../assets/Icons/Category-Computer.svg'
import smartWatchIcon from '../assets/Icons/Category-SmartWatch.svg'
import cameraIcon from '../assets/Icons/Category-Camera.svg'
import headphoneIcon from '../assets/Icons/Category-Headphone.svg'
import gamepadIcon from '../assets/Icons/Category-Gamepad.svg'

const categories = [
  { label: 'Phones', icon: cellPhoneIcon, slug: 'phones' },
  { label: 'Computers', icon: computerIcon, slug: 'computers' },
  { label: 'SmartWatch', icon: smartWatchIcon, slug: 'smartwatch' },
  { label: 'Camera', icon: cameraIcon, slug: 'camera' },
  { label: 'HeadPhones', icon: headphoneIcon, slug: 'headphones' },
  { label: 'Gaming', icon: gamepadIcon, slug: 'gaming' },
]

function Home() {
  return (
    <Box marginInline={designSystem.defaultMargin}>
      <BannerLinks />

      <FlashSale
        badgeText='Today’s'
        sectionTitle='Flash Sales'
        additionalContent={<Countdown />}
        allowNavigation
        products={products}
        viewAllPath='/flash-sale'
      />

      <Divider mb={{ base: '40px', md: '70px' }} />

      <Box mt={{ base: '48px', md: '80px' }}>
        <SectionHeader badgeText='Categories' title='Browse By Category' />

        <Grid
          mt={{ base: '30px', md: '60px' }}
          mb={{ base: '40px', md: '60px' }}
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap={{ base: '16px', md: '30px' }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.label}
              icon={category.icon}
              label={category.label}
              slug={category.slug}
            />
          ))}
        </Grid>

        <Divider mb={{ base: '40px', md: '70px' }} />

        <FlashSale
          badgeText='This Month'
          sectionTitle='Best Selling Products'
          allowNavigation={false}
          products={products}
          width='190px'
          buttonContent='View All'
          viewAllPath='/best-selling'
        />
      </Box>

      <FlashProductBanner productId='jbl-boombox-3' />

      <FlashSale
        badgeText='Our Products'
        sectionTitle='Explore Our Products'
        allowNavigation={false}
        buttonContent='View All Products'
        width='200px'
        products={products}
        viewAllPath='/explore-products'
      />

      <NewArrival />

      <ServiceHighlights />
    </Box>
  )
}

export default Home
