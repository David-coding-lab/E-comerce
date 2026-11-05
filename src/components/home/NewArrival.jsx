import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import SectionHeader from '../common/SectionHeader'
import { newArrivals } from '../../data/newArrivals'
import { designSystem } from '../../styles/theme'

const boxStyles = {
  bgColor: '#0D0D0D',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform .3s ease-in-out, border-radius .3s ease-in-out',
  _hover: {
    borderRadius: '10px',
    transform: 'translateY(-20px)',
  },
}

const detailsTextStyles = {
  fontFamily: designSystem.font1,
  fontWeight: 'light',
  fontSize: { base: '12px', md: '14px' },
  letterSpacing: { base: '1px', md: '2px' },
  color: 'white',
}

const headingTextStyles = {
  fontSize: designSystem.headingSize2,
  fontFamily: designSystem.font2,
  mb: '16px',
  color: 'white',
}

const shopNowTextStyles = {
  display: 'inline-block',
  cursor: 'pointer',
  mt: '16px',
  w: 'fit-content',
  borderBottom: '1px',
  color: 'white',
  textDecoration: 'none',
  _hover: { textDecoration: 'none', color: designSystem.secondary3 },
}

const largeImageStyles = {
  position: 'absolute',
  left: { base: 'auto', lg: '50px' },
  right: { base: '-20px', lg: 'auto' },
  top: { base: '24px', lg: '100px' },
  w: { base: '65%', sm: '55%', lg: '500px' },
}

const wideImageStyles = {
  position: 'absolute',
  left: { base: 'auto', lg: '167px' },
  right: { base: '-16px', lg: 'auto' },
  bottom: '0',
  maxW: { base: '55%', lg: 'none' },
  maxH: { base: '80%', lg: 'none' },
}

const smallImageStyles = {
  position: 'absolute',
  top: { base: '20px', lg: '50px' },
  left: { base: '50%', lg: '40px' },
  transform: { base: 'translateX(-50%)', lg: 'none' },
  w: { base: '110px', sm: '130px', lg: 'auto' },
  maxW: { base: '70%', lg: 'none' },
}

function ArrivalContent({ item }) {
  return (
    <Box position='relative' zIndex='10' color='white'>
      <Text sx={headingTextStyles} as='h3'>
        {item.title}
      </Text>
      {item.description && (
        <Text sx={detailsTextStyles}>{item.description}</Text>
      )}
      <Text as={RouterLink} to={item.link} sx={shopNowTextStyles}>
        {item.linkLabel ?? 'Shop Now'}
      </Text>
    </Box>
  )
}

function NewArrival({
  items = newArrivals,
  badgeText = 'Featured',
  title = 'New Arrival',
}) {
  const large = items.find((item) => item.variant === 'large') ?? items[0]
  const wide = items.find((item) => item.variant === 'wide') ?? items[1]
  const smallItems = items
    .filter((item) => item.variant === 'small')
    .slice(0, 2)

  if (!large) {
    return null
  }

  return (
    <Card mt={{ base: '48px', md: '80px' }} pb='30px' boxShadow='none'>
      <CardHeader p='0' mb='20px'>
        <SectionHeader
          badgeText={badgeText}
          title={title}
          titleFontWeight='medium'
        />
      </CardHeader>

      <CardBody p='0'>
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          templateRows={{ base: 'auto', lg: 'repeat(2, 1fr)' }}
          w='auto'
          h={{ base: 'auto', lg: '600px' }}
          rowGap={{ base: '16px', lg: '24px' }}
          columnGap={{ base: '16px', md: '40px', xl: '80px' }}
        >
          <GridItem
            rowSpan={{ base: 1, lg: 2 }}
            colSpan={1}
            sx={boxStyles}
            w='100%'
            minH={{ base: '360px', sm: '420px', lg: 'auto' }}
            alignItems='end'
            pl={{ base: '24px', lg: '32px' }}
            pb={{ base: '24px', lg: '32px' }}
            display='flex'
            cursor='pointer'
          >
            <Image
              sx={{ ...largeImageStyles, ...large.imageProps }}
              src={large.image}
              alt={large.imageAlt ?? large.title}
            />
            <ArrivalContent item={large} />
          </GridItem>

          {wide && (
            <GridItem
              rowSpan={1}
              colSpan={1}
              w='100%'
              h={{ base: '240px', md: '300px' }}
              sx={boxStyles}
              display='flex'
              alignItems='end'
              cursor='pointer'
            >
              <Box ml={{ base: '20px', lg: '24px' }} mb={{ base: '20px', lg: '24px' }}>
                <ArrivalContent item={wide} />
              </Box>
              <Image
                sx={{ ...wideImageStyles, ...wide.imageProps }}
                src={wide.image}
                alt={wide.imageAlt ?? wide.title}
              />
            </GridItem>
          )}

          <GridItem
            cursor='pointer'
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={{ base: '16px', lg: '23px' }}
          >
            {smallItems.map((item) => (
              <Box
                key={item.id}
                w='100%'
                h={{ base: '180px', lg: 'auto' }}
                sx={boxStyles}
                display='flex'
                alignItems='end'
              >
                <Image
                  sx={{ ...smallImageStyles, ...item.imageProps }}
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                />
                <Box mb='24px' ml='24px'>
                  <ArrivalContent item={item} />
                </Box>
              </Box>
            ))}
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  )
}

export default NewArrival
