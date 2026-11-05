import { HStack, Text, VStack } from '@chakra-ui/react'
import { designSystem } from '../../styles/theme'

const units = [
  { label: 'Days', value: '03' },
  { label: 'Hours', value: '23' },
  { label: 'Minutes', value: '19' },
  { label: 'Seconds', value: '56' },
]

function Countdown() {
  return (
    <HStack marginRight='auto' gap={{ base: '8px', md: '17px' }}>
      {units.map((unit, index) => (
        <HStack key={unit.label} gap={{ base: '8px', md: '17px' }}>
          {index > 0 && (
            <Text mt={{ base: '10px', md: '15px' }} fontSize={designSystem.headingSize2}>
              :
            </Text>
          )}
          <VStack>
            <Text fontSize={designSystem.textSize2}>{unit.label}</Text>
            <Text fontSize={designSystem.headingSize2}>{unit.value}</Text>
          </VStack>
        </HStack>
      ))}
    </HStack>
  )
}

export default Countdown
