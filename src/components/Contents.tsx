// import React from 'react'

import { Avatar, Box, Heading, HStack, Separator, Text } from "@chakra-ui/react"
import Dens from '@/assets/dens.jpeg'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare, BiSolidEnvelope, BiSolidFolderOpen, BiSolidGraduation, BiSolidMap } from "react-icons/bi"

export default function Contents() {

    return (
        <Box w='100%' h='100%' p={{ base: '4.4rem 1rem 1rem 1rem', sm: '7rem 0' }} display='flex' flexDir='column' alignItems='center' overflow='auto' scrollbar='hidden'>

            <Box w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} bg='rgba(255, 255, 255, 1)' p='2rem' borderRadius='xl' boxShadow='md'>
                <Box display='flex' flexDir='column' alignItems='center' justifyContent='center'>
                    <Avatar.Root w='9rem' h='9rem' border=".7rem solid rgba(21, 41, 87, 0.02)" boxShadow='xl'>
                        <Avatar.Fallback name="Dens" />
                        <Avatar.Image src={Dens} alt="Dens" />
                    </Avatar.Root>

                    <Box mt='1rem'>
                        <Heading fontSize='1.3rem' fontWeight='bold' textAlign='center'>Dens Maltos</Heading>
                        <Heading fontSize='.9rem' fontWeight='semibold' textAlign='center'>Web Developer</Heading>
                    </Box>

                    <Separator w='100%' mt='1.5rem' />

                    <Box mt='1.5rem' p='0 1rem'>
                        <Text fontSize='1rem' textAlign='center'>
                            Hi! I'm Dens, a web developer who enjoys turning ideas into intuitive, high-quality applications. Skilled in
                            crafting responsive, efficient web experiences and always exploring new tools and technologies to push
                            my abilities further.
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
                        <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.3rem'><BiSolidMap/> Davao City, Philippines</Text>
                    </Box>
                </Box>
            </Box>

            <Box w={{ base: '100%', sm: '80%', md: '60%', lg: '50%' }} mt='3rem' gap='1rem' display='flex' flexDir='column' alignItems='start'>
                <Heading bg='white' p='.1rem 1rem' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' gap='.5rem' borderRadius='full' boxShadow='lg'><BiSolidFolderOpen /> More about me</Heading>
                <Box bg='white' w='100%' p='2rem' borderRadius='xl' boxShadow='md'>
                    <Heading fontSize='.9rem' fontWeight='bold' display='flex' alignItems='center' gap='.5rem'><BiSolidGraduation /> Education</Heading>
                    <Separator />
                    <Text>Graduated at:</Text>
                    <Text>North Eastern Mindanao State Universiy</Text>
                </Box>
            </Box>
        </Box>
    )
}
