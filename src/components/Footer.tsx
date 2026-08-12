// import React from 'react'
import { Box, Link, Text } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box
            className="no-print"
            w='100%'
            p='1rem 0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
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
                    React
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
            <Text fontSize='.65rem' fontWeight="semibold" textTransform='uppercase' letterSpacing="wider">@Dens {new Date().getFullYear()}</Text>
        </Box>
    )
}
