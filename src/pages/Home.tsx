import React from 'react'
import Header from "@/components/Header"
import Contents from '@/components/Contents'
import { Box, Stack } from "@chakra-ui/react"
import { useColorModeValue } from '@/components/ui/color-mode'

export default function Home() {
  const workRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  const projectsRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  const contactRef = React.useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Deep slate background colors for the ultimate high-fidelity theme feel
  const bg = useColorModeValue('#F8FAFC', '#0B0F19')

  return (
    <Box w="100vw" h="100vh" bg={bg} overflow="hidden" transition="background 0.3s ease">
      <Stack gap="0" w="100%" h="100%">
        <Header 
          scrollToWork={() => scrollTo(workRef)} 
          scrollToProjects={() => scrollTo(projectsRef)} 
          scrollToContact={() => scrollTo(contactRef)} 
        />
        <Contents 
          workRef={workRef} 
          projectsRef={projectsRef} 
          contactRef={contactRef}
        />
      </Stack>
    </Box>
  )
}
