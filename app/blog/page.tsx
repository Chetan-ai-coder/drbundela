"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
    const { lang } = useLanguage();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("/api/blog");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error("Failed to fetch posts", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24"> {/* Adjusted pt-24 to match other pages */}
                
                {/* --- HEADER SECTION MOVED OUTSIDE MAX-W FOR FULL WIDTH BACKGROUND --- */}
                <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary via-background to-secondary text-center">
                    <div className="container mx-auto px-4">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            {lang === "hi" ? "नवीनतम अपडेट" : "Latest Updates"}
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                            {lang === "hi" ? "स्वास्थ्य और कल्याण ब्लॉग" : "Health & Wellness Blog"}
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                            {lang === "hi"
                                ? "डॉ. बुंदेला द्वारा विशेषज्ञ होम्योपैथी अंतर्दृष्टि और प्राकृतिक जीवन जीने के सुझाव।"
                                : "Expert homeopathy insights and natural living tips by Dr. Bundela."}
                        </p>
                    </div>
                </section>

                {/* --- BLOG GRID SECTION --- */}
                <div className="max-w-6xl mx-auto px-4 py-20"> {/* Added py-20 for spacing between header and grid */}
                    {!loading && posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post: any) => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post._id}
                                    className="group block rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative w-full h-60 bg-secondary/50">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={(lang === "hi" ? post.titleHindi : post.title) || "Dr. Bundela Blog Post"}
                                                fill
                                                className="object-cover transition duration-700"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-secondary text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                                {post.category || "Health"}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(post.publishedAt).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN")}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {lang === "hi" ? post.titleHindi : post.title}
                                        </h2>

                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                            {lang === "hi" ? post.excerptHindi : post.excerpt}
                                        </p>

                                        <div className="pt-4 border-t flex items-center justify-between">
                                            <span className="text-sm font-semibold text-foreground">
                                                {lang === "hi" ? "लेख पढ़ें" : "Read Post"}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : loading ? (
                        <div className="text-center py-20">Loading...</div>
                    ) : (
                        <div className="text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed">
                            <p className="text-muted-foreground">
                                {lang === "hi" ? "अभी तक कोई लेख प्रकाशित नहीं हुआ है।" : "No articles published yet."}
                            </p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}