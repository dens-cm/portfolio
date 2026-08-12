import { 
  Box, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Skeleton
} from "@chakra-ui/react"
import { BiSolidGraduation, BiLinkExternal } from "react-icons/bi"
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface EducationCardProps {
  loading: boolean
  data: PortfolioData
  cardBg: string
  cardBorder: string
  borderLine: string
  textMuted: string
  getAssetUrl: (url: string | null | undefined) => string
}

export default function EducationCard({
  loading,
  data,
  borderLine,
  textMuted,
  getAssetUrl
}: EducationCardProps) {
  if (!data.education || data.education.length === 0) return null

  return (
    <Skeleton loading={loading} variant="pulse">
      <Box 
        className="education-card"
        transition="all 0.3s ease"
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiSolidGraduation color="#10B981" /> Education
        </Heading>

        <Stack gap="1.5rem">
          {data.education.map((edu, idx) => {
            const schoolLogo = getAssetUrl(edu.logo_url)
            return (
              <Box 
                key={idx} 
                className="education-item" 
                display="flex" 
                alignItems="flex-start" 
                gap={{ base: "1rem", sm: "1.5rem" }}
                pb={idx !== (data.education?.length || 0) - 1 ? "2.5rem" : "0"}
                borderBottom={idx !== (data.education?.length || 0) - 1 ? "1px solid" : "none"}
                borderColor={borderLine}
              >
                {/* School Logo */}
                {edu.logo_url && (
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
                    <Image 
                      src={schoolLogo} 
                      alt={`${edu.school_name} logo`} 
                      objectFit="contain"
                      maxW="100%" 
                      maxH="100%"
                    />
                  </Box>
                )}

                {/* Education Details */}
                <Box flex="1" w="100%">
                  <Box display="flex" flexDir={{ base: "column", sm: "row" }} justifyContent="space-between" alignItems={{ base: "flex-start", sm: "center" }} gap="1">
                    <Text fontSize=".9rem" fontWeight="bold">
                      {edu.school_name}
                    </Text>
                    
                    {edu.school_url && (
                      <a href={edu.school_url} target="_blank" rel="noopener noreferrer">
                        <Text 
                          className="no-print"
                          fontSize="0.75rem" 
                          fontWeight="semibold" 
                          color="blue.500" 
                          display="flex" 
                          alignItems="center" 
                          gap="1"
                          _hover={{ textDecoration: 'underline' }}
                        >
                          Visit Website <BiLinkExternal />
                        </Text>
                      </a>
                    )}
                  </Box>
                  
                  <Text fontSize="0.9rem" color={textMuted} fontWeight="semibold">
                    {edu.degree}
                  </Text>
                  <Text fontSize="0.75rem" color="gray.500" fontStyle="italic">
                    Class of {edu.grad_year}
                  </Text>
                </Box>
              </Box>
            )
          })}
        </Stack>
      </Box>
    </Skeleton>
  )
}
