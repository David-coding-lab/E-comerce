import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell'
import BackButton from '../components/common/BackButton'
import { designSystem } from '../styles/theme'

const inputStyles = {
  w: '400px',
  border: '0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '0',
}

const loginButtonStyles = {
  w: '150px',
  h: '56px',
  borderRadius: '4px',
  color: 'white',
  bgColor: designSystem.secondary2,
  fontWeight: 'normal',
  mr: 'auto',
  _hover: {
    opacity: 0.8,
  },
}

const forgotButtonStyles = {
  w: '140px',
  h: '56px',
  bgColor: 'transparent',
  borderRadius: '4px',
  fontWeight: 'normal',
  color: designSystem.secondary2,
  _hover: { bgColor: 'none' },
}

function Login() {
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
          Log in to Exclusive
        </Text>
        <Text mb='48px'>Enter your details below</Text>

        <VStack mb='40px' alignItems='start' gap='40px'>
          <Input sx={inputStyles} placeholder='Email or Phone Number' />
          <Input sx={inputStyles} type='password' placeholder='Password' />
        </VStack>

        <HStack>
          <Button sx={loginButtonStyles}>Log In</Button>
          <Button sx={forgotButtonStyles}>Forget Password?</Button>
        </HStack>

        <HStack cursor='pointer' mt='24px' justifyContent='center'>
          <Text>Don&apos;t have an account?</Text>
          <Text as={Link} to='/signup' textDecor='underline'>
            Sign Up
          </Text>
        </HStack>
      </Box>
    </AuthShell>
  )
}

export default Login
