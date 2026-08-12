import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Box } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import { usePortfolioData, LOCAL_ASSETS } from '@/hooks/usePortfolioData'
import { useColorModeValue } from '@/components/ui/color-mode'
import DynamicSEO from '@/components/DynamicSEO'
import WorkHistory from '@/components/contents/WorkHistory'
import ProfileSidecard from '@/components/contents/ProfileSidecard'
import EducationCard from '@/components/contents/EducationCard'
import ExpertSkills from '@/components/contents/ExpertSkills'
import ProjectGrid from '@/components/contents/ProjectGrid'
import DeveloperConsole from '@/components/contents/DeveloperConsole'
import RequestPDFDialog from '@/components/Dialog/RequestPDFDialog'

// Drive File ID to Local Asset Key mapping for instant dynamic fallbacks
const DRIVE_ID_TO_LOCAL: Record<string, string> = {
  '1HsKftt8VeL80RbslJJqdpypsiZrE5A1p': 'dens',      // Avatar
  '1r40Ko-j5EQWb8FXJRtFLpOCBWILxNTKx': 'nemsu',     // Education (NEMSU)
  '1kKs7qwc1YecOgTj25k41gc9E1QxYrX65': 'rcf',       // Project: Rando Cargo Forwarding
  '1alsI68gSFqKL8s5tWBeRs9kR7wEx3zQN': 'sfa',       // Project: Simple SFA
  '1MK_bE7CnN2a1yRThs2Dnd-9KQ9S_lL0p': 'tes',       // Project: Tagongon Elementary School
}

// Utility helper to safely transform Google Drive asset view links into fast streams
const parseAssetUrl = (url: string | null | undefined): string => {
  if (!url) return ''
  const gDriveSig = 'drive.google.com/file/d/'
  if (url.includes(gDriveSig)) {
    try {
      const parts = url.split(gDriveSig)
      if (parts.length > 1) {
        const fileId = parts[1].split('/')[0]

        if (DRIVE_ID_TO_LOCAL[fileId] && LOCAL_ASSETS[DRIVE_ID_TO_LOCAL[fileId]]) {
          return LOCAL_ASSETS[DRIVE_ID_TO_LOCAL[fileId]]
        }

        return `https://lh3.googleusercontent.com/d/${fileId}`
      }
    } catch (e) {
      console.error('Failed to parse Google Drive signature: ', e)
    }
  }
  return url
}

const getAssetUrl = (url: string | null | undefined): string => {
  if (!url) return ''
  if (LOCAL_ASSETS[url]) {
    return LOCAL_ASSETS[url]
  }
  return parseAssetUrl(url)
}

interface ContentsProps {
  workRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Contents({ workRef, projectsRef, contactRef }: ContentsProps) {
  const { data, loading } = usePortfolioData()
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)

  const bgMain = useColorModeValue("#F9FAFB", "#0A0A0C")
  const cardBg = useColorModeValue("white", "rgba(255, 255, 255, 0.02)")
  const cardBorder = useColorModeValue("gray.200", "rgba(255, 255, 255, 0.04)")
  const borderLine = useColorModeValue("gray.300", "rgba(63, 60, 60, 0.73)")
  const textMuted = useColorModeValue("gray.500", "gray.400")

  const handleRequestPDFSubmit = async (email: string) => {
    try {
      const templateParams = {
        from_name: email,
        to_name: data?.profile?.name || 'Dens Maltos',
        message: `${email} Requested your resume PDF via the portfolio website.`,
        reply_to: email,
      }
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '' }
      )
      
