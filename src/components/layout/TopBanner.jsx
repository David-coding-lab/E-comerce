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
      h='48px'
      bgColor='black'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      paddingInline={designSystem.defaultMargin}
      color='white'
      fontFamily={designSystem.font1}
    >
      <HStack>
        <Text>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Text>
        <Button sx={buttonStyles}>ShopNow</Button>
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
