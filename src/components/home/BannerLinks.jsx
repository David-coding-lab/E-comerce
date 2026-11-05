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
      <Flex alignItems='center' justifyContent='space-between' w='190px' maxW='100%'>
        <Image src={apple} alt='' />
        <Text fontSize={{ base: 'sm', md: 'md' }}>iPhone 14 Series</Text>
      </Flex>
      <Text
        as='h1'
        mt='20px'
        mb='22px'
        fontFamily={designSystem.font1}
        fontWeight='semibold'
        letterSpacing={{ base: '2px', md: '3px' }}
        lineHeight={{ base: '34px', md: '44px', lg: '55px' }}
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
    <Container
      display='flex'
      flexDirection={{ base: 'column', lg: 'row' }}
      maxW='100%'
      w='100%'
      mt={{ base: '24px', lg: '0' }}
      mb={{ base: '60px', md: '90px', lg: '140px' }}
      px='0'
      gap={{ base: '8px', lg: '0' }}
    >
      <List
        borderRight={{ base: 'none', lg: '1px solid' }}
        borderBottom={{ base: '1px solid', lg: 'none' }}
        width={{ base: '100%', lg: '217px' }}
        fontFamily={designSystem.font1}
        fontWeight='normal'
        fontSize={{ base: 'sm', md: 'md' }}
        pt={{ base: '0', lg: '40px' }}
        pb={{ base: '12px', lg: '0' }}
        cursor='pointer'
        display={{ base: 'flex', lg: 'block' }}
        overflowX={{ base: 'auto', lg: 'visible' }}
        gap='20px'
        flexShrink='0'
      >
        {categories.map((category) => (
          <ListItem key={category.slug} mt={{ base: '0', lg: '16px' }} flexShrink='0' whiteSpace='nowrap'>
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
