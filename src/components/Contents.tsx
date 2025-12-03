// import React from 'react'

import { Avatar, Box, Heading, Highlight, HStack, Image, List, Separator, Stack, Text } from "@chakra-ui/react"
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare, BiSolidEnvelope, BiSolidFolderOpen, BiSolidGraduation, BiSolidMap, BiSolidBarChartAlt2, BiLinkExternal, BiCodeAlt, BiLogoNodejs, BiLogoGit, BiLogoMongodb } from "react-icons/bi"
import { SiDotnet } from "react-icons/si"
import Dens from '@/assets/dens.jpeg'
import Nemsu from '@/assets/nemsu.png'
import RcfLogo from '@/assets/projects/randocargoforwarding.png'
import TesLogo from '@/assets/projects/tes.png'
import SfaLogo from '@/assets/projects/simplesfa.png'
import TasetemcoLogo from '@/assets/projects/tasetemco.png'

export default function Contents() {

    return (
        <Box w='100%' h='100%' p={{ base: '4.4rem 1rem 1rem 1rem', sm: '7rem 0' }} display='flex' flexDir='column' alignItems='center' overflow='auto' scrollbar='hidden'>

            <Box w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} bg='rgba(255, 255, 255, 1)' p='2rem' borderRadius='xl' boxShadow='md'>
                <Box display='flex' flexDir='column' alignItems='center' justifyContent='center'>
                    <Avatar.Root w='9rem' h='9rem' border=".7rem solid rgba(38, 60, 111, 0.02)" boxShadow='xl'>
                        <Avatar.Fallback name="Dens Maltos" />
                        <Avatar.Image src={Dens} alt="Dens Maltos" />
                    </Avatar.Root>

                    <Box mt='1rem'>
                        <Heading fontSize='1.3rem' fontWeight='bold' textAlign='center'>Dens Maltos</Heading>
                        <Heading fontSize='.9rem' fontWeight='semibold' textAlign='center'>Web Developer</Heading>
                    </Box>

                    <Separator w='100%' mt='1.5rem' />

                    <Box mt='1.5rem' p='0 1rem'>
                        <Text fontSize='1rem' textAlign='center'>
                            Hi, I’m Dens! I love creating clean, functional web applications that make things easier and more enjoyable for people to use.
                            I’m passionate about turning ideas into something that actually works and feels good to interact with.
                        </Text>
                    </Box>

                    <Separator w='100%' mt='1.5rem' />

                    <Box mt='1.5rem' p='0 1rem'>
                        <HStack gap='2'>
                            <a href="https://www.facebook.com/denden.caibiganmaltos/" target="_blank" rel="noopener noreferrer">
                                <Text color='#1877F2' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'>
                                    <BiLogoFacebookCircle /> Facebook
                                </Text>
                            </a>
                            <Separator orientation='vertical' h='5' />
                            <a href="www.linkedin.com/in/dens-maltos" target="_blank" rel="noopener noreferrer">
                                <Text color='#004182' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'>
                                    <BiLogoLinkedinSquare /> Linkedin</Text>
                            </a>
                            <Separator orientation='vertical' h='5' />
                            <a href="https://github.com/dens-cm" target="_blank" rel="noopener noreferrer">
                                <Text color='#333' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'>
                                    <BiLogoGithub /> Github
                                </Text>
                            </a>
                            <Separator orientation='vertical' h='5' />
                            <a>
                                <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'>
                                    <BiSolidEnvelope /> Contact
                                </Text>
                            </a>
                        </HStack>
                    </Box>

                    <Separator w='100%' mt='1.5rem' />

                    <Box mt='1.5rem' p='0 1rem'>
                        <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'><BiSolidMap /> Davao City, Philippines</Text>
                    </Box>
                </Box>
            </Box>

            <Box w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} mt='3rem' gap='1rem' display='flex' flexDir='column' alignItems='start'>
                <Heading bg='white' p='.1rem 1rem' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.5rem' borderRadius='full' boxShadow='lg'><BiSolidFolderOpen /> More about me</Heading>

                <Box bg='white' w='100%' p='2rem' borderRadius='xl' boxShadow='md'>
                    <Stack gap='1.5rem'>

                        {/* Education Section */}
                        <Box>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidGraduation /> Education</Heading>
                            <Separator />
                            <Text mt='.5rem' fontSize='.7rem' fontWeight='semibold' fontStyle='italic'>Obtained a Bachelor’s Degree at:</Text>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Box>
                                    <Text fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ color: 'blue.700' }}>
                                        <a href="https://nemsu-tagbina.edu.ph/" target="_blank" rel="noopener noreferrer">
                                            North Eastern Mindanao State Universiy
                                        </a>
                                    </Text>
                                    <Text fontSize='.8rem' fontWeight='' textTransform='capitalize'>B.S. Computer Science | Graduated at year 2024</Text>
                                </Box>
                                <Box>
                                    <a href="https://nemsu-tagbina.edu.ph/" target="_blank" rel="noopener noreferrer">
                                        <Image p='.2rem' w='4rem' src={Nemsu} alt="Nemsu" borderRadius='xl' _hover={{ boxShadow: 'lg' }} transition='.3s' />
                                    </a>
                                </Box>
                            </Box>
                        </Box>

                        {/* Career Experience Section */}
                        <Box>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidBarChartAlt2 /> Career Experience</Heading>
                            <Separator />
                            <List.Root p='0 1.5rem' gap='2rem'>
                                <List.Item>
                                    <Text mt='.5rem' fontSize='.9rem'>
                                        <Highlight query={['August', '2024']} styles={{ fontWeight: 'semibold' }}>
                                            In August 2024, I landed my first job at the
                                        </Highlight>
                                        {' '}
                                        <a href="https://nemsu-tagbina.edu.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                            university
                                        </a>
                                        {' '}
                                        <Highlight query={['Research Assistant']} styles={{ fontWeight: 'semibold' }}>
                                            where I graduated, working as a Research Assistant.
                                        </Highlight>
                                        {' '}
                                    </Text>
                                    <Text mt='1rem' fontSize='.9rem' fontStyle='italic'>
                                        <Highlight query='Web Development' styles={{ fontWeight: 'semibold' }}>
                                            Yes, a Research Assistant! But the primary focus was actually on Web Development.
                                        </Highlight>
                                    </Text>
                                    <Text mt='.1rem' fontSize='.9rem' fontWeight='semibold'>During this time, my duties are to:</Text>
                                    <List.Root p='0 1.5rem' fontSize='.9rem'>
                                        <List.Item>Converted academic research into practical applications by developing machine learning–driven solutions.</List.Item>
                                        <List.Item>Trained and deployed machine learning models using Python, solving domain-specific problems.</List.Item>
                                        <List.Item>Implemented user-facing web applications by integrating ML models into a React-based frontend.</List.Item>
                                        <List.Item>Collaborated with researchers to document methodologies, ensuring technical accuracy and reproducibility.</List.Item>
                                    </List.Root>
                                </List.Item>

                                <List.Item>
                                    <Text mt='.5rem' fontSize='.9rem'>
                                        <Highlight query={['November', '2024']} styles={{ fontWeight: 'semibold' }}>
                                            In November 2024, I was offered another position at the same
                                        </Highlight>
                                        {' '}
                                        <a href="https://nemsu-tagbina.edu.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                            university
                                        </a>
                                        {' '}
                                        <Highlight query={['Web Developer']} styles={{ fontWeight: 'semibold' }}>
                                            where I graduated, this time as a Web Developer!
                                        </Highlight>
                                        {' '}
                                    </Text>
                                    <Text mt='1rem' fontSize='.9rem' fontStyle='italic'>
                                        <Highlight query='Web Development' styles={{ fontWeight: 'semibold' }}>
                                            This opportunity allowed me to focus more deeply and expand my skills in Web Development.
                                        </Highlight>
                                    </Text>
                                    <Text mt='.1rem' fontSize='.9rem' fontWeight='semibold'>This time, my duties are to:</Text>
                                    <List.Root p='0 1.5rem' fontSize='.9rem'>
                                        <List.Item>Built a research-driven web applications (yeah, more research projects).</List.Item>
                                        <List.Item>Collaborated with team members to translate research requirements into functional features.</List.Item>
                                        <List.Item>Ensured application compliance with study protocols, supporting successful completion of the research paper.</List.Item>
                                    </List.Root>
                                </List.Item>

                                <List.Item>
                                    <Text mt='.5rem' fontSize='.9rem'>
                                        <Highlight query={['May', '2025', 'Web Development']} styles={{ fontWeight: 'semibold' }}>
                                            In May 2025, I left my previous role to pursue a career where I could further grow and expand my skills in Web Development.
                                        </Highlight>
                                    </Text>
                                    <Text mt='.5rem' fontSize='.9rem'>
                                        <Highlight query={['Programmer Analyst']} styles={{ fontWeight: 'semibold' }}>
                                            Fortunately, I was hired as a Programmer Analyst at
                                        </Highlight>
                                        {' '}
                                        <a href="https://simplesoftechsolutionsco.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                            Simple Softech Solutions Co.
                                        </a>
                                        {' '}
                                        <Highlight query={['May']} styles={{ fontWeight: 'semibold' }}>
                                            within the same month.
                                        </Highlight>
                                        {' '}
                                    </Text>
                                    <Text mt='.1rem' fontSize='.9rem' fontWeight='semibold'>This role allowed me to:</Text>
                                    <List.Root p='0 1.5rem' fontSize='.9rem'>
                                        <List.Item>Gather and analyze client requirements to understand business and user needs.</List.Item>
                                        <List.Item>Design and develop applications that provide tailored solutions to client problems.</List.Item>
                                        <List.Item>Collaborate with clients and team members to ensure applications meet functional and usability standards.</List.Item>
                                        <List.Item>Implement and maintain applications using modern web technologies.</List.Item>
                                        <List.Item>Continuously explore new tools and technologies to improve development efficiency and solution quality.</List.Item>
                                    </List.Root>
                                </List.Item>
                            </List.Root>
                        </Box>

                        {/* Professional Projects Section */}
                        <Box mt='1rem'>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidFolderOpen /> Professional Projects</Heading>
                            <Separator />
                            <Heading mt='.5rem' fontSize='.9rem'>Here are several projects that have helped me grow and develop my skills:</Heading>

                            <List.Root p='0 1.5rem' gap={{ base: '1rem', md: '1.5rem' }} >
                                <List.Item>
                                    <Text mt='.5rem' color='blue.700' fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ textDecoration: 'underline' }}>
                                        <a href="https://rando-cargo-forwarding.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}>Rando Cargo Forwarding <BiLinkExternal /></a>
                                    </Text>
                                    <Box display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems='center' gap='2.5rem'>
                                        <Text w='100%' mt='.5rem' fontSize='.9rem'>
                                            A logistics management platform for Rando Cargo Forwarding, enabling streamlined booking, billing, and
                                            delivery tracking workflows.
                                        </Text>
                                        <Separator display={{ base: 'none', md: 'flex' }} orientation='vertical' h='10' />
                                        <Box w='100%' h={{ base: '5rem' }} >
                                            <a href="https://rando-cargo-forwarding.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Image h='100%' p='.5rem' src={RcfLogo} borderRadius='xl' _hover={{ boxShadow: 'xl' }} transition='.3s' />
                                            </a>
                                        </Box>
                                    </Box>
                                </List.Item>
                                <Separator display={{ base: 'flex', md: 'none' }} w='100%' />
                                <List.Item>
                                    <Text mt='.5rem' color='blue.700' fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ textDecoration: 'underline' }}>
                                        <a href="https://tes-profiling.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}>Tagongon Elementary Profiling System <BiLinkExternal /></a>
                                    </Text>
                                    <Box display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems='center' gap='2.5rem'>
                                        <Text w='100%' mt='.5rem' fontSize='.9rem'>
                                            A web-based application designed to manage and secure teacher records and personal information, ensuring
                                            efficient data handling and safe storage.
                                        </Text>
                                        <Separator display={{ base: 'none', md: 'flex' }} orientation='vertical' h='10' />
                                        <Box w='100%' h={{ base: '5rem' }}>
                                            <a href="https://tes-profiling.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Image h='100%' p='.5rem' src={TesLogo} borderRadius='xl' _hover={{ boxShadow: 'xl' }} transition='.3s' />
                                            </a>
                                        </Box>
                                    </Box>
                                </List.Item>
                                <Separator display={{ base: 'flex', md: 'none' }} w='100%' />
                                <List.Item>
                                    <Text mt='.5rem' color='blue.700' fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ textDecoration: 'underline' }}>
                                        <a href="https://sfapldt.simplesoftech.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}>Simple SFA <BiLinkExternal /></a>
                                    </Text>
                                    <Box display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems='center' gap='2.5rem'>
                                        <Text w='100%' mt='.5rem' fontSize='.9rem'>
                                            A management application designed for a specific company to streamline business operations,
                                            monitor activities, and support sales-related processes.
                                        </Text>
                                        <Separator display={{ base: 'none', md: 'flex' }} orientation='vertical' h='10' />
                                        <Box w='100%' h={{ base: '5rem' }}>
                                            <a href="https://sfapldt.simplesoftech.com/" target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Image h='100%' p='.5rem' src={SfaLogo} borderRadius='xl' _hover={{ boxShadow: 'xl' }} transition='.3s' />
                                            </a>
                                        </Box>
                                    </Box>
                                </List.Item>
                                <Separator display={{ base: 'flex', md: 'none' }} w='100%' />
                                <List.Item>
                                    <Text mt='.5rem' color='blue.700' fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ textDecoration: 'underline' }}>
                                        <a href="https://tasetem.co/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}>Tasetemco <BiLinkExternal /></a>
                                    </Text>
                                    <Box display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems='center' gap='2.5rem'>
                                        <Text w='100%' mt='.5rem' fontSize='.9rem'>
                                            A loan application system built with the MERN stack, designed to simplify loan requests and tracking.
                                            It provides a user-friendly interface, secure authentication, and an efficient process for managing applications and approvals.
                                        </Text>
                                        <Separator display={{ base: 'none', md: 'flex' }} orientation='vertical' h='10' />
                                        <Box w='100%' h={{ base: '5rem' }}>
                                            <a href="https://tasetem.co/" target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Image h='100%' p='.5rem' src={TasetemcoLogo} borderRadius='xl' _hover={{ boxShadow: 'xl' }} transition='.3s' />
                                            </a>
                                        </Box>
                                    </Box>
                                </List.Item>
                            </List.Root>
                        </Box>

                        {/* Tools and Technologies */}
                        {/* <Box mt='1rem'>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiCodeAlt /> Tools and Technologies</Heading>
                            <Separator />
                            <Heading mt='.5rem' fontSize='.9rem' fontWeight='normal' fontStyle='italic'>Common Tools and Technologies I usually use:</Heading>
                            <Box mt='1rem'>
                                <Stack direction='row' alignItems='center'>
                                    <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                        <Text color='#215732' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoNodejs /> Node</Text>
                                    </a>
                                    <Separator orientation='vertical' h='5' />
                                    <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                        <Text color='#605ca9' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><SiDotnet /> .Net</Text>
                                    </a>
                                    <Separator orientation='vertical' h='5' />
                                    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                        <Text color='#F1502F' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoGit /> Git</Text>
                                    </a>
                                    <Separator orientation='vertical' h='5' />
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                        <Text color='#333' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoGithub /> Github</Text>
                                    </a>
                                    <Separator orientation='vertical' h='5' />
                                    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                        <Text color='#589636' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoMongodb /> MongoDb</Text>
                                    </a>
                                </Stack>
                            </Box>
                        </Box> */}

                        <Box mt='1rem'>
                            {/* Section Header */}
                            <Heading
                                fontSize='.9rem'
                                fontWeight='bold'
                                display='flex'
                                alignItems='center'
                                gap='.5rem'
                            >
                                <BiCodeAlt /> Tools and Technologies
                            </Heading>
                            <Separator mt='2' />

                            {/* Subheading */}
                            <Heading mt='.5rem' fontSize='.9rem' fontWeight='normal' fontStyle='italic'>
                                Common Tools and Technologies I usually use:
                            </Heading>

                            {/* Tools Grid */}
                            <Box mt='1rem' display='flex' flexWrap='wrap' gap='1rem'>
                                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                                    <Text color='#215732' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoNodejs /> Node</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Text color='#605ca9' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><SiDotnet /> .Net</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a
                                    href="https://git-scm.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Text color='#F1502F' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'>
                                        <BiLogoGit /> Git
                                    </Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Text color='#333' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'>
                                        <BiLogoGithub /> GitHub
                                    </Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a
                                    href="https://www.mongodb.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Text color='#589636' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'>
                                        <BiLogoMongodb /> MongoDB
                                    </Text>
                                </a>
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
