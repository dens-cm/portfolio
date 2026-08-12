import React from 'react'
import {
  Box,
  Button,
  Heading,
  Highlight,
  Stack,
  Text,
  Textarea,
  Input,
  Skeleton,
  Field
} from "@chakra-ui/react"
import { BiSolidEnvelope, BiPaperPlane } from "react-icons/bi"
import ScrollReveal from '@/components/ui/ScrollReveal'

interface DeveloperConsoleProps {
  loading: boolean
  contactRef: React.RefObject<HTMLDivElement | null>
  message: string
  setMessage: (val: string) => void
  userEmail: string
  setUserEmail: (val: string) => void
  sending: boolean
  handleSend: (e: React.FormEvent) => void
  cardBg: string
  cardBorder: string
  borderLine: string
  textMuted: string
}

export default function DeveloperConsole({
  loading,
  contactRef,
  message,
  setMessage,
  userEmail,
  setUserEmail,
  sending,
  handleSend,
  textMuted,
  borderLine
}: DeveloperConsoleProps) {
  return (
    <Skeleton loading={loading} variant="pulse">
      <Box
        ref={contactRef}
        className="developer-console-card"
        style={{ scrollMarginTop: '5rem' }}
        transition="all 0.3s ease"
        _hover={{ borderColor: "rgba(59, 130, 246, 0.25)" }}
      >
        <Heading fontSize="1rem" fontWeight='semibold' display="flex" alignItems="center" gap="2.5" textTransform="uppercase" mb="1.5rem">
          <BiSolidEnvelope color="#3B82F6" /> Get in Touch
        </Heading>

        <ScrollReveal threshold={0.1}>
          <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={{ base: "2rem", md: "4rem" }} alignItems="flex-start" w="100%">
            
            {/* Left Column Description */}
            <Box flex={{ base: "1", md: "5" }} w="100%" fontSize="0.85rem">
              <Heading fontSize={{ base: ".9rem", md: "1rem" }} fontWeight="bold" mb=".5rem" lineHeight="1.2" letterSpacing="tight">
                Let's Build Something Great Together
              </Heading>
              <Text color={textMuted} lineHeight="relaxed" mb="2rem">
                Have a project in mind, a contract opportunity, or just want to say hi? I'm always open to discussing new opportunities and collaborations.
              </Text>

              <Highlight query="dens.maltos@gmail.com" styles={{ fontWeight: "semibold", color: "blue.500" }}>
                Direct Email: dens.maltos@gmail.com
              </Highlight>
            </Box>

            {/* Right Column Form */}
            <Box flex={{ base: "1", md: "7" }} w="100%">
              <form onSubmit={handleSend}>
                <Stack gap="1rem">
                  <Field.Root>
                    <Field.Label fontSize="0.75rem" fontWeight="bold">YOUR EMAIL</Field.Label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      fontSize="0.85rem"
                      bg="rgba(255, 255, 255, 0.02)"
                      border="1px solid"
                      borderColor={borderLine}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6" }}
                      autoComplete="off"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label fontSize="0.75rem" fontWeight="bold">MESSAGE</Field.Label>
                    <Textarea
                      required
                      placeholder="Hi Dens, I'd like to talk about..."
                      rows={5}
                      resize="vertical"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      fontSize="0.85rem"
                      bg="rgba(255, 255, 255, 0.02)"
                      border="1px solid"
                      borderColor={borderLine}
                      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6" }}
                    />
                  </Field.Root>

                  <Box display="flex" justifyContent="flex-end" pt="0.5rem">
                    <Button
                      type="submit"
                      colorPalette="blue"
                      size="sm"
                      loading={sending}
                      loadingText="Sending..."
                      px="1.5rem"
                      display="flex"
                      alignItems="center"
                      gap="2"
                    >
                      <BiPaperPlane /> Send Message
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </Skeleton>
  )
}
