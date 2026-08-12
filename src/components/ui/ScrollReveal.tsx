import React, { useEffect, useState, useRef } from 'react'
import { Box, type BoxProps } from '@chakra-ui/react'

interface ScrollRevealProps extends BoxProps {
  children: React.ReactNode
  threshold?: number
}

export default function ScrollReveal({ children, threshold = 0.1, ...props }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold])

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(25px)"}
      transition="all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
      {...props}
    >
      {children}
    </Box>
  )
}
