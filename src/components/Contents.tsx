import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { 
  Box, 
  Grid,
  GridItem
} from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import { usePortfolioData, LOCAL_ASSETS } from '@/hooks/usePortfolioData'
import { useColorModeValue } from '@/components/ui/color-mode'

// Import decomposed sub-components
import HeroBrand from './contents/HeroBrand'
import WorkHistory from './contents/WorkHistory'
import ProfileSidecard from './contents/ProfileSidecard'
import EducationCard from './contents/EducationCard'
import ExpertSkills from './contents/ExpertSkills'
import ProjectGrid from './contents/ProjectGrid'
import DeveloperConsole from './contents/DeveloperConsole'

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
        
        // Dynamic check: If mapped to local assets, serve locally!
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

// Master asset resolver to bridge offline static imports with online dynamic CMS keys
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
  const [sending, setSending] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Curated theme bindings
  const bgMain = useColorModeValue("#F9FAFB", "#0A0A0C")
  const cardBg = useColorModeValue("white", "rgba(255, 255, 255, 0.02)")
  const cardBorder = useColorModeValue("gray.200", "rgba(255, 255, 255, 0.04)")
  const borderLine = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.05)")
  const textMuted = useColorModeValue("gray.500", "gray.400")

  const handleCopyATSResume = () => {
    if (!data.profile) return
    try {
      const experienceMarkdown = data.experience.map(exp => 
        `### ${exp.role} @ ${exp.company_name}\n${exp.start_date} - ${exp.end_date}\n${exp.points.map(pt => `- ${pt}`).join('\n')}`
      ).join('\n\n')

      const projectsMarkdown = data.projects.map(proj => 
        `### ${proj.name}\n${proj.description}\nLink: ${proj.url}`
      ).join('\n\n')

      const skillsMarkdown = data.skills.map(sk => `- ${sk.name} (${sk.category})`).join('\n')
      
      const educationMarkdown = data.education ? data.education.map(edu => 
        `- ${edu.school_name}: ${edu.degree} (${edu.grad_year})`
      ).join('\n') : ''

      const atsMarkdown = `
# ${data.profile.name.toUpperCase()}
${data.profile.title} | ${data.profile.location}
Davao City, Philippines | ${data.profile.linkedin_url} | ${data.profile.github_url}

## PROFESSIONAL SUMMARY
${data.profile.bio}

## WORK EXPERIENCE
${experienceMarkdown}

## CAREER PROJECTS
${projectsMarkdown}

## CORE SKILLS & TOOLS
${skillsMarkdown}

## EDUCATION
${educationMarkdown}
`
      navigator.clipboard.writeText(atsMarkdown)
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) {
      toaster.create({ title: 'Validation Warning', description: 'Message content cannot be blank.', type: 'warning' })
      return
    }
    setSending(true)

    const templateParams = {
      from_name: 'Portfolio Visitor',
      to_name: data.profile?.name || 'Dens Maltos',
      message: message,
      reply_to: 'dens.maltos@gmail.com'
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || '', 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '', 
      templateParams, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
    )
    .then(() => {
      setSending(false)
      setMessage('')
      toaster.create({ title: 'Message Dispatched!', description: 'Your email has been successfully sent to Dens.', type: 'success' })
    })
    .catch((err) => {
      setSending(false)
      console.error(err)
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
    { label: "📄 Download PDF Resume", action: handleDownloadPDF },
    { label: "📋 Copy ATS-Friendly Resume", action: handleCopyATSResume },
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
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mouseCoords.x}px`,
        '--mouse-y': `${mouseCoords.y}px`
      } as React.CSSProperties}
    >
      {/* Dynamic Font and Print Styles Engine */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=JetBrains+Mono:wght@300;400;700;800&family=Inter:wght@300;400;600;700;900&display=swap');

        /* Keyframes for soft background glows */
        @keyframes floatGlow {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .ambient-glow-1 {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(79, 70, 229, 0) 70%);
          filter: blur(50px);
          animation: floatGlow 15s infinite ease-in-out;
          top: -100px;
          left: -150px;
          z-index: 1;
        }

        .ambient-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0) 70%);
          filter: blur(60px);
          animation: floatGlow 20s infinite ease-in-out alternate;
          bottom: 100px;
          right: -100px;
          z-index: 1;
        }

        .grid-blueprint-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(99, 102, 241, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.035) 1px, transparent 1px);
          mask-image: radial-gradient(circle at 50% 50%, white, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, white, transparent 95%);
        }

        .interactive-glow-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(
            600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(99, 102, 241, 0.06),
            transparent 40%
          );
        }

        /* Dynamic Pure CSS Fluid Mesh Backdrop */
        @keyframes fluidOrbit1 {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          50% { transform: translate(80px, -120px) scale(1.15) rotate(180deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
        }

        @keyframes fluidOrbit2 {
          0% { transform: translate(0px, 0px) scale(1.1) rotate(0deg); }
          50% { transform: translate(-100px, 90px) scale(0.9) rotate(-180deg); }
          100% { transform: translate(0px, 0px) scale(1.1) rotate(360deg); }
        }

        @keyframes fluidOrbit3 {
          0% { transform: translate(0px, 0px) scale(0.9) rotate(0deg); }
          50% { transform: translate(100px, 60px) scale(1.05) rotate(90deg); }
          100% { transform: translate(0px, 0px) scale(0.9) rotate(360deg); }
        }

        .fluid-mesh-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 1;
          opacity: 0.12;
          pointer-events: none;
          mix-blend-mode: screen;
          will-change: transform;
        }

        /* Automatic light-mode paste theme adjustment */
        .chakra-theme-light .fluid-mesh-orb,
        [data-theme="light"] .fluid-mesh-orb {
          opacity: 0.05;
          mix-blend-mode: multiply;
        }

        .orb-cyan {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(6, 182, 212, 0) 70%);
          top: 8%;
          left: -150px;
          animation: fluidOrbit1 32s infinite ease-in-out alternate;
        }

        .orb-purple {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(139, 92, 246, 0) 70%);
          bottom: 12%;
          right: -200px;
          animation: fluidOrbit2 38s infinite ease-in-out alternate;
        }

        .orb-indigo {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(99, 102, 241, 0) 70%);
          top: 40%;
          left: 25%;
          animation: fluidOrbit3 28s infinite ease-in-out alternate;
        }

        /* Pulse state for active banner indicator */
        .pulse-dot {
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        @media print {
          /* Reset root layout for dynamic multi-page flow */
          html, body, #root {
            background: white !important;
            color: #111827 !important;
            height: auto !important;
            overflow: visible !important;
            font-size: 10pt !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Hide non-printable web modules */
          .no-print,
          .theme-toggle-button,
          button,
          .chakra-button,
          form,
          header,
          footer {
            display: none !important;
          }

          /* Force wrapper to stretch to full length */
          .portfolio-wrapper {
            height: auto !important;
            overflow: visible !important;
            margin-top: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          .portfolio-inner {
            flex-direction: column !important;
            gap: 1rem !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Modern flex layout for seamless print ordering */
          .resume-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            width: 100% !important;
          }

          /* Dissolve grouped grid column for independent print ordering */
          .profile-education-wrapper {
            display: contents !important;
          }

          /* Linear section ordering: Profile Card -> Work History -> Education -> Skills -> Projects */
          .profile-education-wrapper > *:first-of-type {
            order: 1 !important;
          }

          .work-history-wrapper {
            order: 2 !important;
            width: 100% !important;
          }

          .profile-education-wrapper > *:nth-of-type(2) {
            order: 3 !important;
          }

          .skills-wrapper {
            order: 4 !important;
            width: 100% !important;
          }

          .projects-wrapper {
            order: 5 !important;
            width: 100% !important;
          }

          /* Convert Sticky Sidecard into executive Resume Header */
          .profile-sidecard {
            width: 100% !important;
            max-width: 100% !important;
            position: relative !important;
            top: 0 !important;
            border: none !important;
            border-top: none !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: 2px solid #E5E7EB !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
            background-color: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            padding: 0 0 1rem 0 !important;
            margin-bottom: 1.5rem !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
          }

          .profile-header-container {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 1.2rem !important;
            width: auto !important;
          }

          .avatar-halo,
          .avatar-halo span,
          .avatar-halo div,
          .avatar-halo img {
            width: 3.5rem !important;
            height: 3.5rem !important;
            max-width: 3.5rem !important;
            max-height: 3.5rem !important;
            min-width: 3.5rem !important;
            min-height: 3.5rem !important;
            border: none !important;
            border-radius: 9999px !important;
            box-shadow: none !important;
            background: transparent !important;
            background-image: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .name-info {
            text-align: left !important;
            margin-top: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }

          .profile-name {
            font-size: 1.4rem !important;
            font-weight: 800 !important;
            color: #1E3A8A !important;
            margin: 0 !important;
            line-height: 1.2 !important;
          }

          .profile-title-badge {
            font-size: 0.75rem !important;
            font-weight: 700 !important;
            color: #2563EB !important;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            margin-top: 0.15rem !important;
            text-transform: uppercase !important;
          }

          .bio-container {
            display: none !important; /* Hide long side summaries */
          }

          .social-badges {
            display: flex !important;
            flex-direction: row !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 0.8rem !important;
            margin-top: 0 !important;
          }

          .social-badges a, 
          .social-badges span {
            font-size: 0.75rem !important;
            font-weight: 600 !important;
            color: #4B5563 !important;
            text-decoration: none !important;
            display: flex !important;
            align-items: center !important;
            gap: 0.2rem !important;
          }

          /* Strip card container borders, shadows, and paddings for seamless presentation */
          .work-history-card,
          .education-card,
          .expert-skills-card,
          .projects-card {
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            box-shadow: 0 0 0 0 transparent !important;
            background: transparent !important;
            background-color: transparent !important;
            padding: 0 !important;
            margin: 0 0 1.5rem 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Custom printable section headings with clean division lines */
          .work-history-card h2,
          .education-card h2,
          .expert-skills-card h2,
          .projects-card h2 {
            font-size: 1.1rem !important;
            font-weight: 800 !important;
            color: #1E3A8A !important;
            border-bottom: 1.5px solid #D1D5DB !important;
            padding-bottom: 0.25rem !important;
            margin-bottom: 0.8rem !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            display: flex !important;
            align-items: center !important;
          }

          /* Experience & Project timeline adaptations */
          .experience-timeline {
            border-left: none !important;
            padding-left: 0 !important;
            margin-left: 0 !important;
          }

          .experience-node {
            display: none !important;
          }

          .project-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.8rem !important;
          }

          .project-card {
            border: 1px solid #E5E7EB !important;
            padding: 0.8rem !important;
            border-radius: 0.4rem !important;
            page-break-inside: avoid !important;
            box-shadow: none !important;
          }

          .experience-item,
          .education-item {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      ` }} />

      {/* SVG Ambient Glows & Blueprint Interactive Grid */}
      <Box className="ambient-glow-1 no-print" />
      <Box className="ambient-glow-2 no-print" />
      <Box className="grid-blueprint-overlay no-print" />
      <Box className="interactive-glow-bg no-print" />

      {/* Dynamic Pure CSS Vector Fluid Mesh Backdrop */}
      <Box className="fluid-mesh-orb orb-cyan no-print" />
      <Box className="fluid-mesh-orb orb-purple no-print" />
      <Box className="fluid-mesh-orb orb-indigo no-print" />

      <Box 
        className="portfolio-inner"
        w={{ base: "92%", sm: "85%", lg: "85%", xl: "72%" }} 
        py={{ base: "2rem", lg: "4rem" }} 
        zIndex="2"
        display="flex"
        flexDir="column"
        gap="3.5rem"
      >
        
        {/* ========================================================
            1. PREMIUM HERO BRAND MODULE (Above the fold)
            ======================================================== */}
        <HeroBrand
          loading={loading}
          data={data}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          commandOptions={commandOptions}
          cardBorder={cardBorder}
          textMuted={textMuted}
        />

        {/* ========================================================
            2. THE DYNAMIC BENTO GRID ENGINE
            ======================================================== */}
        <Grid 
          className="resume-grid"
          templateColumns="repeat(12, 1fr)" 
          gap="2rem"
          w="100%"
        >
          
          {/* BENTO CARD 1: ACTIVE EXPERIENCE MODULE (Span 7) */}
          <GridItem colSpan={{ base: 12, lg: 7 }} display="flex" flexDir="column" className="work-history-wrapper">
            <WorkHistory
              loading={loading}
              data={data}
              workRef={workRef}
              cardBg={cardBg}
              cardBorder={cardBorder}
              borderLine={borderLine}
              textMuted={textMuted}
            />
          </GridItem>

          {/* BENTO CARD 2 & 3 Column: PROFILE SIDECARD & EDUCATION (Span 5) */}
          <GridItem colSpan={{ base: 12, lg: 5 }} display="flex" flexDir="column" gap="2rem" className="profile-education-wrapper">
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
            />

            <EducationCard
              loading={loading}
              data={data}
              cardBg={cardBg}
              cardBorder={cardBorder}
              borderLine={borderLine}
              textMuted={textMuted}
              getAssetUrl={getAssetUrl}
            />
          </GridItem>

          {/* BENTO CARD 4: CATEGORIZED SKILLS NODES (Span 5) */}
          <GridItem colSpan={{ base: 12, lg: 5 }} display="flex" flexDir="column" className="skills-wrapper">
            <ExpertSkills
              loading={loading}
              groupedSkills={groupedSkills}
              cardBg={cardBg}
              cardBorder={cardBorder}
              borderLine={borderLine}
            />
          </GridItem>

          {/* BENTO CARD 5: CAREER PROJECTS COMPONENT (Span 7) */}
          <GridItem colSpan={{ base: 12, lg: 7 }} display="flex" flexDir="column" className="projects-wrapper">
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
          </GridItem>

          {/* BENTO CARD 6: ACTIVE DIRECT MESSAGE COMMAND CONSOLE (Span 12) */}
          <DeveloperConsole
            loading={loading}
            contactRef={contactRef}
            message={message}
            setMessage={setMessage}
            sending={sending}
            handleSend={handleSend}
            cardBg={cardBg}
            cardBorder={cardBorder}
            borderLine={borderLine}
            textMuted={textMuted}
          />

        </Grid>

        {/* Footer block */}
        <Box className="no-print" w="100%" m=".5rem 0" p='0 0 1rem 0'>
          <Footer />
        </Box>

      </Box>
    </Box>
  )
}
