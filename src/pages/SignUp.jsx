import {
  Box,
  Button,
  HStack,
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
  w: '100%',
  border: '0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '0',
}

const submitButtonStyles = {
  w: '100%',
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
  w: '100%',
  h: '56px',
  borderRadius: '4px',
  fontWeight: 'normal',
  gap: '12px',
}

function SignUp() {
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
          Create an account
        </Text>
        <Text mb={{ base: '32px', md: '48px' }}>Enter your details below</Text>

        <VStack gap={{ base: '32px', md: '40px' }} w='100%'>
          <Input sx={inputStyles} placeholder='Name' />
          <Input sx={inputStyles} placeholder='Email or Phone Number' />
          <Input sx={inputStyles} type='password' placeholder='Password' />
        </VStack>

        <VStack gap='16px' mt={{ base: '32px', md: '40px' }} w='100%' fontFamily={designSystem.font1}>
          <Button sx={submitButtonStyles}>Create Account</Button>

          <Button
            sx={googleButtonStyles}
            leftIcon={<Image src={google} alt='' boxSize='20px' />}
          >
            Sign up with Google
          </Button>

          <HStack flexWrap='wrap' justifyContent='center' rowGap='4px'>
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
