"use client"

import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/drbundela1976", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).footer

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">Dr. R.S.S. Bundela</span>
                <span className="text-xs text-white/60 -mt-1">{t.clinicType}</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {t.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.treatmentsTitle}</h4>
            <ul className="space-y-3">
              {t.treatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm whitespace-pre-line">
                  {t.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919415187520" className="text-white/70 hover:text-primary transition-colors text-sm">
                  +91 94151 87520
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:bundela01100@gmail.com" className="text-white/70 hover:text-primary transition-colors text-sm">
                  bundela01100@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm whitespace-pre-line">
                  {t.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t.rights}
          </p>

          <div className="flex items-center gap-6 text-sm text-white">
            <p className="flex justify-center items-center">
              <span>{t.developedBy} </span>
              <Link href="https://moneymantra.co.in" target="_blank" className="ml-1 font-medium text-primary">
                Money Mantra
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}