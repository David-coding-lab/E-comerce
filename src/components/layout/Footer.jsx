import { EmailIcon } from '@chakra-ui/icons'
import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import qrCode from '../../assets/Qrcode 1.png'
import googlePlay from '../../assets/googlePlay.png'
import appleStore from '../../assets/download-appstore.png'
import facebookIcon from '../../assets/Icon-Facebook.png'
import twitterIcon from '../../assets/Icon-Twitter.png'
import instagramIcon from '../../assets/icon-instagram.png'
import linkedIn from '../../assets/Icon-Linkedin.png'
import { designSystem } from '../../styles/theme'

const textHeadingStyles = {
  fontWeight: 'semibold',
  mb: '10px',
  fontSize: designSystem.headingSize2,
}

const textLinkStyles = {
  fontFamily: designSystem.font1,
  mt: '24px',
}

const accountLinks = ['My Account', 'Login/ Register', 'Cart', 'Wishlist', 'Shop']
const quickLinks = ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact']
const socialIcons = [facebookIcon, twitterIcon, instagramIcon, linkedIn]

function Footer() {
  const [footerEmail, setFooterEmail] = useState('')

  return (
    <Grid
      w='100%'
      height='450px'
      bgColor='black'
      gridTemplateColumns='repeat(5, 1fr)'
      columnGap='87px'
      color='white'
      placeContent='center'
      paddingInline={designSystem.defaultMargin}
    >
      <GridItem w='250px'>
        <Text sx={textHeadingStyles}>Exclusive</Text>
        <Text fontWeight='semibold' fontSize='20px'>
          Subscribe
        </Text>
        <Text sx={textLinkStyles}>Get 10% off your first order</Text>
        <Flex
          alignItems='center'
          mt='24px'
          w='220px'
          p='5px'
          pr='10px'
          border='1px solid white'
          borderRadius='10px'
        >
          <Input
            border='none'
            mr='auto'
            width='130px'
            placeholder='Email here'
            value={footerEmail}
            onChange={(event) => setFooterEmail(event.target.value)}
          />
          <EmailIcon />
        </Flex>
      </GridItem>

      <GridItem>
        <Text sx={textHeadingStyles}>Support</Text>
        <Text sx={textLinkStyles}>ezeemekad745@gmail.com</Text>
        <Text sx={textLinkStyles}>+234 7010885943</Text>
      </GridItem>

      <GridItem w='150px'>
        <Text sx={textHeadingStyles}>Account</Text>
        {accountLinks.map((link) => (
          <Text key={link} sx={textLinkStyles}>
            {link}
          </Text>
        ))}
      </GridItem>

      <GridItem w='150px'>
        <Text sx={textHeadingStyles}>Quick Links</Text>
        {quickLinks.map((link) => (
          <Text key={link} sx={textLinkStyles}>
            {link}
          </Text>
        ))}
      </GridItem>

      <GridItem width='270px'>
        <Text sx={textHeadingStyles}>Download App</Text>
        <Text sx={textLinkStyles}>Save $3 with App New User Only</Text>
        <HStack mt='15px'>
          <Image src={qrCode} alt='QR code' />
          <VStack>
            <Image src={googlePlay} alt='Get it on Google Play' />
            <Image src={appleStore} alt='Download on the App Store' />
          </VStack>
        </HStack>
        <Flex h='30px' mt='34px' w='180px' justifyContent='center' gap='24px'>
          {socialIcons.map((icon) => (
            <Image key={icon} src={icon} alt='' />
          ))}
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Footer
