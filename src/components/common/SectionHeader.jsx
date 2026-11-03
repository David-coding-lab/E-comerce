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
    <VStack align='stretch' justify='space-between' w='100%' h='110px' gap='25px'>
      <Badge sx={badgeStyles}>
        <Text sx={barStyles} />
        {badgeText}
      </Badge>
      <Flex fontFamily={designSystem.font2} fontWeight={titleFontWeight} align='flex-start'>
        <Text fontSize={designSystem.headingSize2} marginRight='87px' as='h2'>
          {title}
        </Text>
        {rightContent}
      </Flex>
    </VStack>
  )
}

export default SectionHeader
