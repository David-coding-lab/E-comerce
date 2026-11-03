import { extendTheme } from '@chakra-ui/react'

export const designSystem = {
  headingSize1: '36px',
  headingSize2: '28px',
  textSize1: '16px',
  textSize2: '12px',
  font1: 'Poppins',
  font2: 'Inter',
  secondary: '#F5F5F5',
  secondary2: '#DB4444',
  secondary3: '#00FF66',
  defaultMargin: '135px',
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
