import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import theme from './styles/theme'
import { ProductViewProvider } from './context/ProductViewProvider'
import { CartProvider } from './context/CartProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ProductViewProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductViewProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
