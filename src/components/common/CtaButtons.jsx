import { Button } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'

const buttonStyles = {
  h: '56px',
  borderRadius: '4px',
  bgColor: designSystem.secondary2,
  color: 'white',
  fontFamily: designSystem.font1,
  fontWeight: 'normal',
  _hover: {
    backgroundColor: 'rgba(219, 68, 68, 0.68)',
  },
}

function CtaButtons({ width = 'auto', buttonContent, onClick, type = 'button' }) {
  return (
    <Button type={type} onClick={onClick} w={width} sx={buttonStyles}>
      {buttonContent}
    </Button>
  )
}

export default CtaButtons
