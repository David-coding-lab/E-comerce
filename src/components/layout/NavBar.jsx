import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import wishList from '../../assets/Icons/Wishlist.png'
import cart from '../../assets/Icons/Cart1.png'
import { designSystem } from '../../styles/theme'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
  { to: '/signup', label: 'Sign Up' },
]

const navLinkStyles = {
  borderBottom: '2px solid transparent',
  paddingBottom: '8px',
}

const activeNavLinkStyles = {
  borderBottom: '2px solid black',
  paddingBottom: '8px',
}

const iconButtonStyles = {
  backgroundColor: 'transparent',
  border: 'none',
}

function NavBar() {
  return (
    <Flex
      h='94px'
      bgColor='white'
      paddingInline={designSystem.defaultMargin}
      justifyContent='center'
      alignItems='center'
      borderBottom='.5px solid rgba(84, 84, 88, 0.3)'
    >
      <Text
        fontFamily={designSystem.font2}
        fontWeight='extrabold'
        fontSize='24px'
        marginRight='190px'
        as='h1'
      >
        Exclusive
      </Text>

      <HStack gap='30px' w='450px' fontFamily={designSystem.font1}>
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === '/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            {({ isActive }) => (
              <Text
                as='span'
                fontWeight='bold'
                sx={isActive ? activeNavLinkStyles : navLinkStyles}
              >
                {label}
              </Text>
            )}
          </NavLink>
        ))}
      </HStack>

      <HStack marginLeft='148px'>
        <Flex
          bgColor={designSystem.secondary}
          borderRadius='4px'
          alignItems='center'
          padding='5px'
          width='263px'
        >
          <Input
            bgColor='transparent'
            border='none'
            outline='transparent'
            w='210px'
            placeholder='What are you looking for'
          />
          <SearchIcon cursor='pointer' marginLeft='10px' />
        </Flex>

        <Button sx={iconButtonStyles} aria-label='Wishlist'>
          <Image src={wishList} alt='' />
        </Button>
        <Button sx={iconButtonStyles} aria-label='Cart'>
          <Image src={cart} alt='' />
        </Button>
      </HStack>
    </Flex>
  )
}

export default NavBar
