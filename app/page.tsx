import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { WhyHomeopathySection } from "@/components/home/why-homeopathy-section"
import { ServicesSection } from "@/components/home/services-section"
import { DoctorIntroSection } from "@/components/home/doctor-intro-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { AwardsSection } from "@/components/home/awards-section"
import { GallerySection } from "@/components/home/gallery-section"
import { CTASection } from "@/components/home/cta-section"
import { CallNowBanner } from "@/components/call-now-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyHomeopathySection />
        <ServicesSection />
        <DoctorIntroSection />
        <TestimonialsSection />
        <AwardsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
