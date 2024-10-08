import { Box, Button, Text, HStack, Image, Container, border } from "@chakra-ui/react"
import jblimage from '../assets/jblimage.png'
import { designSystem } from "../App"

function JblBanner() {
    const timerStyles = {
        w:'67px',
        h:'67px',
        borderRadius:'50%',
        backgroundColor:'#FF0000',
        display: 'grid',
        placeContent: 'center',
        bgColor: 'white'
    }
    return (
        <Container

        display='flex'
        mt='140px'
        mb='71px'
        bgColor='#000000'
        maxW='100vw'
        h='420px'
        alignItems='center'
        position='relative'
        fontFamily={designSystem.font1}
        >
            <Box

            ml='56px'>
                <Text

                color={designSystem.secondary3}
                >Categories</Text>
                <Text

                as='h1'
                marginBlock='32px'
                color='white'
                letterSpacing='2px'
                fontFamily={designSystem.font2}
                fontSize={designSystem.headingSize1}
                fontWeight='bold'>Enhance Your <br /> Music Experience</Text>
                <HStack fontFamily={designSystem.font1} gap='15px'>
                    <Box sx={timerStyles}>
                        <Text textAlign='center' fontSize='12px' fontWeight='medium'>23 <br /> Hours</Text>
                    </Box>
                    <Box sx={timerStyles}>
                        <Text textAlign='center' fontSize='12px' fontWeight='medium'>05 <br /> Days</Text>
                    </Box>
                    <Box sx={timerStyles}>
                        <Text textAlign='center' fontSize='12px' fontWeight='medium'>59 <br /> Minutes</Text>
                    </Box>
                    <Box sx={timerStyles}>
                        <Text textAlign='center' fontSize='12px' fontWeight='medium'>35 <br /> Seconds</Text>
                    </Box>
                </HStack>
                <Button

                fontWeight='medium'
                mt='40px'
                w='171px'
                h='56px'
                bgColor={designSystem.secondary3}
                color='white'
                _hover={{
                    backgroundColor: '#00A843'
                }}
                >Buy Now</Button>
            </Box>
                <Box

                position='absolute'
                w='460px'
                h='460px'
                bgColor='#D9D9D9'
                opacity='20%'
                filter='blur(20px)'
                left='60%'
                borderRadius='50%'
                ></Box>
                <Image

                zIndex='1'
                w='650px'
                ml='auto'
                src={jblimage}
                alt='JBL' />
        </Container>
    )
}

export default JblBanner