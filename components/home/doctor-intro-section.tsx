"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Users, Clock, GraduationCap } from "lucide-react"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

// Keep icons here since they are components, not strings
const statIcons = [Clock, Users, Award, GraduationCap];

export function DoctorIntroSection() {
  const { ref, isVisible } = useScrollAnimation()

  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).doctorIntro

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-2xl" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="Dr Bundela/Doctor/doctor-about.jpg"
                  alt={t.name}
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -right-4 bottom-0 
              md:-right-6 md:top-1/2 sm:-translate-y-1/2 sm:bottom-auto
              bg-white rounded-2xl shadow-xl 
              p-4 sm:p-6 
              text-center min-w-[100px] sm:min-w-[120px] 
              border border-primary/5 z-20">
                <p className="font-serif text-4xl font-bold text-primary">{t.expYears}</p>
                <p className="text-sm text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: t.expLabel.replace(' ', '<br />') }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t.badge}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t.name}
            </h2>
            <p className="mt-2 text-xl text-primary font-medium">
              {t.qualifications}
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.description1}
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.description2}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {t.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="rounded-full px-8 mt-10">
              <Link href="/about">{t.btnLearnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
