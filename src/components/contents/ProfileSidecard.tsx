import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Separator,
  Stack,
  Badge,
  Skeleton
} from "@chakra-ui/react"
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidMap,
  BiCopy,
  BiCheck,
  BiSolidFilePdf
} from "react-icons/bi"
import { useColorModeValue } from '@/components/ui/color-mode'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface ProfileSidecardProps {
  loading: boolean
  data: PortfolioData
  copied: boolean
  handleCopyATSResume: () => void
  handleDownloadPDF: () => void
  avatarImgSrc: string
  cardBg: string
  cardBorder: string
  borderLine: string
  textMuted: string
}

export default function ProfileSidecard({
  loading,
  data,
  copied,
  handleCopyATSResume,
  handleDownloadPDF,
  avatarImgSrc,
  cardBg,
  cardBorder,
  borderLine,
  textMuted
}: ProfileSidecardProps) {
  return (
    <Skeleton loading={loading} variant="pulse" borderRadius="3xl">
      <Box
        className="profile-sidecard"
        bg={cardBg}
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="3xl"
        p="2.2rem"
        boxShadow="md"
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(99, 102, 241, 0.25)" }}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Box className="profile-header-container" display="flex" flexDir="column" alignItems="center" justifyContent="center" w="100%">
          {/* Pulsing Avatar halo */}
          <Box
            className="avatar-halo"
            borderRadius="full"
            p="1"
            bgGradient="to-br"
            gradientFrom="blue.500"
            gradientTo="indigo.600"
            boxShadow="xl"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Avatar.Root w="7rem" h="7rem" border="4px solid" borderColor={useColorModeValue("white", "#111827")}>
              <Avatar.Fallback name={data.profile?.name || 'Dens Maltos'} />
              <Avatar.Image src={avatarImgSrc} alt={data.profile?.name || 'Dens Maltos'} />
            </Avatar.Root>
          </Box>

          <Box className="name-info" mt="1.2rem" textAlign="center">
            <Heading className="profile-name" fontSize="1.3rem" fontWeight="extrabold" fontFamily="'Outfit', sans-serif">
              {data.profile?.name || 'Dens Maltos'}
            </Heading>
            <Badge
              className="profile-title-badge"
              mt="0.4rem"
              variant="subtle"
              colorPalette="blue"
              px="3"
              py="0.8"
              borderRadius="full"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="0.65rem"
              letterSpacing="wider"
            >
              {data.profile?.title || 'Web Developer'}
            </Badge>
          </Box>
        </Box>

        <Separator className="no-print" w="100%" my="1.5rem" color={borderLine} />

        {/* Social Badges Stack */}
        <HStack className="social-badges" gap="3.5" justifyContent="center" flexWrap="wrap">
          {data.profile?.facebook_url && (
            <a href={data.profile.facebook_url} target="_blank" rel="noopener noreferrer">
              <Badge variant='surface' colorPalette="blue" size="md" _hover={{ transform: "translateY(-3px)", color: "blue.500" }} transition="all 0.2s">
                <BiLogoFacebookCircle size="1.3rem" />
              </Badge>
            </a>
          )}
          {data.profile?.linkedin_url && (
            <a href={data.profile.linkedin_url} target="_blank" rel="noopener noreferrer">
              <Badge variant="surface" colorPalette="cyan" size="md" _hover={{ transform: "translateY(-3px)", color: "cyan.500" }} transition="all 0.2s">
                <BiLogoLinkedinSquare size="1.3rem" />
              </Badge>
            </a>
          )}
          {data.profile?.github_url && (
            <a href={data.profile.github_url} target="_blank" rel="noopener noreferrer">
              <Badge variant="surface" colorPalette="gray" size="md" _hover={{ transform: "translateY(-3px)", color: "white" }} transition="all 0.2s">
                <BiLogoGithub size="1.3rem" />
              </Badge>
            </a>
          )}
        </HStack>

        <Separator className="no-print" w="100%" my="1.5rem" color={borderLine} />

        {/* Print Action Stack */}
        <Stack w="100%" gap="2" className="no-print">
          <Button
            onClick={handleCopyATSResume}
            w="100%"
            size="sm"
            colorPalette="blue"
            variant="outline"
            borderRadius="xl"
            boxShadow="sm"
            fontWeight="bold"
            _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
            transition="all 0.2s"
            display="flex"
            alignItems="center"
            gap="2"
          >
            {copied ? <BiCheck size="1.1rem" /> : <BiCopy size="1.1rem" />}
            {copied ? "Copied!" : "Copy ATS-Friendly Resume"}
          </Button>

          <Button
            hidden
            onClick={handleDownloadPDF}
            w="100%"
            size="sm"
            colorPalette="indigo"
            variant="subtle"
            borderRadius="xl"
            boxShadow="sm"
            fontWeight="bold"
            _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
            transition="all 0.2s"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <BiSolidFilePdf size="1.1rem" />
            Download PDF Resume
          </Button>
        </Stack>

        <Box className="no-print" mt="1.2rem" display="flex" alignItems="center" gap="1.5" color={textMuted} fontSize="0.75rem" fontWeight="extrabold">
          <BiSolidMap size="1rem" color="#3B82F6" /> {data.profile?.location || 'Davao City, Philippines'}
        </Box>
      </Box>
    </Skeleton>
  )
}
