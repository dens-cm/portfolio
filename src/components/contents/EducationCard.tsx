import { 
  Box, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Skeleton
} from "@chakra-ui/react"
import { BiSolidGraduation } from "react-icons/bi"
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
  cardBg,
  cardBorder,
  borderLine,
  textMuted,
  getAssetUrl
}: EducationCardProps) {
  if (!data.education || data.education.length === 0) return null

  return (
    <Skeleton loading={loading} variant="pulse" borderRadius="3xl">
      <Box 
        bg={cardBg} 
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="3xl"
        p="2rem"
        boxShadow="md"
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(16, 185, 129, 0.25)" }}
      >
        <Heading fontSize="1.1rem" fontWeight="900" display="flex" alignItems="center" gap="2.5" textTransform="uppercase" fontFamily="'Outfit', sans-serif" mb="1.2rem">
          <BiSolidGraduation size="1.3rem" color="#10B981" /> Education
        </Heading>

        <Stack gap="4">
          {data.education.map((edu, idx) => {
            const schoolLogo = getAssetUrl(edu.logo_url)
            return (
              <Box key={idx} display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
                <Box>
                  <Text fontSize="0.9rem" fontWeight="extrabold" color="blue.500" _hover={{ textDecoration: "underline" }}>
                    <a href={edu.school_url} target="_blank" rel="noopener noreferrer">
                      {edu.school_name}
                    </a>
                  </Text>
                  <Text mt="0.1rem" fontSize="0.75rem" color={textMuted} fontWeight="semibold">
                    {edu.degree} | {edu.grad_year}
                  </Text>
                </Box>
                
                {edu.logo_url && (
                  <Image 
                    p="1.5" 
                    w="3rem" 
                    h="3rem"
                    src={schoolLogo} 
                    alt={`${edu.school_name} logo`} 
                    borderRadius="xl" 
                    border="1px solid"
                    borderColor={borderLine}
                    objectFit="contain"
                    bg="white"
                  />
                )}
              </Box>
            )
          })}
        </Stack>
      </Box>
    </Skeleton>
  )
}
