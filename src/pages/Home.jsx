import { Box, Divider, Flex } from '@chakra-ui/react'
import { designSystem } from '../styles/theme'
import { products } from '../data/products'
import BannerLinks from '../components/home/BannerLinks'
import FlashSale from '../components/home/FlashSale'
import JblBanner from '../components/home/JblBanner'
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
  { label: 'Phones', icon: cellPhoneIcon },
  { label: 'Computers', icon: computerIcon },
  { label: 'SmartWatch', icon: smartWatchIcon },
  { label: 'Camera', icon: cameraIcon },
  { label: 'HeadPhones', icon: headphoneIcon },
  { label: 'Gaming', icon: gamepadIcon },
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
      />

      <Divider mb='70px' />

      <Box mt='80px'>
        <SectionHeader badgeText='Categories' title='Browse By Category' />

        <Flex marginBlock='60px' gap='30px'>
          {categories.map((category) => (
            <CategoryCard
              key={category.label}
              icon={category.icon}
              label={category.label}
            />
          ))}
        </Flex>

        <Divider mb='70px' />

        <FlashSale
          badgeText='This Month'
          sectionTitle='Best Selling Products'
          allowNavigation={false}
          products={products}
          width='190px'
          buttonContent='View All'
        />
      </Box>

      <JblBanner />

      <FlashSale
        badgeText='Our Products'
        sectionTitle='Explore Our Products'
        allowNavigation={false}
        buttonContent='View All Products'
        width='200px'
        products={products}
      />

      <NewArrival />

      <ServiceHighlights />
    </Box>
  )
}

export default Home
