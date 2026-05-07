"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/diseases", label: "Diseases" },
  { href: "/services", label: "Services" },
  { href: "blog", label: "Blogs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section - Keep as is */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground">
                Dr. R.S.S. Bundela
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Homoeopathy Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Keep as is */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button + Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="relative w-16 h-8 flex items-center justify-center border border-primary/20 rounded-full hover:bg-primary/5 transition-all group overflow-hidden"
            >
              <span className={`text-xs font-bold transition-all duration-300 ${lang === 'en' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'}`}>
                हिन्दी
              </span>
              <span className={`text-xs font-bold transition-all duration-300 ${lang === 'hi' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'}`}>
                EN
              </span>
            </button>

            <a href="tel:+919415187520" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 94151 87520
            </a>
            <Button asChild className="rounded-full">
              <Link href="/appointment">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Keep as is */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Added Lang Toggle for Mobile */}
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm font-medium text-muted-foreground">Select Language</span>
                <button
                  onClick={() => { toggleLang(); setIsOpen(false); }}
                  className="text-sm font-bold bg-primary/10 text-primary px-4 py-1 rounded-full"
                >
                  {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 border-b border-border last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919415187520"
                className="flex items-center gap-2 text-sm text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                +91 94151 87520
              </a>
              <Button asChild className="rounded-full w-full mt-2">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
