import React from 'react'
import * as Chakra from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa6"
import dens_logo from '../../assets/logo/dens-logo.svg'

export default function Header() {
  return (
    <Chakra.Box w='100%' p='.8vw 0' bg='rgba(250, 250, 250, 0.54)' backdropFilter='blur(.5vw)' display='flex' alignItems='center' justifyContent='space-between' position='sticky' top='0' borderBottom='.1vw solid #dddddd' zIndex='10'>
      <Chakra.Image src={dens_logo} alt='Logo' w='3.5vw' ml='2.5vw' />
      <Chakra.Box display='flex' alignItems='center' justifyContent='right'>
        <Chakra.Heading m='0 1vw' variant='content' fontWeight='500' cursor='pointer' _hover={{ color: 'highlight', transition: '.3s' }} transition='.3s'>Skills</Chakra.Heading>
        <Chakra.Heading m='0 1vw' variant='content' fontWeight='500' cursor='pointer' _hover={{ color: 'highlight', transition: '.3s' }} transition='.3s'>Projects</Chakra.Heading>
        <Chakra.Box w='.1px' h='2vw' bg='gray' borderRadius='full' />
        <Chakra.Button m='0 2.5vw 0 1vw' leftIcon={<FaPhone />}>Contact me</Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  )
}
