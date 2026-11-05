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
      mt={{ base: '80px', md: '120px', lg: '166px' }}
      pb={{ base: '60px', md: '90px', lg: '114px' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='center'
      alignItems='center'
      gap={{ base: '40px', lg: '88px' }}
      h='auto'
      textAlign='center'
    >
      {services.map((service) => (
        <Container key={service.title} centerContent w={{ base: '100%', md: 'auto' }}>
          <Box sx={parentBoxStyles}>
            <Box sx={childBoxStyles}>
              <Image src={service.icon} alt='' />
            </Box>
          </Box>
          <VStack>
            <Text sx={textStyles}>{service.title}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{service.description}</Text>
          </VStack>
        </Container>
      ))}
    </Flex>
  )
}

export default ServiceHighlights
