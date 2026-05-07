"use client";

import { useLanguage } from "@/context/LanguageContext";

export function PostContent({ post }: { post: any }) {
  const { lang } = useLanguage();

  return (
    <div className="animate-in fade-in duration-500">
      {/* Dynamic Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-foreground">
        {lang === "hi" ? post.titleHindi : post.title}
      </h1>

      {/* Dynamic Excerpt */}
      <p className="text-muted-foreground text-xl md:text-2xl font-light mb-8 italic leading-relaxed border-l-4 border-primary/20 pl-4">
        {lang === "hi" ? post.excerptHindi : post.excerpt}
      </p>

      {/* Dynamic Main Content */}
      <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-line leading-loose">
        {lang === "hi" ? post.contentHindi : post.content}
      </div>
    </div>
  );
}