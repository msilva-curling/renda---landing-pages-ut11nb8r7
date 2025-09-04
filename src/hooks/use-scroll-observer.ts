import { useState, useEffect, useRef, RefObject } from 'react'

interface UseScrollObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollObserver = (
  options: UseScrollObserverOptions = {},
): [RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce) {
              obs.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [containerRef, threshold, rootMargin, triggerOnce])

  return [containerRef, isVisible]
}
