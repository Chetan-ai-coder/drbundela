"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, Leaf } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"

export function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang } = useLanguage()

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    const content = {
        en: {
            title: "Welcome to the World of Sweet Pills",
            subtitle: "The Art & Science of Homeopathic Healing",
            msg: "Order your medicines from the comfort of your home.",
            subMsg: "Call us now for a consultation and home delivery.",
            btn: "Call & Order Now"
        },
        hi: {
            title: "मीठी गोलियों की दुनिया में आपका स्वागत है",
            subtitle: "होम्योपैथी: उपचार की कला और विज्ञान",
            msg: "अपने घर बैठे ही अपनी दवाएं मंगवाएं।",
            subMsg: "अभी कॉल करें और घर पर दवा मंगवाएं।",
            btn: "अभी कॉल करें"
        }
    }

    const t = lang === 'hi' ? content.hi : content.en

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 0.9 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative bg-white rounded-[40px] overflow-hidden max-w-lg w-full shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/20"
                    >
                        {/* Image Section - Using your provided visual style */}
                        <div className="relative h-64 w-full">
                            <Image
                                src="/Dr Bundela/Doctor/Homoeo"
                                alt="Natural Healing"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#8b2f2c] rounded-full transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full mb-3 shadow-sm">
                                    <Leaf className="w-3.5 h-3.5 text-green-600" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Pure & Natural</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="px-10 pb-10 pt-4 text-center">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 leading-tight mb-2">
                                {t.title}
                            </h2>
                            <p className="text-[#8b2f2c] font-medium text-sm tracking-wide uppercase mb-6 opacity-80">
                                {t.subtitle}
                            </p>

                            <div className="space-y-1 mb-8">
                                <p className="text-gray-800 font-semibold text-lg italic">"{t.msg}"</p>
                                <p className="text-gray-500 text-sm">{t.subMsg}</p>
                            </div>

                            {/* Redesigned Decent Calling Button */}
                            <motion.a
                                href="tel:+919415187520"
                                whileHover={{ scale: 1.02, backgroundColor: "#722624" }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative flex items-center justify-center gap-4 bg-[#8b2f2c] text-white py-5 px-10 rounded-2xl font-bold text-xl shadow-[0_20px_40px_-10px_rgba(139,47,44,0.4)] transition-all overflow-hidden"
                            >
                                {/* The 'Decent' Calling Icon - More Minimalist and Integrated */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                                    <div className="relative bg-white/10 p-2 rounded-lg border border-white/20">
                                        <Phone className="w-5 h-5 text-white fill-white/10" />
                                    </div>
                                </div>

                                <span className="tracking-tight">{t.btn}</span>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
                            </motion.a>

                            <p className="mt-6 text-[11px] text-gray-400 font-medium tracking-widest uppercase">
                                Expert Homeopathic Care since 1990
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}