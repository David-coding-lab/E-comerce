import { EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, GridItem, HStack, IconButton, Image, Img, Input, Text, VStack } from '@chakra-ui/react'
import qrCode from '../assets/Qrcode 1.png'
import googlPlay from '../assets/googlePlay.png'
import appleStore from '../assets/download-appstore.png'
import faceBookIcon from '../assets/Icon-Facebook.png'
import tweeterIcon from '../assets/Icon-Twitter.png'
import instagramICon from '../assets/icon-instagram.png'
import linkedIn from '../assets/Icon-Linkedin.png'
import { designSystem } from '../App'
import { useState } from 'react'
function Footer() {
    const [footerEmail,SelfooterEmail] = useState('Email here')
    const footerTextHeading={
        fontWeight:'semibold',
        mb:'10px',
        fontSize: designSystem.headingSize2
    }
    const footerTextLinks={
        fontFamily: designSystem.font1,
        mt:'24px'
    }
    return (
        <Grid

        w='flex'
        height='450px'
        bgColor='black'
        gridTemplateColumns='repeat(5, 1fr)'
        columnGap='87px'
        color='white'
        placeContent='center'
        paddingInline={designSystem.defaultMargin}
        >
            <GridItem w='250px'>
                <Text sx={footerTextHeading}>Exclusive</Text>
                <Text fontWeight='semibold' fontSize='20px'>Subscribe</Text>
                <Text sx={footerTextLinks}>Get 10% off your first order</Text>
                <Flex
                alignItems='center'
                mt='24px'
                w='220px'
                p='5px'
                pr='10px'
                border='1px solid white'
                borderRadius='10px'
                >
                    <Input border='none' mr='auto' width='130px' value={footerEmail}/>
                    <EmailIcon />
                </Flex>
            </GridItem>
            <GridItem>
                <Text sx={footerTextHeading}>Support</Text>
                <Text sx={footerTextLinks}>ezeemekad745@gmail.com</Text>
                <Text sx={footerTextLinks}>+234 7010885943</Text>
            </GridItem>
            <GridItem w='150px'>
                <Text sx={footerTextHeading}>Account</Text>
                <Text sx={footerTextLinks}>My Account</Text>
                <Text sx={footerTextLinks}>Login/ Register</Text>
                <Text sx={footerTextLinks}>Cart</Text>
                <Text sx={footerTextLinks}>Wishlist</Text>
                <Text sx={footerTextLinks}>Shop</Text>
            </GridItem>
            <GridItem w='150px'>
                <Text sx={footerTextHeading}>Quick Links</Text>
                <Text sx={footerTextLinks}>Privacy Policy</Text>
                <Text sx={footerTextLinks}>Terms Of Use</Text>
                <Text sx={footerTextLinks}>FAQ</Text>
                <Text sx={footerTextLinks}>Contact</Text>
            </GridItem>
            <GridItem width='270px'>
                <Text sx={footerTextHeading}>Download App</Text>
                <Text sx={footerTextLinks}>Save $3 with App New User Only</Text>
                <HStack mt='15px'>
                    {/* qr code */}
                    <Image src={qrCode}/>
                    {/* download buttons */}
                    <VStack>
                        <Image src={googlPlay}/>
                        <Image src={appleStore}/>
                    </VStack>
                </HStack>
                <Flex h='30px' mt='34px' w='180px' justifyContent='center'  gap='24px'>
                    <Image src={faceBookIcon}/>
                    <Image src={tweeterIcon}/>
                    <Image src={instagramICon}/>
                    <Image src={linkedIn}/>
                </Flex>
            </GridItem>
        </Grid>
    )
}

export default Footer