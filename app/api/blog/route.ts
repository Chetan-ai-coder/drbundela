import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();

    const { 
      title, titleHindi, slug, excerpt, excerptHindi, 
      content, contentHindi, coverImage, author, category, tags 
    } = data;

    const post = await Post.create({
      title, titleHindi, slug, excerpt, excerptHindi,
      content, contentHindi, coverImage, author, category, tags,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error("POST API Error:", error);
    return NextResponse.json(
      { error: "Failed to create post. Check if slug is unique." }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    // Changed sort to createdAt for guaranteed sorting stability
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}