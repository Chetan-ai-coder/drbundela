"use client"

import { useSearchParams } from 'next/navigation'
import { Phone, CheckCircle2, Star } from "lucide-react"
import { motion } from "framer-motion"

const CATEGORY_CONTENT: any = {
  "Piles": {
    title: "बवासीर - भगन्दर - फिशर",
    price: "1499*",
    rating: "4.7",
    reviews: "532",
    recommend: "98.8%",
    points: [
      "क्लिनिक एवं ऑनलाइन परामर्श की सुविधा",
      "*1499 रुपए में 30 दिन की दवा",
      "3-5 Month Course* (T&C Apply)",
      "खूनी एवं बादी बवासीर का इलाज",
      "मस्सों का इलाज",
      "पस आने का इलाज",
      "कब्ज का इलाज",
      "दवाओं की फ्री होम डिलीवरी (पूरे भारत में)",
      "दवाओं की पूर्णतः गोपनीय डिलीवरी",
      "फ्री डाइट चार्ट",
      "75,654 से ज्यादा संतुष्ट मरीज"
    ]
  },
  "Kidney Stone": {
    title: "गुर्दे की पथरी / किडनी स्टोन",
    price: "1599",
    rating: "4.5",
    reviews: "24,311",
    recommend: "97.9%",
    points: [
      "क्लिनिक एवं ऑनलाइन परामर्श की सुविधा",
      "*1599 रुपए में 30 दिन की दवा",
      "दवाओं की फ्री होम डिलीवरी (पूरे भारत में)",
      "दवाओं की पूर्णतः गोपनीय डिलीवरी",
      "फ्री डाइट चार्ट",
      "75,654 से ज्यादा संतुष्ट मरीज"
    ]
  }
}

export function ConsultationContent() {
  const searchParams = useSearchParams()
  const categoryKey = searchParams.get('cat') || "Piles"
  const diseaseName = searchParams.get('disease') || "इस रोग"
  const data = CATEGORY_CONTENT[categoryKey] || CATEGORY_CONTENT["Piles"]

  return (
    <div className="min-h-screen bg-white pb-10 pt-24">
      <div className="bg-gradient-to-br from-secondary via-background to-secondary py-8 border-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            क्या आप <span className="text-primary">{diseaseName}</span> से परेशान हैं?
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-6">
            100% सफल इलाज के लिए आज ही कॉल करें
          </p>
          <motion.a
            href="tel:+919415187520"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-3 rounded-full text-xl font-bold shadow-xl"
          >
            <Phone className="fill-white w-5 h-5" /> Call now
          </motion.a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-500 text-sm border-b pb-2">समस्त जटिल समस्याओं के समाधान के लिए एक मात्र संस्थान</p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {data.title} का <span className="text-primary">बिना ऑपरेशन</span> जड़ से इलाज मात्र <span className="text-primary">{data.price} रुपए में</span>
            </h2>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center text-primary">
                <span className="text-primary font-bold mr-1">{data.rating}</span>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-primary font-semibold underline">{data.reviews} Ratings</span>
              <p className="text-sm text-gray-600 w-full">
                <span className="font-bold text-primary">{data.recommend}</span> of customers would recommend this to a friend
              </p>
            </div>

            <ul className="space-y-3 mt-6">
              {data.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 py-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-600 font-bold">हमारे विशेषज्ञ ऑनलाइन हैं ... अभी कॉल करें...</span>
            </div>
          </div>

          <div className="sticky top-24">
            <div className="bg-white p-8 rounded-3xl border border-primary-100 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-center">विशेषज्ञ सलाह के लिए फॉर्म भरें</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">आपका नाम</label>
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-white border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">आपका मोबाइल नंबर</label>
                  <input type="tel" placeholder="Your Mobile Number" className="w-full p-3 bg-white border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">आपको कितने दिनों से समस्या है?</label>
                  <input type="text" placeholder="How many days?" className="w-full p-3 bg-white border rounded-lg" />
                </div>

                <button className="w-full bg-primary text-white text-xl font-bold py-4 rounded-xl shadow-lg mt-4">
                  शुरुआत करें
                </button>
                <p className="text-center text-xs text-gray-500 italic mt-2">आपकी पहचान गुप्त रखी जायेगी!</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
