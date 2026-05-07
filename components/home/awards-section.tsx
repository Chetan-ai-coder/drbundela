"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Medal, Trophy, Star, Shield, BadgeCheck } from "lucide-react"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

// Keep icons in the component to avoid storing components in the translation object
const awardIcons = [Trophy, Medal, Award, Star, Shield, BadgeCheck];

export function AwardsSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).awards

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.items.map((award, index) => {
            const IconComponent = awardIcons[index];
            
            return (
              <div
                key={index}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms" 
                }}
                className={`transition-all duration-700 transform ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-12 scale-90"
                }`}
              >
                <div className="group text-center p-6 rounded-2xl bg-secondary/50 hover:bg-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center cursor-default">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground group-hover:text-white text-sm transition-colors">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-white/80 transition-colors">
                    {award.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}