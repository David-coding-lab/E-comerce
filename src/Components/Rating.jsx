import { Box, HStack, Image, Text } from "@chakra-ui/react"
import fullStar from '../assets/Icons/star.svg'
import emptyStar from '../assets/Icons/emptystar.png'
import { color } from "framer-motion";


function Rating({rating,textColor}) {
        const totalStars = 5; // Assuming a 5-star rating system
        // Generate stars
        const stars = Array.from({ length: totalStars }, (v, i) => (
            <Image
                key={i}
                src={i < rating/30 ? fullStar : emptyStar}
                alt={i < rating/30 ? 'full star' : 'empty star'}
            />
        ))
    return (
        <Box display='flex'>
            <HStack>
                {stars}
            </HStack>
            <Text ml='5px' color={textColor && textColor}>({rating})</Text>
        </Box>
    )
}

export default Rating