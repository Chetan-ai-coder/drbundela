import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ConsultationContent } from './consultation-content'

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <ConsultationContent />
      </Suspense>
      <Footer />
    </>
  )
}
