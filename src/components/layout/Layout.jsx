import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import TopBanner from './TopBanner'
import NavBar from './NavBar'
import Footer from './Footer'
import ProductModalHost from '../product/ProductModalHost'

function Layout() {
  return (
    <Box w='100%'>
      <TopBanner />
      <NavBar />
      <Box as='main'>
        <Outlet />
      </Box>
      <Footer />
      <ProductModalHost />
    </Box>
  )
}

export default Layout
