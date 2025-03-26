import React from 'react'
import * as Chakra from '@chakra-ui/react'
import { FaUser, FaCode, FaBriefcase, FaLaptopCode, FaHeadset, FaFacebook, FaInstagram, FaSkype } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
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
import nemsu_icon from '../../assets/icon/nemsu.png'
import tasetemco from '../../assets/tasetemco.jpg'
import tes from '../../assets/tes.png'

export default function Contents() {
    return (
        <Chakra.Box p='1vw 0vw 0 0' display='flex' flexDirection='column'>
            {/* Hero */}
            <Chakra.Box mt='3.5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Image src={dens} alt='dens' w='12vw' boxShadow='0vw 0vw .4vw rgba(56, 56, 57, 0.59)' border='.9vw solid rgb(246, 246, 246)' borderRadius='full' />
                <Chakra.Heading mt='2vw' variant='content' fontWeight='500'>Hi there, I'm</Chakra.Heading>
                <Chakra.Heading mt='1.5vw' variant='content' fontSize='xxl' color='highlight'>Dens Maltos</Chakra.Heading>
                <Chakra.Box w='15vw' h='.1vw' mt='.2vw' bg='#D9CAB3' borderRadius='full' />
                <Chakra.Heading mt='.2vw' variant='content' fontWeight='400'>A Web Developer</Chakra.Heading>
            </Chakra.Box>
            {/* About me */}
            <Chakra.Box mt='3.5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Card w='60%' p='1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='6vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaUser size='.8vw' />About me</Chakra.Heading>
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
                            <Chakra.Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant='outline' leftIcon={<FaPhone />}>Contact me!</Chakra.Button>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Card>
            </Chakra.Box>
            {/* Skills */}
            <Chakra.Box id='skills' mt='3.5vw' p='1.5vw 0' bg='white' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Box w='60%' p='1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='4.2vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaCode />Skills</Chakra.Heading>
                    <Chakra.Text mt='2vw' fontWeight='400'>Skills, tools, and technologies I excel at:</Chakra.Text>
                    <Chakra.Box w='100%' mt='1.5vw' display='flex' alignItems='center' justifyContent='space-between'>
                        <Chakra.Box onClick={() => window.open('https://www.w3schools.com/js/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={javascript_icon} alt='JavaScirt Icon' w='3.5vw' borderRadius='.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>JavaScript</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://react.dev/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={reactjs_icon} alt='ReactJS Icon' w='3.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>ReactJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://nodejs.org/en/learn/getting-started/introduction-to-nodejs')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={nodejs_icon} alt='NodeJS Icon' w='3.4vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>NodeJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://expressjs.com/en/starter/installing.html')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={expressjs_icon} alt='ExpressJS Icon' w='3.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>ExpressJS</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://chakra-ui.com/docs/get-started/installation')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={chakraui_icon} alt='ChakraUI Icon' w='3.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>ChakraUI</Chakra.Text>
                        </Chakra.Box>
                    </Chakra.Box>
                    <Chakra.Box w='100%' mt='1.5vw' display='flex' alignItems='center' justifyContent='space-between'>
                        <Chakra.Box onClick={() => window.open('https://www.mongodb.com/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={mongodb_icon} alt='MongoDB Icon' w='3.5vw' borderRadius='.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>MongoDB</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://firebase.google.com/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={firebase_icon} alt='Firebase Icon' w='3.5vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>Firebase</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://www.postgresql.org/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={postgresql_icon} alt='PostgreSQL Icon' w='3.4vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>PostgreSQL</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://www.python.org/')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={python_icon} alt='Python Icon' w='3.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>Python</Chakra.Text>
                        </Chakra.Box>
                        <Chakra.Box onClick={() => window.open('https://git-scm.com')} p='1vw .7vw .5vw .7vw' display='flex' flexDirection='column' alignItems='center' cursor='pointer' _hover={{ bg: 'hover1', transition: '.5s' }} transition='.3s' borderRadius='1vw'>
                            <Chakra.Image src={git_icon} alt='Git Icon' w='3.7vw' />
                            <Chakra.Text mt='.5vw' fontWeight='500'>Git</Chakra.Text>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Box>
            </Chakra.Box>
            {/* Work History */}
            <Chakra.Box mt='3.5vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Card w='60%' p='1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='7.2vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaBriefcase size='.8vw' />Work History</Chakra.Heading>
                    <Chakra.Box w='100%' mt='3.5vw' p='0 1vw' display='flex'>
                        <Chakra.Box w='7%' pr='1vw' display='flex' alignItems='start' justifyContent='center'>
                            <Chakra.Image onClick={() => window.open('https://nemsu-tagbina.edu.ph/')} src={nemsu_icon} alt='Nemsu Logo' w='95%' cursor='pointer' _hover={{ w: '100%', boxShadow: '0vw .2vw .5vw rgba(106, 106, 106, 0.31)', borderRadius: 'full', transition: '.3s' }} transition='.2s' />
                        </Chakra.Box>
                        <Chakra.Box w='93%' pl='1vw' borderLeft='.1vw solid #b0b3b5'>
                            <Chakra.Box display='flex' justifyContent='space-between'>
                                <Chakra.Heading variant='content'>Full-Stack Web Developer</Chakra.Heading>
                                <Chakra.Heading variant='content' fontSize='sm' fontWeight='400'>Aug 2024 - <strong>Present</strong></Chakra.Heading>
                            </Chakra.Box>
                            <Chakra.Text variant='caption' fontSize='sm'><Chakra.Link href='https://nemsu-tagbina.edu.ph/' isExternal>North Eastern Mindanao State University</Chakra.Link></Chakra.Text>
                            <Chakra.UnorderedList mt='.8vw' pl='1vw' fontSize="sm" color='primary'>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Develop scalable and maintainable full-stack web applications
                                        using MongoDB, Express.js, React.js, and Node.js (MERN).
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Enhanced user experience by implementing
                                        responsive web design and optimizing website performance.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Developed custom web applications, resulting in tailored
                                        solutions for client needs.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Convert Figma designs into responsive web applications using React.js, Chakra UI,
                                        and modern CSS techniques.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>Provided front-end development support,
                                        creating visually appealing designs that aligned with brand standards.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Craft intuitive user interfaces, focusing on usability and
                                        accessibility standards.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>Facilitated knowledge sharing sessions on modern web technologies,
                                        fostering a culture of continuous learningamong the team.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                            </Chakra.UnorderedList>
                        </Chakra.Box>
                    </Chakra.Box>
                    <Chakra.Box w='100%' m='3vw 0vw' p='0 1vw' display='flex'>
                        <Chakra.Box w='7%' pr='1vw' display='flex' alignItems='start' justifyContent='right' />
                        <Chakra.Box w='93%' pl='1vw' borderLeft='.1vw solid #b0b3b5'>
                            <Chakra.Box display='flex' justifyContent='space-between'>
                                <Chakra.Heading variant='content'>Research Assistant </Chakra.Heading>
                                <Chakra.Heading variant='content' fontSize='sm' fontWeight='400'>Aug 2024 - <strong>Oct 2024</strong></Chakra.Heading>
                            </Chakra.Box>
                            <Chakra.Text variant='caption' fontSize='sm'><Chakra.Link href='https://nemsu-tagbina.edu.ph/' isExternal>North Eastern Mindanao State University</Chakra.Link></Chakra.Text>
                            <Chakra.UnorderedList mt='.8vw' pl='1vw' fontSize="sm" color='primary'>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Participated actively in regular meetings with fellow
                                        researchers to discuss project updates, challenges faced, and
                                        lessons learned during ongoing activities.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Organized research materials, maintaining a well-ordered workspace conducive to productivity.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Conducted literature reviews to support hypothesis development and identify gaps in existing knowledge.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Contributed to the publication of research articles in peer-reviewed journals,
                                        showcasing expertise in various topics.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                                <Chakra.ListItem>
                                    <Chakra.Text>
                                        Utilized statistical software for data analysis, generating accurate insights into complex datasets.
                                    </Chakra.Text>
                                </Chakra.ListItem>
                            </Chakra.UnorderedList>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Card>
            </Chakra.Box>
            {/* Projects */}
            <Chakra.Box id='projects' mt='3.5vw' p='1.5vw 0' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Box w='60%' p='1.5vw 0 1.5vw 1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading w='5.2vw' p='.4vw .6vw' variant='content' bg='hover' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'><FaLaptopCode />Projects</Chakra.Heading>
                    <Chakra.Text mt='2vw' fontWeight='400'>A few projects I’ve worked on and learned from:</Chakra.Text>
                    <Chakra.Box mt='1.5vw' display='flex' justifyContent='space-between'>
                        <Chakra.Box w='48%'>
                            <Chakra.Heading><Chakra.Link href='https://tasetem.co/' isExternal>Tasetemco</Chakra.Link></Chakra.Heading>
                            <Chakra.Text mt='.5vw'>
                                A loan application system built with the MERN stack, designed to simplify
                                loan requests and tracking. It provides a user-friendly interface, secure authentication,
                                and an efficient process for managing applications and approvals.
                            </Chakra.Text>
                            <Chakra.Box mt='1vw' display='flex' flexWrap='wrap'>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>ReactJS</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>NodeJS</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>ExpressJS</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>MongoDB</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>JavaScript</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>ChakraUI</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>Styled Components</Chakra.Text>
                            </Chakra.Box>
                        </Chakra.Box>
                        <Chakra.Box w='48%'>
                            <Chakra.Card w='100%' h='15vw' bg='none' display='flex' alignItems='center' justifyContent='center' boxShadow='0'>
                                <Chakra.Image onClick={() => window.open('https://tasetem.co/')} src={tasetemco} alt='tasetemco' w='90%' h='85%' borderRadius='1vw' cursor='pointer' boxShadow='0vw .2vw .5vw rgba(56, 56, 57, 0.09)' _hover={{ w: '95%', h: '90%', boxShadow: '0vw .2vw .5vw rgba(56, 56, 57, 0.09)', transition: '.3s' }} transition='.2s' />
                            </Chakra.Card>
                        </Chakra.Box>
                    </Chakra.Box>
                    <Chakra.Box mt='7vw' display='flex' justifyContent='space-between'>
                        <Chakra.Box w='48%'>
                            <Chakra.Heading><Chakra.Link href='https://tagongon-elementary-school.onrender.com/' isExternal>Tagongon Elementary School Profiling System</Chakra.Link></Chakra.Heading>
                            <Chakra.Text mt='.5vw'>
                                A Teacher Profiling System for Tagongon Elementary School, built with ReactJS and Firebase,
                                allowing for efficient and secure management of teacher data.
                            </Chakra.Text>
                            <Chakra.Box mt='1vw' display='flex' flexWrap='wrap'>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>ReactJS</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>NodeJS</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>Firebase</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>JavaScript</Chakra.Text>
                                <Chakra.Text mb='.5vw' mr='.5vw' p='.4vw 1vw' bg='hover1' fontSize='sm' fontWeight='500' textAlign='center' display='flex' alignItems='center' justifyContent='space-between' borderRadius='full'>ChakraUI</Chakra.Text>
                            </Chakra.Box>
                        </Chakra.Box>
                        <Chakra.Box w='48%'>
                            <Chakra.Card w='100%' h='15vw' bg='none' display='flex' alignItems='center' justifyContent='center' boxShadow='0'>
                                <Chakra.Image onClick={() => window.open('https://tagongon-elementary-school.onrender.com/')} src={tes} alt='tasetemco' w='90%' h='85%' borderRadius='1vw' cursor='pointer' boxShadow='0vw .2vw .5vw rgba(56, 56, 57, 0.09)' _hover={{ w: '95%', h: '90%', boxShadow: '0vw .2vw .5vw rgba(56, 56, 57, 0.09)', transition: '.3s' }} transition='.2s' />
                            </Chakra.Card>
                        </Chakra.Box>
                    </Chakra.Box>
                </Chakra.Box>
            </Chakra.Box>
            {/* Contact */}
            <Chakra.Box id='contact' mt='2.5vw' p='1.5vw 0' bg='white' display='flex' justifyContent='center'>
                <Chakra.Box w='60%' p='1.5vw 0 1.5vw 1.5vw' display='flex' flexDirection='column' alignItems='flex-start'>
                    <Chakra.Heading variant='content' textAlign='center' display='flex' alignItems='center'> <Chakra.Text mr='.5vw' fontSize='1vw'><FaHeadset /></Chakra.Text>Feel free to connect</Chakra.Heading>
                    <Chakra.Text w='65%' mt='1.5vw'>I’d be happy to connect! Whether you’re looking for a developer, have a question, or just want to chat, feel free to reach out.</Chakra.Text>
                    <Chakra.Box display='flex'>
                        <Chakra.Card onClick={() => window.open('https://www.facebook.com/denden.caibiganmaltos')} mt='1.5vw' p='.4vw .5vw .4vw .4vw' bg='white' cursor='pointer' _hover={{ bg: 'hover', transition: '.3s' }} transition='.2s'>
                            <Chakra.Text color='#4267B2' fontWeight='500' display='flex' alignItems='center'><Chakra.Text mr='.3vw' color='#4267B2' fontSize='1.3vw'><FaFacebook /></Chakra.Text>Facebook</Chakra.Text>
                        </Chakra.Card>
                        <Chakra.Card onClick={() => window.open('https://www.instagram.com/dens.cm/')} mt='1.5vw' ml='1vw' p='.4vw .5vw .4vw .4vw' bg='white' cursor='pointer' _hover={{ bg: 'hover', transition: '.3s' }} transition='.2s'>
                            <Chakra.Text color='#C13584' fontWeight='500' display='flex' alignItems='center'><Chakra.Text mr='.3vw' color='#C13584' fontSize='1.3vw'><FaInstagram /></Chakra.Text>Instagram</Chakra.Text>
                        </Chakra.Card>
                        <Chakra.Card onClick={() => window.open('https://join.skype.com/invite/vuGNPxmtHd4j')} mt='1.5vw' ml='1vw' p='.4vw .5vw .4vw .4vw' bg='white' cursor='pointer' _hover={{ bg: 'hover', transition: '.3s' }} transition='.2s'>
                            <Chakra.Text color='#00AFF0' fontWeight='500' display='flex' alignItems='center'><Chakra.Text mr='.3vw' color='#00AFF0' fontSize='1.3vw'><FaSkype /></Chakra.Text>Skype</Chakra.Text>
                        </Chakra.Card>
                    </Chakra.Box>
                    <Chakra.Card mt='1.5vw' p='.4vw .7vw .4vw .7vw'>
                        <Chakra.Text fontWeight='500' display='flex' alignItems='center'><Chakra.Text mr='.3vw' fontSize='1vw'><IoMail /></Chakra.Text>dens.maltos@gmail.com</Chakra.Text>
                    </Chakra.Card>
                </Chakra.Box>
            </Chakra.Box>
        </Chakra.Box>
    )
}
