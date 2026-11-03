import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import jblImage from '../../assets/jblimage.png'
import { designSystem } from '../../styles/theme'

const timers = [
  { value: '23', unit: 'Hours' },
  { value: '05', unit: 'Days' },
  { value: '59', unit: 'Minutes' },
  { value: '35', unit: 'Seconds' },
]

const timerStyles = {
  w: '67px',
  h: '67px',
  borderRadius: '50%',
  display: 'grid',
  placeContent: 'center',
  bgColor: 'white',
}

function JblBanner() {
  return (
    <Container
      display='flex'
      mt='140px'
      mb='71px'
      bgColor='#000000'
      maxW='100vw'
      h='420px'
      alignItems='center'
      position='relative'
      fontFamily={designSystem.font1}
    >
      <Box ml='56px'>
        <Text color={designSystem.secondary3}>Categories</Text>
        <Text
          as='h2'
          marginBlock='32px'
          color='white'
          letterSpacing='2px'
          fontFamily={designSystem.font2}
          fontSize={designSystem.headingSize1}
          fontWeight='bold'
        >
          Enhance Your <br /> Music Experience
        </Text>

        <HStack fontFamily={designSystem.font1} gap='15px'>
          {timers.map((timer) => (
            <Box key={timer.unit} sx={timerStyles}>
              <Text textAlign='center' fontSize='12px' fontWeight='medium'>
                {timer.value} <br /> {timer.unit}
              </Text>
            </Box>
          ))}
        </HStack>

        <Button
          fontWeight='medium'
          mt='40px'
          w='171px'
          h='56px'
          bgColor={designSystem.secondary3}
          color='white'
          _hover={{ backgroundColor: '#00A843' }}
        >
          Buy Now
        </Button>
      </Box>

      <Box
        position='absolute'
        w='460px'
        h='460px'
        bgColor='#D9D9D9'
        opacity='20%'
        filter='blur(20px)'
        left='60%'
        borderRadius='50%'
      />

      <Image
        zIndex='1'
        w='650px'
        ml='auto'
        src={jblImage}
        alt='JBL speaker'
      />
    </Container>
  )
}

export default JblBanner
