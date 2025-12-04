// import React from 'react'

import { Box, Button, HStack } from "@chakra-ui/react"
import { BiSolidBarChartAlt2, BiSolidFolderOpen, BiSolidEnvelope } from "react-icons/bi"

interface HeaderProps {
    scrollToCareer: () => void
    scrollToProjects: () => void
    scrollToContact: () => void
}

export default function Header({ scrollToCareer, scrollToProjects, scrollToContact }: HeaderProps) {
    return (
        <Box zIndex='1' w='100%' h='3.4rem' bg='white' display='flex' alignItems='center' justifyContent='center' position='absolute' boxShadow='sm'>
            <HStack h='100%' display={{ base: 'none', sm: 'flex' }}>
                <Button onClick={scrollToCareer} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidBarChartAlt2 /> Career Experience</Button>
                <Button onClick={scrollToProjects} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidFolderOpen /> Professional Projects</Button>
                <Button onClick={scrollToContact} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidEnvelope /> Contact</Button>
            </HStack>
            <HStack h='100%' display={{ base: 'flex', sm: 'none' }}>
                <Button onClick={scrollToCareer} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidBarChartAlt2 /> Experience</Button>
                <Button onClick={scrollToProjects} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidFolderOpen /> Projects</Button>
                <Button onClick={scrollToContact} h='70%' size='sm' fontSize='.8rem' fontWeight='bold' variant='ghost' borderRadius='xl'><BiSolidEnvelope /> Contact</Button>
            </HStack>
        </Box>
    )
}
