// import React from 'react'
import { Box, Link, Text  } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box 
            className="no-print"
            w='100%' 
            bg={{ base: "white", _dark: "rgba(17, 24, 39, 0.75)" }} 
            p='1rem'
            display='flex' 
            alignItems='center' 
            justifyContent='space-between' 
            borderRadius='xl' 
            boxShadow='md'
            border="1px solid"
            borderColor={{ base: "gray.100", _dark: "rgba(255, 255, 255, 0.05)" }}
            color={{ base: "gray.600", _dark: "gray.400" }}
            backdropFilter="blur(10px)"
        >
            <Text fontSize='.8rem'>
                Designed and built using{' '}
                <Link 
                    href='https://react.dev/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    fontWeight='bold'
                    color={{ base: "blue.600", _dark: "blue.400" }}
                    _hover={{ textDecoration: "underline", color: "blue.500" }}
                >
                    ReactJS
                </Link>{' '}
                and{' '}
                <Link 
                    href='https://www.chakra-ui.com/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    fontWeight='bold'
                    color={{ base: "blue.600", _dark: "blue.400" }}
                    _hover={{ textDecoration: "underline", color: "blue.500" }}
                >
                    Chakra UI
                </Link>
            </Text>
            <Text fontSize='.8rem' fontWeight="semibold" letterSpacing="wider">@Dens 2025</Text>
        </Box>
    )
}
