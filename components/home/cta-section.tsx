"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, Phone, ArrowRight } from "lucide-react"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).cta

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            {t.description}
          </p>

          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 bg-white text-primary hover:bg-white/90"
            >
              <Link href="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                {t.btnBook}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 border-2 border-white text-primary hover:bg-white/10"
            >
              <a href="tel:+919415187520">
                <Phone className="w-5 h-5 mr-2" />
                {t.btnCall}
              </a>
            </Button>
          </div>

          <p className={`mt-8 text-white/60 text-sm ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            {t.footer}
          </p>
        </div>
      </div>
    </section>
  )
}