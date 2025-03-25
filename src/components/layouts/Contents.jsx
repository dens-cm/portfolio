import React from 'react'
import * as Chakra from '@chakra-ui/react'
import { FaUser, FaCode } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import dens from '../../assets/dens.JPG'
import javascript_icon from '../../assets/icon/javascript.png'
import reactjs_icon from '../../assets/icon/reactjs.png'
import chakraui_icon from '../../assets/icon/chakraui.png'
import expressjs_icon from '../../assets/icon/expressjs.png'
import nodejs_icon from '../../assets/icon/nodejs.png'
import mongodb_icon from '../../assets/icon/mongodb.png'
import firebase_icon from '../../assets/icon/firebase.png'
import postgresql_icon from '../../assets/icon/postgresql.png'
import python_icon from '../../assets/icon/python.png'
import git_icon from '../../assets/icon/git.png'

export default function Contents() {
    return (
        <Chakra.Box p='1vw 0vw' display='flex' flexDirection='column'>
            <Chakra.Box mt='3.5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Image src={dens} alt='dens' w='12vw' boxShadow='0vw 0vw .4vw rgba(56, 56, 57, 0.59)' border='.9vw solid rgb(246, 246, 246)' borderRadius='full' />
                <Chakra.Heading mt='2vw' variant='content' fontWeight='500'>Hi there, I'm</Chakra.Heading>
                <Chakra.Heading mt='1.5vw' variant='content' fontSize='xxl' color='highlight'>Dens Maltos</Chakra.Heading>
                <Chakra.Box w='15vw' h='.1vw' mt='.2vw' bg='#D9CAB3' borderRadius='full' />
                <Chakra.Heading mt='.2vw' variant='content' fontWeight='400'>A Web Developer</Chakra.Heading>
            </Chakra.Box>
            <Chakra.Box mt='3.5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Card w='60%' p='1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='6vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaUser size='.8vw'/>About me</Chakra.Heading>
                    <Chakra.Text mt='1vw' textAlign='left'>
                        I am a web developer with experience in MERN stack applications,
                        skilled in JavaScript and responsive design. I am passionate about
                        creating user-friendly solutions and enjoy sharing knowledge with
                        teams. I am dedicated to building applications that meet client needs
                        and contribute to project success.
                    </Chakra.Text>
                    <Chakra.Box w='100%' mt='2vw' display='flex' flexDirection='column'>
                        <hr />
                        <Chakra.Box mt='1vw' display='flex' justifyContent='right'>
                            <Chakra.Button variant='outline' leftIcon={<FaPhone/>}>Contact me!</Chakra.Button>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Card>
            </Chakra.Box>
            <Chakra.Box mt='3.5vw' p='1.5vw 0' bg='white' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Box w='60%' p='1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='4.2vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaCode />Skills</Chakra.Heading>
                    <Chakra.Text mt='2vw' fontWeight='500' fontStyle='italic'>Skills, tools, and technologies I excel at:</Chakra.Text>
                    <Chakra.Box w='100%' mt='1.5vw' display='flex' alignItems='center' justifyContent='space-between'>
                        <Chakra.Box onClick={() => window.open('https://www.w3schools.com/js/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={javascript_icon} alt='JavaScirt Icon' w='3.5vw' borderRadius='.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>JavaScript</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://react.dev/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={reactjs_icon} alt='ReactJS Icon' w='3.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>ReactJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://nodejs.org/en/learn/getting-started/introduction-to-nodejs')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={nodejs_icon} alt='NodeJS Icon' w='3.4vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>NodeJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://expressjs.com/en/starter/installing.html')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={expressjs_icon} alt='ExpressJS Icon' w='3.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>ExpressJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://chakra-ui.com/docs/get-started/installation')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={chakraui_icon} alt='ChakraUI Icon' w='3.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>ChakraUI</Chakra.Text>
                        </Chakra.Box>
                    </Chakra.Box>
                    <Chakra.Box w='100%' mt='1.5vw' display='flex' alignItems='center' justifyContent='space-between'>
                        <Chakra.Box onClick={() => window.open('https://www.mongodb.com/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={mongodb_icon} alt='MongoDB Icon' w='3.5vw' borderRadius='.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>MongoDB</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://firebase.google.com/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={firebase_icon} alt='Firebase Icon' w='3.5vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>Firebase</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://www.postgresql.org/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={postgresql_icon} alt='PostgreSQL Icon' w='3.4vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>PostgreSQL</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://www.python.org/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={python_icon} alt='Python Icon' w='3.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>Python</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://git-scm.com')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{bg: 'hover1', transition: '.5s'}} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={git_icon} alt='Git Icon' w='3.7vw'/>
                            <Chakra.Text mt='.5vw' fontWeight='500'>Git</Chakra.Text>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Box>
            </Chakra.Box>
        </Chakra.Box>
    )
}
