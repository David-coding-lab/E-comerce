import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Flex,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import apple from '../../assets/Icons/apple.png'
import iphone from '../../assets/iphone.png'
import { categories } from '../../data/categories'
import { featuredProduct } from '../../data/products'
import { designSystem } from '../../styles/theme'
import PromoBanner from './PromoBanner'

function DefaultBannerContent() {
  return (
    <>
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
    </>
  )
}

function BannerLinks({
  bannerContent,
  bannerImage = iphone,
  bannerImageAlt = 'iPhone 14 Series',
  bannerProduct = featuredProduct,
}) {
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
          <ListItem key={category.slug} mt='16px'>
            <Link
              as={RouterLink}
              to={`/category/${category.slug}`}
              display='flex'
              alignItems='center'
              _hover={{
                color: designSystem.secondary2,
                textDecoration: 'none',
              }}
            >
              {category.label}
              {category.hasChildren && <ListIcon as={ChevronRightIcon} />}
            </Link>
          </ListItem>
        ))}
      </List>

      <PromoBanner
        image={bannerImage}
        imageAlt={bannerImageAlt}
        product={bannerProduct}
      >
        {bannerContent ?? <DefaultBannerContent />}
      </PromoBanner>
    </Container>
  )
}

export default BannerLinks
