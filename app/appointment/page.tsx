"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  User,
  FileText,
  MessageSquare
} from "lucide-react"

import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
]

export default function AppointmentPage() {
  const { lang } = useLanguage()
  const t = (translations[lang] || translations.en).appointmentPage

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary via-background to-secondary">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.hero.desc}
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <div className="bg-green-50 rounded-3xl p-12 text-center border border-green-100">
                    <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
                      {t.success.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                      {t.success.desc}
                    </p>
                    <Button asChild className="rounded-full px-8 mt-8">
                      <Link href="/">{t.success.btn}</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-secondary/30 rounded-3xl p-8 lg:p-12">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                      {t.form.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          {t.form.nameLabel}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="rounded-xl h-12 bg-white"
                          placeholder={t.form.namePlaceholder}
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          {t.form.phoneLabel}
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="rounded-xl h-12 bg-white"
                          placeholder={t.form.phonePlaceholder}
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          {t.form.emailLabel}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-xl h-12 bg-white"
                          placeholder={t.form.emailPlaceholder}
                        />
                      </div>

                      {/* Service */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          {t.form.serviceLabel}
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl h-12 bg-white border border-input px-4 text-foreground"
                        >
                          <option value="">{t.form.servicePlaceholder}</option>
                          {t.services.map((service: string) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {t.form.dateLabel}
                        </label>
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          required
                          className="rounded-xl h-12 bg-white"
                        />
                      </div>

                      {/* Time */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {t.form.timeLabel}
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl h-12 bg-white border border-input px-4 text-foreground"
                        >
                          <option value="">{t.form.timePlaceholder}</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          {t.form.messageLabel}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-xl bg-white border border-input p-4 text-foreground resize-none"
                          placeholder={t.form.messagePlaceholder}
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="rounded-full px-8 mt-8 w-full md:w-auto">
                      {t.form.submitBtn}
                    </Button>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {t.form.requiredNote}
                    </p>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-primary rounded-3xl p-8 text-white">
                  <h3 className="font-serif text-xl font-semibold">
                    {t.sidebar.consultation.title}
                  </h3>
                  <p className="mt-2 text-3xl font-bold">{t.sidebar.consultation.price}</p>
                  <p className="text-white/70 text-sm">{t.sidebar.consultation.duration}</p>

                  <ul className="mt-6 space-y-3">
                    {t.sidebar.consultation.benefits.map((benefit: string) => (
                      <li key={benefit} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-white/80 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-3xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {t.sidebar.help.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {t.sidebar.help.desc}
                  </p>

                  <div className="mt-6 space-y-4">
                    <a href="tel:+919415187520" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">+91 94151 87520</span>
                    </a>
                    <a href="mailto:bundela01100@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-sm">bundela01100@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-3xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {t.sidebar.hours.title}
                  </h3>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t.sidebar.hours.monFri}</span>
                      <span className="font-medium text-foreground">2:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t.sidebar.hours.sat}</span>
                      <span className="font-medium text-foreground">12:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t.sidebar.hours.sun}</span>
                      <span className="font-medium text-foreground">2:00 PM - 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-3xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {t.sidebar.location.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {t.sidebar.location.address}
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full mt-4">
                    <Link href="/contact">{t.sidebar.location.btn}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}