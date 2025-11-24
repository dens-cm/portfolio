// import React from 'react'

import { Box, Button, HStack } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box w='100%' h='3.5rem' m='.7rem 0 0 0' bg='rgba(255, 255, 255, 0)' display='flex' alignItems='center' justifyContent='center' position='absolute'>
            <HStack h='85%' bg='rgba(255, 255, 255, 0.74)' alignItems='center' justifyContent='center' boxShadow='md' borderRadius='lg'>
                <Button h='70%' ml='.5rem' size='sm' fontSize='.7rem' variant='ghost' borderRadius='lg'>About Me</Button>
                <Button h='70%' size='sm' fontSize='.7rem' variant='ghost' borderRadius='lg'>Career Experience</Button>
                <Button h='70%' size='sm' fontSize='.7rem' variant='ghost' borderRadius='lg'>Skills</Button>
                <Button h='70%' size='sm' fontSize='.7rem' variant='ghost' borderRadius='lg'>Projects</Button>
                <Button h='70%' mr='.5rem' size='sm' fontSize='.7rem' variant='ghost' borderRadius='lg'>Contact</Button>
            </HStack>
        </Box>
    )
}
