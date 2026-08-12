import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Badge,
  Skeleton,
  Select,
  createListCollection
} from "@chakra-ui/react"
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidMap,
  BiCopy,
  BiCheck
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
  commandOptions: { label: string; action: () => void }[]
}

export default function ProfileSidecard({
  loading,
  data,
  copied,
  handleCopyATSResume,
  avatarImgSrc,
  cardBorder,
  borderLine,
  textMuted,
  commandOptions
}: ProfileSidecardProps) {
  const searchBg = useColorModeValue("white", "rgba(255,255,255,0.02)")
  const actionCollection = createListCollection({
    items: commandOptions.map((opt, idx) => ({ label: opt.label, value: String(idx) }))
  })

  return (
    <Skeleton loading={loading} variant="pulse">
      <Box
        className="profile-sidecard"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={{ base: "2rem", md: "4rem" }}
        textAlign={{ base: "center", md: "left" }}
        w="100%"
        maxW="100%"
        pb="2rem"
        borderBottom="1px solid"
        borderColor={borderLine}
      >
        {/* Avatar */}
        <Box
          className="avatar-halo"
          borderRadius="full"
          p="1"
          bgGradient="to-br"
          gradientFrom="blue.500"
          gradientTo="indigo.600"
          boxShadow="xl"
          flexShrink={0}
        >
          <Avatar.Root w={{ base: "9rem", md: "12rem" }} h={{ base: "9rem", md: "12rem" }} border="4px solid" borderColor={useColorModeValue("white", "#111827")}>
            <Avatar.Fallback name={data.profile?.name || 'Dens Maltos'} />
            <Avatar.Image src={avatarImgSrc} alt={data.profile?.name || 'Dens Maltos'} />
          </Avatar.Root>
        </Box>

        {/* Info & Actions */}
        <Box display="flex" flexDir="column" flex="1" alignItems={{ base: "center", md: "flex-start" }} w="100%" maxW="100%">
          <Box display="flex" flexDir={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-end" }} gap="1.2rem" mb="1rem">
            <Heading fontSize={{ base: "2rem", md: "3rem" }} fontWeight="900" letterSpacing="tight" lineHeight="1">
              {data.profile?.name || 'Dens Maltos'}
            </Heading>
          </Box>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" gap="1.5" color="blue.500" fontSize="0.95rem" fontWeight="bold" mb="1.5rem">
            <Badge
              variant="solid"
              colorPalette="blue"
              px="3"
              py="1"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="0.65rem"
              boxShadow="sm"
            >
              {data.profile?.title || 'Web Developer'}
            </Badge>
            <Text display={{ base: "none", md: "block" }}>|</Text>
            <Text display='flex' alignItems='center' gap='.5rem' mt={{ base: '2rem', md: '0' }}><BiSolidMap size="1.2rem" /> {data.profile?.location || 'Davao City, Philippines'}</Text>
          </Box>

          <Text fontSize={{ base: "1rem", md: "1.05rem" }} color={textMuted} fontWeight="500" lineHeight="1.7" mb="1.5rem">
            {data.profile?.bio || ''}
          </Text>

          {/* Action Row */}
          <Box display="flex" flexDir={{ base: "column", sm: "row" }} alignItems="center" gap="1.2rem" w="100%" maxW="100%">

            {/* Quick Actions Select */}
            <Box position="relative" w={{ base: "100%" }}>
              <Select.Root
                collection={actionCollection}
                value={[]}
                onValueChange={(e) => {
                  const val = e.value[0]
                  if (val) {
                    const idx = Number(val)
                    if (idx >= 0 && commandOptions[idx]) {
                      commandOptions[idx].action()
                    }
                  }
                }}
                size="sm"
                variant="outline"
              >
                <Select.Control>
                  <Select.Trigger
                    bg={searchBg}
                    borderColor={cardBorder}
                    color={textMuted}
                    fontWeight="semibold"
                    fontSize="0.75rem"
                    _hover={{ borderColor: "blue.400", boxShadow: "md" }}
                    transition="all 0.2s"
                  >
                    <Select.ValueText placeholder="Quick Actions..." />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator color={textMuted} />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content bg={searchBg} border="1px solid" borderColor={cardBorder} borderRadius="md" p="1.5" boxShadow="lg" zIndex="99">
                    {actionCollection.items.map((item) => (
                      <Select.Item key={item.value} item={item} cursor="pointer" _hover={{ bg: "blue.50", color: "blue.600" }} fontSize="0.75rem" fontWeight="semibold" transition="all 0.2s">
                        <Select.ItemText>{item.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Box>

            {/* ATS Button */}
            <Button
              onClick={handleCopyATSResume}
              size="sm"
              colorPalette="blue"
              variant="outline"
              fontWeight="semibold"
              fontSize="0.75rem"
              _hover={{ transform: "translateY(-1px)", bg: "blue.500", color: "white" }}
              transition="all 0.2s"
              w={{ base: "100%", sm: "auto" }}
            >
              {copied ? <BiCheck size="1.2rem" /> : <BiCopy size="1.2rem" />}
              {copied ? "Copied!" : "Copy ATS Resume"}
            </Button>

            {/* Socials */}
            <HStack className="social-badges" gap="4">
              {data.profile?.facebook_url && (
                <a href={data.profile.facebook_url} target="_blank" rel="noopener noreferrer">
                  <Box color="gray.400" _hover={{ color: "blue.500", transform: "translateY(-3px)" }} transition="all 0.2s">
                    <BiLogoFacebookCircle size="1.8rem" />
                  </Box>
                </a>
              )}
              {data.profile?.linkedin_url && (
                <a href={data.profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                  <Box color="gray.400" _hover={{ color: "cyan.600", transform: "translateY(-3px)" }} transition="all 0.2s">
                    <BiLogoLinkedinSquare size="1.8rem" />
                  </Box>
                </a>
              )}
              {data.profile?.github_url && (
                <a href={data.profile.github_url} target="_blank" rel="noopener noreferrer">
                  <Box color="gray.400" _hover={{ color: "gray.900", transform: "translateY(-3px)" }} transition="all 0.2s">
                    <BiLogoGithub size="1.8rem" />
                  </Box>
                </a>
              )}
            </HStack>

          </Box>
        </Box>
      </Box>
    </Skeleton>
  )
}
