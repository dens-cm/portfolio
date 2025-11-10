// import React from 'react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import { Badge, Box, Heading, Image, Link, List, Separator, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { BiCodeAlt, BiCodeBlock, BiLogoFacebookCircle, BiLogoGmail, BiLogoLinkedinSquare, BiSolidBriefcase, BiSupport } from "react-icons/bi"
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
        <Box w='100vw' h='100vh' bg='gray.100' display='flex' flexDir={{ base: 'column', xl: 'row' }} scrollBehavior='smooth' overflow='auto' scrollbar='hidden'>
            <Box w={{ base: '100%', xl: '40%' }} p={{ base: '1rem', xl: '1rem 0rem 1rem 1rem' }} display='flex' flexDir='column' alignItems='center' justifyContent='start'>
                <Stack gap='2rem' w='100%' h='100%' p={{ base: '1rem', xl: '2.5rem' }} bg='white' alignItems='center' borderRadius='xl' boxShadow='lg' overflow='auto'>
                    <Stack w='100%' direction={{ base: 'column', sm: 'row' }} display='flex' alignItems='center'>
                        <Image w={{ base: '7rem', sm: '8rem' }} h={{ base: '7rem', sm: '8rem' }} src={Dens} alt="Dens" border={{ base: '.7rem solid white', sm: '.8rem solid white' }} borderRadius='full' shadow='lg' />
                        <Box gap='0' pl='1.5rem' display='flex' flexDir='column' alignItems={{ base: 'center', sm: 'start' }}>
                            <Heading fontSize='1.5rem' fontWeight='bold' textTransform='uppercase'>Dens Maltos</Heading>
                            <Text color='teal' fontSize='1rem' fontWeight='semibold'>Web Developer</Text>
                        </Box>
                    </Stack>

                    <Separator w='100%' h='.1rem' bg='gray.200' variant='solid' borderRadius='full' />
                    <Stack gap='2rem'>
                        <Text fontSize='1rem' textAlign='justify' lineHeight='1.4rem'>
                            Hi, I’m Dens! I love creating clean, functional web applications that make things easier and more enjoyable for
                            people to use. I’m passionate about turning ideas into something that actually works and feels good to interact with.
                        </Text>

                        <Text fontSize='.9rem' fontStyle='italic' lineHeight='1.4rem'>Coding isn’t just about writing lines of code—it’s about solving problems, being creative, and continuously growing as a developer.</Text>
                    </Stack>

                    <Separator w='100%' h='.1rem' bg='gray.200' variant='solid' borderRadius='full' />
                    <Stack w='100%' alignItems={{ base: 'column', sm: 'start' }}>
                        <Heading fontSize='1rem' fontWeight='bold' display='flex' alignItems='center' justifyContent='center' gap='.5rem'><BiSupport /> Feel free to connect</Heading>
                        <Stack direction={{ base: 'column', sm: 'row' }}>
                            <a href="https://web.facebook.com/denden.caibiganmaltos" >
                                <Badge w='100%' color='#1877F2' fontSize='.8rem' fontWeight='bold' p='.5rem' bg='white' display='flex' alignItems='center' justifyContent='center' borderRadius='full' boxShadow='sm' _hover={{ bg: 'gray.200', transition: '.2s' }} transition='.2s'>
                                    <BiLogoFacebookCircle /> Facebook
                                </Badge>
                            </a>
                            <a href="https://www.linkedin.com/in/dens-maltos" >
                                <Badge w='100%' color='#0a66c2' fontSize='.8rem' fontWeight='bold' p='.5rem' bg='white' display='flex' alignItems='center' justifyContent='center' borderRadius='full' boxShadow='sm' _hover={{ bg: 'gray.200', transition: '.2s' }} transition='.2s'>
                                    <BiLogoLinkedinSquare /> LinkedIn
                                </Badge>
                            </a>
                            <a>
                                <Badge w='100%' fontSize='.8rem' fontWeight='bold' p='.5rem' bg='white' display='flex' alignItems='center' justifyContent='center' borderRadius='full' boxShadow='sm' userSelect="text">
                                    <BiLogoGmail /> dens.maltos@gmail.com
                                </Badge>
                            </a>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>

            <Box w={{ base: '100%', xl: '60%' }} h={{ base: '', xl: '100%' }} p={{ base: '1rem', lg: '1rem 1rem 1rem 1rem' }} display='flex' flexDirection='column' gap='2.5rem' overflow={{ base: '', xl: 'auto' }}>
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
                            <Stack gap='0' direction={{ base: 'column', md: 'row' }} alignItems='left' justifyContent='space-between'>
                                <Heading display={{ base: 'flex', md: 'none' }} fontSize='.7rem' textTransform='uppercase'>May 2025 - Present</Heading>
                                <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Programmer Analyst</Heading>
                                <Heading display={{ base: 'none', md: 'flex' }} fontSize='.8rem' textTransform='uppercase'>May 2025 - Present</Heading>
                            </Stack>
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
                            <Stack gap='0' direction={{ base: 'column', md: 'row' }} alignItems='left' justifyContent='space-between'>
                                <Heading display={{ base: 'flex', md: 'none' }} fontSize='.7rem' textTransform='uppercase'>November 2024 - April 2025</Heading>
                                <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Web Developer (Research Project)</Heading>
                                <Heading display={{ base: 'none', md: 'flex' }} fontSize='.8rem' textTransform='uppercase'>November 2024 - April 2025</Heading>
                            </Stack>
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
                            <Stack gap='0' direction={{ base: 'column', md: 'row' }} alignItems='left' justifyContent='space-between'>
                                <Heading display={{ base: 'flex', md: 'none' }} fontSize='.7rem' textTransform='uppercase'>August - October 2024</Heading>
                                <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Research Assistant</Heading>
                                <Heading display={{ base: 'none', md: 'flex' }} fontSize='.8rem' textTransform='uppercase'>August - October 2024</Heading>
                            </Stack>
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
                        <Stack m="2rem 0 1rem 0" align="center">
                            <Wrap rowGap="3rem" gap='2rem' justify='center'>
                                {[
                                    { name: "JavaScript", img: JS },
                                    { name: "ReactJS", img: ReactJS },
                                    { name: "NodeJS", img: NodeJS },
                                    { name: "ExpressJS", img: ExpressJS },
                                    { name: "ChakraUI", img: ChakraUI },
                                    { name: "MongoDB", img: MongoDB },
                                    { name: "Firebase", img: Firebase },
                                    { name: "PostgreSQL", img: PostgreSQL },
                                    { name: ".NET Core", img: NetCore },
                                    { name: "Git", img: Git },
                                ].map((skill) => (
                                    <WrapItem key={skill.name}>
                                        <Box display="flex" flexDir="column" alignItems="center" gap=".5rem" textAlign="center">
                                            <Image h="4.3rem" src={skill.img} alt={skill.name} borderRadius="xl" />
                                            <Text fontSize=".8rem" fontWeight="bold">{skill.name}</Text>
                                        </Box>
                                    </WrapItem>
                                ))}
                            </Wrap>
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
