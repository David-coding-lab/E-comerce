import { designSystem } from './designSystem'
import { Box, Button, Text, Menu, MenuButton, MenuList, MenuItem, HStack, useBreakpointValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Footer from './Components/Footer'
import DesktopOnlyGate from './Components/DesktopOnlyGate'
import { Routes, Route } from 'react-router-dom'

function App() {
  const buttonStyle = {
    background: 'transparent',
    borderRadius: '0',
    color: 'white',
    w: 'auto',
    h: '25px',
    _hover: {
      bgColor: 'transparent',
    },
  }

  const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: true })

  if (!isDesktop) {
    return <DesktopOnlyGate />
  }

  return (
    <Box as="div" w="auto" h="100vh">
      <Box
        w="100vw"
        h="48px"
        bgColor="black"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingInline={designSystem.defaultMargin}
        color="white"
        fontFamily={designSystem.font1}
      >
        <HStack>
          <Text>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Text>
          <Button sx={buttonStyle}>ShopNow</Button>
        </HStack>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} fontWeight="normal" sx={buttonStyle} as={Button} rightIcon={<ChevronDownIcon />}>
                {'English'}
              </MenuButton>
              <MenuList color="black">
                <MenuItem>French</MenuItem>
                <MenuItem>Spanish</MenuItem>
                <MenuItem>Igbo</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App