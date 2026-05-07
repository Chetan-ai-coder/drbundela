"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Lock, User, ShieldCheck, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false) // Toggle state
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        router.push('/admin/blog')
      } else {
        alert('Invalid Credentials')
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      
      {/* Background Texture */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-primary"
        style={{ animation: 'pulse 8s infinite alternate' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-primary"
        style={{ animation: 'pulse 10s infinite alternate-reverse' }}
      />

      <div className="relative w-full max-w-[440px] z-10">
        <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-white">
          
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6 shadow-lg shadow-primary/30 text-white">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 mt-2 font-medium">Access your admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <User size={20} />
                </div>
                <input 
                  required
                  type="text" 
                  placeholder="Enter username" 
                  className="block w-full pl-12 pr-4 py-4 bg-gray-100 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input with Visibility Toggle */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••••" 
                  className="block w-full pl-12 pr-12 py-4 bg-gray-100 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Visibility Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              disabled={isLoading}
              type="submit" 
              className="w-full mt-4 flex items-center justify-center py-4 px-6 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:pointer-events-none"
            >
              {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                "Sign In to System"
              )}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            End-to-End Encrypted Session
          </div>
        </div>
        
        <p className="text-center mt-8 text-sm text-gray-400">
          Trouble logging in? <span className="text-primary font-semibold cursor-pointer hover:underline">Contact Support</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.15; }
          100% { transform: scale(1.1); opacity: 0.25; }
        }
      `}</style>
    </div>
  )
}