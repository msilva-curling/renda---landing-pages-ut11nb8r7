import { useState, useEffect } from 'react'

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollPosition = window.scrollY
    const progress = (scrollPosition / totalHeight) * 100
    setScrollProgress(progress)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}
