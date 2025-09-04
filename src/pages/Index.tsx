import { useOutletContext } from 'react-router-dom'
import { HeroSection } from './index/HeroSection'
import { FeaturesSection } from './index/FeaturesSection'
import { HowItWorksSection } from './index/HowItWorksSection'
import { TestimonialsSection } from './index/TestimonialsSection'
import { PricingSection } from './index/PricingSection'
import { CtaSection } from './index/CtaSection'

type OutletContextType = {
  openModal: (view: 'login' | 'register' | 'demo') => void
}

const Index = () => {
  const { openModal } = useOutletContext<OutletContextType>()

  return (
    <>
      <HeroSection
        onRegisterClick={() => openModal('register')}
        onDemoClick={() => openModal('demo')}
      />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection onRegisterClick={() => openModal('register')} />
      <CtaSection onRegisterClick={() => openModal('register')} />
    </>
  )
}

export default Index
