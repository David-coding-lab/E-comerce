import { Box, Container, Flex, HStack, Icon, IconButton, Image, Text, VStack, createIcon } from '@chakra-ui/react'
import aboutImg from '../assets/about image.png'
import tomCruise from '../assets/Icons/tom.png'
import emmaWatson from '../assets/Icons/emma.png'
import willSmit from '../assets/Icons/will.png'
import twitter from '../assets/Icons/Icon-Twitter.png'
import instagram from '../assets/Icons/icon-instagram.png'
import linkedin from '../assets/Icons/Icon-Linkedin.png'
import customerCare from '../assets/CustomerService.png'
import deliveryCar from '../assets/delivery.png'
import padlocGuard from '../assets/Secure.png'
import { designSystem } from '../App'
function About() {
  const containerStyles = {
    maxW:'270px',
    h:'230px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDir: 'column',
    border:'1px solid rgba(0, 0, 0, 0.3)',
    _hover: {
      bgColor: designSystem.secondary2,
      color: 'white',
      borderColor: 'none'
    }
  }
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


  return (
    <Box w='Flex' display='flex' flexDir='column' p='0' h='auto' mb='140px' ml={designSystem.defaultMargin}>
      <Flex pt='100px' h='auto'>
        <Box display='flex' flexDir='column' justifyContent='center' fontFamily={designSystem.font1}>
          <Text
            fontFamily={designSystem.font2}
            fontSize={designSystem.headingSize1}
            fontWeight='bold'
            mb='40px'
          >Our Story</Text>
          <Text w='525px' mb='24px'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
            with an active presense in Bangladesh. Supported by wide range of tailored marketing,
            data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3
            millioons customers across the region.
          </Text>
          <Text w='525px'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
            offers a diverse assotment in categories ranging  from consumer.
          </Text>
        </Box>
      <Box w='705px' h='609px' ml='auto'>
        <Image src={aboutImg} />
      </Box>
      </Flex>
      <Flex gap='30px' w='flex' h='260px' mt='140px' mr={designSystem.defaultMargin}>


        <Container role='group' sx={containerStyles} >
          <IconButton w='80px' h='80px' borderRadius='50px'>
              <Box display='flex' alignItems='center'justifyContent='center' w='60px' h='60px' borderRadius='50%' bgColor='black'>
                <Icon width="41px" height="40px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.6416 5H27.9883L28.8216 13.3333C28.8216 13.3333 30.4883 15 32.9883 15C34.3006 15.0017 35.5684 14.524 36.5533 13.6567C36.6574 13.5594 36.735 13.4372 36.7787 13.3016C36.8224 13.166 36.8309 13.0214 36.8033 12.8817L35.6266 5.83333C35.5873 5.60049 35.4668 5.38909 35.2865 5.23656C35.1062 5.08404 34.8778 5.00024 34.6416 5V5Z" stroke="white" strokeWidth="2"/>
                <path d="M27.9883 5L28.8216 13.3333C28.8216 13.3333 27.1549 15 24.6549 15C22.1549 15 20.4883 13.3333 20.4883 13.3333V5H27.9883Z" stroke="#FAFAFA" strokeWidth="2"/>
                <path d="M20.4886 5V13.3333C20.4886 13.3333 18.8219 15 16.3219 15C13.8219 15 12.1553 13.3333 12.1553 13.3333L12.9886 5H20.4886Z" stroke="#FAFAFA" strokeWidth="2"/>
                <path d="M12.9883 5H6.3366C6.09993 4.99991 5.87089 5.08377 5.69023 5.23666C5.50957 5.38955 5.38899 5.60157 5.34994 5.835L4.17494 12.8833C4.14747 13.0231 4.15601 13.1676 4.19974 13.3032C4.24348 13.4387 4.32097 13.5609 4.42494 13.6583C4.9716 14.1417 6.19327 15.0017 7.98827 15.0017C10.4883 15.0017 12.1549 13.335 12.1549 13.335L12.9883 5.00167V5Z" stroke="#FAFAFA" strokeWidth="2"/>
                <path d="M5.5 15V31.6667C5.5 32.5507 5.85119 33.3986 6.47631 34.0237C7.10143 34.6488 7.94928 35 8.83333 35H32.1667C33.0507 35 33.8986 34.6488 34.5237 34.0237C35.1488 33.3986 35.5 32.5507 35.5 31.6667V15" stroke="#FAFAFA" strokeWidth="2"/>
                <path d="M25.2217 35V25C25.2217 24.1159 24.8705 23.2681 24.2454 22.6429C23.6202 22.0178 22.7724 21.6666 21.8883 21.6666H18.555C17.671 21.6666 16.8231 22.0178 16.198 22.6429C15.5729 23.2681 15.2217 24.1159 15.2217 25V35" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="16"/>
                </Icon>
              </Box>
          </IconButton>
          <VStack mt='24px' fontFamily={designSystem.font1}>
            <Text fontSize='25px' fontWeight='semibold'>10.5k</Text>
            <Text>Sallers active our site</Text>
          </VStack>
        </Container>


        <Container role='group' sx={containerStyles}>
        <IconButton w='80px' h='80px' borderRadius='50px'>
              <Box display='flex' alignItems='center'justifyContent='center' w='60px' h='60px' borderRadius='50%' bgColor='black'>
                <Icon width="40px" height="40px" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z" stroke="black" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" stroke="black" strokeWidth="2.75px" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="black" strokeWidth="2.75px" strokeLinecap="round" strokeLinejoin="round"/>
                </Icon>
              </Box>
          </IconButton>
          <VStack mt='24px' fontFamily={designSystem.font1}>
            <Text fontSize='25px' fontWeight='semibold'>33k</Text>
            <Text>Mopnthly Produduct Sale</Text>
          </VStack>
        </Container>


        <Container role='group' sx={containerStyles}>
          <IconButton w='80px' h='80px' borderRadius='50px'>
              <Box display='flex' alignItems='center'justifyContent='center' w='60px' h='60px' borderRadius='50%' bgColor='black'>
                <Icon width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3749 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1773 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z" fill="white"/>
                </Icon>
              </Box>
          </IconButton>
          <VStack mt='24px' fontFamily={designSystem.font1}>
            <Text fontSize='25px' fontWeight='semibold'>45.5k</Text>
            <Text>Customer active in our site</Text>
          </VStack>
        </Container>


        <Container sx={containerStyles}>
          <IconButton w='80px' h='80px' borderRadius='50px'>
          <Box display='flex' alignItems='center'justifyContent='center' w='60px' h='60px' borderRadius='50%' bgColor='black'>
              <Icon width="41px" height="40px" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9278 18.1456V18.6456L21.4278 18.6456C22.0916 18.6457 22.739 18.8514 23.281 19.2346C23.8229 19.6178 24.2328 20.1596 24.4541 20.7854C24.4727 20.8382 24.4808 20.8942 24.4778 20.9502C24.4748 21.0062 24.4608 21.0611 24.4366 21.1117C24.4124 21.1624 24.3784 21.2077 24.3367 21.2452C24.295 21.2828 24.2463 21.3117 24.1933 21.3304C24.1404 21.3491 24.0844 21.3571 24.0283 21.3542C23.9723 21.3512 23.9174 21.3372 23.8667 21.313C23.7645 21.2641 23.6858 21.1766 23.6481 21.0697L23.648 21.0695C23.4856 20.6104 23.1849 20.213 22.7873 19.9319C22.3896 19.6509 21.9146 19.5 21.4277 19.5002L20.9278 19.5003V20.0002V23.7092V24.2092H21.4278C22.2789 24.2092 23.0952 24.5473 23.697 25.1491C24.2988 25.7509 24.6369 26.5672 24.6369 27.4183C24.6369 28.2694 24.2988 29.0856 23.697 29.6874C23.0952 30.2892 22.2789 30.6273 21.4278 30.6273H20.9278V31.1273V31.5546H20.0733V31.1273V30.6273L19.5733 30.6273C18.9096 30.6273 18.2621 30.4215 17.7202 30.0383C17.1782 29.6551 16.7684 29.1134 16.5471 28.4876L16.5472 28.4875L16.5422 28.4744C16.5216 28.4211 16.512 28.3642 16.5138 28.3071C16.5156 28.25 16.5289 28.1939 16.5528 28.142C16.5767 28.0901 16.6107 28.0435 16.6529 28.005C16.6952 27.9665 16.7447 27.9369 16.7985 27.9179C16.8524 27.8988 16.9095 27.8908 16.9665 27.8942C17.0236 27.8977 17.0793 27.9125 17.1305 27.9379C17.1817 27.9632 17.2273 27.9986 17.2646 28.0419C17.3019 28.0852 17.3301 28.1355 17.3476 28.1899L17.3499 28.1969L17.3523 28.2039C17.6768 29.1186 18.5484 29.7728 19.5733 29.7728H20.0733V29.2728V25.5637V25.0637H19.5733C18.7222 25.0637 17.906 24.7256 17.3042 24.1238C16.7024 23.522 16.3643 22.7058 16.3643 21.8547C16.3643 21.0036 16.7024 20.1874 17.3042 19.5856C17.906 18.9837 18.7222 18.6456 19.5733 18.6456H20.0733V18.1456V17.7184H20.9278V18.1456ZM20.0733 20.0002V19.5002H19.5733C18.9488 19.5002 18.35 19.7482 17.9084 20.1898C17.4668 20.6314 17.2188 21.2302 17.2188 21.8547C17.2188 22.4792 17.4668 23.078 17.9084 23.5196C18.35 23.9612 18.9488 24.2092 19.5733 24.2092H20.0733V23.7092V20.0002ZM20.9278 29.2728V29.7728H21.4278C22.0523 29.7728 22.6512 29.5247 23.0927 29.0832C23.5343 28.6416 23.7824 28.0427 23.7824 27.4183C23.7824 26.7938 23.5343 26.1949 23.0927 25.7534C22.6512 25.3118 22.0523 25.0637 21.4278 25.0637H20.9278V25.5637V29.2728Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                <path d="M27.7695 12.5772L28.0001 12.8203C29.8981 14.8211 31.4858 17.0948 32.7105 19.5658L32.7115 19.5677C33.9873 22.1703 34.7037 24.8133 34.5867 27.1301L34.5867 27.1301C34.4723 29.3912 33.5716 31.3572 31.5218 32.806L31.5218 32.806C29.4129 34.296 25.9467 35.3336 20.5354 35.3336C15.1198 35.3336 11.6397 34.3141 9.51316 32.8421L9.51293 32.842C7.44943 31.412 6.53763 29.472 6.41014 27.2374L27.7695 12.5772ZM27.7695 12.5772L27.457 12.698M27.7695 12.5772L27.457 12.698M27.457 12.698C23.1083 14.3797 17.8707 14.3798 13.5219 12.6998L13.3417 13.1662L12.9752 12.8262C11.1573 14.7856 9.46566 17.1897 8.25095 19.6929L8.25091 19.6929M27.457 12.698L8.25091 19.6929M8.25091 19.6929C6.98037 22.3123 6.2784 24.9432 6.41013 27.2372L8.25091 19.6929ZM30.3428 6.18139C30.7832 6.39923 31.1642 6.60759 31.4775 6.79428L28.3457 11.3725L28.114 11.7111L28.4009 12.0044C30.3394 13.9861 32.1697 16.5164 33.4805 19.1919C34.7935 21.8721 35.5679 24.6624 35.441 27.1735C35.3151 29.6637 34.3054 31.8863 32.0163 33.5035C29.7051 35.1363 26.0382 36.1881 20.5364 36.1881C15.0332 36.1881 11.3544 35.1551 9.02802 33.5441C6.72448 31.9489 5.6991 29.7543 5.55803 27.2856C5.41571 24.7951 6.17576 22.0153 7.48354 19.3201C8.7889 16.6299 10.6229 14.0598 12.5812 11.9993L12.8589 11.7071L12.6323 11.3738L9.52247 6.79791C9.67984 6.70521 9.8536 6.60746 10.043 6.50656L10.043 6.50656L10.0447 6.50564C10.2353 6.40316 10.4408 6.29767 10.6614 6.19013L10.8573 6.09459C13.1034 5.02401 16.6645 3.80945 20.5364 3.80945C24.4385 3.80945 27.9975 5.04283 30.2165 6.12006L30.3412 6.18057C30.3417 6.18084 30.3423 6.18111 30.3428 6.18139ZM29.7117 7.86178L30.2968 7.00635L29.2631 7.08078C26.6696 7.26751 23.6003 7.87479 20.6554 8.7274C18.6714 9.30056 16.4387 9.21929 14.3339 8.83106C13.8046 8.73294 13.279 8.61613 12.758 8.48086L11.4726 8.14712L12.2188 9.24574L13.9991 11.8671L14.091 12.0024L14.245 12.0572C18.1692 13.4543 22.7996 13.4542 26.7245 12.0592L26.5571 11.588L26.9698 11.8703L29.7117 7.86178ZM14.4877 7.99046L14.4881 7.99055C16.523 8.36535 18.6079 8.42979 20.4168 7.90582L20.4175 7.90561C22.3859 7.33216 24.388 6.88116 26.4122 6.5552L26.4768 5.58279C24.7353 5.05845 22.6905 4.66397 20.5354 4.66397C17.2536 4.66397 14.2063 5.57787 12.08 6.48035L12.2754 6.94061L12.1328 7.41985C12.8897 7.64501 13.6821 7.84132 14.4877 7.99046Z" fill="#FAFAFA" stroke="#FAFAFA"/>
              </Icon>
          </Box>
          </IconButton>
          <VStack mt='24px' fontFamily={designSystem.font1}>
            <Text fontSize='25px' fontWeight='semibold'>25k</Text>
            <Text>Anual gross sale in our site</Text>
          </VStack>
        </Container>
      </Flex>
      <Flex mt='140px' gap='30px' h='auto' justifyContent='center' mr={designSystem.defaultMargin}>
        <Box w='370px' h='570px'>
          <Image src={tomCruise}/>
          <Text mt='32px' fontFamily={designSystem.font2} fontSize='20px' fontWeight='semibold'>Tom Cruise</Text>
          <Text fontFamily={designSystem.font1} fontSize='15px'>Founder & Chairman</Text>
          <HStack>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={twitter} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={instagram} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={linkedin} /></IconButton>
          </HStack>
        </Box>
        <Box w='370px' h='570px'>
          <Image src={emmaWatson}/>
          <Text mt='32px' fontFamily={designSystem.font2} fontSize='20px' fontWeight='semibold'>Tom Cruise</Text>
          <Text fontFamily={designSystem.font1} fontSize='15px'>Founder & Chairman</Text>
          <HStack>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={twitter} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={instagram} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={linkedin} /></IconButton>
          </HStack>
        </Box>
        <Box w='370px' h='570px'>
          <Image src={willSmit}/>
          <Text mt='32px' fontFamily={designSystem.font2} fontSize='20px' fontWeight='semibold'>Tom Cruise</Text>
          <Text fontFamily={designSystem.font1} fontSize='15px'>Founder & Chairman</Text>
          <HStack>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={twitter} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={instagram} /></IconButton>
            <IconButton bgColor='transparent' _hover={{bgColor: 'none'}}><Image src={linkedin} /></IconButton>
          </HStack>
        </Box>
      </Flex>
      <Flex

        mt='166px'
        mr={designSystem.defaultMargin}
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

    </Box>
  )
}

export default About