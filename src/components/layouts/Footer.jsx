import React from 'react'
import * as Chakra from '@chakra-ui/react'

export default function Footer() {
    return (
        <Chakra.Box w='100%' mt='.1vw' p='1vw 2.5vw' display='flex' alignItems='center' justifyContent='space-between'>
            <Chakra.Text fontSize='xs'>
                <Chakra.Highlight query='2025' styles={{ fontSize: 'xs', fontWeight: 'bold', color: 'highlight' }}>
                    @DENS 2025
                </Chakra.Highlight>
            </Chakra.Text>
            <Chakra.Text fontSize='xs'>
                Designed in 
                <Chakra.Link href='https://www.figma.com/' color='#ff7262' fontWeight='500' isExternal>Figma</Chakra.Link> and built with <Chakra.Link href='https://react.dev/' color='#7cc5d9' fontWeight='500' isExternal>ReactJS</Chakra.Link> and <Chakra.Link href='https://www.chakra-ui.com/' color='teal' fontWeight='500' isExternal>Chakra UI</Chakra.Link> in <Chakra.Link href='https://code.visualstudio.com/' color='#0078d7' fontWeight='500' isExternal>VS Code</Chakra.Link>.
            </Chakra.Text> 
        </Chakra.Box>
    )
}
