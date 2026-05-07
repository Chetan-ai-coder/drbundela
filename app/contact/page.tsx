"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle
} from "lucide-react"

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).contactPage

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: t.cards.phone,
      details: ["+91 94151 87520"],
      action: "tel:+919415187520",
      actionLabel: t.cards.callNow,
    },
    {
      icon: Mail,
      title: t.cards.email,
      details: ["bundela01100@gmail.com"],
      action: "mailto:bundela01100@gmail.com",
      actionLabel: t.cards.sendEmail,
    },
    {
      icon: MapPin,
      title: t.cards.address,
      details: ["Jail Crossing", "Jhansi - 284001"],
      action: "https://maps.app.goo.gl/MtqaEYuZEVREiUG5A",
      actionLabel: t.cards.getDirections,
    },
    {
      icon: Clock,
      title: t.cards.hours,
      details: lang === 'hi'
        ? ["सोम - शुक्र: 2:00 PM - 8:00 PM", "शनिवार: 12:00 PM - 8:00 PM"]
        : ["Mon - Fri: 2:00 PM - 8:00 PM", "Saturday: 12:00 PM - 8:00 PM"],
      action: null,
      actionLabel: null,
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary via-background to-secondary text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{t.hero.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{t.hero.desc}</p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-secondary/30 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <div className="mt-2 space-y-1">
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
                {item.action && (
                  <a href={item.action} className="inline-block mt-4 text-primary text-sm font-medium hover:underline">
                    {item.actionLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Map & Form */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Visit Our Clinic</h2>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                {/* Embed Map Here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.766675373799!2d78.57388807561054!3d25.446063021575384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39777728b33eca5b%3A0xfdfb02126a2d7463!2sDr.%20Bundela's%20The%20Homoeopathy%20Clinic!5e0!3m2!1sen!2sin!4v1777454800391!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Bundela's The Homoeopathy Clinic Location"
                />
              </div>

              <div className="mt-8 bg-[#25D366] rounded-2xl p-6 text-white flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center"><MessageCircle className="w-7 h-7" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{t.whatsapp.title}</h3>
                  <p className="text-white/80 text-sm">{t.whatsapp.desc}</p>
                </div>
                <a href="https://wa.me/919415187520" className="bg-white text-[#25D366] px-6 py-2 rounded-full font-medium">{t.whatsapp.btn}</a>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">{t.form.title}</h2>
              {isSubmitted ? (
                <div className="bg-green-50 rounded-3xl p-12 text-center border border-green-100">
                  <CheckCircle className="w-16 h-16 mx-auto text-green-600 mb-6" />
                  <h3 className="font-serif text-xl font-bold">{t.form.successTitle}</h3>
                  <p className="mt-3 text-muted-foreground">{t.form.successDesc}</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6 rounded-full">{t.form.successBtn}</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.name}</label>
                      <Input name="name" onChange={handleChange} required placeholder={t.form.placeholderName} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.phone}</label>
                      <Input name="phone" onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.email}</label>
                    <Input type="email" name="email" onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.subject}</label>
                    <Input name="subject" onChange={handleChange} required placeholder={t.form.placeholderSubject} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.message}</label>
                    <textarea name="message" onChange={handleChange} required rows={5} className="w-full rounded-xl border border-input p-4" placeholder={t.form.placeholderMsg} />
                  </div>
                  <Button type="submit" size="lg" className="rounded-full w-full md:w-max"><Send className="w-4 h-4 mr-2" />{t.form.submit}</Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-white container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{t.faq.badge}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{t.faq.title}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {t.faq.items.map((faq: any, i: number) => (
              <div key={i} className="bg-secondary/30 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-3 text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}