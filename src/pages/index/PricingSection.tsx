import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const freeFeatures = [
  'Rastreamento Básico de Hábitos',
  'Lembretes Essenciais',
  'Relatórios Semanais',
]
const premiumFeatures = [
  'Tudo no Gratuito +',
  'Lembretes Inteligentes Personalizados',
  'Análise de Progresso Avançada',
  'Desafios Gamificados',
  'Temas Exclusivos',
  'Suporte Prioritário',
]

export const PricingSection = ({
  onRegisterClick,
}: {
  onRegisterClick: () => void
}) => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="pricing" ref={ref} className="section-padding bg-accent">
      <div className="container mx-auto">
        <div
          className={cn(
            'text-center mb-12 transition-opacity duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Escolha o plano perfeito para você
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comece de graça e evolua quando estiver pronto. Simples e
            transparente.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={cn(
              'transition-all duration-700 ease-out',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10',
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Plano Gratuito</CardTitle>
                <CardDescription>
                  Para quem está começando a jornada de novos hábitos.
                </CardDescription>
                <p className="text-4xl font-bold pt-4">
                  R$ 0{' '}
                  <span className="text-lg font-normal text-muted-foreground">
                    / mês
                  </span>
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={onRegisterClick}
                >
                  Começar Grátis
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className={cn(
              'transition-all duration-700 ease-out',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10',
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <Card className="h-full flex flex-col border-2 border-primary relative overflow-hidden shadow-lg">
              <Badge className="absolute top-0 right-0 -mr-1 mt-6 -rotate-45 translate-x-1/3 bg-primary">
                Mais Popular
              </Badge>
              <CardHeader>
                <CardTitle>Plano Premium</CardTitle>
                <CardDescription>
                  Para quem leva a sério o desenvolvimento pessoal.
                </CardDescription>
                <p className="text-4xl font-bold pt-4">
                  R$ 19,90{' '}
                  <span className="text-lg font-normal text-muted-foreground">
                    / mês
                  </span>
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={onRegisterClick}>
                  Assinar Premium
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
