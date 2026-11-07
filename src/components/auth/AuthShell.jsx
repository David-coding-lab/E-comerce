import { Box, Flex, Image } from '@chakra-ui/react'
import phone from '../../assets/Icons/dl.beatsnoop 1.png'
import { designSystem } from '../../styles/theme'

function AuthShell({ children }) {
  return (
    <Flex
      w='100%'
      maxW='1440px'
      mx='auto'
      mt={{ base: '32px', md: '60px' }}
      mb={{ base: '60px', md: '140px' }}
      px={designSystem.defaultMargin}
      gap={{ base: '32px', lg: '48px', xl: '80px' }}
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'stretch', lg: 'center' }}
      justify='center'
    >
      <Box
        display={{ base: 'none', lg: 'block' }}
        flex='1 1 50%'
        maxW='805px'
        minW='0'
      >
        <Image src={phone} alt='' w='100%' h='auto' objectFit='contain' />
      </Box>
      {children}
    </Flex>
  )
}

export default AuthShell
