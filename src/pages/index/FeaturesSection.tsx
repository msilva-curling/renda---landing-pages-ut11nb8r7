import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, BarChart2, Trophy, BrainCircuit } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Clock,
    title: 'Lembretes Inteligentes',
    description:
      'Nunca mais esqueça um hábito com nossos lembretes personalizáveis e inteligentes.',
  },
  {
    icon: BarChart2,
    title: 'Visualização de Progresso',
    description:
      'Acompanhe sua evolução com gráficos e relatórios detalhados que te mantêm motivado.',
  },
  {
    icon: Trophy,
    title: 'Desafios Gamificados',
    description:
      'Transforme a construção de hábitos em um jogo divertido com desafios e recompensas.',
  },
  {
    icon: BrainCircuit,
    title: 'Insights Personalizados',
    description:
      'Receba dicas e análises baseadas em IA para otimizar sua rotina e alcançar seus objetivos.',
  },
]

export const FeaturesSection = () => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="features" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          className={cn(
            'text-center mb-12 transition-opacity duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tudo que você precisa para ter sucesso
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recursos poderosos projetados para tornar a construção de hábitos
            simples e eficaz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'transition-all duration-700 ease-out',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10',
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="bg-accent rounded-full p-4 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
