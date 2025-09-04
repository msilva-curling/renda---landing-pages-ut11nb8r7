import { Leaf, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  const footerLinks = [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Contato', href: '#' },
    { name: 'Termos de Serviço', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
  ]

  return (
    <footer className="bg-muted">
      <div className="container mx-auto section-padding !py-12 md:!py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">HabitFlow</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© 2024 HabitFlow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
