import { 
  Box, 
  Heading, 
  Text, 
  Badge,
  Skeleton
} from "@chakra-ui/react"
import { BiSearch } from "react-icons/bi"
import { useColorModeValue } from '@/components/ui/color-mode'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface HeroBrandProps {
  loading: boolean
  data: PortfolioData
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  commandOptions: { label: string; action: () => void }[]
  cardBorder: string
  textMuted: string
}

export default function HeroBrand({
  loading,
  data,
  menuOpen,
  setMenuOpen,
  commandOptions,
  cardBorder,
  textMuted
}: HeroBrandProps) {
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="start" className="no-print">
      <Skeleton loading={loading} variant="pulse" borderRadius="full">
        <Box display="flex" alignItems="center" gap="2.5" mb="1rem">
          <Box w="0.55rem" h="0.55rem" borderRadius="full" bg="emerald.500" className="pulse-dot" />
          <Text 
            fontFamily="mono" 
            fontSize="0.7rem" 
            fontWeight="extrabold" 
            letterSpacing="widest" 
            color="emerald.500" 
            textTransform="uppercase"
          >
            Open to elite full-stack engineering contracts
          </Text>
        </Box>
      </Skeleton>

      <Skeleton loading={loading} variant="pulse" borderRadius="xl" w="100%">
        <Heading 
          fontSize={{ base: "2.6rem", md: "4.5rem", xl: "5.5rem" }} 
          fontWeight="900" 
          lineHeight="1"
          fontFamily="'Outfit', sans-serif"
          bgGradient="to-br" 
          gradientFrom={useColorModeValue("gray.900", "white")} 
          gradientTo={useColorModeValue("gray.500", "gray.600")}
          bgClip="text"
        >
          {data.profile?.name ? data.profile.name.toUpperCase() : 'DENS MALTOS'}
        </Heading>
      </Skeleton>

      <Skeleton loading={loading} variant="pulse" borderRadius="md" mt="0.5rem">
        <Heading 
          fontSize={{ base: "1.4rem", md: "2.2rem" }} 
          fontWeight="700" 
          color="blue.500"
          fontFamily="'Outfit', sans-serif"
        >
          {data.profile?.title || 'Senior Full-Stack Engineer'}
        </Heading>
      </Skeleton>

      <Skeleton loading={loading} variant="pulse" borderRadius="xl" mt="1.2rem" w={{ base: "100%", md: "85%" }}>
        <Text fontSize="1.05rem" color={textMuted} fontWeight="medium" lineHeight="relaxed">
          {data.profile?.bio || 'Crafting robust web architectures and premium digital design interfaces.'}
        </Text>
      </Skeleton>

      {/* Interactive Spotlight Command Bar Pill */}
      <Box position="relative" w={{ base: "100%", md: "400px" }} mt="2rem">
        <Box 
          display="flex" 
          alignItems="center" 
          gap="2" 
          bg={useColorModeValue("white", "rgba(255,255,255,0.02)")} 
          border="1px solid" 
          borderColor={cardBorder} 
          borderRadius="full" 
          px="4.5" 
          py="2.5"
          cursor="pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          _hover={{ borderColor: "blue.400", boxShadow: "md" }}
          transition="all 0.25s ease"
          boxShadow="sm"
        >
          <BiSearch size="1.1rem" color={useColorModeValue("#4B5563", "#9CA3AF")} />
          <Text fontSize="0.8rem" color={textMuted} fontWeight="bold" flex="1">
            Search or trigger commands...
          </Text>
          <Badge variant="subtle" colorPalette="gray" fontSize="0.6rem" px="2" py="0.5" borderRadius="md">
            CMD + K
          </Badge>
        </Box>

        {menuOpen && (
          <Box 
            position="absolute" 
            top="115%" 
            left="0" 
            w="100%" 
            bg={useColorModeValue("white", "#0F172A")} 
            border="1px solid" 
            borderColor={useColorModeValue("gray.200", "rgba(255,255,255,0.08)")} 
            borderRadius="2xl" 
            boxShadow="2xl" 
            zIndex="99" 
            overflow="hidden"
            p="1.5"
          >
            {commandOptions.map((opt, idx) => (
              <Box 
                key={idx} 
                px="4.5" 
                py="3" 
                borderRadius="xl" 
                fontSize="0.85rem" 
                fontWeight="bold"
                cursor="pointer"
                _hover={{ bg: useColorModeValue("gray.50", "rgba(255,255,255,0.04)"), color: "blue.400" }}
                onClick={() => {
                  opt.action()
                  setMenuOpen(false)
                }}
                transition="all 0.15s ease"
              >
                {opt.label}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}
