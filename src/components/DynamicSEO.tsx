import { useEffect } from 'react'
import type { PortfolioData } from '@/hooks/usePortfolioData'

interface DynamicSEOProps {
  data: PortfolioData | null
}

export default function DynamicSEO({ data }: DynamicSEOProps) {
  useEffect(() => {
    if (!data || !data.profile) return

    const { name, title, bio } = data.profile
    const documentTitle = name && title ? `${name} | ${title}` : 'Dens Maltos | Web Developer'
    const documentDescription = bio || "Web Developer specializing in high-performance web applications. Explore my projects and engineering skills."

    document.title = documentTitle

    const updateMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('name', 'title', documentTitle)
    updateMetaTag('name', 'description', documentDescription)
    updateMetaTag('property', 'og:title', documentTitle)
    updateMetaTag('property', 'og:description', documentDescription)
    updateMetaTag('name', 'twitter:title', documentTitle)
    updateMetaTag('name', 'twitter:description', documentDescription)

  }, [data])

  return null
}
