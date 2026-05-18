import { 
  Box, 
  Heading, 
  Stack, 
  Text, 
  Skeleton
} from "@chakra-ui/react"
import { BiCodeAlt } from "react-icons/bi"

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
  cardBg,
  cardBorder,
  borderLine
}: ExpertSkillsProps) {
  return (
    <Skeleton loading={loading} variant="pulse" borderRadius="3xl" height="100%">
      <Box 
        className="expert-skills-card"
        bg={cardBg} 
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="3xl"
        p="2.2rem"
        boxShadow="md"
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(20, 184, 166, 0.25)" }}
        display="flex"
        flexDir="column"
        height="100%"
      >
        <Heading fontSize="1.1rem" fontWeight="900" display="flex" alignItems="center" gap="2.5" textTransform="uppercase" fontFamily="'Outfit', sans-serif" mb="1.5rem">
          <BiCodeAlt size="1.3rem" color="#14B8A6" /> Expert Skills
        </Heading>

        <Stack gap="5" flex="1">
          {/* Frontend Category */}
          {groupedSkills.frontend && groupedSkills.frontend.length > 0 && (
            <Box>
              <Text fontSize="0.7rem" fontWeight="900" color="blue.500" textTransform="uppercase" mb="0.6rem" fontFamily="mono">
                Frontend Engineering
              </Text>
              <Box display="flex" flexWrap="wrap" gap="0.5rem">
                {groupedSkills.frontend.map((skill, idx) => (
                  <a href={skill.url} key={idx} target="_blank" rel="noopener noreferrer">
                    <Box 
                      px="2.5" 
                      py="1" 
                      borderRadius="lg" 
                      border="1px solid" 
                      borderColor={borderLine}
                      bg="rgba(255,255,255,0.02)"
                      fontSize="0.75rem" 
                      fontWeight="bold" 
                      display="flex" 
                      alignItems="center" 
                      gap="1.5"
                      _hover={{ borderColor: skill.color, color: skill.color, bg: "rgba(255,255,255,0.04)" }}
                      transition="all 0.2s ease"
                    >
                      <Box w="0.45rem" h="0.45rem" borderRadius="full" bg={skill.color} />
                      {skill.name}
                    </Box>
                  </a>
                ))}
              </Box>
            </Box>
          )}

          {/* Backend Category */}
          {groupedSkills.backend && groupedSkills.backend.length > 0 && (
            <Box>
              <Text fontSize="0.7rem" fontWeight="900" color="indigo.500" textTransform="uppercase" mb="0.6rem" fontFamily="mono">
                Backend & Databases
              </Text>
              <Box display="flex" flexWrap="wrap" gap="0.5rem">
                {groupedSkills.backend.map((skill, idx) => (
                  <a href={skill.url} key={idx} target="_blank" rel="noopener noreferrer">
                    <Box 
                      px="2.5" 
                      py="1" 
                      borderRadius="lg" 
                      border="1px solid" 
                      borderColor={borderLine}
                      bg="rgba(255,255,255,0.02)"
                      fontSize="0.75rem" 
                      fontWeight="bold" 
                      display="flex" 
                      alignItems="center" 
                      gap="1.5"
                      _hover={{ borderColor: skill.color, color: skill.color, bg: "rgba(255,255,255,0.04)" }}
                      transition="all 0.2s ease"
                    >
                      <Box w="0.45rem" h="0.45rem" borderRadius="full" bg={skill.color} />
                      {skill.name}
                    </Box>
                  </a>
                ))}
              </Box>
            </Box>
          )}

          {/* Tools Category */}
          {groupedSkills.tools && groupedSkills.tools.length > 0 && (
            <Box>
              <Text fontSize="0.7rem" fontWeight="900" color="teal.500" textTransform="uppercase" mb="0.6rem" fontFamily="mono">
                DevOps & Cloud Systems
              </Text>
              <Box display="flex" flexWrap="wrap" gap="0.5rem">
                {groupedSkills.tools.map((skill, idx) => (
                  <a href={skill.url} key={idx} target="_blank" rel="noopener noreferrer">
                    <Box 
                      px="2.5" 
                      py="1" 
                      borderRadius="lg" 
                      border="1px solid" 
                      borderColor={borderLine}
                      bg="rgba(255,255,255,0.02)"
                      fontSize="0.75rem" 
                      fontWeight="bold" 
                      display="flex" 
                      alignItems="center" 
                      gap="1.5"
                      _hover={{ borderColor: skill.color, color: skill.color, bg: "rgba(255,255,255,0.04)" }}
                      transition="all 0.2s ease"
                    >
                      <Box w="0.45rem" h="0.45rem" borderRadius="full" bg={skill.color} />
                      {skill.name}
                    </Box>
                  </a>
                ))}
              </Box>
            </Box>
          )}
        </Stack>
      </Box>
    </Skeleton>
  )
}
