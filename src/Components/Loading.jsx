import { Flex, Spinner, Text } from '@chakra-ui/react'
import { designSystem } from '../designSystem'

function Loading() {
    return (
        <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255, 255, 255, 0.7)"
        zIndex="9999"
        flexDirection="column"
        gap="20px"
        >
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={designSystem.secondary2}
            size="xl"
        />
        <Text fontFamily={designSystem.font1} fontSize="lg">
            Loading...
        </Text>
        </Flex>
    )
}

export default Loading
