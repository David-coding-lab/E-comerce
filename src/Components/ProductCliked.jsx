import {
    Container,
    Box,
    Image,
    Flex,
    VStack,
    Text,
    Divider,
    HStack,
    Button,
    createIcon,
    Icon,
    CloseButton
} from '@chakra-ui/react'
import Rating from './Rating'
import { designSystem } from '../App'
import FastDeliveryIcon from '../assets/Icons/icon-delivery.png'
import ReturnIcon from '../assets/Icons/Icon-return.png'
import { useState } from 'react'
import Like from './Like'
function ProductCliked({showFullProductDetails,setShowProductFullView}) {

    const [productAmountToBePurchased,setProductAmountToBePurchased] = useState(0)
    const [currentProductImage,setCurrentProductImage] = useState(showFullProductDetails.currentImage)


    const buttonStylesMath= {
        fontWeight:'black',
        cursor:'pointer',
        borderRight: '1px solid rgba(0, 0, 0, 0.5)',
        bgColor: 'none'
    }
console.log(currentProductImage);


    return (
        <>
            <Box

            onClick={()=>setShowProductFullView(false)}
            position= 'fixed'
            top= '0'
            left= '0'
            width= '100vw'
            height= '100vh'
            backgroundColor= 'rgba(0, 0, 0, 0.5)'
            zIndex= '1'></Box>
            <Flex
            top='50%' left='50%' transform='translate(-50%,-50%)' position='fixed' zIndex='10'
            backgroundColor='white'
            w='90vw'
            p='20px'
            border='1px solid rgba(0, 0, 0, 0.5)'
            borderRadius='10px'
            >
                    <Container maxW='fit-content' m='0'>
                        <Box
                        h='160px'
                        w='170px'
                        display='grid'
                        placeContent='center'
                        cursor='pointer'
                        mb='16px'
                        bgColor='#F5F5F5'

                        onClick={()=> setCurrentProductImage(showFullProductDetails.produnctImages[0])}
                        >
                            <Image src={showFullProductDetails.produnctImages[0]}/>
                        </Box>

                        <Box
                        h='160px'
                        w='170px'
                        display='grid'
                        placeContent='center'
                        cursor='pointer'
                        mb='16px'
                        bgColor='#F5F5F5'

                        onClick={()=> setCurrentProductImage(showFullProductDetails.produnctImages[1])}
                        >
                            <Image src={showFullProductDetails.produnctImages[1]}/>
                        </Box>

                        <Box
                        h='160px'
                        w='170px'
                        display='grid'
                        placeContent='center'
                        cursor='pointer'
                        mb='16px'
                        bgColor='#F5F5F5'

                        onClick={()=> setCurrentProductImage(showFullProductDetails.produnctImages[2])}
                        >
                            <Image src={showFullProductDetails.produnctImages[2]}/>
                        </Box>

                        <Box
                        h='160px'
                        w='170px'
                        display='grid'
                        placeContent='center'
                        cursor='pointer'
                        mb='16px'
                        bgColor='#F5F5F5'

                        onClick={()=> setCurrentProductImage(showFullProductDetails.produnctImages[3])}
                        >
                            <Image src={showFullProductDetails.produnctImages[3]}/>
                        </Box>


                    </Container>
                    <Container maxW='50vw' h='700px' bgColor='#F5F5F5' ml='10px' display='flex' justifyContent='center' alignItems='center'>
                        <Image w='50%' objectFit='cover' src={currentProductImage}/>
                    </Container>


                    <Box ml='70px'>
                        <Box>
                        <Text fontSize={designSystem.headingSize1} fontWeight='semibold'>{showFullProductDetails.productsTitle}</Text>
                        <HStack><Rating rating={showFullProductDetails.productRating} textColor={'rgba(0, 0, 0, 0.5)'}/> <Text color='black'> | </Text> <Text color={designSystem.secondary3}> In Stock</Text></HStack>
                        <Text fontSize='24px' mt='16px'>{showFullProductDetails.productPrice}</Text>
                        <Text fontFamily={designSystem.font1} fontSize={designSystem.font2} mt='24px'>
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive
                        </Text>
                    </Box>


                        <Divider mt='24px' />


                        <Box>


                            <HStack mt='24px' gap='24px'>
                                <Text fontFamily={designSystem.font1} >Colors: </Text>
                                <HStack>
                                    <Box
                                        bgColor={designSystem.secondary2}
                                        borderRadius='50%'
                                        border='1px solid black'
                                        cursor='pointer'
                                        w='20px'
                                        onClick={()=> setCurrentProductImage(showFullProductDetails.currentImage)}
                                        h='20px'></Box>
                                        {showFullProductDetails.OtherColor.length > 0 &&
                                            <Box
                                                bgColor='#F5F5F5'
                                                borderRadius='50%'
                                                border='1px solid black'
                                                cursor='pointer'
                                                w='20px'
                                                h='20px'
                                                onClick={()=> setCurrentProductImage(showFullProductDetails.OtherColor[0])}
                                            ></Box>}
                                </HStack>


                            </HStack>


                            <HStack gap='24px' mt='30px'>

                                <Text fontFamily={designSystem.font2} fontWeight='semibold'>Size: </Text>
                                <HStack>
                                    <Box w='32px' h='32px' border='1px solid rgba(0, 0, 0, 0.5)' display='grid' placeContent='center' borderRadius='4px'
                                    _hover={{
                                        backgroundColor: designSystem.secondary2,
                                        borderColor: designSystem.secondary2,
                                        color: 'white'
                                    }}
                                    >XS</Box>
                                    <Box w='32px' h='32px' border='1px solid rgba(0, 0, 0, 0.5)' display='grid' placeContent='center' borderRadius='4px'
                                    _hover={{
                                        backgroundColor: designSystem.secondary2,
                                        borderColor: designSystem.secondary2,
                                        color: 'white'
                                    }}
                                    >S</Box>
                                    <Box w='32px' h='32px' border='1px solid rgba(0, 0, 0, 0.5)' display='grid' placeContent='center' borderRadius='4px'
                                    _hover={{
                                        backgroundColor: designSystem.secondary2,
                                        borderColor: designSystem.secondary2,
                                        color: 'white'
                                    }}
                                    >M</Box>
                                    <Box w='32px' h='32px' border='1px solid rgba(0, 0, 0, 0.5)' display='grid' placeContent='center' borderRadius='4px'
                                    _hover={{
                                        backgroundColor: designSystem.secondary2,
                                        borderColor: designSystem.secondary2,
                                        color: 'white'
                                    }}
                                    >L</Box>
                                    <Box w='32px' h='32px' border='1px solid rgba(0, 0, 0, 0.5)' display='grid' placeContent='center' borderRadius='4px'
                                    _hover={{
                                        backgroundColor: designSystem.secondary2,
                                        borderColor: designSystem.secondary2,
                                        color: 'white'
                                    }}
                                    >XL</Box>

                                </HStack>


                            </HStack>


                            <HStack mt='24px'>

                                <Flex w='160px' h='44px' borderRadius='4px' border='1px solid rgba(0, 0, 0, 0.5)'>
                                    <Text w='40px' pl='15px' pt='3px' sx={buttonStylesMath}
                                        onClick={()=> setProductAmountToBePurchased(preValue=>((
                                            preValue > 0 && preValue - 1
                                        )))}
                                    >_</Text>
                                    <Text display='flex' alignItems='center' justifyContent='center' w='80px' sx={buttonStylesMath}>{productAmountToBePurchased}</Text>
                                    <Text display='flex' alignItems='center' justifyContent='center' color='white' bg='#DB4444' w='40px' sx={buttonStylesMath}
                                        onClick={()=>setProductAmountToBePurchased(prevValue=> prevValue + 1)}
                                    >+</Text>
                                </Flex>
                                <Button
                                    bg={designSystem.secondary2}
                                    w='150px'
                                    borderRadius= '4px'
                                    color='white'
                                    _hover={{opacity: .8}}
                                >Buy Now</Button>
                                <Like />


                            </HStack>


                            <Container
                                width='420px'
                                display='grid'
                                placeContent='center'
                                h='180px'
                                border='1px solid rgba(0, 0, 0, 0.5)'
                                fontFamily={designSystem.font1}
                                fontSize='14px'
                                gap='16px'
                                m='0'
                                mt='40px'
                                p='0'
                                borderRadius='4px'>


                                <HStack>
                                    <Image src={FastDeliveryIcon}/>
                                    <Box>
                                        <Text fontWeight='medium' fontSize='16px'>Free Delivery</Text>
                                        <Text textDecor='underline'>Enter your postal code for Delivery Availability</Text>
                                    </Box>
                                </HStack>
                                <Divider />
                                <HStack>

                                    <Image src={ReturnIcon}/>
                                    <Box>
                                        <Text fontWeight='medium' fontSize='16px'>Return Delivery</Text>
                                        <Text>Free 30 Days Delivery Returns. Details</Text>
                                    </Box>
                                </HStack>
                            </Container>
                        </Box>
                    </Box>

                    <CloseButton onClick={()=>setShowProductFullView(false)} />
            </Flex>
        </>
    )
}

export default ProductCliked