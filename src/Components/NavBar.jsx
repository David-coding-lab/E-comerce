import { SearchIcon } from '@chakra-ui/icons'
import { Flex, HStack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Button, Image, border } from '@chakra-ui/react'
import whisList from '../assets/Icons/Wishlist.png'
import cart from '../assets/Icons/Cart1.png'
import React from 'react'
import { designSystem } from '../App'

function NavBar({setCurrentTab}) {
    const selectedTab = {
        borderBottom: '1px solid black',
        borderBottomWidth: '2px',
    }
    const buttonStyles = {
        backgroundColor: 'transparent',
        border: 'none',
    }
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
            as='h1'>Exclusive</Text>
            <Tabs

            variant='unstyled'>
                <TabList

                gap='30px'
                w='450px'
                fontFamily={designSystem.font1}
                fontWeight='bold'>
                    <Tab onClick={()=>setCurrentTab('Home')} _selected={selectedTab}>Home</Tab>
                    <Tab onClick={()=>setCurrentTab('Contact')} _selected={selectedTab}>Contact</Tab>
                    <Tab onClick={()=>setCurrentTab('About')} _selected={selectedTab}>About</Tab>
                    <Tab onClick={()=>setCurrentTab('SignUp')} _selected={selectedTab}>Sign Up</Tab>
                </TabList>
            </Tabs>
            <HStack marginLeft='148px'>
                <Flex

                bgColor='#F5F5F5'
                borderRadius='4px'
                alignItems='center'
                padding='5px'
                width='263px'>
                    <Input
                    bgColor='transparent'
                    border='none'
                    outline='transparent'
                    w='210px'
                    placeholder='What are you looking for'/>
                    <SearchIcon

                    cursor='pointer'
                    marginLeft='10px'/>
                </Flex>
                <Button sx={buttonStyles}><Image src={whisList} alt='whislist'/></Button>
                <Button sx={buttonStyles}><Image src={cart} alt={cart}/></Button>
            </HStack>
        </Flex>
    )
}

export default NavBar