import { useEffect } from 'react'

export default function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!measurementId) return

    // Inject the GA script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `

    document.head.appendChild(script1)
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [measurementId])

  return null
}
