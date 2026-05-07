"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function CallNowBanner() {
  const { lang } = useLanguage()

  const content = {
    en: {
      btn: "Call now",
      status: "Doctor is online.. Call now..."
    },
    hi: {
      btn: "अभी कॉल करें",
      status: "डॉक्टर ऑनलाइन हैं ..अभी कॉल करें..."
    }
  }

  const t = lang === 'hi' ? content.hi : content.en

  return (
    <div className="sticky bottom-0 left-0 w-full z-[999]  pointer-events-auto">
      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9100] py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-white/20">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-[2px]">
          
          {/* Pulsing Button - Blue with White Border */}
          <motion.a
            href="tel:+919415187520" 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            className="flex items-center gap-2 bg-[#0056b3] hover:bg-blue-800 text-white px-8 py-2 rounded-full shadow-lg border border-white/30 transition-colors group mb-1"
          >
            <div className="bg-white/20 p-1 rounded-full">
              <Phone className="w-4 h-4 fill-white" />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">
              {t.btn}
            </span>
          </motion.a>

          {/* Online Status Line */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white"></span>
            </span>
            <p className="text-white font-medium text-[13px] md:text-sm drop-shadow-sm">
              {t.status}
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}