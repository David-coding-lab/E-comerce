import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'
import BackButton from '../components/common/BackButton'
import { designSystem } from '../styles/theme'

const iconButtonStyles = {
  w: '40px',
  h: '40px',
  bgColor: designSystem.secondary2,
  borderRadius: '50%',
  flexShrink: 0,
}

const inputStyles = {
  bgColor: designSystem.secondary,
  border: 'none',
  borderRadius: '4px',
}

const sendButtonStyles = {
  bgColor: designSystem.secondary2,
  w: { base: '100%', sm: '200px' },
  h: '50px',
  color: 'white',
  borderRadius: '4px',
  _hover: {
    opacity: 0.8,
  },
}

const infoCardStyles = {
  bgColor: designSystem.secondary,
  borderRadius: '8px',
  p: { base: '20px', md: '24px' },
  h: '100%',
}

const infoHeadingStyles = {
  fontWeight: 'semibold',
  fontSize: designSystem.textSize1,
}

function Contact() {
  return (
    <Box marginInline={designSystem.defaultMargin}>
      <BackButton mt='40px' />

      <Flex justifyContent='center' py={{ base: '40px', md: '60px' }} mb='50px'>
        <Container
          maxW='780px'
          w='100%'
          bgColor='white'
          boxShadow='0 8px 30px rgba(0, 0, 0, 0.08)'
          borderRadius='12px'
          px={{ base: '20px', sm: '32px', md: '48px' }}
          py={{ base: '32px', md: '48px' }}
          fontFamily={designSystem.font1}
        >
          <Box textAlign='center' mb={{ base: '28px', md: '36px' }}>
            <Text
              as='h1'
              fontFamily={designSystem.font2}
              fontSize={designSystem.headingSize1}
              fontWeight='bold'
            >
              Contact Us
            </Text>
            <Text mt='8px' color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
              We are here to help. Reach out to us anytime.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box sx={infoCardStyles}>
              <HStack mb='16px'>
                <IconButton sx={iconButtonStyles} aria-label='Call us'>
                  <PhoneIcon color='white' />
                </IconButton>
                <Text sx={infoHeadingStyles}>Call To Us</Text>
              </HStack>
              <Text mb='10px' fontSize='15px'>
                We are available 24/7, 7 days a week.
              </Text>
              <Text fontSize='15px'>Phone: +234 7010885943</Text>
            </Box>

            <Box sx={infoCardStyles}>
              <HStack mb='16px'>
                <IconButton sx={iconButtonStyles} aria-label='Email us'>
                  <EmailIcon color='white' />
                </IconButton>
                <Text sx={infoHeadingStyles}>Write To Us</Text>
              </HStack>
              <Text mb='10px' fontSize='15px'>
                Fill out our form and we will contact you within 24 hours.
              </Text>
              <Text mb='6px' fontSize='15px'>
                Emails: emekad745@gmail.com
              </Text>
              <Text fontSize='15px'>Emails: dave997996@gmail.com</Text>
            </Box>
          </SimpleGrid>

          <Divider my={{ base: '28px', md: '36px' }} />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem colSpan={1}>
              <Input sx={inputStyles} placeholder='Your Name *' />
            </GridItem>
            <GridItem colSpan={1}>
              <Input sx={inputStyles} placeholder='Your Email *' />
            </GridItem>
            <GridItem colSpan={1}>
              <Input sx={inputStyles} placeholder='Your Phone *' />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Textarea
                sx={inputStyles}
                h='207px'
                placeholder='Your Message'
              />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }} textAlign='right'>
              <Button sx={sendButtonStyles}>Send Message</Button>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  )
}

export default Contact
