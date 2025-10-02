import { Box, Flex, VStack, Image, Input, Text, Button, IconButton, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import phone from '../assets/Icons/dl.beatsnoop 1.png'
import google from '../assets/Icons/Icon-Google.png'
import { designSystem } from '../designSystem'
import { account,  ID } from '../lib/appwrite'

function SignUp() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  console.log(loggedInUser);

  async function login(email, password) {
    await account.createEmailPasswordSession({
        email,
        password
    });
    setLoggedInUser(await account.get());
  }





  const [signUp,setSignUp] = useState(true)
  return (
    <Flex mt='60px' mb='140px' mr={designSystem.defaultMargin}>

      <Box w='805px' h='700px'><Image src={phone}/></Box>

      {
        signUp ?
        <Box m='auto' ml='129px'>

          <Text fontFamily={designSystem.font1} fontSize='30px' fontWeight='medium' mb='10px'>Create an account</Text>
          <Text mb='48px'>Enter your details below</Text>
          <VStack gap='40px'>

            <Input
              w='400px'
              border='0'
              borderBottom='1px solid rgba(0, 0, 0, 0.5)'
              borderRadius='0'
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)} 
            />

            <Input
              w='400px'
              border='0'
              borderBottom='1px solid rgba(0, 0, 0, 0.5)'
              borderRadius='0'
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              w='400px'
              border='0'
              borderBottom='1px solid rgba(0, 0, 0, 0.5)'
              borderRadius='0'
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

          </VStack>
          <VStack gap='16px' mt='40px' fontFamily={designSystem.font1}>
            <Button
              w='350px'
              h='56px'
              borderRadius='4px'
              color='white'
              bgColor={designSystem.secondary2}
              fontWeight='normal'
              _hover={{
                opacity: .8
              }}
              onClick={async () => {
                await account.create({
                    userId: ID.unique(),
                    email,
                    password,
                    name
                });
                login(email, password);
              }}
            >Create Account</Button>
            <Button
              w='350px'
              h='56px'
              borderRadius='4px'
              fontWeight='normal'
            ><IconButton bgColor='transparent' _hover={{bgColor: 'transparent'}}><Image src={google}/></IconButton> Sign up with Google</Button>
            <HStack cursor='pointer' onClick={()=> setSignUp(false)}><Text>Already have account?</Text> <Text textDecor='underline'>Login</Text></HStack>
          </VStack>

        </Box>:
        
        <Box m='auto' ml='129px'>

          <Text fontFamily={designSystem.font1} fontSize='30px' fontWeight='medium' mb='10px'>Log in to Exclusive</Text>
          <Text mb='48px'>Enter your details below</Text>
          <VStack mb='40px' alignItems='start' gap='40px'>
            <Input w='400px' border='0' borderBottom='1px solid rgba(0, 0, 0, 0.5)' borderRadius='0' placeholder='Email or Phone Number'/>
            <Input w='400px' border='0' borderBottom='1px solid rgba(0, 0, 0, 0.5)' borderRadius='0' type='password' placeholder='Password'/>
          </VStack>
          <HStack>
            <Button
                w='150px'
                h='56px'
                borderRadius='4px'
                color='white'
                bgColor={designSystem.secondary2}
                fontWeight='normal'
                mr='auto'
                _hover={{
                  opacity: .8
                }}
                onClick={() => login(email, password)}
              >Log In</Button>
              <Button
                w='140px'
                h='56px'
                bgColor='transparent'
                borderRadius='4px'
                fontWeight='normal'
                color={designSystem.secondary2}
                _hover={{bgColor: 'none'}}
              >Forget Password?</Button>
          </HStack>
          <HStack cursor='pointer' mt='24px' justifyContent='center' onClick={()=> setSignUp(true)}>
            <Text>Do not have an account?</Text> <Text textDecor='underline'>Sign Up</Text>
          </HStack>
        </Box>
      }

      {
        <p>
          {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>
      }

    </Flex>
  )
}

export default SignUp