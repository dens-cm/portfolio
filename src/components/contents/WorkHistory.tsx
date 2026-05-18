import React from 'react'
import { 
  Box, 
  Heading, 
  Text, 
  Badge,
  Stack,
  Skeleton,
  List
} from "@chakra-ui/react"
import { BiSolidBarChartAlt2 } from "react-icons/bi"
import { useColorModeValue } from '@/components/ui/color-mode'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface WorkHistoryProps {
  loading: boolean
  data: PortfolioData
  workRef: React.RefObject<HTMLDivElement | null>
  cardBg: string
  cardBorder: string
  borderLine: string
  textMuted: string
}

export default function WorkHistory({
  loading,
  data,
  workRef,
  cardBg,
  cardBorder,
  borderLine,
  textMuted
}: WorkHistoryProps) {
  return (
    <Skeleton loading={loading} variant="pulse" borderRadius="3xl" height="100%">
      <Box 
        ref={workRef}
        style={{ scrollMarginTop: '5rem' }}
        bg={cardBg} 
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="3xl"
        p={{ base: "1.8rem", md: "2.5rem" }}
        boxShadow="md"
        height="100%"
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(59, 130, 246, 0.25)" }}
        display="flex"
        flexDir="column"
      >
        <Heading fontSize="1.15rem" fontWeight="900" display="flex" alignItems="center" gap="2.5" textTransform="uppercase" fontFamily="'Outfit', sans-serif" mb="1.5rem">
          <BiSolidBarChartAlt2 size="1.3rem" color="#3B82F6" /> Work History
        </Heading>

        <Box className="experience-timeline" position="relative" pl={{ base: "1rem", sm: "1.8rem" }} borderLeft="2px solid" borderColor={borderLine} ml="0.2rem" py="1" flex="1">
          {data.experience.map((exp, idx) => (
            <Box key={idx} mb="2.2rem" position="relative" _last={{ mb: "0" }}>
              
              {/* Interactive Connector Dot */}
              <Box 
                className="experience-node"
                position="absolute" 
                left={{ base: "-1.55rem", sm: "-2.35rem" }} 
                top="0.2rem" 
                w="0.85rem" 
                h="0.85rem" 
                borderRadius="full" 
                bg="blue.500" 
                border="2px solid" 
                borderColor={useColorModeValue("white", "#0A0A0C")}
                boxShadow="md"
              />

              <Stack gap="1">
                <Box display="flex" flexDir={{ base: "column", sm: "row" }} alignItems={{ base: "start", sm: "center" }} justifyContent="space-between" gap="1">
                  <Heading fontSize="0.95rem" fontWeight="extrabold">
                    {exp.role}
                  </Heading>
                  <Badge variant="subtle" colorPalette="gray" borderRadius="md" py="0.5" px="2" fontSize="0.65rem" fontFamily="mono">
                    {exp.start_date} - {exp.end_date}
                  </Badge>
                </Box>
                
                <Text fontSize="0.8rem" color="blue.500" fontWeight="extrabold">
                  <a href={exp.company_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    {exp.company_name}
                  </a>
                </Text>
                
                <List.Root mt="0.5rem" gap="1.5" fontSize="0.8rem" color={textMuted} pl="1rem">
                  {exp.points.map((point, pIdx) => (
                    <List.Item key={pIdx} style={{ listStyleType: "disc" }}>
                      {point}
                    </List.Item>
                  ))}
                </List.Root>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </Skeleton>
  )
}
