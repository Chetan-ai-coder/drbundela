"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

// Import language logic
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).testimonials

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
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

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDuration: `${(index + 1) * 400}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Condition */}
              <div>
                <span className="inline-block mt-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {testimonial.condition}
                </span>
              </div>

              {/* Review */}
              <p className="mt-4 text-muted-foreground leading-relaxed flex-grow">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}