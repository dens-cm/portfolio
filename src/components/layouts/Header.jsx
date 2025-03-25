import React from 'react'
import * as Chakra from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa6"

export default function Header() {
  return (
    <Chakra.Box w='100%' p='.8vw 0' bg='rgba(250, 250, 250, 0.68)' backdropFilter='blur(.5vw)' display='flex' alignItems='center' justifyContent='right' position='sticky' top='0' borderBottom='.1vw solid #dddddd' zIndex='10'>
      <Chakra.Heading m='0 1vw' variant='content' cursor='pointer'>Skills</Chakra.Heading>
      <Chakra.Heading m='0 1vw' variant='content' cursor='pointer'>Projects</Chakra.Heading>
      <Chakra.Box w='.1vw' h='100%' bg='gray' borderRadius='full'/>
      <Chakra.Button h='2vw' m='0 1vw' leftIcon={<FaPhone/>}>Contact me</Chakra.Button>
    </Chakra.Box>
  )
}
