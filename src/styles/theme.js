import { extendTheme } from '@chakra-ui/react'

export const designSystem = {
  headingSize1: { base: '24px', md: '30px', lg: '36px' },
  headingSize2: { base: '20px', md: '24px', lg: '28px' },
  textSize1: { base: '14px', md: '16px' },
  textSize2: { base: '10px', md: '12px' },
  font1: 'Poppins',
  font2: 'Inter',
  secondary: '#F5F5F5',
  secondary2: '#DB4444',
  secondary3: '#00FF66',
  defaultMargin: { base: '16px', sm: '24px', md: '40px', lg: '80px', xl: '135px' },
}

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      light: designSystem.secondary,
      red: designSystem.secondary2,
      green: designSystem.secondary3,
    },
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },
})

export default theme
