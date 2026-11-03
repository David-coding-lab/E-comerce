import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import theme from './styles/theme'
import { ProductViewProvider } from './context/ProductViewProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ProductViewProvider>
          <App />
        </ProductViewProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
