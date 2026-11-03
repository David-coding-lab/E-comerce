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
import SectionHeader from '../common/SectionHeader'
import { designSystem } from '../../styles/theme'
import ps5 from '../../assets/ps5.png'
import speakers from '../../assets/jblSpeakers.png'
import gucciPerfumes from '../../assets/GucciPerfuems.png'
import womenHair from '../../assets/attractive-woman-wearing-hat-posing.png'

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
  cursor: 'pointer',
  mt: '16px',
  w: 'fit-content',
  borderBottom: '1px',
  color: 'white',
}

function NewArrival() {
  return (
    <Card mt='80px' boxShadow='none'>
      <CardHeader p='0' mb='20px'>
        <SectionHeader
          badgeText='Featured'
          title='New Arrival'
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
              position='absolute'
              left='50px'
              top='100px'
              w='500px'
              src={ps5}
              alt='PlayStation 5'
            />
            <Box zIndex='10' color='white'>
              <Text sx={headingTextStyles} as='h3'>
                PlayStation 5
              </Text>
              <Text sx={detailsTextStyles}>
                Black and White version of the PS5 <br />
                coming out on sale.
              </Text>
              <Text sx={shopNowTextStyles}>Shop Now</Text>
            </Box>
          </GridItem>

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
            <Box
              h='150px'
              w='285px'
              ml='24px'
              mb='24px'
              zIndex='10'
              boxSizing='border-box'
            >
              <Text sx={headingTextStyles} as='h3'>
                Women’s Collections
              </Text>
              <Text sx={detailsTextStyles}>
                Featured woman collections that give you another vibe.
              </Text>
              <Text sx={shopNowTextStyles}>Shop Now</Text>
            </Box>
            <Image left='167px' pos='absolute' src={womenHair} alt='' />
          </GridItem>

          <GridItem cursor='pointer' display='flex' gap='23px'>
            <Box
              rowSpan={1}
              colSpan={1}
              w='290px'
              sx={boxStyles}
              display='flex'
              alignItems='end'
              pb='24px'
              pl='24px'
            >
              <Image
                position='absolute'
                top='50px'
                left='40px'
                src={speakers}
                alt='Speakers'
              />
              <Box zIndex='10'>
                <Text
                  fontSize={designSystem.headingSize2}
                  fontFamily={designSystem.font2}
                  color='white'
                  mb='5px'
                  as='h3'
                >
                  Speakers
                </Text>
                <Text sx={detailsTextStyles}>Amazon wireless speakers</Text>
                <Text sx={shopNowTextStyles}>Shop Now</Text>
              </Box>
            </Box>

            <Box
              w='290px'
              sx={boxStyles}
              display='flex'
              alignItems='end'
            >
              <Image
                top='50px'
                left='40px'
                position='absolute'
                src={gucciPerfumes}
                alt='Perfume'
              />
              <Box mb='24px' ml='24px' zIndex='10'>
                <Text
                  fontSize={designSystem.headingSize2}
                  fontFamily={designSystem.font2}
                  color='white'
                  mb='5px'
                  as='h3'
                >
                  Perfume
                </Text>
                <Text sx={detailsTextStyles}>GUCCI INTENSE OUD EDP</Text>
                <Text sx={shopNowTextStyles}>Shop Now</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  )
}

export default NewArrival
