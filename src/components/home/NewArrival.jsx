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
  transition: 'transform .3s ease-in-out, border-radius .3s ease-in-out',
  _hover: {
    borderRadius: '10px',
    transform: 'translateY(-20px)',
  },
}

const detailsTextStyles = {
  fontFamily: designSystem.font1,
  fontWeight: 'light',
  fontSize: '14px',
  letterSpacing: '2px',
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
  left: '50px',
  top: '100px',
  w: '500px',
}

const wideImageStyles = {
  position: 'absolute',
  left: '167px',
}

const smallImageStyles = {
  position: 'absolute',
  top: '50px',
  left: '40px',
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
    <Card mt='80px' pb='30px' boxShadow='none'>
      <CardHeader p='0' mb='20px'>
        <SectionHeader
          badgeText={badgeText}
          title={title}
          titleFontWeight='medium'
        />
      </CardHeader>

      <CardBody p='0'>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(2, 1fr)'
          w='auto'
          h='600px'
          rowGap='24px'
          columnGap='80px'
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            sx={boxStyles}
            w='630px'
            alignItems='end'
            pl='32px'
            pb='32px'
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
              w='600px'
              h='300px'
              sx={boxStyles}
              display='flex'
              alignItems='end'
              cursor='pointer'
            >
              <Box ml='24px' mb='24px'>
                <ArrivalContent item={wide} />
              </Box>
              <Image
                sx={{ ...wideImageStyles, ...wide.imageProps }}
                src={wide.image}
                alt={wide.imageAlt ?? wide.title}
              />
            </GridItem>
          )}

          <GridItem cursor='pointer' display='flex' gap='23px'>
            {smallItems.map((item) => (
              <Box
                key={item.id}
                w='290px'
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
