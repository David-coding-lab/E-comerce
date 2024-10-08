import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import BannerLinks from './BannerLinks'
import { designSystem } from '../App'
import FlashSale from './FlashSale'
import { Data } from '../data/CardsList'
import GoodsCard from './GoodsCard'
import JblBanner from './JblBanner'

function Home() {
    const products = Data.map((products,index) =>((
        <GoodsCard

        key={index}
        discountPercent={products.discountPercent}
        cardImage={products.cardImage}
        cardName={products.cardName}
        currentPrice={products.currentPrice}
        oldPrice={products.oldPrice}
        rating={products.rating}
        hasBadge = {products.hasBadge}
        BadgeColor={products.BadgeColor}
        />
    )))

    return (
        <Box marginInline={designSystem.defaultMargin}>
            <BannerLinks />

        {/*re-usable component  */}
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
            cards={products}
            />

            <JblBanner />

            <FlashSale

            badgeText={'Our Products'}
            sectionTItel={'Explore Our Projects'}
            allowNavigation={false}
            buttonContent='View All Products'
            width='200px'
            cards={products}
            />
        </Box>
    )
}

export default Home