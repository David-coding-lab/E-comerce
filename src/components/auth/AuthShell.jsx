import { Box, Flex, Image } from '@chakra-ui/react'
import phone from '../../assets/Icons/dl.beatsnoop 1.png'
import { designSystem } from '../../styles/theme'

function AuthShell({ children }) {
  return (
    <Flex mt='60px' mb='140px' mr={designSystem.defaultMargin}>
      <Box w='805px' h='700px'>
        <Image src={phone} alt='' />
      </Box>
      {children}
    </Flex>
  )
}

export default AuthShell
