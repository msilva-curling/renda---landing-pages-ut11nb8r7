import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '1',
    title: 'Defina Seus Hábitos',
    description:
      'Escolha os hábitos que você quer construir e personalize metas e horários.',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=goal%20setting%20illustration',
  },
  {
    number: '2',
    title: 'Rastreie Seu Progresso',
    description:
      'Marque seus hábitos como concluídos a cada dia e veja suas sequências crescerem.',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=progress%20tracking%20illustration',
  },
  {
    number: '3',
    title: 'Cresça e Conquiste',
    description:
      'Analise seus dados, receba insights e alcance novos níveis de produtividade e bem-estar.',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=achievement%20illustration',
  },
]

export const HowItWorksSection = () => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 })

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-accent">
      <div className="container mx-auto">
        <div
          className={cn(
            'text-center mb-12 transition-opacity duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comece em 3 passos simples
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Construir uma vida melhor nunca foi tão fácil.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 hidden lg:block" />
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                'flex-1 flex flex-col items-center text-center transition-all duration-700 ease-out',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10',
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full text-2xl font-bold text-primary mb-6">
                {step.number}
              </div>
              <img
                src={step.imageUrl}
                alt={step.title}
                className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
