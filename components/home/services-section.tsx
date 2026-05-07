"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import { DietPlanModal } from "../DietPlanModal"

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  // Use the language context
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).services

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header Animation */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-800 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
          <div className="mt-8 relative max-w-2xl mx-auto">
            {/* The Container with Blur and Border */}
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-[32px] shadow-sm border border-[#8b2f2c]/10 transition-all hover:shadow-md">

              {/* The Description with Gradient Text */}
              <p className="relative text-xl md:text-2xl font-semibold leading-relaxed tracking-tight">
                {/* Decorative Opening Quote */}
                <span className="absolute -top-4 -left-2 text-[#8b2f2c]/20 text-6xl font-serif select-none">
                  “
                </span>

                {/* The Actual Gradient Content */}
                <span className="bg-gradient-to-r from-[#8b2f2c] via-[#a33a37] to-gray-600 bg-clip-text text-transparent italic">
                  {t.description}
                </span>

                {/* Decorative Closing Quote */}
                <span className="absolute -bottom-10 right-0 text-[#8b2f2c]/20 text-6xl font-serif select-none">
                  ”
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Staggered Grid Animation */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the items from the translation file instead of local constant */}
          {t.items.slice(0, 6).map((treatment: any, index: number) => (
            <div
              key={treatment.slug}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
              }}
              className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
                    {treatment.description}
                  </p>
                  <Link
                    href={`/services#${treatment.slug}`}
                    className="inline-flex items-center gap-2 mt-4 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    {t.btnLearnMore}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button Animation */}
        <div
          style={{ transitionDelay: '800ms' }}
          className={`text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Wrap the Diet Plan button with the Modal */}
          <DietPlanModal>
            <Button
              size="lg"
              className="rounded-full px-8 bg-[#8b2f2c] text-white hover:bg-[#8b2f2c]/90 transition-colors shadow-md cursor-pointer"
            >
              {lang === 'hi' ? "डाइट प्लान प्राप्त करें" : "Get Personal Diet Plan"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </DietPlanModal>
          
          {/* Keep ONLY ONE original button */}
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/services">
              {t.btnViewAll}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}