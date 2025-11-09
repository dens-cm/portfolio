// import React from 'react'

import { Badge, Box, Heading, Highlight, Image, Link, List, Separator, Stack, Text } from "@chakra-ui/react"
import { BiCodeAlt, BiCodeBlock, BiLogoFacebookCircle, BiLogoGmail, BiSolidBriefcase, BiSupport } from "react-icons/bi"
import Dens from '@/assets/dens.jpg'
import Sstsco from '@/assets/sstsco.png'
import Nemsu from '@/assets/nemsu.png'
import JS from '@/assets/javascript.png'
import ReactJS from '@/assets/reactjs.png'
import NodeJS from '@/assets/nodejs.gif'
import ExpressJS from '@/assets/expressjs.png'
import ChakraUI from '@/assets/chakraui.png'
import MongoDB from '@/assets/mongodb.webp'
import Firebase from '@/assets/firebase.png'
import PostgreSQL from '@/assets/postgresql.png'
import NetCore from '@/assets/netcore.png'
import Git from '@/assets/git.png'

export default function App() {
    return (
        <Box w='100vw' h='100vh' bg='gray.100' display='flex' flexDir={{ base: 'column', lg: 'row' }} scrollBehavior='smooth' overflow='auto' scrollbar='hidden'>
            <Box w={{ base: '100%', lg: '40%' }} h='100%' p={{ base: '1rem', lg: '1rem 0rem 1rem 1rem' }} display='flex' flexDir='column' alignItems='center' justifyContent='center'>
                <Stack gap='2rem' w='100%' h='100%' p={{ base: '1rem', lg: '3rem 3rem' }} bg='white' alignItems='center' borderRadius='xl' boxShadow='lg' overflow='auto'>
                    <Image w='12rem' h='12rem' src={Dens} alt="Dens" border='1rem solid white' borderRadius='full' shadow='lg' />
                    <Stack gap='0' alignItems='center'>
                        <Heading fontSize='1.5rem' fontWeight='bold' textTransform='uppercase'>Dens Maltos</Heading>
                        <Text color='teal' fontSize='1rem' fontWeight='semibold'>Web Developer</Text>
                    </Stack>
                    <Separator w='100%' h='.1rem' bg='gray.200' variant='solid' borderRadius='full' />
                    <Text fontSize='1rem' textAlign='justify'>
                        Web development enthusiast who loves building and creating functional, user-friendly applications.
                        Skilled in developing MERN stack and .NET applications, and eager to learn new things, especially those
                        related to programming and application development.
                    </Text>
                    <Separator w='100%' h='.1rem' bg='gray.200' variant='solid' borderRadius='full' />
                    <Stack w='100%' alignItems='center'>
                        <Heading w='100%' fontSize='1rem' fontWeight='bold' display='flex' alignItems='center' justifyContent='center' gap='.5rem'><BiSupport /> Feel free to connect</Heading>
                        <Stack direction={{ base: 'column', lg: 'row' }}>
                            <a href="https://web.facebook.com/denden.caibiganmaltos" >
                                <Badge w='100%' color='#1877F2' fontSize='.8rem' fontWeight='bold' p='.5rem' bg='white' display='flex' alignItems='center' justifyContent='center' borderRadius='full' boxShadow='sm' _hover={{ bg: 'gray.200', transition: '.2s' }} transition='.2s'>
                                    <BiLogoFacebookCircle /> Facebook
                                </Badge>
                            </a>
                            <a>
                                <Badge fontSize='.8rem' fontWeight='bold' p='.5rem' bg='white' borderRadius='full' boxShadow='sm' _hover={{ bg: 'gray.200', transition: '.2s' }} transition='.2s'>
                                    <BiLogoGmail /> dens.maltos@gmail.com
                                </Badge>
                            </a>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>

            <Box w={{ base: '100%', lg: '60%' }} h={{ base: '', md: '100%' }} p={{ base: '1rem', lg: '1rem 1rem 1rem 1rem' }} display='flex' flexDirection='column' gap='2.5rem' overflow={{ base: '', lg: 'auto' }}>
                <Stack gap='1rem' w='100%' alignItems='start'>
                    <Badge colorPalette='teal' variant='solid' p='.4rem .8rem' fontSize='.8rem' fontWeight='bold' borderRadius='full' boxShadow='md'>
                        <BiSolidBriefcase /> Career Experience
                    </Badge>

                    <Stack w='100%' gap='1rem' direction={{ sm: 'row' }} bg='white' p='1rem' borderRadius='xl' boxShadow='md'>
                        <Box w='10%' pt='.5rem' borderRight='.1px solid black' alignItems='start'>
                            <a href="https://simplesoftechsolutionsco.com/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image w='90%' src={Sstsco} alt="sstsco" />
                            </a>
                        </Box>
                        <Stack w='90%' gap='0rem'>
                            <Heading fontSize='.8rem' textTransform='uppercase' display='flex' alignItems='center'>
                                <Highlight query='Programmer Analyst' styles={{ fontWeight: 'bold', ml: '.5rem' }}>
                                    (May 2025) Programmer Analyst
                                </Highlight>
                            </Heading>
                            <Text fontSize='.8rem' fontWeight='semibold' fontStyle='italic' textTransform='capitalize'>Simple Softech Solutions Co.</Text>
                            <List.Root pl='2rem' mt='1rem' fontSize='.9rem' textAlign='justify'>
                                <List.Item>Gather and analyze client requirements to understand business and user needs.</List.Item>
                                <List.Item>Design and develop applications that provide tailored solutions to client problems.</List.Item>
                                <List.Item>Collaborate with clients and team members to ensure applications meet functional and usability standards.</List.Item>
                                <List.Item>Implement and maintain applications using .NET and modern web technologies (JavaScript, TypeScript, React, Node.js, etc.).</List.Item>
                                <List.Item>Continuously explore new tools and technologies to improve development efficiency and solution quality.</List.Item>
                            </List.Root>
                        </Stack>
                    </Stack>

                    <Stack w='100%' gap='1rem' direction={{ sm: 'row' }} bg='white' p='1rem' borderRadius='xl' boxShadow='md'>
                        <Box w='10%' pt='.5rem' borderRight='.1px solid black' alignItems='start'>
                            <a href="https://nemsu-tagbina.edu.ph/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image w='70%' src={Nemsu} alt="sstsco" />
                            </a>
                        </Box>
                        <Stack w='90%' gap='0rem'>
                            <Heading fontSize='.8rem' textTransform='uppercase' display='flex' alignItems='center'>
                                <Highlight query='Web Developer' styles={{ fontWeight: 'bold', ml: '.5rem', mr: '.5rem' }}>
                                    (August 2024 - April 2025) Web Developer (Research Project)
                                </Highlight>
                            </Heading>
                            <Text fontSize='.7rem' fontWeight='semibold' fontStyle='italic' textTransform='capitalize'>North Eastern Mindanao State University</Text>
                            <List.Root pl='2rem' mt='1rem' fontSize='.9rem' textAlign='justify'>
                                <List.Item>Built a research-driven web application using JavaScript, React, and Firebase.</List.Item>
                                <List.Item>Collaborated with team members to translate research requirements into functional features.</List.Item>
                                <List.Item>Ensured application compliance with study protocols, supporting successful completion of the research paper.</List.Item>
                            </List.Root>
                        </Stack>
                    </Stack>

                    <Stack w='100%' gap='1rem' direction={{ sm: 'row' }} bg='white' p='1rem' borderRadius='xl' boxShadow='md'>
                        <Box w='10%' pt='.5rem' borderRight='.1px solid black' alignItems='start'>
                            <a href="https://nemsu-tagbina.edu.ph/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image w='70%' src={Nemsu} alt="sstsco" />
                            </a>
                        </Box>
                        <Stack w='90%' gap='0rem'>
                            <Heading fontSize='.8rem' textTransform='uppercase' display='flex' alignItems='center'>
                                <Highlight query='Research Assistant' styles={{ fontWeight: 'bold', ml: '.5rem', mr: '.5rem' }}>
                                    (August - October 2024) Research Assistant
                                </Highlight>
                            </Heading>
                            <Text fontSize='.7rem' fontWeight='semibold' fontStyle='italic' textTransform='capitalize'>North Eastern Mindanao State University</Text>
                            <List.Root pl='2rem' mt='1rem' fontSize='.9rem' textAlign='justify'>
                                <List.Item>Converted academic research into practical applications by developing machine learning–driven solutions.</List.Item>
                                <List.Item>Trained and deployed machine learning models using Python and Flask, solving domain-specific problems.</List.Item>
                                <List.Item>Implemented user-facing web applications by integrating ML models into a React-based frontend.</List.Item>
                                <List.Item>Collaborated with researchers to document methodologies, ensuring technical accuracy and reproducibility.</List.Item>
                            </List.Root>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack gap='1rem' w='100%' alignItems='start'>
                    <Badge colorPalette='teal' variant='solid' p='.4rem .8rem' fontSize='.8rem' fontWeight='bold' borderRadius='full' boxShadow='md'>
                        <BiCodeAlt /> Skills
                    </Badge>

                    <Stack gap='.5rem' w='100%' bg='white' p='1rem' borderRadius='xl' boxShadow='md'>
                        <Text fontSize='.8rem' fontWeight='semibold' textTransform='uppercase'>Tools and Technologies I Work With:</Text>
                        <Stack mt='2rem' gap='3rem'>
                            <Stack direction={{ base: 'column', sm: 'row' }} gap={{ base: '2rem', sm: '0' }} justifyContent='space-around'>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={JS} alt="JS" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>JavaScript</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={ReactJS} alt="ReactJS" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>ReactJS</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={NodeJS} alt="NodeJS" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>NodeJS</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={ExpressJS} alt="ExpressJS" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>ExpressJS</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={ChakraUI} alt="ChakraUI" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>ChakraUI</Text>
                                </Box>
                            </Stack>
                            <Stack direction={{ base: 'column', sm: 'row' }} gap={{ base: '2rem', sm: '0' }} justifyContent='space-around'>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={MongoDB} alt="MongoDB" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>MongoDB</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={Firebase} alt="Firebase" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>Firebase</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={PostgreSQL} alt="PostgreSQL" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>PostgreSQL</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={NetCore} alt="NetCore" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>.Net Core</Text>
                                </Box>
                                <Box display='flex' gap='.5rem' flexDir='column' alignItems='center'>
                                    <Image h='4.5rem' src={Git} alt="Git" borderRadius='xl' />
                                    <Text fontSize='.8rem' fontWeight='bold'>Git</Text>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack gap='1rem' w='100%' alignItems='start'>
                    <Badge colorPalette='teal' variant='solid' p='.4rem .8rem' fontSize='.8rem' fontWeight='bold' borderRadius='full' boxShadow='md'>
                        <BiCodeBlock /> Projects
                    </Badge>

                    <Stack gap='.5rem' w='100%' bg='white' p='1rem' borderRadius='xl' boxShadow='md'>
                        <Text fontSize='.8rem' fontWeight='semibold' textTransform='uppercase'>Projects I’ve worked on and learned from:</Text>
                        <Stack mt='1rem' gap='3rem'>
                            <Stack gap='2rem' direction={{ base: 'column', lg: 'row' }}>
                                <Stack gap='0' w={{ base: '100%', lg: '50%' }}>
                                    <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>
                                        <Link color='teal' href="https://rando-cargo-forwarding.onrender.com/">Rando Cargo Forwarding</Link>
                                    </Heading>
                                    <Text fontSize='.9rem' textAlign='justify'>
                                        A logistics management platform for Rando Cargo Forwarding, enabling streamlined booking, billing, and
                                        delivery tracking workflows. Built the front-end with React/TypeScript and Chakra UI, the back-end with
                                        Node.js/Express and MongoDB, integrated real-time updates with WebSockets and Change Streams.
                                    </Text>
                                </Stack>
                                <Stack w={{ base: '100%', lg: '50%' }}>
                                    <iframe src="https://rando-cargo-forwarding.onrender.com/" style={{ borderRadius: '1rem', border: '.1px solid #0000003e' }} />
                                </Stack>
                            </Stack>
                            <Stack gap='2rem' direction={{ base: 'column', lg: 'row' }}>
                                <Stack gap='0' w={{ base: '100%', lg: '50%' }}>
                                    <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>
                                        <Link color='teal' href="https://tagongon-elementary-school.onrender.com/">Tagongon Elementary School Profiling System</Link>
                                    </Heading>
                                    <Text fontSize='.9rem' textAlign='justify'>
                                        A web-based application designed to manage and secure teacher records and personal information,
                                        ensuring efficient data handling and safe storage. Built with React.js for the frontend and Firebase for
                                        backend services and authentication.
                                    </Text>
                                </Stack>
                                <Stack w={{ base: '100%', lg: '50%' }}>
                                    <iframe src="https://tagongon-elementary-school.onrender.com/" style={{ borderRadius: '1rem', border: '.1px solid #0000003e' }} />
                                </Stack>
                            </Stack>
                            <Stack gap='2rem' direction={{ base: 'column', lg: 'row' }}>
                                <Stack gap='0' w={{ base: '100%', lg: '50%' }}>
                                    <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>
                                        <Link color='teal' href="https://sfapldt.simplesoftech.com/">Simple SFA</Link>
                                    </Heading>
                                    <Text fontSize='.9rem' textAlign='justify'>
                                        A management application designed for a specific company to streamline business operations, monitor
                                        activities, and support sales-related processes. Built using .NET technologies with MS SQL Server as the
                                        backend database.
                                    </Text>
                                </Stack>
                                <Stack w={{ base: '100%', lg: '50%' }}>
                                    <iframe src="https://sfapldt.simplesoftech.com/" style={{ borderRadius: '1rem', border: '.1px solid #0000003e' }} />
                                </Stack>
                            </Stack>
                            <Stack gap='2rem' direction={{ base: 'column', lg: 'row' }}>
                                <Stack gap='0' w={{ base: '100%', lg: '50%' }}>
                                    <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>
                                        <Link color='teal' href="https://tasetem.co/">Tasetemco</Link>
                                    </Heading>
                                    <Text fontSize='.9rem' textAlign='justify'>
                                        A loan application system built with the MERN stack, designed to simplify loan requests and tracking. It provides a user-friendly
                                        interface, secure authentication, and an efficient process for managing applications and approvals.
                                    </Text>
                                </Stack>
                                <Stack w={{ base: '100%', lg: '50%' }}>
                                    <iframe src="https://tasetem.co/" style={{ borderRadius: '1rem', border: '.1px solid #0000003e' }} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}
