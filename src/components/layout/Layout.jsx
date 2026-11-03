import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import TopBanner from './TopBanner'
import NavBar from './NavBar'
import Footer from './Footer'
import ProductModal from '../product/ProductModal'
import { useProductView } from '../../context/productViewContext'

function Layout() {
  const { activeProduct } = useProductView()

  return (
    <Box w='100%'>
      <TopBanner />
      <NavBar />
      <Box as='main'>
        <Outlet />
      </Box>
      <Footer />
      {activeProduct && (
        <ProductModal key={activeProduct.id} product={activeProduct} />
      )}
    </Box>
  )
}

export default Layout
