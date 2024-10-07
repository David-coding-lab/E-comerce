import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import apple from '../assets/Icons/apple.png'
import iphone from '../assets/iphone.png'
import {Box, Button, Container, Flex,HStack,Image,Text} from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { designSystem } from '../App'
function BannerLinks() {
    return (
        <Container display='flex' maxW='100vw' mb='140px'>


            <List


            borderRight='1px solid'
            width='217px'
            fontFamily={designSystem.font1}
            fontWeight='normal'
            pt='40px'
            cursor='pointer'>


                <ListItem mt='16px'>Woman’s Fashion <ListIcon as={ChevronRightIcon}/></ListItem>
                <ListItem mt='16px'>Men’s Fashion <ListIcon as={ChevronRightIcon}/></ListItem>
                <ListItem mt='16px'>Electronics</ListItem>
                <ListItem mt='16px'>Home & Lifestyle</ListItem>
                <ListItem mt='16px'>Medicine</ListItem>
                <ListItem mt='16px'>Sports & Outdoor</ListItem>
                <ListItem mt='16px'>Baby’s & Toys</ListItem>
                <ListItem mt='16px'>Groceries & Pets</ListItem>
                <ListItem mt='16px'>Health & Beauty</ListItem>


            </List>


            <Flex

            bgColor='#000000'
            // justifyContent='center'
            alignItems='center'
            pl='100px'
            w='80vw'
            h='300px'
            mt='40px'
            ml='45px'>

                <Box  color='white'>

                    <Flex alignItems='center' justifyContent='space-between' w='190px'>
                        <Image src={apple}/>
                        <Text>iPhone 14 Series</Text>
                    </Flex>
                    <Text as='h1'

                    mt='20px'
                    mb='22px'
                    fontFamily={designSystem.font1}
                    fontWeight='semibold'
                    letterSpacing='3px'
                    lineHeight='55px'
                    fontSize={designSystem.headingSize1}>Up to 10% <br /> off Voucher</Text>
                    <HStack cursor='pointer'>
                        <Text

                        bgColor='transparent'
                        color='white'
                        borderBottom='1px solid'
                        w='fit-content'
                        >Shop Now</Text>
                        <ArrowForwardIcon />
                    </HStack>
                </Box>

                <Image

                w='400px'
                h='300px'
                ml='200px'
                objectFit='cover'
                src={iphone}/>
            </Flex>
        </Container>
    )
}

export default BannerLinks