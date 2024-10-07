import { Badge, Box, Button, Card, CardBody, CardFooter, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Rating from './Rating'
import { designSystem } from '../App'
import favorite from '../assets/Icons/Wishlist.png'
import eye from '../assets/Icons/Cart1.png'
function GoodsCard({cardImage,discountPercent,cardName,currentPrice,oldPrice,rating}) {
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
        >
            <CardBody

            display='flex'
            position='relative'
            width='100%'
            h='250px'
            p='0'
            >
                <Box

                w= '100%'
                h='250px'
                backgroundColor={designSystem.secondary}
                display='flex'
                justifyContent='center'
                alignItems='center'
                >
                    <Image

                    w='170px'
                    h='152px'
                    src={cardImage} alt='card'
                    />
                </Box>
                <Box

                display='flex'
                justifyContent='space-between'
                justifyItems='center'
                position='absolute'
                width='100%'
                pt='15px'
                >
                    <Badge

                    marginTop='10px'
                    marginLeft='10px'
                    bgColor={designSystem.secondary2}
                    color='white'
                    fontWeight='normal'
                    h='26px'
                    w='55px'
                    display='grid'
                    placeContent='center'
                    >{discountPercent}</Badge>
                    <VStack>
                    <Button

                    sx={buttonStyle}
                    ><Image src={favorite} alt='icon'/></Button>
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
                    <Text as='s'>{oldPrice}</Text>
                </HStack>

                    <Rating rating={rating} />
            </CardFooter>
        </Card>
    )
}

export default GoodsCard