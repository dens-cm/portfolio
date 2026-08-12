import {
  Box,
  Heading,
  Stack,
  Text,
  Skeleton,
  Badge
} from "@chakra-ui/react"
import { BiCodeAlt } from "react-icons/bi"
import ScrollReveal from '@/components/ui/ScrollReveal'

interface SkillItem {
  name: string
  url: string
  color: string
  category: string
}

interface ExpertSkillsProps {
  loading: boolean
  groupedSkills: {
    frontend: SkillItem[]
    backend: SkillItem[]
    tools: SkillItem[]
  }
  cardBg: string
  cardBorder: string
  borderLine: string
}

export default function ExpertSkills({
  loading,
  groupedSkills,
  borderLine
}: ExpertSkillsProps) {

  const renderCategory = (title: string, skills: SkillItem[], isLast: boolean) => {
    if (!skills || skills.length === 0) return null;

    return (
      <ScrollReveal threshold={0.05}>
        <Box
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: ".5rem", md: "1rem" }}
          borderBottom={isLast ? "none" : "1px solid"}
          borderColor={borderLine}
          w="100%"
          pb="1rem"
        >
          <Box w={{ base: "100%", md: "120px" }} flexShrink={0} pt="1">
            <Text fontSize="0.75rem" fontWeight='semibold' color="gray.500" textTransform="uppercase" fontStyle='italic' letterSpacing="wider">
              {title}
            </Text>
          </Box>

          <Box display="flex" flexWrap="wrap" gap="0.8rem" flex="1">
            {skills.map((skill, idx) => (
              <a href={skill.url} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge
                  p='.25rem .7rem'
                  variant='outline'
                  fontSize="0.75rem"
                  fontWeight='extrabold'
                  bg={`color-mix(in srgb, ${skill.color} 8%, transparent)`}
                  color={skill.color}
                  border="1px solid"
                  borderColor={`color-mix(in srgb, ${skill.color} 25%, transparent)`}
                  _hover={{
                    transform: "translateY(-2px)",
                    borderColor: skill.color,
                    bg: `color-mix(in srgb, ${skill.color} 15%, transparent)`,
                    boxShadow: `0 4px 12px color-mix(in srgb, ${skill.color} 20%, transparent)`
                  }}
                  transition="all 0.25s ease"
                >
                  {skill.name}
                </Badge>
              </a>
            ))}
          </Box>
        </Box>
      </ScrollReveal>
    )
  }

  return (
    <Skeleton loading={loading} variant="pulse">
      <Box
        className="expert-skills-card"
        transition="all 0.3s ease"
        display="flex"
        flexDir="column"
        height="100%"
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiCodeAlt color="#14B8A6" /> Tech Stack
        </Heading>

        <Stack gap="1rem" flex="1" w="100%">
          {renderCategory("Frontend", groupedSkills.frontend, false)}
          {renderCategory("Backend", groupedSkills.backend, false)}
          {renderCategory("Tools", groupedSkills.tools, true)}
        </Stack>
      </Box>
    </Skeleton>
  )
}
