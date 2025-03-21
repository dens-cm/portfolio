import React from 'react'
import * as Chakra from '@chakra-ui/react'
import dens from '../../assets/dens.JPG'

export default function Contents() {
    return (
        <Chakra.Box p='1vw 1vw' display='flex' flexDirection='column'>
            <Chakra.Box mt='5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Image src={dens} alt='dens' w='12vw' boxShadow='0vw 0vw .4vw rgba(56, 56, 57, 0.59)' border='.9vw solid rgb(246, 246, 246)' borderRadius='full' />
                <Chakra.Heading mt='2vw' variant='content' fontWeight='500'>Hi there, I'm</Chakra.Heading>
                <Chakra.Heading mt='1.5vw' variant='content' fontSize='xxl' color='highlight'>Dens Maltos</Chakra.Heading>
                <Chakra.Box w='15vw' h='.1vw' mt='.2vw' bg='#D9CAB3' borderRadius='full' />
                <Chakra.Heading mt='.2vw' variant='content' fontWeight='400'>A Web Developer</Chakra.Heading>
            </Chakra.Box>
            <Chakra.Box mt='4vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Card w='60%' p='1.5vw'>
                    <Chakra.Heading variant='content' textAlign='center'>About me</Chakra.Heading>
                    <Chakra.Text mt='1vw' textAlign='center'>
                        I am a web developer with experience in MERN stack applications,
                        skilled in JavaScript and responsive design. I am passionate about
                        creating user-friendly solutions and enjoy sharing knowledge with
                        teams. I am dedicated to building applications that meet client needs
                        and contribute to project success.
                    </Chakra.Text>
                </Chakra.Card>
            </Chakra.Box>
        </Chakra.Box>
    )
}
