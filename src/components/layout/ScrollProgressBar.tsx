import { useScrollProgress } from '@/hooks/use-scroll-progress'

export const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
