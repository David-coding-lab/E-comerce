import { Box, Text, Image, VStack, HStack, useBreakpointValue, Icon, Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { designSystem } from '../designSystem'
import characterImg from '../assets/Icons/emma.png'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionText = motion(Text)

function DesktopOnlyGate() {
  // Consider lg and above as desktop
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })

  return (
    <AnimatePresence>
      {!isDesktop && (
        <MotionBox
          key="desktop-only-gate"
          minH="100vh"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(to-b, gray.900, gray.800)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <VStack spacing={8} textAlign="center" color="white" px={6}>
            <HStack spacing={4}>
              <MotionImage
                src={characterImg}
                alt="friendly character"
                boxSize={{ base: '90px', sm: '110px' }}
                borderRadius="full"
                shadow="lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{ duration: 0.8, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror', repeatDelay: 0.8 }}
              />

              <MotionBox
                aria-hidden
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <Icon viewBox="0 0 64 64" boxSize={{ base: '64px', sm: '80px' }} color="red.400">
                  <path fill="currentColor" d="M12 4h40a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8z" opacity="0.15" />
                  <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M20 20h24M20 32h24M20 44h24" />
                  <path fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" d="M16 16l32 32" />
                </Icon>
              </MotionBox>
            </HStack>

            <MotionText
              fontFamily={designSystem.font2}
              fontSize={{ base: '24px', sm: designSystem.headingSize2 }}
              fontWeight="extrabold"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              Please use a bigger screen
            </MotionText>

            <MotionText
              maxW="560px"
              fontFamily={designSystem.font1}
              fontSize={{ base: '14px', sm: designSystem.textSize1 }}
              color="whiteAlpha.800"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            >
              This experience is optimized for larger screens. Please switch to a laptop or desktop, or resize your window to continue.
            </MotionText>

            <HStack spacing={3} color="whiteAlpha.800">
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                📱
              </MotionText>
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
              >
                ➜
              </MotionText>
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
              >
                🖥️
              </MotionText>
            </HStack>

            <Button
              as="a"
              href="#"
              variant="solid"
              size="lg"
              bg={designSystem.secondary2}
              _hover={{ opacity: 0.85 }}
            >
              Continue on Desktop
            </Button>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default DesktopOnlyGate
