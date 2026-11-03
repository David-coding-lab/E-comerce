import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'
import customerCare from '../../assets/CustomerService.png'
import deliveryCar from '../../assets/delivery.png'
import padlockGuard from '../../assets/Secure.png'

const services = [
  {
    icon: deliveryCar,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    icon: customerCare,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: padlockGuard,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
]

const parentBoxStyles = {
  w: '70px',
  h: '70px',
  display: 'grid',
  placeContent: 'center',
  borderRadius: '50%',
  bgColor: 'rgba(47, 46, 48, 0.3)',
}

const childBoxStyles = {
  w: '50px',
  p: '5px',
  borderRadius: '50%',
  bgColor: 'black',
}

const textStyles = {
  mt: '24px',
  fontWeight: 'semibold',
  fontSize: designSystem.textSize1,
  fontFamily: designSystem.font1,
}

function ServiceHighlights() {
  return (
    <Flex
      mt='166px'
      pb='114px'
      justifyContent='center'
      alignItems='center'
      gap='88px'
      h='auto'
    >
      {services.map((service) => (
        <Container key={service.title} centerContent>
          <Box sx={parentBoxStyles}>
            <Box sx={childBoxStyles}>
              <Image src={service.icon} alt='' />
            </Box>
          </Box>
          <VStack>
            <Text sx={textStyles}>{service.title}</Text>
            <Text>{service.description}</Text>
          </VStack>
        </Container>
      ))}
    </Flex>
  )
}

export default ServiceHighlights
