import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { designSystem } from '../../styles/theme'

function BackButton({ label = 'Back', to, ...props }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (to) {
      navigate(to)
      return
    }

    const historyIndex = window.history.state?.idx

    if (typeof historyIndex === 'number' && historyIndex > 0) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Button
      variant='ghost'
      leftIcon={<ArrowBackIcon />}
      onClick={handleBack}
      fontFamily={designSystem.font1}
      fontWeight='normal'
      px='0'
      mb='24px'
      _hover={{ bgColor: 'transparent', color: designSystem.secondary2 }}
      {...props}
    >
      {label}
    </Button>
  )
}

export default BackButton
