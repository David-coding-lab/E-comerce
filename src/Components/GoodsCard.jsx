import { Badge, Box, Button, Card, CardBody, CardFooter, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Rating from './Rating'
import { designSystem } from '../App'
import favorite from '../assets/Icons/Wishlist.png'
import eye from '../assets/Icons/Cart1.png'
import { useState } from 'react'
import Like from './Like'
function GoodsCard({cardImage,discountPercent,cardName,currentPrice,oldPrice,rating, hasBadge, BadgeColor, noOtherColor,OtherColor,showFullView,setShowFullProductDetails, produnctImages}) {
    const [currentActiveImage,setCurrentActiveImage] = useState(cardImage)
    const buttonStyle = {
        w: '50px',
        h: '50px',
        borderRadius: '50%',
        bgColor: 'white',
        marginRight: '10px'
    }
    return (
        <Card

        w='280px'
        h='360px'
        boxShadow='none'
        borderRadius='0'
        fontFamily={designSystem.font1}
        mb='20px'
        >
            <CardBody

            display='flex'
            position='relative'
            width='100%'
            h='250px'
            p='0'
            role='group'
            >
                <Box
                    onClick={()=> {
                        showFullView(true)
                        setShowFullProductDetails(prevDetails => ({
                            ...prevDetails,
                            productsTitle: cardName,
                            productRating: rating,
                            productPrice: currentPrice,
                            currentImage: cardImage,
                            OtherColor: OtherColor,
                            produnctImages: [...produnctImages]
                        }))}
                    }
                w= '100%'
                h='250px'
                backgroundColor={designSystem.secondary}
                display='flex'
                justifyContent='center'
                alignItems='center'
                cursor='pointer'
                >
                    <Image

                    w='170px'
                    h='152px'
                    objectFit='contain'
                    src={currentActiveImage} alt='card'
                    cursor='pointer'
                    zIndex='1'
                    onClick={()=> {
                        showFullView(true)
                        setShowFullProductDetails(prevDetails => ({
                            ...prevDetails,
                            productsTitle: cardName,
                            productRating: rating,
                            productPrice: currentPrice,
                            currentImage: cardImage,
                            OtherColor: OtherColor,
                            produnctImages: [...produnctImages]
                        }))}
                    }
                    />
                </Box>
                <Button
                w='100%'
                h='41px'
                borderRadius='0'
                top={noOtherColor ? '80%' : '83%'}
                color='white'
                bgColor='black'
                fontWeight='normal'
                visibility='hidden'
                opacity='0'
                position='absolute'
                transition='visibility .5s ease-in-out opacity .5s ease-in-out'
                _hover={{bgColor:'#454444'}}
                _groupHover={
                    {
                        visibility: 'visible',
                        opacity: '1'
                    }
                }
                >Add to Cart</Button>
                <Box

                display='flex'
                justifyContent='space-between'
                justifyItems='center'
                position='absolute'
                width='100%'
                pt='15px'
                >
                    {hasBadge &&
                        <Badge

                        marginTop='10px'
                        marginLeft='10px'
                        bgColor={BadgeColor==='designSystem.secondary2' ? designSystem.secondary2 : designSystem.secondary3}
                        color='white'
                        fontWeight='normal'
                        h='26px'
                        w='55px'
                        display='grid'
                        placeContent='center'
                        >{discountPercent}
                    </Badge>}

                    <VStack>
                    <Like />
                    <Button

                    sx={buttonStyle}
                    ><Image src={eye} alt='icon'/></Button>
                    </VStack>
                </Box>
            </CardBody>
            <CardFooter

            display='block'
            p='0'
            pb='15px'
            >
                <Text mb='5px'>{cardName}</Text>


                <HStack mb='5px'>

                    <Text>{currentPrice}</Text>
                    {oldPrice && <Text as='s'>{oldPrice}</Text>}
                </HStack>

                    <Rating rating={rating} />

                    {
                        !noOtherColor &&
                        <Flex gap='20px'>
                            <Box
                            bgColor={designSystem.secondary2}
                            borderRadius='50%'
                            border='1px solid black'
                            cursor='pointer'
                            w='20px'
                            onClick={()=> setCurrentActiveImage(cardImage)}
                            h='20px'></Box>
                            <Box
                            bgColor='#F5F5F5'
                            borderRadius='50%'
                            border='1px solid black'
                            cursor='pointer'
                            w='20px'
                            h='20px'
                            onClick={()=> setCurrentActiveImage(OtherColor[0])}
                            ></Box>
                        </Flex>
                    }
            </CardFooter>
        </Card>
    )
}

export default GoodsCard