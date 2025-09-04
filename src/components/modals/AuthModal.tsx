import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

type ModalView = 'login' | 'register' | 'demo'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView?: ModalView
}

const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z.string().min(1, { message: 'Senha é obrigatória.' }),
})

const registerSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres.' }),
})

export const AuthModal = ({
  isOpen,
  onClose,
  initialView = 'login',
}: AuthModalProps) => {
  const [view, setView] = useState<ModalView>(initialView)
  const [isLoading, setIsLoading] = useState(false)

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' },
  })

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true)
    console.log('Login data:', values)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast({
      title: 'Bem-vindo de volta!',
      description: 'Login realizado com sucesso.',
    })
    setIsLoading(false)
    onClose()
  }

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true)
    console.log('Register data:', values)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast({
      title: 'Registro realizado com sucesso!',
      description: 'Sua jornada começa agora.',
    })
    setIsLoading(false)
    onClose()
  }

  const renderContent = () => {
    switch (view) {
      case 'demo':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Demonstração do HabitFlow</DialogTitle>
              <DialogDescription>
                Veja como é fácil transformar seus hábitos.
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video rounded-lg overflow-hidden mt-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )
      case 'login':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Entrar no HabitFlow</DialogTitle>
              <DialogDescription>
                Continue sua jornada de construção de hábitos.
              </DialogDescription>
            </DialogHeader>
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(handleLogin)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Entrar
                </Button>
              </form>
            </Form>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <a href="#" className="underline hover:text-primary">
                Esqueceu a senha?
              </a>
              <p>
                Não tem uma conta?{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => setView('register')}
                >
                  Registre-se
                </Button>
              </p>
            </div>
          </>
        )
      case 'register':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Crie sua conta grátis</DialogTitle>
              <DialogDescription>
                Comece a construir hábitos melhores hoje mesmo.
              </DialogDescription>
            </DialogHeader>
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(handleRegister)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Registrar
                </Button>
              </form>
            </Form>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Já tem uma conta?{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => setView('login')}
                >
                  Entrar
                </Button>
              </p>
            </div>
          </>
        )
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}
