import { useEffect, useState, useRef } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (target) {
            observer.unobserve(target)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    )

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
