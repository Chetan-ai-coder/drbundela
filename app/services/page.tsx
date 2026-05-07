"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

// Static image mapping to keep translations.ts clean
const serviceImages: Record<string, string> = {
  "hair-loss": "/Dr Bundela/Services/service-hair.jpg",
  "skin-problems": "/Dr Bundela/Services/service-skin.jpg",
  "mental-wellness": "/Dr Bundela/Services/service-mental.jpg",
  "thyroid": "/Dr Bundela/Services/service-thyroid.jpg",
  "pcos": "/Dr Bundela/Services/service-pcos.jpg",
  "allergy": "/Dr Bundela/Services/service-allergy.jpg",
  "digestive": "/Dr Bundela/Services/service-digestive.jpg",
};

export default function ServicesPage() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).servicesPage

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-background to-secondary">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.hero.desc}
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {t.items.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-32 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={serviceImages[service.id]}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{service.benefitsTitle}</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{service.conditionsTitle}</h4>
                        <ul className="space-y-2">
                          {service.conditions.map((condition, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild className="rounded-full px-6 mt-8">
                      <Link href="/appointment">
                        {service.btn}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {t.process.badge}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.process.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {t.process.desc}
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.process.steps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow">
                    <span className="inline-block font-serif text-5xl font-bold text-primary/20">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
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