      toaster.create({
        title: 'Request Sent!',
        description: 'I will send you a PDF copy of my resume shortly.',
        type: 'success',
      })
    } catch (error) {
      console.error('Failed to send PDF request:', error)
      toaster.create({
        title: 'Error',
        description: 'Failed to send request. Please try again.',
        type: 'error',
      })
    }
  }

  const handleCopyATSResume = () => {
    if (!data.profile) return
    try {
      const experienceText = data.experience.map(exp =>
        `${exp.role.toUpperCase()} | ${exp.company_name.toUpperCase()}\n${exp.start_date} - ${exp.end_date}\n${exp.points.map(pt => `- ${pt}`).join('\n')}`
      ).join('\n\n')

      const projectsText = data.projects.map(proj =>
        `${proj.name.toUpperCase()}\n${proj.description}\nLink: ${proj.url}`
      ).join('\n\n')

      const skillsText = data.skills.map(sk => sk.name).join(', ')

      const educationText = data.education ? data.education.map(edu =>
        `${edu.degree.toUpperCase()} - ${edu.school_name.toUpperCase()} (${edu.grad_year})`
      ).join('\n') : ''

      const atsText = `${data.profile.name.toUpperCase()}
${data.profile.title} | ${data.profile.location}
Email: dens.maltos@gmail.com | LinkedIn: ${data.profile.linkedin_url} | GitHub: ${data.profile.github_url}

PROFESSIONAL SUMMARY
${data.profile.bio}

WORK EXPERIENCE
${experienceText}

CAREER PROJECTS
${projectsText}

CORE SKILLS
${skillsText}

EDUCATION
${educationText}`
      navigator.clipboard.writeText(atsText)
      setCopied(true)
      toaster.create({
        title: 'Resume Copied!',
        description: `Recruiter-friendly plain text resume copied to clipboard.`,
        type: 'success',
        duration: 3500
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error(e)
      toaster.create({ title: 'Error', description: 'Failed to copy text. Please try again.', type: 'error' })
    }
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  // Handle Contact Send
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !userEmail.trim()) {
      toaster.create({ title: 'Missing Info', description: 'Please provide both your email and a message.', type: 'error' })
      return
    }
    setSending(true)

    const templateParams = {
      from_name: userEmail || 'Portfolio Visitor',
      to_name: data.profile?.name || 'Dens Maltos',
      message: `[Sent by ${userEmail}]:\n\n${message}`,
      reply_to: userEmail
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '' }
    )
      .then(() => {
        setSending(false)
        setMessage('')
        setUserEmail('')
        toaster.create({ title: 'Message Dispatched!', description: 'Your email has been successfully sent to Dens.', type: 'success' })
      })
      .catch((err) => {
        setSending(false)
        console.error('EmailJS Error:', err)
        toaster.create({ title: 'Dispatch Failure', description: 'An unexpected error occurred. Please try again later.', type: 'error' })
      })
  }

  // Memoize grouped skills classification
  const groupedSkills = React.useMemo(() => {
    if (!data.skills) return { frontend: [], backend: [], tools: [] }
    return {
      frontend: data.skills.filter(s => s.category === 'frontend'),
      backend: data.skills.filter(s => s.category === 'backend'),
      tools: data.skills.filter(s => s.category === 'tools')
    }
  }, [data.skills])

  const avatarImgSrc = getAssetUrl(data.profile?.avatar_url)

  const commandOptions = [
    { label: "📄 Request Resume PDF", action: () => setIsPdfModalOpen(true) },
    { label: "💼 Jump to Work History", action: () => workRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "🚀 Jump to Projects", action: () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "📬 Jump to Contact Console", action: () => contactRef.current?.scrollIntoView({ behavior: 'smooth' }) },
  ]

  return (
    <Box
      className="portfolio-wrapper"
      w="100%"
      h="calc(100vh - 3.6rem)"
      mt="3.6rem"
      overflowY="auto"
      scrollbar="hidden"
      display="flex"
      justifyContent="center"
      bg={bgMain}
      position="relative"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      } as React.CSSProperties}
    >
      <DynamicSEO data={data} />

      <Box
        className="portfolio-inner"
        w={{ base: "92%", sm: "85%", lg: "800px", xl: "900px" }}
        maxW="100%"
        py={{ base: "2rem", lg: "4rem" }}
        zIndex="2"
        display="flex"
        flexDir="column"
        gap="3.5rem"
      >

        <Box
          className="linear-flow-container"
          display="flex"
          flexDir="column"
          gap="2.5rem"
          w="100%"
        >

          <ProfileSidecard
            loading={loading}
            data={data}
            copied={copied}
            handleCopyATSResume={handleCopyATSResume}
            handleDownloadPDF={handleDownloadPDF}
            avatarImgSrc={avatarImgSrc}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
            commandOptions={commandOptions}
          />

          <hr />

          <WorkHistory
            loading={loading}
            data={data}
            workRef={workRef}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
          />

          <hr />

          <EducationCard
            loading={loading}
            data={data}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
            getAssetUrl={getAssetUrl}
          />

          <hr />

          <ExpertSkills
            loading={loading}
            groupedSkills={groupedSkills}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
          />

          <hr />

          <ProjectGrid
            loading={loading}
            data={data}
            projectsRef={projectsRef}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
            getAssetUrl={getAssetUrl}
          />

          <hr />

          <DeveloperConsole
            loading={loading}
            contactRef={contactRef}
            message={message}
            setMessage={setMessage}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            sending={sending}
            handleSend={handleSend}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
          />

        </Box>

        <Box className="no-print" w="100%" pb='.5rem'>
          <hr />
          <Footer />
        </Box>

      </Box>

      <RequestPDFDialog 
        isOpen={isPdfModalOpen} 
        onClose={() => setIsPdfModalOpen(false)} 
        onSubmit={handleRequestPDFSubmit} 
      />
    </Box>
  )
}
