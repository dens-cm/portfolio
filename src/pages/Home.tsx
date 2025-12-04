import React from 'react'
import Header from "@/components/Header"
import Contents from '@/components/Contents'
import { Box, Stack } from "@chakra-ui/react";

export default function Home() {

    const careerRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
    const projectsRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
    const contactRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Box w='100vw' h='100vh' bg='rgba(237, 237, 237, 0.84)'>
            <Stack gap='0' w='100%' h='100%'>
                <Header scrollToCareer={() => scrollTo(careerRef)} scrollToProjects={() => scrollTo(projectsRef)} scrollToContact={() => scrollTo(contactRef)} />
                <Contents careerRef={careerRef} projectsRef={projectsRef} contactRef={contactRef}/>
            </Stack>
        </Box>
    )
}
