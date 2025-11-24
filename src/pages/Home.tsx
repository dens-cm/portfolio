// import React from 'react'
import Header from "@/components/Header"
import Contents from '@/components/Contents'
import Footer from "@/components/Footer";

import { Box, Stack } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box w='100vw' h='100vh'>
            <Stack gap='0' w='100%' h='100%'>
                <Header />
                <Contents />
                <Footer />
            </Stack>
        </Box>
    )
}
