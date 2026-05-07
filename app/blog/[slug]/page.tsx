import { connectDB } from "@/lib/mongodb";
import Post, { IPost } from "@/models/Post";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PostContent } from "@/components/PostContent";

// Ensure fresh data
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = (await params);
  await connectDB();
  const post = await Post.findOne({ slug }).lean<IPost>();
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Dr. Bundela Homeopathy`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = (await params);
  await connectDB();
  
  const post = await Post.findOne({ slug }).lean<IPost>();

  if (!post) return notFound();

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 pt-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {post.category || "Health"}
          </span>
        </div>

        <PostContent post={JSON.parse(JSON.stringify(post))} />

        {post.coverImage && (
          <div className="relative w-full h-64 md:h-[450px] rounded-3xl overflow-hidden my-12 shadow-xl bg-secondary/30">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}