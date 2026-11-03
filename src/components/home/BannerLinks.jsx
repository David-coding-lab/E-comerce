import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import apple from '../../assets/Icons/apple.png'
import iphone from '../../assets/iphone.png'
import { designSystem } from '../../styles/theme'

const categories = [
  { label: 'Woman’s Fashion', hasChildren: true },
  { label: 'Men’s Fashion', hasChildren: true },
  { label: 'Electronics', hasChildren: false },
  { label: 'Home & Lifestyle', hasChildren: false },
  { label: 'Medicine', hasChildren: false },
  { label: 'Sports & Outdoor', hasChildren: false },
  { label: 'Baby’s & Toys', hasChildren: false },
  { label: 'Groceries & Pets', hasChildren: false },
  { label: 'Health & Beauty', hasChildren: false },
]

function BannerLinks() {
  return (
    <Container display='flex' maxW='100vw' mb='140px'>
      <List
        borderRight='1px solid'
        width='217px'
        fontFamily={designSystem.font1}
        fontWeight='normal'
        pt='40px'
        cursor='pointer'
      >
        {categories.map((category) => (
          <ListItem key={category.label} mt='16px'>
            {category.label}
            {category.hasChildren && <ListIcon as={ChevronRightIcon} />}
          </ListItem>
        ))}
      </List>

      <Flex
        bgColor='#000000'
        alignItems='center'
        pl='100px'
        w='80vw'
        h='300px'
        mt='40px'
        ml='45px'
      >
        <Box color='white'>
          <Flex alignItems='center' justifyContent='space-between' w='190px'>
            <Image src={apple} alt='' />
            <Text>iPhone 14 Series</Text>
          </Flex>
          <Text
            as='h1'
            mt='20px'
            mb='22px'
            fontFamily={designSystem.font1}
            fontWeight='semibold'
            letterSpacing='3px'
            lineHeight='55px'
            fontSize={designSystem.headingSize1}
          >
            Up to 10% <br /> off Voucher
          </Text>
          <HStack cursor='pointer'>
            <Text
              bgColor='transparent'
              color='white'
              borderBottom='1px solid'
              w='fit-content'
            >
              Shop Now
            </Text>
            <ArrowForwardIcon />
          </HStack>
        </Box>

        <Image
          w='400px'
          h='300px'
          ml='200px'
          objectFit='cover'
          src={iphone}
          alt='iPhone 14 Series'
        />
      </Flex>
    </Container>
  )
}

export default BannerLinks
