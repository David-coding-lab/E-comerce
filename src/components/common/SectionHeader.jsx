import { Badge, Flex, Text, VStack } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'

const badgeStyles = {
  bgColor: 'transparent',
  color: designSystem.secondary2,
  textTransform: 'capitalize',
  fontSize: designSystem.textSize1,
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  p: '0',
}

const barStyles = {
  w: '20px',
  h: '40px',
  borderRadius: '5px',
  bgColor: designSystem.secondary2,
}

function SectionHeader({ badgeText, title, rightContent, titleFontWeight = 'bold' }) {
  return (
    <VStack align='stretch' justify='space-between' w='100%' h='auto' gap={{ base: '16px', md: '25px' }}>
      <Badge sx={badgeStyles}>
        <Text sx={barStyles} />
        {badgeText}
      </Badge>
      <Flex
        fontFamily={designSystem.font2}
        fontWeight={titleFontWeight}
        align='center'
        flexWrap='wrap'
        gap={{ base: '16px', md: '0' }}
      >
        <Text
          fontSize={designSystem.headingSize2}
          marginRight={{ base: '0', lg: '87px' }}
          w={{ base: '100%', md: 'auto' }}
          as='h2'
        >
          {title}
        </Text>
        {rightContent}
      </Flex>
    </VStack>
  )
}

export default SectionHeader
