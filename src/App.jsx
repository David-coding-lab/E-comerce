import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import FlashSalePage from './pages/FlashSalePage'
import BestSellingPage from './pages/BestSellingPage'
import ExploreProductsPage from './pages/ExploreProductsPage'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Search from './pages/Search'

function App() {
  return (
    <Box w='100%' minH='100vh'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='flash-sale' element={<FlashSalePage />} />
          <Route path='best-selling' element={<BestSellingPage />} />
          <Route path='explore-products' element={<ExploreProductsPage />} />
          <Route path='category/:categorySlug' element={<Category />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='search' element={<Search />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-confirmation' element={<OrderConfirmation />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
