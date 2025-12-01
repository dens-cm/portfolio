// import React from 'react'
import Header from "@/components/Header"
import Contents from '@/components/Contents'

import { Box, Stack } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box w='100vw' h='100vh' bg='rgba(237, 237, 237, 0.84)'>
            <Stack gap='0' w='100%' h='100%'>
                <Header />
                <Contents />
            </Stack>
        </Box>
    )
}
