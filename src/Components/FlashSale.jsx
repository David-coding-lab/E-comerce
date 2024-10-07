import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react"
import { designSystem } from "../App"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import GoodsCard from "./GoodsCard"
import gamePad from '../assets/gamePad.png'
import CtaButtons from "./CtaButtons"
import { useState } from "react"

function FlashSale({allowNavigation, width, buttonContent, sectionTItel, additionalContent, badgeText, cards}) {
    const items = [...cards];
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4; // Number of items to show at a time

        // Function to handle the NextArrow click
    const handleNext = () => {
        setStartIndex((prevIndex) =>
        prevIndex + itemsToShow < items.length ? prevIndex + 1 : 0
    );
    };

        // Function to handle the PreviousArrow click
    const handlePrev = () => {
        setStartIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : items.length - itemsToShow
    );
    };

    // Get the items to display based on the current startIndex
    const visibleItems = items.slice(startIndex, startIndex + itemsToShow);

    function DisplaButton(){
        if(allowNavigation)
            return(
                <>
                    <IconButton onClick={()=> handlePrev()} mr='10px' isRound={true}><ArrowBackIcon /></IconButton>
                    <IconButton onClick={()=> handleNext()} isRound={true}><ArrowForwardIcon /></IconButton>
                </>
            )
            else
                return(
                    <CtaButtons width={width && width} buttonContent={buttonContent && buttonContent} />
                )
    }
    return (
        <Card boxShadow='none'>
            <CardHeader

                w='100%'
                h='110px'
                display='flex'
                flexDir='column'
                justifyContent='space-between'
                gap='25px'
                p='0'
            >


                <Badge

                    bgColor='transparent'
                    textTransform='capitalize'
                    fontSize={designSystem.textSize1}
                    display='flex'
                    alignItems='center'
                    gap='5px'
                    p='0'
                >


                    <Text

                        w='20px'
                        h='40px'
                        borderRadius='5px'
                        bgColor={designSystem.secondary2}></Text>
                    {badgeText}
                </Badge>

                    <Flex

                    fontFamily={designSystem.font2}
                    fontWeight='bold'
                    >

                        <Text

                        fontSize={designSystem.headingSize2}
                        marginRight='87px'
                        as='h1'>{sectionTItel }</Text>

                        {/* additional content on the flex */}
                        {additionalContent}
                        <DisplaButton />
                    </Flex>

            </CardHeader>


            <CardBody

            mt='50px'
            p='0'
            display='flex'
            gap='30px'
            >

            <Box >

                <Box display='flex' overflow='hidden'>
                    {allowNavigation ?
                        visibleItems.map((item, index) => (
                            <Box key={index} style={{ padding: '10px', border: '1px solid black', minWidth: '100px' }}>
                                {item}
                            </Box>
                            )):cards.slice(0, 7)
                    }
                </Box>

        </Box>
            </CardBody>

            <CardFooter justifyContent='center' p='60px' borderBottom='1px solid rgba(84, 84, 88, 0.3)'>

                <CtaButtons width='234px' buttonContent='View All Products'/>
            </CardFooter>
        </Card>
    )
}

export default FlashSale


// <GoodsCard

// discountPercent='-40%'
// cardImage={gamePad}
// cardName='HAVIT HV-G92 Gamepad'
// currentPrice='$120'
// oldPrice='$160'
// rating={300}
// hasBadge = {true}
// />
// <GoodsCard

// discountPercent='-40%'
// cardImage={gamePad}
// cardName='HAVIT HV-G92 Gamepad'
// currentPrice='$120'
// oldPrice='$160'
// rating={300}
// />
// <GoodsCard

// discountPercent='-40%'
// cardImage={gamePad}
// cardName='HAVIT HV-G92 Gamepad'
// currentPrice='$120'
// oldPrice='$160'
// rating={300}
// />
// <GoodsCard

// discountPercent='-40%'
// cardImage={gamePad}
// cardName='HAVIT HV-G92 Gamepad'
// currentPrice='$120'
// oldPrice='$160'
// rating={300}
// />
// <GoodsCard

// discountPercent='-40%'
// cardImage={gamePad}
// cardName='HAVIT HV-G92 Gamepad'
// currentPrice='$120'
// oldPrice='$160'
// rating={300}
// />