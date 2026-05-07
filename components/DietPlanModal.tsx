"use client"

import React from "react"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import {
  PhoneCall,
  Lock,
  Sparkles,
  Sun,
  Moon,
  Apple,
  Droplets,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"

import { useLanguage } from "@/context/LanguageContext"

export function DietPlanModal({
  children,
}: {
  children: React.ReactNode
}) {
  const { lang } = useLanguage()

  const content = {
    en: {
      title: "Doctor-Verified Diet Plan",
      subtitle:
        "Scientific nutrition for faster healing and recovery.",
      unlock: "Unlock Full 7-Day Plan",
      button: "Call for Personalized Plan",
    },

    hi: {
      title: "डॉक्टर-सत्यापित डाइट प्लान",
      subtitle:
        "तेजी से रिकवरी के लिए वैज्ञानिक पोषण।",
      unlock: "7-दिवसीय प्लान अनलॉक करें",
      button: "पर्सनलाइज्ड प्लान के लिए कॉल करें",
    },
  }

  const t = lang === "hi" ? content.hi : content.en

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent
        className="
          max-w-4xl
          w-[94vw]
          h-[600px]
          rounded-[40px]
          overflow-hidden
          p-0
          border-none
          bg-white
          shadow-2xl
          flex
          flex-col
        "
      >

        {/* ================= HERO ================= */}

        <div className="relative h-[190px] shrink-0 overflow-hidden">

          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
            alt="Healthy Diet"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Glow */}

          <div className="absolute top-0 left-0 w-60 h-60 bg-[#8b2f2c]/30 blur-3xl rounded-full" />

          {/* Content */}

          <div className="absolute inset-0 flex items-end">

            <div className="p-6 md:p-8 text-white w-full">

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/10">

                <Sparkles className="w-3 h-3" />

                Premium Wellness Plan

              </div>

              <DialogHeader>

                <DialogTitle className="text-2xl md:text-4xl font-serif font-bold leading-tight">

                  {t.title}

                </DialogTitle>

                <p className="text-white/80 text-sm mt-2 max-w-lg">

                  {t.subtitle}

                </p>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* ================= BODY ================= */}

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar bg-[#fdfcfb] p-5 md:p-6">

          {/* BENEFITS */}

          <div className="mb-6">

            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
              Targeted Health Benefits
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {[
                {
                  icon: Apple,
                  label: "Natural Skin Glow",
                  desc: "Antioxidants & vitamins",
                  color: "text-red-600",
                  bg: "bg-red-50",
                },

                {
                  icon: Droplets,
                  label: "Gut Health",
                  desc: "Digestive recovery",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },

                {
                  icon: Sun,
                  label: "Energy Boost",
                  desc: "All-day sustainable fuel",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },

                {
                  icon: Moon,
                  label: "Better Sleep",
                  desc: "Stress-reducing nutrition",
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >

                  <div
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}
                  >

                    <item.icon
                      className={`w-5 h-5 ${item.color}`}
                    />

                  </div>

                  <div>

                    <h4 className="text-sm font-bold text-gray-800">
                      {item.label}
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* DAILY ROUTINE */}

          <div className="mb-6 p-5 rounded-3xl bg-[#f8f2f1] border border-[#e8dfde]">

            <h3 className="text-sm font-bold text-[#8b2f2c] mb-5 flex items-center gap-2">

              <CheckCircle2 className="w-4 h-4" />

              Sample Daily Protocol

            </h3>

            <div className="space-y-5">

              {[
                {
                  time: "07:00 AM",
                  title: "Morning Detox",
                  info: "Warm lemon water & almonds.",
                },

                {
                  time: "01:30 PM",
                  title: "Core Nutrition",
                  info: "Protein-rich balanced meal.",
                },

                {
                  time: "08:00 PM",
                  title: "Night Recovery",
                  info: "Soup & herbal infusion.",
                },
              ].map((step, i) => (
                <div key={i}>

                  <span className="text-[10px] font-bold text-[#8b2f2c]/60 uppercase">
                    {step.time}
                  </span>

                  <h4 className="text-sm font-bold text-gray-800 mt-1">
                    {step.title}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    {step.info}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* LOCKED SECTION */}

          <div className="relative rounded-3xl border-2 border-dashed border-gray-200 bg-white overflow-hidden p-6 text-center">

            <div className="blur-sm opacity-40 space-y-3">

              <div className="bg-[#fafafa] rounded-2xl h-20 border" />

              <div className="bg-[#fafafa] rounded-2xl h-20 border" />

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">

              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-4">

                <Lock className="w-5 h-5 text-[#8b2f2c]" />

              </div>

              <h4 className="text-xl font-bold text-[#8b2f2c]">
                {t.unlock}
              </h4>

              <p className="text-xs text-gray-500 mt-2 max-w-xs">
                Personalized nutrition guidance &
                doctor-approved healing support.
              </p>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="shrink-0 p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">

          <div className="flex-1 text-center sm:text-left">

            <p className="text-[10px] font-bold text-green-600 uppercase">
              Available Now
            </p>

            <p className="text-xs text-gray-500">
              Get your plan via phone consultation
            </p>

          </div>

          <Button
            asChild
            className="w-full sm:w-auto px-8 py-6 rounded-2xl bg-[#8b2f2c] hover:bg-[#7a2825] text-white font-bold shadow-xl"
          >

            <a
              href="tel:+919415113233"
              className="flex items-center justify-center gap-3"
            >

              <PhoneCall className="h-4 w-4" />

              {t.button}

              <ChevronRight className="h-4 w-4" />

            </a>

          </Button>

        </div>

      </DialogContent>
    </Dialog>
  )
}