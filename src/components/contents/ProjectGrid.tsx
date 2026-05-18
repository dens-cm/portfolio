import React from 'react'
import { 
  Box, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Grid,
  Button,
  Skeleton
} from "@chakra-ui/react"
import { BiSolidFolderOpen, BiLinkExternal } from "react-icons/bi"
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface ProjectGridProps {
  loading: boolean
  data: PortfolioData
  projectsRef: React.RefObject<HTMLDivElement | null>
  cardBg: string
  cardBorder: string
  borderLine: string
  textMuted: string
  getAssetUrl: (url: string | null | undefined) => string
}

export default function ProjectGrid({
  loading,
  data,
  projectsRef,
  cardBg,
  cardBorder,
  borderLine,
  textMuted,
  getAssetUrl
}: ProjectGridProps) {
  return (
    <Skeleton loading={loading} variant="pulse" borderRadius="3xl" height="100%">
      <Box 
        ref={projectsRef}
        style={{ scrollMarginTop: '5rem' }}
        bg={cardBg} 
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="3xl"
        p={{ base: "1.8rem", md: "2.5rem" }}
        boxShadow="md"
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(59, 130, 246, 0.25)" }}
        display="flex"
        flexDir="column"
        height="100%"
      >
        <Heading fontSize="1.15rem" fontWeight="900" display="flex" alignItems="center" gap="2.5" textTransform="uppercase" fontFamily="'Outfit', sans-serif" mb="1.5rem">
          <BiSolidFolderOpen size="1.3rem" color="#3B82F6" /> Featured Projects
        </Heading>

        {/* Grid of Interactive Project Cards */}
        <Grid className="project-grid" templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }} gap="1.2rem" flex="1">
          {data.projects.map((proj, idx) => {
            const logoSrc = getAssetUrl(proj.logo_url)
            return (
              <Box 
                className="project-card"
                key={idx}
                p="1.5rem"
                borderRadius="2xl"
                border="1px solid"
                borderColor={borderLine}
                bg="rgba(255,255,255,0.01)"
                _hover={{ 
                  transform: "translateY(-3px)", 
                  borderColor: "blue.400",
                  bg: "rgba(255,255,255,0.02)"
                }}
                transition="all 0.25s ease"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
                height="100%"
              >
                <Stack gap="3.5">
                  <Box display="flex" alignItems="center" gap="3">
                    <Image 
                      src={logoSrc} 
                      alt={proj.name} 
                      w="2.2rem" 
                      h="2.2rem" 
                      borderRadius="lg" 
                      objectFit="contain" 
                      bg="white" 
                      p="1"
                      border="1px solid"
                      borderColor="gray.200"
                    />
                    <Heading fontSize="0.9rem" fontWeight="extrabold">
                      {proj.name}
                    </Heading>
                  </Box>
                  
                  <Text fontSize="0.78rem" color={textMuted} lineHeight="tall">
                    {proj.description}
                  </Text>
                </Stack>

                <Box mt="1.2rem" display="flex" justifyContent="flex-end">
                  <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className="no-print"
                      size="xs" 
                      variant="subtle" 
                      colorPalette="blue"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      gap="1"
                      fontSize="0.75rem"
                      fontWeight="bold"
                    >
                      Launch Demo <BiLinkExternal />
                    </Button>
                  </a>
                </Box>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Skeleton>
  )
}
