import { Badge, Box, Button, Container, Flex, HStack, Icon, createIcon, Image, Img, Text, VStack, Divider } from '@chakra-ui/react'
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
import ProductCliked from './ProductCliked'
import { useState } from 'react'

function Home() {
    const [showProductFullView,setShowProductFullView] = useState(false)
    const [showFullProductDetails,setShowFullProductDetails] = useState({
        productsTitle: '',
        productRating: '',
        productPrice: '',
        produnctImages: [],
        currentImage: '',
        OtherColor: []
    })

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
        noOtherColor={products.noOtherColor}
        OtherColor={products.OtherColor}
        produnctImages={products.produnctImages}
        showFullView = {setShowProductFullView}
        setShowFullProductDetails={setShowFullProductDetails}
        />
    )))
    const footerParentBoxStyles ={
        w:'70px',
        display:'grid',
        placeContent:'center',
        borderRadius:'50%',
        h:'70px',
        bgColor:'rgba(47, 46, 48, 0.3)'
    }
    const footerChildBoxStyles = {
        w:'50px',
        p:'5px',
        borderRadius:'50%',
        bgColor:'black'
    }
    const foterTextStyles={
        mt:'24px',
        fontWeight:'semibold',
        fontSize: designSystem.font1,
        fontFamily:designSystem.font1
    }
    const categoriesContainerStyles ={
        maxW:'170px',
        h:'150px',
        gap:'16px',
        justifyContent:'center',
        border:'1px solid',
        borderRadius:'4px',
        transition:'background-color .2s ease-out, border .3s ease-out',
        _hover: {
                    backgroundColor: designSystem.secondary2,
                    border: 'none',
                    color: 'white'
        }
    }

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
            <Divider mb='70px' />

            <Box mt='80px'>
                <Badge

                    bgColor='transparent'
                    color={designSystem.secondary2}
                    textTransform='capitalize'
                    fontSize={designSystem.textSize1}
                    display='flex'
                    alignItems='center'
                    gap='5px'
                    mb='20px'
                    p='0'
                >


                    <Text

                        w='20px'
                        h='40px'
                        borderRadius='5px'
                        bgColor={designSystem.secondary2}></Text>
                    Categories
                </Badge>
                <Text

                fontSize={designSystem.headingSize2}
                marginRight='87px'
                fontWeight='bold'
                as='h1'
                >Browse By Category</Text>

                <Flex marginBlock='60px' gap='30px'>
                    <Container role='group' centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_901_907)">
                            <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25.6667 7H31.1354" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28 44.0052V44.0305" stroke="inherit" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="inherit" strokeWidth="2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_901_907">
                            <rect width="56px" height="56px" fill="white"/>
                            </clipPath>
                        </defs>
                        </Icon>
                        <Text fontFamily={designSystem.font1}>Phones</Text>
                    </Container>

                    <Container role='group' centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_901_665)">
                            <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.3333 46.6666H39.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 37.3334V46.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M35 37.3334V46.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 32H48" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_901_665">
                            <rect width="56px" height="56px" fill="white"/>
                            </clipPath>
                        </defs>
                    </Icon>
                        <Text>Computers</Text>
                    </Container>

                    <Container role='group' centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_901_681)">
                                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 42V49H35V42" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 14V7H35V14" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="24" y1="23" x2="24" y2="34" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="28" y1="28" x2="28" y2="34" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="32" y1="26" x2="32" y2="34" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_901_681">
                                <rect width="56px" height="56px" fill="white"/>
                                </clipPath>
                            </defs>
                        </Icon>
                        <Text>SmartWatch</Text>
                    </Container>

                    <Container role='group' centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_901_6)">
                                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_901_6">
                                <rect width="56px" height="56px" fill="white"/>
                                </clipPath>
                            </defs>
                        </Icon>
                        <Text>Camera</Text>
                    </Container>

                    <Container role='group' centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_901_696)">
                                <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_901_696">
                                <rect width="56px" height="56px" fill="white"/>
                                </clipPath>
                            </defs>
                        </Icon>
                        <Text>HeadPhones</Text>
                    </Container>

                    <Container role='group'centerContent='true' sx={categoriesContainerStyles}>
                        <Icon width="56px" height="56px" stroke='black' _groupHover={{stroke:'white'}} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_901_848)">
                                <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M35 25.6666V25.6908" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M42 30.3333V30.3574" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_901_848">
                                <rect width="56px" height="56px" fill="white"/>
                                </clipPath>
                            </defs>
                        </Icon>
                        <Text>Gaming</Text>
                    </Container>
                </Flex>
            <Divider mb='70px' />

            <FlashSale

            badgeText={'This Month'}
            sectionTItel={'Best Selling Products'}
            allowNavigation={false}
            cards={products}
            width='190px'
            buttonContent='View All'
            />

            </Box>

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
            pb='114px'
            justifyContent='center'
            alignItems='center'
            gap='88px'
            h='auto'
            >
                <Container centerContent='true'>
                    <Box sx={footerParentBoxStyles}>
                        <Box sx={footerChildBoxStyles}>
                            <Image src={deliveryCar} />
                        </Box>
                    </Box>
                    <VStack>
                        <Text sx={foterTextStyles}>FREE AND FAST DELIVERY</Text>
                        <Text>Free delivery for all orders over $140</Text>
                    </VStack>
                </Container>
                <Container centerContent='true'>
                    <Box sx={footerParentBoxStyles}>
                        <Box sx={footerChildBoxStyles}><Image src={customerCare}/></Box>
                    </Box>
                    <VStack>
                        <Text sx={foterTextStyles}>24/7 CUSTOMER SERVICE</Text>
                        <Text>Friendly 24/7 customer support</Text>
                    </VStack>
                </Container>
                <Container centerContent='true'>
                    <Box sx={footerParentBoxStyles}>
                        <Box sx={footerChildBoxStyles}><Image src={padlocGuard}/></Box>
                    </Box>
                    <VStack>
                        <Text sx={foterTextStyles}>MONEY BACK GUARANTEE</Text>
                        <Text>We reurn money within 30 days</Text>
                    </VStack>
                </Container>
            </Flex>

            {showProductFullView &&<ProductCliked showFullProductDetails={showFullProductDetails} setShowProductFullView={setShowProductFullView}/>}

        </Box>
    )
}

export default Home