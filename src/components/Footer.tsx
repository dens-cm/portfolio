// import React from 'react'
import { Box, Link, Text  } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box w='100%' bg='white' p='1rem' display='flex' alignItems='center' justifyContent='space-between' borderRadius='xl' boxShadow='md'>
            <Text fontSize='.8rem'>Designed and built using <Link href='https://react.dev/' target='_blank' rel='noopener noreferrer' fontWeight='bold'>ReactJS</Link> and <Link href='https://www.chakra-ui.com/' target='_blank' rel='noopener noreferrer' fontWeight='bold'>Chakra UI</Link></Text>
            <Text fontSize='.8rem' textTransform='uppercase'>@Dens 2025</Text>
        </Box>
    )
}
