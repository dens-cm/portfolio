import React from 'react'
import * as Chakra from '@chakra-ui/react'

export default function Header() {
  return (
    <Chakra.Box w='100%' p='1.1vw 0' bg='rgba(250, 250, 250, 0.68)' backdropFilter='blur(.5vw)' display='flex' alignItems='center' justifyContent='right' position='sticky' top='0' borderBottom='.1vw solid #dddddd' zIndex='10'>
      <Chakra.Heading m='0 1vw' variant='content' cursor='pointer'>About</Chakra.Heading>
      <Chakra.Heading m='0 1vw' variant='content' cursor='pointer'>Skills</Chakra.Heading>
      <Chakra.Heading m='0 1vw' variant='content' cursor='pointer'>Contact</Chakra.Heading>
    </Chakra.Box>
  )
}
