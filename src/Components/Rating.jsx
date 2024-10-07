import { Box, HStack, Image } from "@chakra-ui/react"
import fullStar from '../assets/Icons/star.svg'
import emptyStar from '../assets/Icons/emptystar.png'


function Rating({rating}) {
        const totalStars = 5; // Assuming a 5-star rating system
        // Generate stars
        const stars = Array.from({ length: totalStars }, (v, i) => (
            <Image
                key={i}
                src={i < rating/50 ? fullStar : emptyStar}
                alt={i < rating/50 ? 'full star' : 'empty star'}
            />
        ))
    return (
        <Box display='flex'>
            <HStack>
                {stars}
            </HStack>
            ({rating})
        </Box>
    )
}

export default Rating