"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import { X, Maximize2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

interface GalleryItem {
  id: string;
  category: string;
  url: string;
  title: string;
}

export default function GalleryPage() {
  const { lang } = useLanguage()
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const t = (translations[lang] || translations.en).galleryPage || {
    hero: { 
        badge: lang === 'hi' ? "दृश्य यात्रा" : "Visual Journey", 
        title: lang === 'hi' ? "हमारा गैलरी" : "Our Gallery", 
        desc: lang === 'hi' ? "प्राकृतिक चिकित्सा और हमारी आधुनिक क्लिनिक की एक झलक।" : "A glimpse into natural healing and our modern clinic." 
    }
  }

  // 1. Fetch images from our API
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        if (Array.isArray(data)) {
          setGalleryItems(data)
        }
      } catch (error) {
        console.error("Failed to load gallery:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [])

  // 2. Derive categories dynamically from fetched data
  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))]
  
  const filteredImages = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(img => img.category === activeFilter)

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % filteredImages.length)
  }

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, filteredImages])

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        
        <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary via-background to-secondary text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.hero.desc}
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        {!loading && (
          <section className="py-10 container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        <section className="pb-20 container mx-auto px-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <p className="text-muted-foreground animate-pulse">Fetching visuals...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-secondary/30 transition-all duration-700 hover:shadow-2xl ${
                    index % 7 === 0 ? "md:col-span-2 md:row-span-2 h-[500px]" : "h-[240px]"
                  }`}
                >
                  <img 
                    src={`${image.url}?tr=w-800,q-80`} // ImageKit optimization
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">{image.category}</p>
                        
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedIndex(null)}
          >
            <button className="absolute top-8 right-8 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-[110]">
              <X className="w-6 h-6" />
            </button>

            <button onClick={showPrev} className="absolute left-4 md:left-8 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-[110]">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={showNext} className="absolute right-4 md:right-8 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-[110]">
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-5xl w-full flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
              <img 
                src={filteredImages[selectedIndex].url} 
                alt={filteredImages[selectedIndex].title} 
                className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
              />
              <div className="text-center">
                <p className="text-primary text-xs font-black uppercase tracking-widest mb-1">{filteredImages[selectedIndex].category}</p>
                <p className="text-white/40 text-[10px] mt-2 font-mono">IMAGE {selectedIndex + 1} OF {filteredImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}