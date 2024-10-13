import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, Flex, Grid, GridItem, HStack, IconButton, Input, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { designSystem } from '../App'

function Contact() {
  return (
    <Flex
      marginInline={designSystem.defaultMargin}
      w='flex'
      h='70vh'
      justifyContent='center'
      alignItems='center'
      mb='50px'
    >


      <Container
        w='350px'
        h='460px'
        boxShadow='0 1px 13px rgba(0, 0, 0, 0.05)'
        paddingInline='35px'
        paddingBlock='40px'
        fontFamily={designSystem.font1}
      >
        <Box>
          <HStack mb='24px'>
            <IconButton w='40px' h='40px' bgColor={designSystem.secondary2} borderRadius='50%'>
              <PhoneIcon color='white' />
            </IconButton>
            <Text>Call To Us</Text>
          </HStack>
          <Text mb='20px' fontSize='15px'>We are available 24/7, 7 days a week.</Text>
          <Text fontSize='15px'>Phone: +234 7010885943</Text>
        </Box>
        <Divider mt='20px' />
        <Box fontSize='16px'>
        <HStack marginBlock='20px'>
            <IconButton w='40px' h='40px' bgColor={designSystem.secondary2} borderRadius='50%'>
              <EmailIcon color='white'/>
            </IconButton>
            <Text>Write To US</Text>
          </HStack>
          <Text mb='10px' lineHeight='30px'>Fill out our form and we will contact you within 24 hours.</Text>
          <Text mb='10px'>Emails: emekad745@gmail.com</Text>
          <Text>Emails: dave997996@gmail.com</Text>
        </Box>
      </Container>

        <SimpleGrid columns={3} spacing={4}>
          <GridItem colSpan={1}>
            <Input bgColor={designSystem.secondary} border='none' borderRadius='4px' placeholder='Your Name *' />
          </GridItem>
          <GridItem colSpan={1}>
            <Input bgColor={designSystem.secondary} border='none' borderRadius='4px' placeholder='Your Email *' />
          </GridItem>
          <GridItem colSpan={1}>
            <Input bgColor={designSystem.secondary} border='none' borderRadius='4px' placeholder='Your Phone *' />
          </GridItem>
          <GridItem colSpan={3}>
            <Textarea bgColor={designSystem.secondary} border='none' borderRadius='4px' h='207px' placeholder='Your Message' />
          </GridItem>
          <GridItem colSpan={3} textAlign="right">
            <Button
              bgColor={designSystem.secondary2}
              w='200px'
              h='50px'
              color='white'
              borderRadius='4px'
              _hover={{
                opacity: .8
              }}
              >Send Message</Button>
          </GridItem>
  </SimpleGrid>


    </Flex>
  )
}

export default Contact