import { SearchIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  Link as RouterLink,
  NavLink,
  useNavigate,
} from 'react-router-dom'
import wishList from '../../assets/Icons/Wishlist.png'
import cart from '../../assets/Icons/Cart1.png'
import { designSystem } from '../../styles/theme'
import { useCart } from '../../context/cartContext'
import { useWishlistCount } from '../../context/wishlistContext'

const navItems = [
  { to: '/', label: 'Shop' },
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
  const { itemCount } = useCart()
  const wishlistCount = useWishlistCount()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const query = searchTerm.trim()

    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <Flex
      h={{ base: 'auto', lg: '94px' }}
      py={{ base: '20px', lg: '0' }}
      gap={{ base: '24px', lg: '0' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      bgColor='white'
      paddingInline={designSystem.defaultMargin}
      justifyContent='center'
      alignItems='center'
      borderBottom='.5px solid rgba(84, 84, 88, 0.3)'
    >
      <Text
        fontFamily={designSystem.font2}
        fontWeight='extrabold'
        fontSize={{ base: '22px', md: '24px' }}
        marginRight={{ base: '0', lg: '190px' }}
        as='h1'
      >
        Exclusive
      </Text>

      <HStack
        gap={{ base: '18px', md: '30px' }}
        w={{ base: '100%', lg: '450px' }}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        flexWrap='wrap'
        fontFamily={designSystem.font1}
        fontSize={{ base: 'sm', md: 'md' }}
      >
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

      <HStack
        marginLeft={{ base: '0', lg: '148px' }}
        w={{ base: '100%', lg: 'auto' }}
        justifyContent={{ base: 'center', lg: 'flex-end' }}
      >
        <Flex
          as='form'
          onSubmit={handleSearch}
          bgColor={designSystem.secondary}
          borderRadius='4px'
          alignItems='center'
          padding='5px'
          width={{ base: '100%', sm: '263px' }}
          maxW='263px'
          flex={{ base: '1', lg: 'none' }}
        >
          <Input
            bgColor='transparent'
            border='none'
            outline='transparent'
            w='100%'
            fontSize={{ base: 'sm', md: 'md' }}
            placeholder='What are you looking for'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <IconButton
            type='submit'
            icon={<SearchIcon />}
            aria-label='Search products'
            variant='ghost'
            size='sm'
            minW='auto'
            h='auto'
            p='0'
            ml='10px'
            flexShrink='0'
            _hover={{ bgColor: 'transparent' }}
          />
        </Flex>

        <Box position='relative'>
          <Button
            as={RouterLink}
            to='/wishlist'
            sx={iconButtonStyles}
            aria-label='Wishlist'
          >
            <Image src={wishList} alt='' />
          </Button>
          {wishlistCount > 0 && (
            <Badge
              position='absolute'
              top='0'
              right='0'
              minW='18px'
              h='18px'
              px='4px'
              display='grid'
              placeContent='center'
              borderRadius='full'
              bgColor={designSystem.secondary2}
              color='white'
              fontSize='10px'
              pointerEvents='none'
            >
              {wishlistCount}
            </Badge>
          )}
        </Box>
        <Box position='relative'>
          <Button
            as={RouterLink}
            to='/cart'
            sx={iconButtonStyles}
            aria-label='Cart'
          >
            <Image src={cart} alt='' />
          </Button>
          {itemCount > 0 && (
            <Badge
              position='absolute'
              top='0'
              right='0'
              minW='18px'
              h='18px'
              px='4px'
              display='grid'
              placeContent='center'
              borderRadius='full'
              bgColor={designSystem.secondary2}
              color='white'
              fontSize='10px'
              pointerEvents='none'
            >
              {itemCount}
            </Badge>
          )}
        </Box>
      </HStack>
    </Flex>
  )
}

export default NavBar
