import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import BannerLinks from './BannerLinks'
import { designSystem } from '../App'
import FlashSale from './FlashSale'

function Home() {
    const cards = ['fish', 'MAN', 'COW', 'JEFF', 'KEG', 'MONEEY', 'Random', 'things', 'man',]
    return (
        <Box marginInline={designSystem.defaultMargin}>
            <BannerLinks />


            <FlashSale

            badgeText={'Today’s'}
            sectionTItel={'Flash Sales'}
            additionalContent={
                <HStack
                    marginRight='auto'
                    gap='17px'
                    >

                        <VStack><Text fontSize={designSystem.textSize2}>Days</Text><Text fontSize={designSystem.headingSize2}>03</Text></VStack>
                        <Text mt='15px' fontSize={designSystem.headingSize2}>:</Text>
                        <VStack><Text fontSize={designSystem.textSize2}>Hours</Text><Text fontSize={designSystem.headingSize2}>23</Text></VStack>
                        <Text mt='15px' fontSize={designSystem.headingSize2}>:</Text>
                        <VStack><Text fontSize={designSystem.textSize2}>Minutes</Text><Text fontSize={designSystem.headingSize2}>19</Text></VStack>
                        <Text mt='15px' fontSize={designSystem.headingSize2}>:</Text>
                        <VStack><Text fontSize={designSystem.textSize2}>Seconds</Text><Text fontSize={designSystem.headingSize2}>56</Text></VStack>

                    </HStack>
            }
            allowNavigation={true}
            cards={cards}
            />
        </Box>
    )
}

export default Home