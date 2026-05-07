"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Loader2, 
  Globe, 
  Languages, 
  Image as ImageIcon, 
  Tag, 
  User, 
  Settings2, 
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowLeft
} from "lucide-react";

export default function AdminBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("english");
  
  const [form, setForm] = useState({
    title: "",
    titleHindi: "",
    excerpt: "",
    excerptHindi: "",
    content: "",
    contentHindi: "",
    coverImage: "",
    author: "Dr. Bundela",
    category: "Homeopathy",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if(!form.title || !form.titleHindi) {
      setMessage("❌ Please fill at least the English and Hindi titles.");
      return;
    }

    setLoading(true);
    const slug = form.title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug, tags }),
      });

      if (res.ok) {
        setMessage("✅ Post published successfully!");
        setForm({
          title: "", titleHindi: "", excerpt: "", excerptHindi: "",
          content: "", contentHindi: "", coverImage: "", author: "Dr. Bundela",
          category: "Homeopathy", tags: "",
        });
        router.refresh();
      } else {
        setMessage("❌ Failed to save. Check if the Title is unique.");
      }
    } catch (err) {
      setMessage("❌ Network error. Is your server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pb-20 font-sans">
      {/* Background Decorative Texture */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08] bg-primary pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08] bg-primary pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-8">
        
        {/* Navigation / Back Button */}
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-all mb-8 font-bold text-xs tracking-[0.15em]"
        >
          <div className="p-2.5 rounded-xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-all border border-slate-100 group-active:scale-90">
            <ArrowLeft size={16} />
          </div>
          BACK TO DASHBOARD
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create Blog</h1>
            <p className="text-slate-500 font-medium mt-1 uppercase text-xs tracking-widest">Medical Insights Panel</p>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Rocket size={20} />}
            {loading ? "Publishing..." : "Publish Article"}
          </button>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`flex items-center gap-3 p-5 rounded-2xl mb-8 border animate-in fade-in slide-in-from-top-2 ${
            message.includes('✅') 
            ? 'bg-emerald-50 border-emerald-100 text-emerald-700 shadow-sm' 
            : 'bg-rose-50 border-rose-100 text-rose-700 shadow-sm'
          }`}>
            {message.includes('✅') ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <span className="font-bold">{message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white shadow-sm overflow-hidden">
              
              {/* Language Selection Tabs */}
              <div className="flex border-b border-slate-100 px-8 bg-slate-50/30">
                <button 
                  onClick={() => setActiveTab("english")}
                  className={`flex items-center gap-2 py-6 px-6 font-black text-[11px] tracking-[0.2em] transition-all border-b-2 ${
                    activeTab === "english" ? "border-primary text-primary" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <Globe size={16} /> ENGLISH
                </button>
                <button 
                  onClick={() => setActiveTab("hindi")}
                  className={`flex items-center gap-2 py-6 px-6 font-black text-[11px] tracking-[0.2em] transition-all border-b-2 ${
                    activeTab === "hindi" ? "border-primary text-primary" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <Languages size={16} /> हिन्दी
                </button>
              </div>

              <div className="p-10 space-y-8">
                {activeTab === "english" ? (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Article Title</label>
                      <input name="title" placeholder="How Homeopathy heals..." value={form.title} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all font-bold text-slate-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Short Excerpt</label>
                      <textarea name="excerpt" placeholder="A brief summary for the preview card..." value={form.excerpt} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all h-24 resize-none text-slate-600 leading-relaxed" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Content Body</label>
                      <textarea name="content" placeholder="Write your full article here..." value={form.content} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all h-[450px] text-slate-700 leading-loose" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest ml-1">लेख का शीर्षक</label>
                      <input name="titleHindi" placeholder="यहाँ शीर्षक लिखें..." value={form.titleHindi} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all font-bold text-slate-800 text-xl" style={{ lineHeight: '1.4' }} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest ml-1">संक्षिप्त सारांश</label>
                      <textarea name="excerptHindi" placeholder="छोटा विवरण..." value={form.excerptHindi} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all h-28 resize-none text-slate-700 text-lg leading-[1.8]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary/60 uppercase tracking-widest ml-1">मुख्य लेख</label>
                      <textarea name="contentHindi" placeholder="पूरी जानकारी लिखें..." value={form.contentHindi} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/10 focus:bg-white p-5 rounded-2xl outline-none transition-all h-[450px] text-slate-800 text-xl leading-[2.2]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                <Settings2 size={18} className="text-primary" />
                <h2 className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400">Post Metadata</h2>
              </div>

              <div className="space-y-6">
                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <ImageIcon size={14} className="text-slate-400" /> Cover Image URL
                  </label>
                  <input name="coverImage" value={form.coverImage} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl text-xs transition-all outline-none font-medium" />
                </div>

                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <User size={14} className="text-slate-400" /> Author
                  </label>
                  <input name="author" value={form.author} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl text-xs transition-all outline-none font-medium" />
                </div>

                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Settings2 size={14} className="text-slate-400" /> Category
                  </label>
                  <select name="category" value={form.category} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl text-xs transition-all outline-none font-bold cursor-pointer appearance-none">
                    <option>Homeopathy</option>
                    <option>Health Tips</option>
                    <option>Skin Care</option>
                    <option>Child Health</option>
                  </select>
                </div>

                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Tag size={14} className="text-slate-400" /> Tags
                  </label>
                  <input name="tags" placeholder="wellness, doctor..." value={form.tags} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl text-xs transition-all outline-none" />
                </div>
              </div>
            </div>

            {/* Language Tip Card */}
            <div className="bg-primary from-primary to-blue-700 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Languages size={20} /> Content Tip
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Hindi typography requires <span className="font-bold text-white underline decoration-white/30 underline-offset-4">extra line spacing</span>. We've automatically adjusted the inputs for you.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={140} />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function ShieldCheck({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}