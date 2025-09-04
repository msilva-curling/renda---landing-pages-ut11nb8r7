import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

interface HeroSectionProps {
  onRegisterClick: () => void
  onDemoClick: () => void
}

export const HeroSection = ({
  onRegisterClick,
  onDemoClick,
}: HeroSectionProps) => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <div
          className={cn(
            'transition-all duration-1000',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          )}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 text-balance">
            Transforme Seus Sonhos em Hábitos Diários.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Rastreie, analise e construa hábitos poderosos com inteligência
            artificial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              Começar Grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDemoClick}
              className="w-full sm:w-auto"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#features" aria-label="Rolar para a próxima seção">
          <ChevronDown className="h-8 w-8 text-foreground/50 animate-bounce-slow" />
        </a>
      </div>
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 lg:mr-0 lg:mb-0 w-1/2 lg:w-1/3 z-0">
        <img
          src="https://img.usecurling.com/p/800/800?q=dashboard%20ui&dpr=2"
          alt="HabitFlow dashboard"
          className="animate-float opacity-20 lg:opacity-100"
        />
      </div>
    </section>
  )
}
