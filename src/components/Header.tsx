import { Box, Button, HStack } from "@chakra-ui/react"
import { BiSolidBarChartAlt2, BiSolidFolderOpen, BiSolidEnvelope } from "react-icons/bi"
import { ColorModeButton } from "@/components/ui/color-mode"

interface HeaderProps {
  scrollToWork: () => void
  scrollToProjects: () => void
  scrollToContact: () => void
}

export default function Header({ scrollToWork, scrollToProjects, scrollToContact }: HeaderProps) {
  return (
    <Box
      className="no-print"
      zIndex="10"
      w="100%"
      h="3.6rem"
      position="fixed"
      top="0"
      left="0"
      bg={{ base: "rgba(255, 255, 255, 0.75)", _dark: "rgba(11, 15, 25, 0.75)" }}
      backdropFilter="blur(12px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor={{ base: "gray.100", _dark: "rgba(255, 255, 255, 0.05)" }}
      transition="all 0.3s ease"
    >
      <Box
        w={{ base: "100%", lg: "85%", xl: "70%" }}
        px="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Brand Logo / Initials */}
        <Box 
          fontSize="1.1rem" 
          fontWeight="bold" 
          bgGradient="to-r" 
          gradientFrom="blue.500" 
          gradientTo="indigo.500" 
          bgClip="text"
          cursor="pointer"
          onClick={scrollToWork}
        >
          DM.
        </Box>

        {/* Desktop Navigation */}
        <HStack gap="3" display={{ base: "none", sm: "flex" }}>
          <Button 
            onClick={scrollToWork} 
            size="sm" 
            variant="ghost" 
            fontSize=".7rem"
            textTransform="uppercase"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidBarChartAlt2 /> Work Experience
          </Button>
          <Button 
            onClick={scrollToProjects} 
            size="sm" 
            variant="ghost"  
            fontSize=".7rem"
            textTransform="uppercase"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidFolderOpen /> Career Projects
          </Button>
          <Button 
            onClick={scrollToContact} 
            size="sm" 
            variant="ghost"  
            fontSize=".7rem"
            textTransform="uppercase"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidEnvelope /> Contact
          </Button>
          
          <ColorModeButton />
        </HStack>

        {/* Mobile Navigation */}
        <HStack gap="0.5" display={{ base: "flex", sm: "none" }}>
          <Button 
            onClick={scrollToWork} 
            size="sm" 
            variant="ghost" 
            px="2.5"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidBarChartAlt2 size="1.2rem" />
          </Button>
          <Button 
            onClick={scrollToProjects} 
            size="sm" 
            variant="ghost" 
            px="2.5"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidFolderOpen size="1.2rem" />
          </Button>
          <Button 
            onClick={scrollToContact} 
            size="sm" 
            variant="ghost" 
            px="2.5"
            _hover={{ bg: "gray.100", _dark: { bg: "rgba(255, 255, 255, 0.08)" } }}
          >
            <BiSolidEnvelope size="1.2rem" />
          </Button>
          
          <ColorModeButton />
        </HStack>
      </Box>
    </Box>
  )
}
