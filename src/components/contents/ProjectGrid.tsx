import React from 'react'
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Skeleton
} from "@chakra-ui/react"
import { BiSolidFolderOpen, BiLinkExternal } from "react-icons/bi"
import type { PortfolioData } from '@/hooks/usePortfolioData'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
  textMuted,
  getAssetUrl
}: ProjectGridProps) {
  return (
    <Skeleton loading={loading} variant="pulse">
      <Box
        ref={projectsRef}
        className="projects-card"
        style={{ scrollMarginTop: '5rem' }}
        transition="all 0.3s ease"
        display="flex"
        flexDir="column"
        height="100%"
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiSolidFolderOpen color="#3B82F6" /> Featured Projects
        </Heading>

        <Stack gap=".2rem" flex="1">
          {data.projects.map((proj, idx) => {
            const logoSrc = getAssetUrl(proj.logo_url)
            return (
              <ScrollReveal key={idx}>
                <Box
                  display="flex"
                  gap={{ base: "1rem", sm: "1.5rem" }}
                  alignItems="flex-start"
                  pb={idx !== data.projects.length - 1 ? "2.5rem" : "0"}
                >
                  {/* Project Logo */}
                  <Box
                    w={{ base: "2rem", sm: "3rem" }}
                    h={{ base: "2rem", sm: "3rem" }}
                    flexShrink={0}
                    bg="white"
                    p="2"
                    borderRadius="sm"
                    border="1px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="sm"
                  >
                    <Image src={logoSrc} alt={proj.name} objectFit="contain" maxW="100%" maxH="100%" />
                  </Box>

                  {/* Project Details */}
                  <Box flex="1" w="100%">
                    <Box display="flex" flexDir={{ base: "column", sm: "row" }} justifyContent="space-between" alignItems={{ base: "flex-start", sm: "center" }}>
                      <Text fontSize=".9rem" fontWeight="bold">
                        {proj.name}
                      </Text>

                      <a href={proj.url} target="_blank" rel="noopener noreferrer">
                        <Text
                          className="no-print"
                          fontSize="0.75rem"
                          fontWeight="bold"
                          color="blue.500"
                          display="flex"
                          alignItems="center"
                          gap="1"
                          _hover={{ textDecoration: 'underline' }}
                          mt={{ base: "0.2rem", sm: "0" }}
                        >
                          Launch Demo <BiLinkExternal />
                        </Text>
                      </a>
                    </Box>

                    <Text fontSize="0.85rem" color={textMuted} lineHeight="1.7">
                      {proj.description}
                    </Text>
                  </Box>
                </Box>
              </ScrollReveal>
            )
          })}
        </Stack>
      </Box>
    </Skeleton>
  )
}
