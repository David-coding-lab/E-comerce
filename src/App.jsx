export const designSystem = {
  headingSize1:'36px',
  headingSize2: '28px',
  textSize1: '16px',
  textSize2: '12px',
  font1: 'poppins',
  font2: 'Inter',
  secondary: '#F5F5F5',
  secondary2: '#DB4444',
  secondary3: '#00FF66',
  defaultMargin: '135px'
}


import { Box,Button,Text,Menu,MenuButton,MenuList,MenuItem, background, HStack, Container } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import GoodsCard from './Components/GoodsCard'
import JblBanner from './Components/JblBanner'
import { color } from 'framer-motion'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import SignUp from './Components/SignUp'
import { useState } from 'react'
import Footer from './Components/Footer'
function App() {


  const [currentTab,setCurrentTab] = useState('Home')


  const buttonStyle = {


    background: 'transparent',
    borderRadius: '0',
    color: 'white',
    w:'auto',
    h:'25px',

    _hover: {
        bgColor: 'transparent'
    }

  }


  return(

    <Box as='div'

    w='flex'
    h='100vh'
  >


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
        <Text>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Text>

        <Button

        sx={buttonStyle}
        >ShopNow</Button>

      </HStack>


      <Menu>


        {({ isOpen }) => (
          <>

            <MenuButton isActive={isOpen} fontWeight='normal' sx={buttonStyle} as={Button} rightIcon={< ChevronDownIcon/>}>
              {'English'}
            </MenuButton>


            <MenuList
            color='black'
            >


              <MenuItem>French</MenuItem>
              <MenuItem>Spanish</MenuItem>
              <MenuItem>Igbo</MenuItem>
            </MenuList>


          </>
        )}
      </Menu>
    </Container>


    <NavBar setCurrentTab={setCurrentTab}/>


    {currentTab === 'Home' && <Home />}
    {currentTab === 'Contact' && <Contact />}
    {currentTab === 'About' && <About />}
    {currentTab === 'SignUp' && <SignUp />}



    <Footer />














    {/* <GoodsCard

      discountPercent='-40%'
      cardImage={gamePad}
      cardName='HAVIT HV-G92 Gamepad'
      currentPrice='$120'
      oldPrice='$160'
      rating={300}
    /> */}
    {/* <JblBanner /> */}


  </Box>
  )
}

export default App