import { Box, HStack, Image, Text } from '@chakra-ui/react'
import fullStar from '../../assets/Icons/star.svg'
import emptyStar from '../../assets/Icons/emptystar.png'

const TOTAL_STARS = 5

function Rating({ rating, textColor }) {
  return (
    <Box display='flex'>
      <HStack>
        {Array.from({ length: TOTAL_STARS }, (_, index) => {
          const isFilled = index < rating / 30

          return (
            <Image
              key={index}
              src={isFilled ? fullStar : emptyStar}
              alt={isFilled ? 'full star' : 'empty star'}
            />
          )
        })}
      </HStack>
      <Text ml='5px' color={textColor}>
        ({rating})
      </Text>
    </Box>
  )
}

export default Rating
