"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import { diseaseCategories, DiseaseItem } from "@/lib/diseases-data"
import imagekitLoader from "@/lib/imagekitLoader"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function DiseaseCard({ disease, index, categoryId }: { disease: DiseaseItem; index: number; categoryId: string }) {
  // Logic to determine if we show Piles or Kidney Stone content based on category
  const catParam = categoryId.toLowerCase().includes('stone') || categoryId.toLowerCase().includes('kidney') 
    ? 'Kidney Stone' 
    : 'Piles';

  return (
    <Link
      href={`/consultation?cat=${catParam}&disease=${disease.hi}`}
      className="disease-card group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="disease-card__image-wrap">
        {disease.image ? (
          <Image
            src={disease.image}
            alt={disease.en}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
            className="disease-card__image"
            priority={false}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full" /> // Placeholder for missing images
        )}
        <div className="disease-card__overlay" />
      </div>

      {/* Text */}
      <div className="disease-card__body">
        <p className="disease-card__name-en">{disease.en}</p>
        <p className="disease-card__name-hi">{disease.hi}</p>

        <button
          className="disease-card__cta"
        >
          Call Now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="disease-card__arrow">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </Link>
  )
}

/* ─────────────────────────────────────────────
   Category Section
───────────────────────────────────────────── */
function CategorySection({ category, lang }: { category: typeof diseaseCategories[0]; lang: string }) {
  const { ref, visible } = useInView()
  const title = lang === "hi" ? category.titleHi : category.titleEn

  return (
    <section
      id={category.id}
      ref={ref}
      className={`category-section scroll-mt-36 ${visible ? "category-section--visible" : ""}`}
    >
      {/* Section header */}
      <div className="category-header">
        <div className="category-header__line" />
        <div className="category-header__text">
          <span className="category-header__eyebrow">Specialisation</span>
          <h2 className="category-header__title">{title}</h2>
        </div>
        <div className="category-header__count">
          {category.items.length} {category.items.length === 1 ? "Condition" : "Conditions"}
        </div>
      </div>

      {/* Cards */}
      <div
        className="disease-grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${category.items.length <= 2 ? "220px" : "185px"
            }, 1fr))`,
        }}
      >
        {category.items.map((disease, i) => (
          <DiseaseCard 
            key={disease.id} 
            disease={disease} 
            index={i} 
            categoryId={category.id} 
          />
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function DiseasesPage() {
  const { lang } = useLanguage()
  const t = (translations[lang as keyof typeof translations] || translations.en).servicesPage
  const [activeId, setActiveId] = useState(diseaseCategories[0]?.id)

  /* Track active nav pill via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    diseaseCategories.forEach((cat) => {
      const el = document.getElementById(cat.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(cat.id) },
        { rootMargin: "-30% 0px -60% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      <style>{`

        /* ── Design tokens ── */
        :root {
  /* Neutrals & Backgrounds */
  --color-ivory:      #fdfaf9; /* A crisp, warm white background */
  --color-parchment:  #f8f2f1; /* Subtle rose-tinted neutral for sections */
  
  /* Primary Brand - Replacing Sage */
  --color-maroon:     #800000; /* Deep Maroon for Hero Badge & Highlights */
  --color-maroon-light: #f5e6e6; /* Soft pinkish background for contrast */
  
  /* Dark Accents - Replacing Slate */
  --color-slate:      #800000; /* Deep charcoal with red undertones for titles */
  --color-slate-mid:  #800000; /* Muted version for descriptions */
  
  /* Action & Luxury - Replacing Gold */
  --color-red-accent: #b91c1c; /* Vibrant Red for the CTA button and ornaments */
  --color-red-light:  #fee2e2; /* For soft hover states or dividers */
  
  /* Functional */
  --color-border:     rgba(128, 0, 0, 0.1); /* Subtle maroon-tinted border */
  
}

        /* ── Base ── */
        .services-root {
          font-family: var(--font-sans);
          color: var(--color-slate);
          background: var(--color-ivory);
        }

        /* ─────────────── HERO ─────────────── */
        .hero {
          position: relative;
          padding: 100px 0 80px;
          text-align: center;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(122,158,135,0.12) 0%, transparent 70%),
            var(--color-ivory);
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 15% 25%, rgba(181,149,74,0.06) 0 120px, transparent 120px),
            radial-gradient(circle at 85% 70%, rgba(122,158,135,0.06) 0 100px, transparent 100px);
          pointer-events: none;
        }
        .hero__inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 16px;
          background: var(--color-sage-light);
          border: 1px solid rgba(122,158,135,0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-sage);
          margin-bottom: 24px;
          animation: fadeUp 0.7s var(--ease-out) both;
        }
        .hero__badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--color-sage);
          display: block;
        }
        .hero__title {
          font-family: var(--font-serif);
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 500;
          line-height: 1.1;
          color: var(--color-slate);
          letter-spacing: -0.01em;
          animation: fadeUp 0.7s 0.1s var(--ease-out) both;
        }
        .hero__title em {
          font-style: italic;
          color: var(--color-gold);
        }
        .hero__desc {
          margin-top: 20px;
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--color-slate-mid);
          font-weight: 300;
          animation: fadeUp 0.7s 0.2s var(--ease-out) both;
        }
        .hero__divider {
          margin: 36px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          animation: fadeUp 0.7s 0.3s var(--ease-out) both;
        }
        .hero__divider-line {
          width: 60px; height: 1px;
          background: linear-gradient(to right, transparent, var(--color-border));
        }
        .hero__divider-line:last-child {
          background: linear-gradient(to left, transparent, var(--color-border));
        }
        .hero__divider-ornament {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-gold);
          line-height: 1;
        }

        /* ─────────────── NAV ─────────────── */
        .sticky-nav {
          position: sticky;
          top: 72px;
          z-index: 40;
          background: rgba(250,249,246,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
        }
        .sticky-nav__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .sticky-nav__inner::-webkit-scrollbar { display: none; }
        .nav-pill {
          flex-shrink: 0;
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          border: 1px solid var(--color-border);
          color: var(--color-slate-mid);
          background: transparent;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .nav-pill:hover {
          border-color: rgba(44,62,80,0.25);
          color: var(--color-slate);
          background: rgba(44,62,80,0.04);
        }
        .nav-pill--active {
          background: var(--color-slate) !important;
          border-color: var(--color-slate) !important;
          color: #fff !important;
        }

        /* ─────────────── CONTENT ─────────────── */
        .content-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }

        /* ─────────────── CATEGORY SECTION ─────────────── */
        .category-section {
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s var(--ease-out), transform 0.65s var(--ease-out);
        }
        .category-section--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--color-border);
        }
        .category-header__line {
          width: 3px;
          height: 40px;
          background: linear-gradient(180deg, var(--color-gold) 0%, var(--color-sage) 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .category-header__text {
          flex: 1;
        }
        .category-header__eyebrow {
          display: block;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 3px;
        }
        .category-header__title {
          font-family: var(--font-serif);
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 500;
          color: var(--color-slate);
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .category-header__count {
          font-size: 12px;
          color: var(--color-slate-mid);
          background: var(--color-parchment);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          padding: 5px 14px;
          white-space: nowrap;
          font-weight: 500;
        }

        /* ─────────────── DISEASE GRID ─────────────── */
        .disease-grid {
          display: grid;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .disease-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
        }

        /* ─────────────── DISEASE CARD ─────────────── */
        .disease-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          background: #fff;
          border: 1px solid var(--color-border);
          box-shadow: 0 1px 3px rgba(44,62,80,0.06);
          transition: transform 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out), border-color 0.2s;
          animation: cardIn 0.55s var(--ease-out) both;
        }
        .disease-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(44,62,80,0.12);
          border-color: rgba(44,62,80,0.18);
        }

        .disease-card__image-wrap {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .disease-card__image {
          object-fit: cover;
          transition: transform 0.6s var(--ease-out);
        }
        .disease-card:hover .disease-card__image {
          transform: scale(1.06);
        }
        .disease-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            transparent 40%,
            rgba(44,62,80,0.15) 100%
          );
          pointer-events: none;
        }

        .disease-card__body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }
        .disease-card__name-en {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-slate);
          line-height: 1.3;
          margin: 0;
        }
        .disease-card__name-hi {
          font-size: 12px;
          color: var(--color-slate-mid);
          margin: 0;
          font-weight: 300;
        }
        .disease-card__cta {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: primary;
          transform: translateX(-4px);
          transition: opacity 0.25s, transform 0.25s;
        }
        .disease-card:hover .disease-card__cta {
          opacity: 1;
          transform: translateX(0);
        }
        .disease-card__arrow {
          transition: transform 0.2s;
        }
        .disease-card:hover .disease-card__arrow {
          transform: translateX(2px);
        }

        /* ─────────────── CTA ─────────────── */
        .cta-section {
          position: relative;
          overflow: hidden;
          padding: 80px 24px;
          text-align: center;
          background: var(--color-slate);
        }
        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 80% at 20% 50%, rgba(122,158,135,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 50%, rgba(181,149,74,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-section__inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
        }
        .cta-section__eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 16px;
        }
        .cta-section__title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 500;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .cta-section__title em {
          font-style: italic;
          color: var(--color-gold);
        }
        .cta-section__desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.65);
          font-weight: 300;
          line-height: 1.7;
          margin: 0 0 36px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: var(--color-gold);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s var(--ease-out), box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(181,149,74,0.35);
        }
        .cta-btn:hover {
          background: #c9a45a;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(181,149,74,0.45);
        }
        .cta-btn svg {
          flex-shrink: 0;
        }

        /* ─────────────── ANIMATIONS ─────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="services-root">
        <Header />
        <main className="pt-20">

          {/* ── Hero ── */}
          <section className="hero">
            <div className="hero__inner">
              <h1 className="hero__title ">
                {t.hero.title.split(" ").slice(0, 2).join(" ")}{" "}
                <em>{t.hero.title.split(" ").slice(2).join(" ")}</em>
              </h1>
              <p className="hero__desc">{t.hero.desc}</p>
              <div className="hero__divider">
                <div className="hero__divider-line" />
                <span className="hero__divider-ornament">✦</span>
                <div className="hero__divider-line" />
              </div>
            </div>
          </section>

          {/* ── Sticky Nav ── */}
          <nav className="sticky-nav">
            <div className="sticky-nav__inner">
              {diseaseCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`nav-pill${activeId === cat.id ? " nav-pill--active" : ""}`}
                >
                  {lang === "hi" ? cat.titleHi : cat.titleEn}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Category Sections ── */}
          <div className="content-wrap">
            {diseaseCategories.map((category) => (
              <CategorySection key={category.id} category={category} lang={lang} />
            ))}
          </div>

          {/* ── CTA ── */}
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
      </div>
    </>
  )
}