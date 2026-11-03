import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell'
import BackButton from '../components/common/BackButton'
import google from '../assets/Icons/Icon-Google.png'
import { designSystem } from '../styles/theme'

const inputStyles = {
  w: '400px',
  border: '0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '0',
}

const submitButtonStyles = {
  w: '350px',
  h: '56px',
  borderRadius: '4px',
  color: 'white',
  bgColor: designSystem.secondary2,
  fontWeight: 'normal',
  _hover: {
    opacity: 0.8,
  },
}

const googleButtonStyles = {
  w: '350px',
  h: '56px',
  borderRadius: '4px',
  fontWeight: 'normal',
}

const googleIconButtonStyles = {
  bgColor: 'transparent',
  _hover: { bgColor: 'transparent' },
}

function SignUp() {
  return (
    <AuthShell>
      <Box m='auto' ml='129px'>
        <BackButton />

        <Text
          fontFamily={designSystem.font1}
          fontSize='30px'
          fontWeight='medium'
          mb='10px'
        >
          Create an account
        </Text>
        <Text mb='48px'>Enter your details below</Text>

        <VStack gap='40px'>
          <Input sx={inputStyles} placeholder='Name' />
          <Input sx={inputStyles} placeholder='Email or Phone Number' />
          <Input sx={inputStyles} type='password' placeholder='Password' />
        </VStack>

        <VStack gap='16px' mt='40px' fontFamily={designSystem.font1}>
          <Button sx={submitButtonStyles}>Create Account</Button>

          <Button sx={googleButtonStyles}>
            <IconButton sx={googleIconButtonStyles} aria-label='Sign up with Google'>
              <Image src={google} alt='' />
            </IconButton>{' '}
            Sign up with Google
          </Button>

          <HStack>
            <Text>Already have account?</Text>
            <Text as={Link} to='/login' textDecor='underline'>
              Login
            </Text>
          </HStack>
        </VStack>
      </Box>
    </AuthShell>
  )
}

export default SignUp
