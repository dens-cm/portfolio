import React, { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  VStack,
  IconButton
} from "@chakra-ui/react"
import { BiX, BiPaperPlane } from "react-icons/bi"
import { useColorModeValue } from '@/components/ui/color-mode'

interface RequestPDFDialogProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (email: string) => Promise<void>
}

export default function RequestPDFDialog({ isOpen, onClose, onSubmit }: RequestPDFDialogProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const bg = useColorModeValue('white', 'gray.900')
  const overlayBg = useColorModeValue('rgba(255, 255, 255, 0.4)', 'rgba(0, 0, 0, 0.6)')
  const borderColor = useColorModeValue('gray.200', 'rgba(255, 255, 255, 0.1)')
  const textMuted = useColorModeValue('gray.500', 'gray.400')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await onSubmit(email)
    setIsSubmitting(false)
    setEmail('')
    onClose()
  }

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      zIndex="1000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={overlayBg}
      backdropFilter="blur(8px)"
      animation="fadeIn 0.2s ease-out"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        bg={bg}
        p="2rem"
        borderRadius="sm"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="2xl"
        w="90%"
        maxW="400px"
        position="relative"
        animation="slideUp 0.3s ease-out"
      >
        <IconButton
          variant="ghost"
          position="absolute"
          top="1rem"
          right="1rem"
          onClick={onClose}
          size="xs"
          aria-label="Close"
          disabled={isSubmitting}
        >
          <BiX />
        </IconButton>

        <VStack gap="1.5rem" align="stretch">
          <Box>
            <Heading fontSize='.9rem' mb="0.5rem" fontWeight="bold">Request Resume PDF</Heading>
            <Text fontSize=".85rem" color={textMuted}>
              Enter your email address below, and I will send a PDF copy of my resume directly to your inbox.
            </Text>
          </Box>

          <Box>
            <Text fontSize=".75rem" fontWeight="semibold" mb="0.5rem">Your Email Address</Text>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6" }}
            />
          </Box>

          <Button
            type="submit"
            colorPalette="blue"
            w="100%"
            loading={isSubmitting}
            loadingText="Sending..."
          >
            <BiPaperPlane /> Request PDF
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}
