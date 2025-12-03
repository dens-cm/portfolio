// import React from 'react'

import { Box, Button, HStack } from "@chakra-ui/react"
import { BiSolidBarChartAlt2, BiSolidFolderOpen, BiSolidEnvelope } from "react-icons/bi"

export default function Header() {
    return (
        <Box zIndex='1' w='100%' h='3.4rem' bg='white' display='flex' alignItems='center' justifyContent='center' position='absolute' boxShadow='sm'>
            <HStack h='100%' display={{ base: 'none', sm: 'flex' }}>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidBarChartAlt2/> Career Experience</Button>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidFolderOpen/> Professional Projects</Button>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidEnvelope/> Contact</Button>
            </HStack>
            <HStack h='100%' display={{ base: 'flex', sm: 'none' }}>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidBarChartAlt2/> Experience</Button>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidFolderOpen/> Projects</Button>
                <Button h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidEnvelope/> Contact</Button>
            </HStack>
        </Box>
    )
}
