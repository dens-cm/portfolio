import React from 'react'
import * as Chakra from '@chakra-ui/react'
import Header from '../components/layouts/Header'
import Contents from '../components/layouts/Contents'
import Footer from '../components/layouts/Footer'

export default function App() {
  return (
    <Chakra.Box w='100vw' h='100vh' bg='#fafafa' display='flex' flexDirection='column' overflow='auto'>
      <Header skills="skills" projects="projects" contact="contact"/>
      <Contents skills="skills" projects="projects" contact="contact"/>
      <Footer/>
    </Chakra.Box>
  )
}
