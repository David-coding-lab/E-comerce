import { Box, Button, Flex, HStack, Image, Img, Text, VStack } from '@chakra-ui/react'
import BannerLinks from './BannerLinks'
import { designSystem } from '../App'
import FlashSale from './FlashSale'
import { Data } from '../data/CardsList'
import GoodsCard from './GoodsCard'
import JblBanner from './JblBanner'
import NewArival from './NewArival'
import customerCare from '../assets/CustomerService.png'
import deliveryCar from '../assets/delivery.png'
import padlocGuard from '../assets/Secure.png'

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

            <NewArival />



            <Flex

            mt='166px'
            width='100'
            bgColor='red'
            justifyContent='center'
            alignItems='center'
            gap='88px'
            h='auto'
            >
                <Box>
                    <Box><Image src={deliveryCar} /></Box>
                    <VStack>
                        <Text>FREE AND FAST DELIVERY</Text>
                        <Text>Free delivery for all orders over $140</Text>
                    </VStack>
                </Box>
                <Box>
                    <Box><Image src={customerCare}/></Box>
                    <VStack>
                        <Text>24/7 CUSTOMER SERVICE</Text>
                        <Text>Friendly 24/7 customer support</Text>
                    </VStack>
                </Box>
                <Box>
                    <Box><Image src={padlocGuard}/></Box>
                    <VStack>
                        <Text>MONEY BACK GUARANTEE</Text>
                        <Text>We reurn money within 30 days</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Home