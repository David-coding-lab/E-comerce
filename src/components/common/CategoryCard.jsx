import { Container, Image, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { designSystem } from '../../styles/theme'

const containerStyles = {
  w: '100%',
  maxW: { base: '100%', md: '170px' },
  h: { base: '110px', md: '150px' },
  gap: { base: '10px', md: '16px' },
  px: '8px',
  justifyContent: 'center',
  border: '1px solid',
  borderRadius: '4px',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-color .2s ease-out, border .3s ease-out',
  _hover: {
    backgroundColor: designSystem.secondary2,
    border: 'none',
    color: 'white',
    textDecoration: 'none',
  },
}

function CategoryCard({ icon, label, slug, to }) {
  return (
    <Container
      as={RouterLink}
      to={to ?? `/category/${slug}`}
      role='group'
      centerContent
      sx={containerStyles}
    >
      <Image
        src={icon}
        alt=''
        w={{ base: '40px', md: '56px' }}
        h={{ base: '40px', md: '56px' }}
        maxW='none'
        _groupHover={{ filter: 'invert(1)' }}
      />
      <Text fontFamily={designSystem.font1} fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
        {label}
      </Text>
    </Container>
  )
}

export default CategoryCard
