import React from 'react'
import emailjs from 'emailjs-com'
import { Avatar, Box, Button, Heading, Highlight, HStack, Image, List, Separator, Stack, Text, Textarea } from "@chakra-ui/react"
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare, BiSolidFolderOpen, BiSolidGraduation, BiSolidMap, BiSolidBarChartAlt2, BiLinkExternal, BiCodeAlt, BiLogoNodejs, BiLogoGit, BiLogoMongodb, BiSolidEnvelope, BiSupport, BiSolidMessageSquareDots } from "react-icons/bi"
import { SiDotnet } from "react-icons/si"
import { toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import Dens from '@/assets/dens.jpeg'
import Nemsu from '@/assets/nemsu.png'
import RcfLogo from '@/assets/projects/randocargoforwarding.png'
import TesLogo from '@/assets/projects/tes.png'
import SfaLogo from '@/assets/projects/simplesfa.png'
import TasetemcoLogo from '@/assets/projects/tasetemco.png'

interface ContentsProps {
    workRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
}

export default function Contents({ workRef, projectsRef, contactRef }: ContentsProps) {

    const [message, setMessage] = React.useState("")
    const [loading, setLoading] = React.useState<boolean>(false)
    const handleSend = () => {
        if (!message.trim()) {
            toaster.create({ title: 'Wait!', description: `Message cannot be empty`, type: 'warning', duration: 3000 })
            return
        }

        setLoading(true)
        emailjs.send("service_46nvv7k", "template_q38227z", { message }, "v31leT7Ye3YdBmfXp").then(() => {
            toaster.create({ title: 'Message Sent!', description: `Message sent successfully.`, type: 'success', duration: 3000 })
            setMessage("")
            setLoading(false)
        }).catch((err) => {
            console.error(err)
            toaster.create({ title: 'Failed', description: `${err.message}`, type: 'error', duration: 3000 })
            setLoading(false)
        })
    }

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
                        <Box ref={workRef} style={{ scrollMarginTop: '4rem' }}>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidBarChartAlt2 /> Work Experience</Heading>
                            <Separator />
                            <List.Root p='0 1.5rem' gap='2rem'>
                                <List.Item>
                                    <Stack mt='.5rem' gap='0rem'>
                                        <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} alignItems={{ base: 'left', lg: 'center' }} justifyContent={{ lg: 'space-between' }}>
                                            <Text fontSize='.9rem' fontWeight='semibold'>Programmer Analyst</Text>
                                            <Text fontSize='.8rem' fontWeight='normal' fontStyle='italic'>May 2025 - January 2026</Text>
                                        </Box>
                                        <a href="https://simplesoftechsolutionsco.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>

                                            <Text fontSize='.8rem' fontWeight='normal'>Simple Softech Solutions Co.</Text>
                                        </a>
                                    </Stack>
                                    <List.Root mt='1rem' p='0 1.5rem' fontSize='.9rem'>
                                        <List.Item>Gathered and analyzed client requirements to translate business needs into functional web application features.</List.Item>
                                        <List.Item>Designed and developed tailored solutions using modern web technologies, focusing on usability and maintainability.</List.Item>
                                        <List.Item>Collaborated with clients and internal team members to ensure applications met functional and quality standards.</List.Item>
                                        <List.Item>Implemented and maintained application features while continuously improving development workflows and tools.</List.Item>
                                    </List.Root>
                                </List.Item>
                                <List.Item>
                                    <Stack mt='.5rem' gap='0rem'>
                                        <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} alignItems={{ base: 'left', lg: 'center' }} justifyContent={{ lg: 'space-between' }}>
                                            <Text fontSize='.9rem' fontWeight='semibold'>
                                                <Highlight query={'(Research Project)'} styles={{ fontWeight: 'normal' }}>
                                                    Web Developer (Research Project)
                                                </Highlight>
                                            </Text>
                                            <Text fontSize='.8rem' fontWeight='normal' fontStyle='italic'>August 2024 - April 2025</Text>
                                        </Box>
                                        <a href="https://nemsu-tagbina.edu.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                            <Text fontSize='.8rem' fontWeight='normal'>North Eastern Mindanao State University</Text>
                                        </a>
                                    </Stack>
                                    <List.Root mt='1rem' p='0 1.5rem' fontSize='.9rem'>
                                        <List.Item>Built and maintained a research-driven web application to support data collection and analysis for an academic study.</List.Item>
                                        <List.Item>Worked closely with research team members to convert study requirements into functional system features.</List.Item>
                                        <List.Item>Ensured application compliance with research protocols, contributing to the successful completion of the research paper.</List.Item>
                                        <List.Item>Supported iterative improvements based on research findings and user feedback.</List.Item>
                                    </List.Root>
                                </List.Item>
                            </List.Root>
                        </Box>

                        {/* Professional Projects Section */}
                        <Box ref={projectsRef} style={{ scrollMarginTop: '4rem' }} mt='1rem'>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidFolderOpen /> Career Projects</Heading>
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
                        <Box mt='1rem'>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiCodeAlt /> Tools and Technologies</Heading>
                            <Separator mt='2' />
                            <Heading mt='.5rem' fontSize='.9rem' fontWeight='normal' fontStyle='italic'>Common Tools and Technologies I usually use:</Heading>
                            <Box mt='1rem' display='flex' flexWrap='wrap' gap='1rem'>
                                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                                    <Text color='#215732' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoNodejs /> Node</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Text color='#605ca9' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><SiDotnet /> .Net</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Text color='#F1502F' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoGit /> Git</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Text color='#333' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoGithub /> GitHub</Text>
                                </a>
                                <Separator orientation='vertical' h='5' />
                                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Text color='#589636' fontSize='.8rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiLogoMongodb /> MongoDB</Text>
                                </a>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>

            <Box ref={contactRef} w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} mt='3rem' gap='1rem' display='flex' flexDir='column' alignItems='start'>
                <Heading bg='white' p='.1rem 1rem' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.5rem' borderRadius='full' boxShadow='lg'><BiSolidEnvelope /> Contact</Heading>

                <Box bg='white' w='100%' p='2rem' borderRadius='xl' boxShadow='md'>
                    <Stack gap='1.5rem'>

                        <Box>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSupport /> Let's Connect!</Heading>
                            <Separator />
                            <Text mt='.5rem' fontSize='.8rem' fontWeight='semibold'>Do you have a project in mind?</Text>
                            <Text mt='.5rem' fontSize='.8rem'>Hit the send button to get in touch—let’s build something creative together!</Text>
                            <Text fontSize='.8rem' fontStyle='italic'>
                                <Highlight query={'dens.maltos@gmail.com'} styles={{ fontWeight: 'semibold' }}>
                                    You can reach me anytime at: dens.maltos@gmail.com
                                </Highlight>
                            </Text>
                        </Box>

                        <HStack>
                            <Separator flex="1" />
                            <Text fontSize='.8rem' fontStyle='italic' flexShrink="0">or</Text>
                            <Separator flex="1" />
                        </HStack>

                        <Box>
                            <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidMessageSquareDots /> Contact me Now!</Heading>
                            <Box mt='1rem'>
                                <Textarea required value={message} onChange={(e) => setMessage(e.target.value)} fontSize='.8rem' fontWeight='semibold' borderRadius='lg' placeholder="Your message here." />
                                <Box w='100%' display='flex' justifyContent='right'>
                                    <Button onClick={handleSend} loading={loading} loadingText='Sending' size='xs' colorPalette='blue' borderRadius='lg'><BiSolidEnvelope />Send</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Box>

            <Box w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} mt='3rem' gap='1rem' display='flex' flexDir='column' alignItems='start'>
                <Footer />
            </Box>
        </Box >
    )
}
