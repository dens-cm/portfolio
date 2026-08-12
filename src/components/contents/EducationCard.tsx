import { 
  Box, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Skeleton,
  Badge
} from "@chakra-ui/react"
import { BiSolidGraduation } from "react-icons/bi"
import type { PortfolioData } from '@/hooks/usePortfolioData'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
        display="flex"
        flexDir="column"
        height="100%"
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiSolidGraduation color="#3B82F6" /> Education
        </Heading>

        <Stack gap="1.5rem" flex="1">
          {data.education.map((edu, idx) => {
            const schoolLogo = getAssetUrl(edu.logo_url)
            return (
              <ScrollReveal key={idx}>
                <Box 
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
                  
                  {/* Edu Details */}
                  <Box flex="1" w="100%">
                    <Box display="flex" flexDir={{ base: "column", sm: "row" }} justifyContent="space-between" alignItems={{ base: "flex-start", sm: "center" }}>
                      <Text fontSize=".9rem" fontWeight="bold">
                        {edu.degree}
                      </Text>
                      
                      <Badge variant="outline" colorPalette="blue" fontSize="0.65rem" fontWeight="semibold" textTransform="uppercase" mt={{ base: "0.2rem", sm: "0" }}>
                        {edu.grad_year}
                      </Badge>
                    </Box>
                    <Text fontSize="0.85rem" color={textMuted} fontWeight="semibold" mt="0.2rem">
                      {edu.school_name}
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
