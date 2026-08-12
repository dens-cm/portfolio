import React from 'react'
import {
  Box,
  Heading,
  Text,
  Badge,
  Skeleton,
  List
} from "@chakra-ui/react"
import { BiSolidBarChartAlt2, BiSolidBriefcase, BiLinkExternal } from "react-icons/bi"
import { useColorModeValue } from '@/components/ui/color-mode'
import type { PortfolioData } from '@/hooks/usePortfolioData'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline"
import ScrollReveal from "@/components/ui/ScrollReveal"

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
  textMuted
}: WorkHistoryProps) {
  const nodeBorderColor = useColorModeValue("white", "#0A0A0C")

  return (
    <Skeleton loading={loading} variant="pulse">
      <Box
        ref={workRef}
        className="work-history-card"
        style={{ scrollMarginTop: '5rem' }}
        height="100%"
        transition="all 0.3s ease"
        display="flex"
        flexDir="column"
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiSolidBarChartAlt2 color="#3B82F6" /> Work History
        </Heading>

        <TimelineRoot width="100%">
          {data.experience.map((exp, idx) => (
            <TimelineItem key={idx}>
              <TimelineConnector
                bg="blue.500"
                color="white"
                borderColor={nodeBorderColor}
                boxShadow="sm"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <BiSolidBriefcase />
              </TimelineConnector>
              <TimelineContent width="100%">
                <ScrollReveal>
                  <TimelineTitle width="100%">
                    <Box w="100%" display="flex" flexDir={{ base: "column", sm: "row" }} alignItems={{ base: "start", sm: "center" }} justifyContent="space-between" gap="2">
                      <Text fontSize=".9rem" fontWeight="bold">
                        {exp.role}
                      </Text>
                      <Badge variant="outline" colorPalette="blue" fontSize="0.65rem" fontWeight="semibold" textTransform="uppercase">
                        {exp.start_date} - {exp.end_date}
                      </Badge>
                    </Box>
                  </TimelineTitle>
                  <TimelineDescription width="100%">
                    <Text fontSize="0.8rem" color="blue.500" fontWeight="bold" fontStyle='italic'>
                      <a href={exp.company_url} target="_blank" rel="noopener noreferrer">
                        <Box as="span" display="inline-flex" alignItems="center" gap="1" _hover={{ textDecoration: 'underline' }}>
                          {exp.company_name} <BiLinkExternal />
                        </Box>
                      </a>
                    </Text>

                    <List.Root mt="0.8rem" gap="2" fontSize="0.85rem" color={textMuted} pl="1.2rem" lineHeight="1.6">
                      {exp.points.map((point, pIdx) => (
                        <List.Item key={pIdx} style={{ listStyleType: "disc" }}>
                          {point}
                        </List.Item>
                      ))}
                    </List.Root>
                  </TimelineDescription>
                </ScrollReveal>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineRoot>
      </Box>
    </Skeleton>
  )
}
