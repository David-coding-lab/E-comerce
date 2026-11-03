import { Container, Image, Text } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'

const containerStyles = {
  maxW: '170px',
  h: '150px',
  gap: '16px',
  justifyContent: 'center',
  border: '1px solid',
  borderRadius: '4px',
  transition: 'background-color .2s ease-out, border .3s ease-out',
  _hover: {
    backgroundColor: designSystem.secondary2,
    border: 'none',
    color: 'white',
  },
}

function CategoryCard({ icon, label }) {
  return (
    <Container role='group' centerContent sx={containerStyles}>
      <Image
        src={icon}
        alt=''
        w='56px'
        h='56px'
        maxW='none'
        _groupHover={{ filter: 'invert(1)' }}
      />
      <Text fontFamily={designSystem.font1}>{label}</Text>
    </Container>
  )
}

export default CategoryCard
