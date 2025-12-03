// import React from 'react'

import { Avatar, Box, Heading, Highlight, HStack, Image, List, Separator, Stack, Text } from "@chakra-ui/react"
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare, BiSolidEnvelope, BiSolidFolderOpen, BiSolidGraduation, BiSolidMap, BiSolidBarChartAlt2 } from "react-icons/bi"
import Dens from '@/assets/dens.jpeg'
import Nemsu from '@/assets/nemsu.png'
import RcfSample from '@/assets/projects/rcf-sample.png'

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
                        <Box>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidFolderOpen /> Professional Projects</Heading>
                            <Separator />
                            <Heading mt='.5rem' fontSize='.9rem'>Here are several projects that have helped me grow and develop my skills:</Heading>

                            <List.Root p='0 1.5rem' gap='2rem' >
                                <List.Item>
                                    <Text mt='.5rem' fontSize='.8rem' fontWeight='semibold' textTransform='uppercase' _hover={{ color: 'blue.700' }}>
                                        <a href="https://rando-cargo-forwarding.onrender.com/" target="_blank" rel="noopener noreferrer">Rando Cargo Forwarding</a>
                                    </Text>
                                    <Box display='flex' alignItems='start' gap='2.5rem'>
                                        <Text mt='.5rem' fontSize='.9rem'>
                                            A logistics management platform for Rando Cargo Forwarding, enabling streamlined booking, billing, and
                                            delivery tracking workflows.
                                        </Text>
                                        <Image mt='.5rem' w='40%' src={RcfSample} boxShadow='lg' borderRadius='xl'/>
                                    </Box>
                                </List.Item>
                            </List.Root>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
