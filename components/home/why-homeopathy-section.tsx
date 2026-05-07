"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Leaf, Heart, Shield, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

// We map the icons to an index so we can match them with the translation array
const icons = [Leaf, Shield, Heart, Sparkles];

export function WhyHomeopathySection() {
  const { ref, isVisible } = useScrollAnimation()
  const { lang } = useLanguage()
  
  // Safely get translations with a fallback to 'en'
  const t = (translations[lang] || translations.en).whyHomeopathy

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div 
          className={`text-center max-w-3xl mx-auto`}
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

        {/* Grid with Staggered Animation */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => {
            // Pick the icon based on the current index
            const IconComponent = icons[index] || Sparkles;
            
            return (
              <div
                key={index}
                style={{ 
                  transitionDelay: `${index * 180}ms`,
                }}
                className={`text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-200 hover:shadow-lg group transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}