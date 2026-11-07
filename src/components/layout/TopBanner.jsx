import { Button, Container, HStack, Text } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'

const buttonStyles = {
  background: 'transparent',
  borderRadius: '0',
  color: 'white',
  w: 'auto',
  h: '25px',
  _hover: {
    bgColor: 'transparent',
  },
}

function TopBanner() {
  return (
    <Container
      maxW='100vw'
      minH='48px'
      h='auto'
      py={{ base: '8px', md: '0' }}
      bgColor='black'
      display={{ base: 'none', md: 'flex' }}
      flexDirection={{ base: 'column', sm: 'row' }}
      gap={{ base: '4px', sm: '12px' }}
      justifyContent='center'
      alignItems='center'
      paddingInline={designSystem.defaultMargin}
      color='white'
      fontFamily={designSystem.font1}
      textAlign='center'
    >
      <HStack flexWrap='wrap' justifyContent='center' gap='4px'>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Text>
        <Button sx={buttonStyles} fontSize={{ base: 'xs', md: 'sm' }} h='auto'>
          ShopNow
        </Button>
      </HStack>
    </Container>
  )
}

export default TopBanner
