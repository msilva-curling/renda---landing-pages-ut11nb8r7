import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: 'Ana Clara',
    title: 'Desenvolvedora de Software',
    quote:
      'O HabitFlow mudou minha rotina. A interface é linda e os insights de IA são incrivelmente úteis para me manter no caminho certo.',
    avatarSeed: '1',
    rating: 5,
  },
  {
    name: 'Bruno Mendes',
    title: 'Gerente de Produto',
    quote:
      'Finalmente um app de hábitos que não é chato! A gamificação me mantém engajado e competitivo comigo mesmo. Recomendo!',
    avatarSeed: '2',
    rating: 5,
  },
  {
    name: 'Carla Viana',
    title: 'Designer UX/UI',
    quote:
      'Como designer, aprecio a atenção aos detalhes. O app é intuitivo, bonito e, o mais importante, funciona. Meus hábitos nunca foram tão consistentes.',
    avatarSeed: '3',
    rating: 5,
  },
  {
    name: 'Diego Faria',
    title: 'Estudante',
    quote:
      'O plano gratuito é super completo e me ajudou a organizar meus estudos e minha vida pessoal. É uma ferramenta essencial para qualquer estudante.',
    avatarSeed: '4',
    rating: 5,
  },
]

export const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container mx-auto">
        <div
          className={cn(
            'text-center mb-12 transition-opacity duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Amado por usuários em todo o mundo
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Veja o que nossos usuários estão dizendo sobre sua jornada com o
            HabitFlow.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className={cn(
            'w-full transition-opacity duration-1000 delay-300',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex mb-2">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                      </div>
                      <p className="text-muted-foreground flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center mt-6">
                        <Avatar>
                          <AvatarImage
                            src={`https://img.usecurling.com/ppl/thumbnail?seed=${testimonial.avatarSeed}`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
