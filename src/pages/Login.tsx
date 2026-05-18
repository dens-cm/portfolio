import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Heading, Input, Stack, Text, Field } from "@chakra-ui/react"
import { supabase } from '@/lib/supabase'
import { toaster } from "@/components/ui/toaster"
import { useColorModeValue, ColorModeButton } from "@/components/ui/color-mode"
import { BiLockAlt, BiUser, BiArrowBack } from "react-icons/bi"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Dynamic theme colors
  const bg = useColorModeValue('#F8FAFC', '#0B0F19')
  const cardBg = useColorModeValue('white', 'rgba(17, 24, 39, 0.75)')
  const cardBorder = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.05)')
  const textMuted = useColorModeValue('gray.500', 'gray.400')

  // Check if already authenticated
  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        navigate('/admin')
      }
    }
    checkUser()
  }, [navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      toaster.create({ title: 'Wait!', description: 'Email and password are required.', type: 'warning' })
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error

      toaster.create({ title: 'Success!', description: 'Welcome back, Dens!', type: 'success' })
      navigate('/admin')
    } catch (err: any) {
      console.error(err)
      toaster.create({ title: 'Login Failed', description: err.message || 'Invalid credentials.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      w="100vw"
      h="100vh"
      bg={bg}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      px="4"
      transition="background 0.3s ease"
    >
      {/* Top Controls */}
      <Box position="absolute" top="1.5rem" left="1.5rem">
        <Button
          onClick={() => navigate('/')}
          size="sm"
          variant="ghost"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          gap="1"
        >
          <BiArrowBack /> View Portfolio
        </Button>
      </Box>
      <Box position="absolute" top="1.5rem" right="1.5rem">
        <ColorModeButton />
      </Box>

      {/* Login Card */}
      <Box
        w="100%"
        maxW="26rem"
        bg={cardBg}
        p="2.5rem 2.2rem"
        borderRadius="2xl"
        boxShadow="xl"
        border="1px solid"
        borderColor={cardBorder}
        backdropFilter="blur(16px)"
      >
        <Stack gap="6" as="form" onSubmit={handleLogin}>
          <Box textAlign="center">
            <Heading fontSize="1.6rem" fontWeight="extrabold" display="flex" alignItems="center" justifyContent="center" gap="2">
              <BiLockAlt color="#3B82F6" /> Admin Portal
            </Heading>
            <Text mt="0.4rem" fontSize="0.85rem" color={textMuted}>
              Enter credentials to manage your portfolio CMS
            </Text>
          </Box>

          <Stack gap="4">
            {/* Email Field */}
            <Field.Root>
              <Field.Label fontSize="0.8rem" fontWeight="bold">Email Address</Field.Label>
              <Box w='100%' display="flex" alignItems="center" position="relative">
                <Box position="absolute" left="3.5" zIndex="1" color={textMuted}>
                  <BiUser size="1.1rem" />
                </Box>
                <Input
                  w='100%'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dens.maltos@gmail.com"
                  pl="10"
                  borderRadius="xl"
                  fontSize="0.85rem"
                  _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #3B82F6" }}
                />
              </Box>
            </Field.Root>

            {/* Password Field */}
            <Field.Root>
              <Field.Label fontSize="0.8rem" fontWeight="bold">Password</Field.Label>
              <Box w='100%' display="flex" alignItems="center" position="relative">
                <Box position="absolute" left="3.5" zIndex="1" color={textMuted}>
                  <BiLockAlt size="1.1rem" />
                </Box>
                <Input
                w='100%' 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  pl="10"
                  borderRadius="xl"
                  fontSize="0.85rem"
                  _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #3B82F6" }}
                />
              </Box>
            </Field.Root>
          </Stack>

          <Button
            type="submit"
            loading={loading}
            loadingText="Authenticating"
            colorPalette="blue"
            borderRadius="xl"
            w="100%"
            py="6"
            fontWeight="bold"
            fontSize="0.9rem"
            boxShadow="md"
            _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
            transition="all 0.2s"
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
