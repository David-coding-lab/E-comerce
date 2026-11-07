import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell'
import BackButton from '../components/common/BackButton'
import { designSystem } from '../styles/theme'

const inputStyles = {
  w: '100%',
  border: '0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '0',
}

const loginButtonStyles = {
  h: '56px',
  borderRadius: '4px',
  color: 'white',
  bgColor: designSystem.secondary2,
  fontWeight: 'normal',
  _hover: {
    opacity: 0.8,
  },
}

const forgotButtonStyles = {
  h: '56px',
  px: '12px',
  bgColor: 'transparent',
  borderRadius: '4px',
  fontWeight: 'normal',
  color: designSystem.secondary2,
  _hover: { bgColor: 'none' },
}

function Login() {
  return (
    <AuthShell>
      <Box w='100%' maxW={{ base: '420px', md: '440px' }} mx='auto'>
        <BackButton />

        <Text
          fontFamily={designSystem.font1}
          fontSize={{ base: '24px', md: '30px' }}
          fontWeight='medium'
          mb='10px'
        >
          Log in to Velora
        </Text>
        <Text mb={{ base: '32px', md: '48px' }}>Enter your details below</Text>

        <VStack mb={{ base: '32px', md: '40px' }} alignItems='start' gap='40px'>
          <Input sx={inputStyles} placeholder='Email or Phone Number' />
          <Input sx={inputStyles} type='password' placeholder='Password' />
        </VStack>

        <Flex direction={{ base: 'column', sm: 'row' }} gap='12px' w='100%'>
          <Button
            sx={loginButtonStyles}
            w={{ base: '100%', sm: '150px' }}
            flexShrink='0'
          >
            Log In
          </Button>
          <Button sx={forgotButtonStyles}>Forget Password?</Button>
        </Flex>

        <HStack
          cursor='pointer'
          mt='24px'
          justifyContent='center'
          flexWrap='wrap'
          rowGap='4px'
        >
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
