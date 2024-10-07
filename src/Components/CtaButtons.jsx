import { Button } from '@chakra-ui/react'
import React from 'react'
import { designSystem } from '../App'

function CtaButtons({width, buttonContent}) {
    return (
        <Button
        w={width}
        h='56px'
        borderRadius='4px'
        bgColor={designSystem.secondary2}
        color='white'
        fontFamily={designSystem.font1}
        fontWeight='normal'
        _hover={{
            backgroundColor: 'rgba(219, 68, 68, 0.68)'
        }}
        >{buttonContent}</Button>
    )
}

export default CtaButtons