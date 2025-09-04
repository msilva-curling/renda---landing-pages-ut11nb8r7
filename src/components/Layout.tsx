import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AuthModal } from '@/components/modals/AuthModal'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'

type ModalState = {
  isOpen: boolean
  view: 'login' | 'register' | 'demo'
}

export default function Layout() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    view: 'login',
  })

  const openModal = (view: 'login' | 'register' | 'demo') => {
    setModalState({ isOpen: true, view })
  }

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false })
  }

  return (
    <>
      <ScrollProgressBar />
      <Header
        onLoginClick={() => openModal('login')}
        onRegisterClick={() => openModal('register')}
      />
      <main>
        <Outlet context={{ openModal }} />
      </main>
      <Footer />
      <AuthModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        initialView={modalState.view}
      />
    </>
  )
}
