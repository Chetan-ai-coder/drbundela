"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Heart, 
  Target, 
  Lightbulb,
  BookOpen,
  Stethoscope
} from "lucide-react"

import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

const philosophyIcons = [Heart, Target, Lightbulb];
const achievementIcons = [Award, Users, BookOpen, Stethoscope];

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).aboutPage

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative w-full aspect-[3/4] max-w-lg mx-auto">
                  <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl" />
                  <div className="absolute -bottom-6 -right-4 w-48 h-48 bg-primary rounded-3xl" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="Dr Bundela/Doctor/doctor-about-full.jpg"
                      alt="Dr. R.S.S. Bundela"
                      width={500}
                      height={650}
                      className="w-full h-full object-cover"
                      priority
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {t.heroBadge}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  {t.heroTitle}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {t.heroPara1}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t.heroPara2}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t.heroPara3}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/appointment">{t.btns.book}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                    <Link href="/contact">{t.btns.contact}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {t.achievements.map((item, index) => {
                const Icon = achievementIcons[index];
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-serif text-4xl font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-white/80 text-sm">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {t.credentials.badge}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.credentials.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {t.credentials.desc}
              </p>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              {t.credentials.items.map((qual, index) => (
                <div 
                  key={index} 
                  className="relative pl-12 pb-12 last:pb-0 border-l-2 border-primary/20 last:border-transparent"
                >
                  <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {qual.year}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                      {qual.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{qual.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {t.philosophy.badge}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.philosophy.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {t.philosophy.desc}
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {t.philosophy.items.map((item, index) => {
                const Icon = philosophyIcons[index];
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              {t.cta.desc}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-8 rounded-full px-8 bg-white text-primary hover:bg-white/90"
            >
              <Link href="/appointment">{t.cta.btn}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
