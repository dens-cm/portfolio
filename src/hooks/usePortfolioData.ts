import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

// Import local assets for mapping
import Dens from '@/assets/dens.jpeg'
import Nemsu from '@/assets/nemsu.png'
import RcfLogo from '@/assets/projects/randocargoforwarding.png'
import TesLogo from '@/assets/projects/tes.png'
import SfaLogo from '@/assets/projects/simplesfa.png'
import TasetemcoLogo from '@/assets/projects/tasetemco.png'

// Asset mapping for hybrid CMS loading
export const LOCAL_ASSETS: Record<string, string> = {
  dens: Dens,
  nemsu: Nemsu,
  rcf: RcfLogo,
  tes: TesLogo,
  sfa: SfaLogo,
  tasetemco: TasetemcoLogo,
}

export interface ProfileData {
  name: string
  title: string
  bio: string
  location: string
  facebook_url: string
  linkedin_url: string
  github_url: string
  avatar_url: string
}

export interface ExperienceData {
  id?: number
  company_name: string
  company_url: string
  role: string
  start_date: string
  end_date: string
  points: string[]
  order_index: number
}

export interface ProjectData {
  id?: number
  name: string
  url: string
  description: string
  logo_url: string
  order_index: number
}

export interface SkillData {
  id?: number
  name: string
  url: string
  color: string
  category: string
  order_index: number
}

export interface EducationData {
  id?: number
  school_name: string
  school_url: string
  degree: string
  grad_year: string
  logo_url: string
  order_index: number
}

export interface PortfolioData {
  profile: ProfileData
  experience: ExperienceData[]
  projects: ProjectData[]
  skills: SkillData[]
  education: EducationData[]
}

// Sleek skeletal schema state
const EMPTY_STATE: PortfolioData = {
  profile: {
    name: "",
    title: "",
    bio: "",
    location: "",
    facebook_url: "",
    linkedin_url: "",
    github_url: "",
    avatar_url: ""
  },
  experience: [],
  projects: [],
  skills: [],
  education: []
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(EMPTY_STATE)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // 1. Try to load from localStorage first for instant hydration
    const cached = localStorage.getItem('dens_portfolio_data')
    if (cached) {
      try {
        setData(JSON.parse(cached))
        setLoading(false)
      } catch (e) {
        console.error("Failed to parse cached portfolio data:", e)
      }
    }

    // 2. Fetch fresh data from Supabase in the background
    async function fetchFreshData() {
      try {
        const [profileRes, expRes, projRes, skillRes] = await Promise.all([
          supabase.from('profile').select('*'),
          supabase.from('experience').select('*').order('order_index', { ascending: true }),
          supabase.from('projects').select('*').order('order_index', { ascending: true }),
          supabase.from('skills').select('*').order('order_index', { ascending: true })
        ])

        if (profileRes.error || expRes.error || projRes.error || skillRes.error) {
          throw new Error("Failed to fetch fresh data from Supabase.")
        }

        const profileData = profileRes.data && profileRes.data.length > 0 
          ? profileRes.data[0] 
          : EMPTY_STATE.profile

        // Dynamic fail-safe fetch for Education
        let educationData: EducationData[] = []
        try {
          const eduRes = await supabase.from('education').select('*').order('order_index', { ascending: true })
          if (!eduRes.error) {
            educationData = eduRes.data || []
          }
        } catch (e) {
          console.warn("Education table is missing or unseeded, using fallback empty array:", e)
        }

        const freshData: PortfolioData = {
          profile: profileData,
          experience: expRes.data || [],
          projects: projRes.data || [],
          skills: skillRes.data || [],
          education: educationData
        }

        setData(freshData)
        localStorage.setItem('dens_portfolio_data', JSON.stringify(freshData))
      } catch (err) {
        console.error("Failed to load portfolio database:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFreshData()
  }, [])

  // Dynamic SEO Synchronization Effect
  useEffect(() => {
    if (data.profile && data.profile.name) {
      document.title = `${data.profile.name} | ${data.profile.title}`
      
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', data.profile.bio)
      
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', `${data.profile.name} | ${data.profile.title}`)
      
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', data.profile.bio)
    }
  }, [data.profile])

  return { data, loading }
}
