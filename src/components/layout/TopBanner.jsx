import {
  Button,
  Container,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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

const languages = ['French', 'Spanish', 'Igbo']

function TopBanner() {
  return (
    <Container
      maxW='100vw'
      minH='48px'
      h='auto'
      py={{ base: '8px', md: '0' }}
      bgColor='black'
      display='flex'
      flexDirection={{ base: 'column', sm: 'row' }}
      gap={{ base: '4px', sm: '12px' }}
      justifyContent='space-between'
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

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              fontWeight='normal'
              sx={buttonStyles}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              English
            </MenuButton>

            <MenuList color='black'>
              {languages.map((language) => (
                <MenuItem key={language}>{language}</MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Container>
  )
}

export default TopBanner
