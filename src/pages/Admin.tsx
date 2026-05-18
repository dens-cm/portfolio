import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Button, 
  Heading, 
  Input, 
  Stack, 
  Text, 
  Tabs,
  Separator,
  Grid,
  Textarea,
  HStack,
  Badge,
  Field,
  Table,
  Spinner
} from "@chakra-ui/react"
import { supabase } from '@/lib/supabase'
import { toaster } from "@/components/ui/toaster"
import { useColorModeValue, ColorModeButton } from "@/components/ui/color-mode"
import { 
  BiUser, 
  BiBriefcase, 
  BiFolder, 
  BiCodeBlock, 
  BiLogOut, 
  BiArrowBack, 
  BiPlus, 
  BiTrash, 
  BiEditAlt,
  BiSave,
  BiX,
  BiSolidGraduation
} from "react-icons/bi"

export default function Admin() {
  const [, setSessionUser] = useState<any>(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const navigate = useNavigate()

  // Database States
  const [profile, setProfile] = useState<any>({
    name: '', title: '', bio: '', location: '', facebook_url: '', linkedin_url: '', github_url: '', avatar_url: ''
  })
  const [experience, setExperience] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [skills, setSkills] = useState<any[]>([])
  const [education, setEducation] = useState<any[]>([])

  // Edit/Add Forms States
  const [editingExp, setEditingExp] = useState<any | null>(null) // null = view list, {} = new exp, {id} = edit exp
  const [editingProj, setEditingProj] = useState<any | null>(null) // null = view list, {} = new project, {id} = edit project
  const [editingEdu, setEditingEdu] = useState<any | null>(null) // null = view list, {} = new edu, {id} = edit edu
  const [newSkill, setNewSkill] = useState({ name: '', url: '', color: '#3B82F6', category: 'backend', order_index: 0 })

  // Operation Loader States
  const [savingProfile, setSavingProfile] = useState(false)
  const [savingExperience, setSavingExperience] = useState(false)
  const [deletingExpId, setDeletingExpId] = useState<number | null>(null)
  const [savingProject, setSavingProject] = useState(false)
  const [deletingProjId, setDeletingProjId] = useState<number | null>(null)
  const [addingSkill, setAddingSkill] = useState(false)
  const [deletingSkillId, setDeletingSkillId] = useState<number | null>(null)
  const [savingEducation, setSavingEducation] = useState(false)
  const [deletingEduId, setDeletingEduId] = useState<number | null>(null)

  // Theme colors
  const bg = useColorModeValue('#F8FAFC', '#0B0F19')
  const cardBg = useColorModeValue('white', 'rgba(17, 24, 39, 0.75)')
  const cardBorder = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.05)')
  const textMuted = useColorModeValue('gray.500', 'gray.400')
  const borderLine = useColorModeValue('gray.200', 'rgba(255, 255, 255, 0.08)')

  // 1. Session Guard check
  useEffect(() => {
    async function checkSession() {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error || !user) {
        navigate('/login')
      } else {
        setSessionUser(user)
        fetchCMSData()
      }
      setLoadingUser(false)
    }
    checkSession()
  }, [navigate])

  // 2. Fetch all data for forms
  async function fetchCMSData() {
    try {
      const [profileRes, expRes, projRes, skillRes] = await Promise.all([
        supabase.from('profile').select('*'),
        supabase.from('experience').select('*').order('order_index', { ascending: true }),
        supabase.from('projects').select('*').order('order_index', { ascending: true }),
        supabase.from('skills').select('*').order('order_index', { ascending: true })
      ])

      if (profileRes.data && profileRes.data.length > 0) setProfile(profileRes.data[0])
      if (expRes.data) setExperience(expRes.data)
      if (projRes.data) setProjects(projRes.data)
      if (skillRes.data) setSkills(skillRes.data)

      try {
        const eduRes = await supabase.from('education').select('*').order('order_index', { ascending: true })
        if (eduRes.data) setEducation(eduRes.data)
      } catch (eduErr) {
        console.warn("Education table is missing or unseeded in Supabase:", eduErr)
      }
    } catch (e) {
      console.error("Failed to load CMS data:", e)
      toaster.create({ title: 'Error', description: 'Failed to fetch CMS records from Supabase.', type: 'error' })
    }
  }

  // Helper to invalidate local caching for instant site updates
  const clearLocalCache = () => {
    localStorage.removeItem('dens_portfolio_data')
  }

  // 3. Auth Actions
  const handleLogout = async () => {
    await supabase.auth.signOut()
    toaster.create({ title: 'Logged Out', description: 'Session ended successfully.', type: 'info' })
    navigate('/')
  }

  // 4. CMS Save Actions
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingProfile(true)
    try {
      const payload = {
        name: profile.name || '',
        title: profile.title || '',
        bio: profile.bio || '',
        location: profile.location || '',
        facebook_url: profile.facebook_url || '',
        linkedin_url: profile.linkedin_url || '',
        github_url: profile.github_url || '',
        avatar_url: profile.avatar_url || ''
      }

      let res;
      if (profile.id) {
        res = await supabase.from('profile').update(payload).eq('id', profile.id)
      } else {
        res = await supabase.from('profile').insert([payload])
      }
      if (res.error) throw res.error
      toaster.create({ title: 'Profile Updated', description: 'Database updated successfully!', type: 'success' })
      clearLocalCache()
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Failed to save', description: err.message, type: 'error' })
    } finally {
      setSavingProfile(false)
    }
  }

  const handleSaveExperience = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingExperience(true)
    try {
      // Split newline bullets into array
      const pointsArray = typeof editingExp.points === 'string'
        ? (editingExp.points as string).split('\n').filter(p => p.trim())
        : editingExp.points

      const payload = {
        company_name: editingExp.company_name,
        company_url: editingExp.company_url,
        role: editingExp.role,
        start_date: editingExp.start_date,
        end_date: editingExp.end_date,
        points: pointsArray,
        order_index: Number(editingExp.order_index || 0)
      }

      let error;
      if (editingExp.id) {
        const res = await supabase.from('experience').update(payload).eq('id', editingExp.id)
        error = res.error
      } else {
        const res = await supabase.from('experience').insert([payload])
        error = res.error
      }

      if (error) throw error
      toaster.create({ title: 'Experience Saved', type: 'success' })
      clearLocalCache()
      setEditingExp(null)
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Failed to save', description: err.message, type: 'error' })
    } finally {
      setSavingExperience(false)
    }
  }

  const handleDeleteExperience = async (id: number) => {
    if (!confirm("Are you sure you want to delete this work experience record?")) return
    setDeletingExpId(id)
    try {
      const { error } = await supabase.from('experience').delete().eq('id', id)
      if (error) throw error
      toaster.create({ title: 'Experience Deleted', type: 'success' })
      clearLocalCache()
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Delete Failed', description: err.message, type: 'error' })
    } finally {
      setDeletingExpId(null)
    }
  }

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingProject(true)
    try {
      const payload = {
        name: editingProj.name,
        url: editingProj.url,
        description: editingProj.description,
        logo_url: editingProj.logo_url,
        order_index: Number(editingProj.order_index || 0)
      }

      let error;
      if (editingProj.id) {
        const res = await supabase.from('projects').update(payload).eq('id', editingProj.id)
        error = res.error
      } else {
        const res = await supabase.from('projects').insert([payload])
        error = res.error
      }

      if (error) throw error
      toaster.create({ title: 'Project Saved', type: 'success' })
      clearLocalCache()
      setEditingProj(null)
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Failed to save', description: err.message, type: 'error' })
    } finally {
      setSavingProject(false)
    }
  }

  const handleDeleteProject = async (id: number) => {
    if (!confirm("Are you sure you want to delete this career project?")) return
    setDeletingProjId(id)
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id)
      if (error) throw error
      toaster.create({ title: 'Project Deleted', type: 'success' })
      clearLocalCache()
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Delete Failed', description: err.message, type: 'error' })
    } finally {
      setDeletingProjId(null)
    }
  }

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSkill.name.trim()) return
    setAddingSkill(true)
    try {
      const { error } = await supabase.from('skills').insert([newSkill])
      if (error) throw error
      toaster.create({ title: 'Skill Added', type: 'success' })
      clearLocalCache()
      setNewSkill({ name: '', url: '', color: '#3B82F6', category: 'backend', order_index: 0 })
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Add Failed', description: err.message, type: 'error' })
    } finally {
      setAddingSkill(false)
    }
  }

  const handleDeleteSkill = async (id: number) => {
    setDeletingSkillId(id)
    try {
      const { error } = await supabase.from('skills').delete().eq('id', id)
      if (error) throw error
      toaster.create({ title: 'Skill Deleted', type: 'success' })
      clearLocalCache()
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Delete Failed', description: err.message, type: 'error' })
    } finally {
      setDeletingSkillId(null)
    }
  }

  const handleSaveEducation = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingEducation(true)
    try {
      const payload = {
        school_name: editingEdu.school_name,
        school_url: editingEdu.school_url,
        degree: editingEdu.degree,
        grad_year: editingEdu.grad_year,
        logo_url: editingEdu.logo_url,
        order_index: Number(editingEdu.order_index || 0)
      }

      let error;
      if (editingEdu.id) {
        const res = await supabase.from('education').update(payload).eq('id', editingEdu.id)
        error = res.error
      } else {
        const res = await supabase.from('education').insert([payload])
        error = res.error
      }

      if (error) throw error
      toaster.create({ title: 'Education Saved', type: 'success' })
      clearLocalCache()
      setEditingEdu(null)
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Failed to save education', description: err.message, type: 'error' })
    } finally {
      setSavingEducation(false)
    }
  }

  const handleDeleteEducation = async (id: number) => {
    if (!confirm("Are you sure you want to delete this education entry?")) return
    setDeletingEduId(id)
    try {
      const { error } = await supabase.from('education').delete().eq('id', id)
      if (error) throw error
      toaster.create({ title: 'Education Record Deleted', type: 'success' })
      clearLocalCache()
      fetchCMSData()
    } catch (err: any) {
      toaster.create({ title: 'Delete Failed', description: err.message, type: 'error' })
    } finally {
      setDeletingEduId(null)
    }
  }

  if (loadingUser) {
    return (
      <Box w="100vw" h="100vh" bg={bg} display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="1.1rem" fontWeight="bold" color={textMuted}>Loading Admin Session...</Text>
      </Box>
    )
  }

  return (
    <Box w="100vw" minH="100vh" bg={bg} pb="4rem" transition="background 0.3s ease">
      
      {/* CMS Header Bar */}
      <Box 
        w="100%" 
        bg={cardBg} 
        h="4rem" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        boxShadow="sm"
        borderBottom="1px solid"
        borderColor={cardBorder}
      >
        <Box w={{ base: "92%", sm: "85%", lg: "70%" }} display="flex" alignItems="center" justifyContent="space-between">
          <Heading fontSize="1.1rem" fontWeight="extrabold" color="blue.500" display="flex" alignItems="center" gap="2">
            DM. Portfolio CMS
          </Heading>
          
          <HStack gap="3">
            <Button 
              onClick={() => navigate('/')} 
              size="xs" 
              variant="outline" 
              borderRadius="xl"
              display="flex"
              alignItems="center"
              gap="1"
            >
              <BiArrowBack /> View Portfolio
            </Button>
            <ColorModeButton size="xs" />
            <Button 
              onClick={handleLogout} 
              size="xs" 
              colorPalette="red" 
              borderRadius="xl"
              display="flex"
              alignItems="center"
              gap="1"
            >
              <BiLogOut /> Log Out
            </Button>
          </HStack>
        </Box>
      </Box>

      {/* Main CMS Tabbed Container */}
      <Box display="flex" justifyContent="center" mt="2rem">
        <Box w={{ base: "92%", sm: "85%", lg: "70%" }}>
          <Box 
            bg={cardBg} 
            p="2rem" 
            borderRadius="2xl" 
            boxShadow="md"
            border="1px solid"
            borderColor={cardBorder}
          >
            <Tabs.Root defaultValue="profile" colorPalette="blue">
              <Tabs.List mb="1.5rem" borderBottom="1px solid" borderColor={borderLine}>
                <Tabs.Trigger value="profile" display="flex" alignItems="center" gap="1.5">
                  <BiUser /> Profile
                </Tabs.Trigger>
                <Tabs.Trigger value="experience" display="flex" alignItems="center" gap="1.5">
                  <BiBriefcase /> Experience
                </Tabs.Trigger>
                <Tabs.Trigger value="projects" display="flex" alignItems="center" gap="1.5">
                  <BiFolder /> Projects
                </Tabs.Trigger>
                <Tabs.Trigger value="skills" display="flex" alignItems="center" gap="1.5">
                  <BiCodeBlock /> Skills
                </Tabs.Trigger>
                <Tabs.Trigger value="education" display="flex" alignItems="center" gap="1.5">
                  <BiSolidGraduation /> Education
                </Tabs.Trigger>
              </Tabs.List>

              {/* PROFILE TAB CONTENT */}
              <Tabs.Content value="profile">
                <Stack gap="5" as="form" onSubmit={handleSaveProfile}>
                  <Box>
                    <Heading fontSize="1.1rem" fontWeight="bold">Update Profile Identity</Heading>
                    <Text fontSize="0.8rem" color={textMuted}>Manage core credentials and descriptions shown on your persistent sidecard.</Text>
                  </Box>
                  <Separator color={borderLine} />
                  
                  <Grid templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }} gap="4">
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Developer Name</Field.Label>
                      <Input value={profile.name || ''} onChange={e => setProfile({...profile, name: e.target.value})} placeholder="Dens Maltos" borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Professional Title</Field.Label>
                      <Input value={profile.title || ''} onChange={e => setProfile({...profile, title: e.target.value})} placeholder="Web Developer" borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Location</Field.Label>
                      <Input value={profile.location || ''} onChange={e => setProfile({...profile, location: e.target.value})} placeholder="Davao City, Philippines" borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Avatar Local Key / Remote URL</Field.Label>
                      <Input value={profile.avatar_url || ''} onChange={e => setProfile({...profile, avatar_url: e.target.value})} placeholder="dens (or https://...)" borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Facebook Profile URL</Field.Label>
                      <Input value={profile.facebook_url || ''} onChange={e => setProfile({...profile, facebook_url: e.target.value})} placeholder="https://facebook.com/..." borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">LinkedIn Profile URL</Field.Label>
                      <Input value={profile.linkedin_url || ''} onChange={e => setProfile({...profile, linkedin_url: e.target.value})} placeholder="https://linkedin.com/in/..." borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">GitHub Profile URL</Field.Label>
                      <Input value={profile.github_url || ''} onChange={e => setProfile({...profile, github_url: e.target.value})} placeholder="https://github.com/..." borderRadius="xl" fontSize="0.85rem" />
                    </Field.Root>
                  </Grid>

                  <Field.Root>
                    <Field.Label fontSize="0.8rem" fontWeight="bold">Short Biography Summary</Field.Label>
                    <Textarea value={profile.bio || ''} onChange={e => setProfile({...profile, bio: e.target.value})} placeholder="Describe yourself..." borderRadius="xl" fontSize="0.85rem" rows={4} />
                  </Field.Root>

                  <Box display="flex" justifyContent="flex-end">
                    <Button type="submit" colorPalette="blue" borderRadius="xl" size="sm" display="flex" alignItems="center" gap="1.5" loading={savingProfile} loadingText="Saving Changes...">
                      <BiSave /> Save Profile Changes
                    </Button>
                  </Box>
                </Stack>
              </Tabs.Content>

              {/* EXPERIENCE TAB CONTENT */}
              <Tabs.Content value="experience">
                {editingExp === null ? (
                  <Stack gap="4">
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box>
                        <Heading fontSize="1.1rem" fontWeight="bold">Work Experience Logs</Heading>
                        <Text fontSize="0.8rem" color={textMuted}>Add or manage your career work chronology timeline.</Text>
                      </Box>
                      <Button size="xs" colorPalette="blue" borderRadius="xl" display="flex" alignItems="center" gap="1" onClick={() => setEditingExp({ company_name: '', company_url: '', role: '', start_date: '', end_date: '', points: '', order_index: 0 })}>
                        <BiPlus /> Add Experience
                      </Button>
                    </Box>
                    <Separator color={borderLine} />

                    <Table.Root size="sm" variant='line' mt="0.5rem">
                      <Table.Header>
                        <Table.Row borderColor={borderLine}>
                          <Table.ColumnHeader fontWeight="bold">Company</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold">Role</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold">Duration</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold" textAlign="right">Actions</Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {experience.map((exp, idx) => (
                          <Table.Row key={idx} borderColor={borderLine} _hover={{ bg: "rgba(255,255,255,0.01)" }}>
                            <Table.Cell fontWeight="semibold">{exp.company_name}</Table.Cell>
                            <Table.Cell>{exp.role}</Table.Cell>
                            <Table.Cell>{exp.start_date} - {exp.end_date}</Table.Cell>
                            <Table.Cell textAlign="right">
                              <HStack gap="2" justifyContent="flex-end">
                                <Button size="xs" variant="subtle" colorPalette="blue" borderRadius="lg" disabled={deletingExpId !== null} onClick={() => setEditingExp({ ...exp, points: exp.points.join('\n') })}>
                                  <BiEditAlt /> Edit
                                </Button>
                                <Button size="xs" variant="subtle" colorPalette="red" borderRadius="lg" loading={deletingExpId === exp.id} onClick={() => handleDeleteExperience(exp.id)}>
                                  <BiTrash /> Delete
                                </Button>
                              </HStack>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table.Root>
                  </Stack>
                ) : (
                  <Stack gap="5" as="form" onSubmit={handleSaveExperience}>
                    <HStack justifyContent="space-between">
                      <Heading fontSize="1.1rem" fontWeight="bold">{editingExp.id ? "Edit Experience Logs" : "Add New Experience Record"}</Heading>
                      <Button size="xs" variant="ghost" onClick={() => setEditingExp(null)}>Cancel</Button>
                    </HStack>
                    <Separator color={borderLine} />

                    <Grid templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }} gap="4">
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Company Name</Field.Label>
                        <Input required value={editingExp.company_name} onChange={e => setEditingExp({...editingExp, company_name: e.target.value})} placeholder="Simple Softech Solutions Co." borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Company Website URL</Field.Label>
                        <Input value={editingExp.company_url} onChange={e => setEditingExp({...editingExp, company_url: e.target.value})} placeholder="https://..." borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Your Role / Position</Field.Label>
                        <Input required value={editingExp.role} onChange={e => setEditingExp({...editingExp, role: e.target.value})} placeholder="Programmer Analyst" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Start Date</Field.Label>
                        <Input required value={editingExp.start_date} onChange={e => setEditingExp({...editingExp, start_date: e.target.value})} placeholder="May 2025" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">End Date</Field.Label>
                        <Input required value={editingExp.end_date} onChange={e => setEditingExp({...editingExp, end_date: e.target.value})} placeholder="January 2026 (or Present)" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Chronological Order Index</Field.Label>
                        <Input type="number" value={editingExp.order_index} onChange={e => setEditingExp({...editingExp, order_index: e.target.value})} placeholder="1" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                    </Grid>

                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Responsibilities / Achievements (One per line)</Field.Label>
                      <Textarea required value={editingExp.points} onChange={e => setEditingExp({...editingExp, points: e.target.value})} placeholder="Gathered client requirements&#10;Designed scalable solutions..." borderRadius="xl" fontSize="0.85rem" rows={6} />
                    </Field.Root>

                    <HStack justify="flex-end" gap="2">
                      <Button size="sm" variant="ghost" borderRadius="xl" onClick={() => setEditingExp(null)}>
                        <BiX /> Cancel
                      </Button>
                      <Button type="submit" colorPalette="blue" size="sm" borderRadius="xl" loading={savingExperience} loadingText="Saving Experience...">
                        <BiSave /> Save Experience
                      </Button>
                    </HStack>
                  </Stack>
                )}
              </Tabs.Content>

              {/* PROJECTS TAB CONTENT */}
              <Tabs.Content value="projects">
                {editingProj === null ? (
                  <Stack gap="4">
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box>
                        <Heading fontSize="1.1rem" fontWeight="bold">Career Projects List</Heading>
                        <Text fontSize="0.8rem" color={textMuted}>Add, edit, or delete professional web apps in your project gallery.</Text>
                      </Box>
                      <Button size="xs" colorPalette="blue" borderRadius="xl" display="flex" alignItems="center" gap="1" onClick={() => setEditingProj({ name: '', url: '', description: '', logo_url: '', order_index: 0 })}>
                        <BiPlus /> Add Project
                      </Button>
                    </Box>
                    <Separator color={borderLine} />

                    <Table.Root size="sm" variant='line' mt="0.5rem">
                      <Table.Header>
                        <Table.Row borderColor={borderLine}>
                          <Table.ColumnHeader fontWeight="bold">Project Name</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold">Live Website Link</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold" textAlign="right">Actions</Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {projects.map((proj, idx) => (
                          <Table.Row key={idx} borderColor={borderLine} _hover={{ bg: "rgba(255,255,255,0.01)" }}>
                            <Table.Cell fontWeight="semibold">{proj.name}</Table.Cell>
                            <Table.Cell color="blue.500" fontSize="0.8rem">{proj.url}</Table.Cell>
                            <Table.Cell textAlign="right">
                              <HStack gap="2" justifyContent="flex-end">
                                <Button size="xs" variant="subtle" colorPalette="blue" borderRadius="lg" disabled={deletingProjId !== null} onClick={() => setEditingProj(proj)}>
                                  <BiEditAlt /> Edit
                                </Button>
                                <Button size="xs" variant="subtle" colorPalette="red" borderRadius="lg" loading={deletingProjId === proj.id} onClick={() => handleDeleteProject(proj.id)}>
                                  <BiTrash /> Delete
                                </Button>
                              </HStack>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table.Root>
                  </Stack>
                ) : (
                  <Stack gap="5" as="form" onSubmit={handleSaveProject}>
                    <HStack justifyContent="space-between">
                      <Heading fontSize="1.1rem" fontWeight="bold">{editingProj.id ? "Edit Project Details" : "Register New Project"}</Heading>
                      <Button size="xs" variant="ghost" onClick={() => setEditingProj(null)}>Cancel</Button>
                    </HStack>
                    <Separator color={borderLine} />

                    <Grid templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }} gap="4">
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Project Title</Field.Label>
                        <Input required value={editingProj.name} onChange={e => setEditingProj({...editingProj, name: e.target.value})} placeholder="Rando Cargo Forwarding" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Live Website / Demo Link</Field.Label>
                        <Input required value={editingProj.url} onChange={e => setEditingProj({...editingProj, url: e.target.value})} placeholder="https://..." borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Logo Key / URL Image</Field.Label>
                        <Input value={editingProj.logo_url} onChange={e => setEditingProj({...editingProj, logo_url: e.target.value})} placeholder="rcf, tes, sfa, or full URL link" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Display Sorting Order</Field.Label>
                        <Input type="number" value={editingProj.order_index} onChange={e => setEditingProj({...editingProj, order_index: e.target.value})} placeholder="1" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                    </Grid>

                    <Field.Root>
                      <Field.Label fontSize="0.8rem" fontWeight="bold">Detailed Description</Field.Label>
                      <Textarea required value={editingProj.description} onChange={e => setEditingProj({...editingProj, description: e.target.value})} placeholder="Detail the tech stack, accomplishments and integrations..." borderRadius="xl" fontSize="0.85rem" rows={4} />
                    </Field.Root>

                    <HStack justify="flex-end" gap="2">
                      <Button size="sm" variant="ghost" borderRadius="xl" onClick={() => setEditingProj(null)}>
                        <BiX /> Cancel
                      </Button>
                      <Button type="submit" colorPalette="blue" size="sm" borderRadius="xl" loading={savingProject} loadingText="Saving Project...">
                        <BiSave /> Save Project
                      </Button>
                    </HStack>
                  </Stack>
                )}
              </Tabs.Content>

              {/* SKILLS TAB CONTENT */}
              <Tabs.Content value="skills">
                <Stack gap="5">
                  <Box>
                    <Heading fontSize="1.1rem" fontWeight="bold">Interactive Technology Pills</Heading>
                    <Text fontSize="0.8rem" color={textMuted}>Manage list cards representing coding tools and tech stacks you utilize.</Text>
                  </Box>
                  <Separator color={borderLine} />

                  {/* Add Skill Form */}
                  <Stack gap="4" as="form" onSubmit={handleAddSkill} p="1.2rem" borderRadius="xl" border="1px dashed" borderColor={borderLine}>
                    <Text fontSize="0.8rem" fontWeight="bold" textTransform="uppercase" color="blue.500">Add New Technology Badge</Text>
                    <Grid templateColumns={{ base: "100%", md: "repeat(3, 1fr)" }} gap="4">
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="semibold">Skill Name</Field.Label>
                        <Input required value={newSkill.name} onChange={e => setNewSkill({...newSkill, name: e.target.value})} placeholder="React" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="semibold">Documentation URL</Field.Label>
                        <Input value={newSkill.url} onChange={e => setNewSkill({...newSkill, url: e.target.value})} placeholder="https://react.dev/" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="semibold">Badge Color Hex</Field.Label>
                        <Input value={newSkill.color} onChange={e => setNewSkill({...newSkill, color: e.target.value})} placeholder="#61DAFB" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                    </Grid>
                    
                    <HStack justify="space-between">
                      <Field.Root display="flex" flexDirection="row" alignItems="center" gap="4">
                        <Field.Label fontSize="0.8rem" fontWeight="semibold" mb="0">Category:</Field.Label>
                        <HStack gap="2">
                          <Button size="xs" variant={newSkill.category === 'backend' ? 'solid' : 'outline'} colorPalette="blue" onClick={() => setNewSkill({...newSkill, category: 'backend'})}>Backend</Button>
                          <Button size="xs" variant={newSkill.category === 'frontend' ? 'solid' : 'outline'} colorPalette="blue" onClick={() => setNewSkill({...newSkill, category: 'frontend'})}>Frontend</Button>
                          <Button size="xs" variant={newSkill.category === 'tools' ? 'solid' : 'outline'} colorPalette="blue" onClick={() => setNewSkill({...newSkill, category: 'tools'})}>Tools</Button>
                        </HStack>
                      </Field.Root>
                      <Button type="submit" size="xs" colorPalette="green" borderRadius="lg" display="flex" alignItems="center" gap="1" loading={addingSkill} loadingText="Adding...">
                        <BiPlus /> Add Badge
                      </Button>
                    </HStack>
                  </Stack>

                  {/* Existing Skills List */}
                  <Box>
                    <Text fontSize="0.85rem" fontWeight="bold" mb="0.8rem">Currently Registered Skills:</Text>
                    <Box display="flex" flexWrap="wrap" gap="0.8rem">
                      {skills.map((skill, idx) => (
                        <Box 
                          key={idx}
                          px="3" 
                          py="1.5" 
                          borderRadius="xl" 
                          border="1px solid" 
                          borderColor={cardBorder}
                          bg="rgba(255,255,255,0.01)"
                          fontSize="0.8rem" 
                          fontWeight="bold" 
                          display="flex" 
                          alignItems="center" 
                          gap="2"
                        >
                          <Box w="0.5rem" h="0.5rem" borderRadius="full" bg={skill.color} />
                          {skill.name}
                          <Badge size="xs" variant="outline" colorPalette="gray" ml="1">{skill.category}</Badge>
                          <Box 
                            as="span" 
                            cursor={deletingSkillId === skill.id ? "not-allowed" : "pointer"} 
                            color="red.500" 
                            _hover={deletingSkillId === skill.id ? {} : { transform: "scale(1.2)" }} 
                            transition="all 0.2s"
                            onClick={() => deletingSkillId !== skill.id && handleDeleteSkill(skill.id)}
                          >
                            {deletingSkillId === skill.id ? (
                              <Spinner size="xs" w="3" h="3" />
                            ) : (
                              <BiTrash size="0.9rem" />
                            )}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </Tabs.Content>

              {/* EDUCATION TAB CONTENT */}
              <Tabs.Content value="education">
                {editingEdu === null ? (
                  <Stack gap="4">
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box>
                        <Heading fontSize="1.1rem" fontWeight="bold">Education Background</Heading>
                        <Text fontSize="0.8rem" color={textMuted}>Add or manage your academic credentials, degrees, and certificates.</Text>
                      </Box>
                      <Button size="xs" colorPalette="blue" borderRadius="xl" display="flex" alignItems="center" gap="1" onClick={() => setEditingEdu({ school_name: '', school_url: '', degree: '', grad_year: '', logo_url: '', order_index: 0 })}>
                        <BiPlus /> Add Education
                      </Button>
                    </Box>
                    <Separator color={borderLine} />

                    <Table.Root size="sm" variant="line" mt="0.5rem">
                      <Table.Header>
                        <Table.Row borderColor={borderLine}>
                          <Table.ColumnHeader fontWeight="bold">School Name</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold">Degree</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold">Year</Table.ColumnHeader>
                          <Table.ColumnHeader fontWeight="bold" textAlign="right">Actions</Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {education.map((edu, idx) => (
                          <Table.Row key={idx} borderColor={borderLine} _hover={{ bg: "rgba(255,255,255,0.01)" }}>
                            <Table.Cell fontWeight="semibold">{edu.school_name}</Table.Cell>
                            <Table.Cell>{edu.degree}</Table.Cell>
                            <Table.Cell>{edu.grad_year}</Table.Cell>
                            <Table.Cell textAlign="right">
                              <HStack gap="2" justifyContent="flex-end">
                                <Button size="xs" variant="subtle" colorPalette="blue" borderRadius="lg" disabled={deletingEduId !== null} onClick={() => setEditingEdu({ ...edu })}>
                                  <BiEditAlt /> Edit
                                </Button>
                                <Button size="xs" variant="subtle" colorPalette="red" borderRadius="lg" loading={deletingEduId === edu.id} onClick={() => handleDeleteEducation(edu.id)}>
                                  <BiTrash /> Delete
                                </Button>
                              </HStack>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                        {education.length === 0 && (
                          <Table.Row>
                            <Table.Cell colSpan={4} textAlign="center" py="2rem" color={textMuted}>
                              No custom education entries found. Using NEMSU fallback profile.
                            </Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Body>
                    </Table.Root>
                  </Stack>
                ) : (
                  <Stack gap="4" as="form" onSubmit={handleSaveEducation}>
                    <Heading fontSize="1.1rem" fontWeight="bold">
                      {editingEdu.id ? "Edit Education Entry" : "Create New Education Entry"}
                    </Heading>
                    <Separator color={borderLine} />

                    <Grid templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }} gap="4">
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">School Name</Field.Label>
                        <Input required value={editingEdu.school_name || ''} onChange={e => setEditingEdu({...editingEdu, school_name: e.target.value})} placeholder="e.g. North Eastern Mindanao State University" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">School Website URL</Field.Label>
                        <Input value={editingEdu.school_url || ''} onChange={e => setEditingEdu({...editingEdu, school_url: e.target.value})} placeholder="https://..." borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Degree / Certification</Field.Label>
                        <Input required value={editingEdu.degree || ''} onChange={e => setEditingEdu({...editingEdu, degree: e.target.value})} placeholder="e.g. B.S. Computer Science" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Graduation Year / Duration</Field.Label>
                        <Input required value={editingEdu.grad_year || ''} onChange={e => setEditingEdu({...editingEdu, grad_year: e.target.value})} placeholder="e.g. Graduated in 2024" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">School Logo Key / URL</Field.Label>
                        <Input value={editingEdu.logo_url || ''} onChange={e => setEditingEdu({...editingEdu, logo_url: e.target.value})} placeholder="nemsu (or direct Google Drive link)" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="0.8rem" fontWeight="bold">Display Sorting Order</Field.Label>
                        <Input type="number" value={editingEdu.order_index || 0} onChange={e => setEditingEdu({...editingEdu, order_index: e.target.value})} placeholder="1" borderRadius="xl" fontSize="0.85rem" />
                      </Field.Root>
                    </Grid>

                    <HStack justify="flex-end" gap="2">
                      <Button size="sm" variant="ghost" borderRadius="xl" onClick={() => setEditingEdu(null)}>
                        <BiX /> Cancel
                      </Button>
                      <Button type="submit" colorPalette="blue" size="sm" borderRadius="xl" loading={savingEducation} loadingText="Saving Record...">
                        <BiSave /> Save Education
                      </Button>
                    </HStack>
                  </Stack>
                )}
              </Tabs.Content>

            </Tabs.Root>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
