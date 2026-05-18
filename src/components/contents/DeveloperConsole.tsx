import React from 'react'
import { 
  Box, 
  Button, 
  Heading, 
  Highlight, 
  HStack, 
  Separator, 
  Stack, 
  Text, 
  Textarea, 
  Grid,
  GridItem,
  Skeleton
} from "@chakra-ui/react"
import { BiSolidEnvelope, BiSupport } from "react-icons/bi"

interface DeveloperConsoleProps {
  loading: boolean
  contactRef: React.RefObject<HTMLDivElement | null>
  message: string
  setMessage: (val: string) => void
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
  sending,
  handleSend,
  cardBg,
  cardBorder,
  textMuted
}: DeveloperConsoleProps) {
  return (
    <GridItem colSpan={12} className="no-print">
      <Skeleton loading={loading} variant="pulse" borderRadius="3xl">
        <Box 
          ref={contactRef} 
          style={{ scrollMarginTop: '5rem' }}
          bg={cardBg} 
          border="1px solid"
          borderColor={cardBorder}
          borderRadius="3xl"
          p={{ base: "1.8rem", md: "2.5rem" }}
          boxShadow="md"
          transition="all 0.3s ease"
          _hover={{ borderColor: "rgba(79, 70, 229, 0.25)" }}
        >
          <Heading fontSize="1.15rem" fontWeight="900" display="flex" alignItems="center" gap="2.5" textTransform="uppercase" fontFamily="'Outfit', sans-serif" mb="1.5rem">
            <BiSolidEnvelope size="1.3rem" color="#4F46E5" /> Developer Console
          </Heading>

          <Grid templateColumns="repeat(12, 1fr)" gap="2rem" alignItems="start">
            
            {/* Left Column Description */}
            <GridItem colSpan={{ base: 12, md: 5 }}>
              <Heading fontSize="0.95rem" fontWeight="extrabold" display="flex" alignItems="center" gap="2" mb="0.5rem">
                <BiSupport size="1.1rem" color="#4F46E5" /> Let's Build Together
              </Heading>
              <Text fontSize="0.85rem" color={textMuted} lineHeight="relaxed">
                Do you have a project in mind, contract opportunity, or just want to grab a coffee? Submit an execution command through the secure compiler console on the right, or drop an direct static email!
              </Text>
              
              <Box 
                mt="1.2rem" 
                p="4" 
                borderRadius="2xl" 
                bg="rgba(79, 70, 229, 0.03)" 
                border="1px dashed"
                borderColor="rgba(79, 70, 229, 0.2)"
                fontSize="0.8rem"
              >
                <Highlight query="dens.maltos@gmail.com" styles={{ fontWeight: "bold", color: "blue.500" }}>
                  Personal Inbox: dens.maltos@gmail.com
                </Highlight>
              </Box>
            </GridItem>

            {/* Right Column: Code Editor Mockup */}
            <GridItem colSpan={{ base: 12, md: 7 }}>
              <Box 
                bg="#090d16" 
                border="1px solid" 
                borderColor="rgba(255,255,255,0.06)" 
                borderRadius="2xl" 
                overflow="hidden" 
                boxShadow="2xl"
                w="100%"
                maxW="100%"
              >
                {/* VS Code styled header tab */}
                <Box 
                  bg="#0d1527" 
                  px="4.5" 
                  py="3" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="space-between"
                  borderBottom="1px solid"
                  borderColor="rgba(255,255,255,0.04)"
                >
                  <HStack gap="2">
                    <Box w="0.7rem" h="0.7rem" borderRadius="full" bg="#ff5f56" />
                    <Box w="0.7rem" h="0.7rem" borderRadius="full" bg="#ffbd2e" />
                    <Box w="0.7rem" h="0.7rem" borderRadius="full" bg="#27c93f" />
                  </HStack>
                  <Text fontFamily="mono" fontSize="0.7rem" color="gray.400" fontWeight="extrabold">
                    message_compiler.js — DensTerminal
                  </Text>
                  <Box w="2rem" />
                </Box>

                {/* Code editor body block */}
                <Box p="4.5" fontFamily="mono" fontSize="0.8rem" color="gray.300" overflowX="auto" w="100%">
                  <Text color="gray.500" mb="1.5">// Establish WebSocket direct packet transfer</Text>
                  
                  <HStack gap="2" wrap="wrap">
                    <Text color="#f472b6">const</Text>
                    <Text color="#60a5fa">payload</Text>
                    <Text color="#f472b6">=</Text>
                    <Text color="#c084fc">{"{"}</Text>
                  </HStack>

                  <Box pl="6" py="1.5">
                    <HStack gap="2">
                      <Text color="#60a5fa">recipient:</Text>
                      <Text color="#34d399">"dens.maltos@gmail.com",</Text>
                    </HStack>

                    <Stack gap="2" mt="2" w="100%">
                      <Text color="#60a5fa">messageBody: </Text>
                      <Textarea 
                        required 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        fontSize="0.8rem" 
                        fontFamily="mono"
                        color="white"
                        bg="rgba(255,255,255,0.02)"
                        borderRadius="xl" 
                        p="4"
                        border="1px solid"
                        borderColor="rgba(255,255,255,0.08)"
                        _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #3B82F6" }}
                        placeholder="Write your dynamic message here..." 
                        rows={5}
                        w="100%"
                      />
                    </Stack>
                  </Box>

                  <Text color="#c084fc">{"};"}</Text>

                  <HStack gap="2" mt="3">
                    <Text color="#f472b6">await</Text>
                    <Text color="#fbbf24">sendSecureEmail</Text>
                    <Text color="#c084fc">{"(payload);"}</Text>
                  </HStack>

                  <Separator my="5" color="rgba(255,255,255,0.05)" />

                  <Box display="flex" justifyContent="space-between" alignItems="center" gap="2">
                    <Text fontSize="0.68rem" color="gray.500" fontWeight="bold">
                      *Compiles direct binary package to SMTP relay
                    </Text>
                    <Button 
                      onClick={handleSend} 
                      loading={sending}
                      size="sm"
                      colorPalette="blue"
                      borderRadius="xl"
                      px="6"
                      fontWeight="extrabold"
                      boxShadow="lg"
                      _hover={{ transform: "translateY(-1.5px)" }}
                      transition="all 0.25s ease"
                    >
                      Send Command
                    </Button>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Skeleton>
    </GridItem>
  )
}
