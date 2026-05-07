"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).gallery

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Animation */}
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

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {t.images.map((image, index) => (
            <div
              key={index}
              style={{ 
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms" 
              }}
              className={`transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
              }`}
            >
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay: Slides in from the bottom on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-serif text-base md:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}