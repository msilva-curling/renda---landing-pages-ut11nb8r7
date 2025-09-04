import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onLoginClick: () => void
  onRegisterClick: () => void
}

const navLinks = [
  { name: 'Recursos', href: '#features' },
  { name: 'Como Funciona', href: '#how-it-works' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Preços', href: '#pricing' },
]

export const Header = ({ onLoginClick, onRegisterClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = navLinks.map((link) => document.querySelector(link.href))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.clientHeight > scrollPosition
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24">
        <a href="#hero" className="flex items-center gap-2 group">
          <Leaf className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-2xl font-bold text-foreground">HabitFlow</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-foreground hover:text-primary transition-colors',
                activeSection === link.href.substring(1) &&
                  'text-primary font-semibold',
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" onClick={onLoginClick}>
            Entrar
          </Button>
          <Button onClick={onRegisterClick}>Começar Grátis</Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
              <div className="flex flex-col h-full p-6">
                <a
                  href="#hero"
                  className="flex items-center gap-2 mb-8"
                  onClick={handleNavLinkClick}
                >
                  <Leaf className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-foreground">
                    HabitFlow
                  </span>
                </a>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavLinkClick}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onLoginClick()
                      handleNavLinkClick()
                    }}
                  >
                    Entrar
                  </Button>
                  <Button
                    onClick={() => {
                      onRegisterClick()
                      handleNavLinkClick()
                    }}
                  >
                    Começar Grátis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
