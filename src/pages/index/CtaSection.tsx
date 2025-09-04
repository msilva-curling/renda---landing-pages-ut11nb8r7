import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShieldCheck, XCircle } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

export const CtaSection = ({
  onRegisterClick,
}: {
  onRegisterClick: () => void
}) => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.2 })

  return (
    <section id="cta" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          className={cn(
            'bg-primary text-primary-foreground rounded-lg p-8 md:p-12 lg:p-16 text-center transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Transformar Seus Hábitos e Sua Vida?
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão construindo um futuro
            melhor, um hábito de cada vez.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full text-lg"
              onClick={onRegisterClick}
            >
              Começar Sua Jornada Gratuita Agora!
            </Button>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Sem Cartão de Crédito Necessário</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              <span>Cancele a Qualquer Momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
