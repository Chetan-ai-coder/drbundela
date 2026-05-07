import { NextRequest, NextResponse } from "next/server";

// Check if MongoDB is configured
const hasMongoDBConfig = process.env.MONGODB_URI;

export async function POST(req: NextRequest) {
  try {
    if (!hasMongoDBConfig) {
      return NextResponse.json(
        { error: "MongoDB not configured" },
        { status: 503 }
      );
    }

    const { connectDB } = await import("@/lib/mongodb");
    const Post = (await import("@/models/Post")).default;
    
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
    if (!hasMongoDBConfig) {
      return NextResponse.json([], { status: 200 });
    }

    const { connectDB } = await import("@/lib/mongodb");
    const Post = (await import("@/models/Post")).default;
    
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts", data: [] }, { status: 200 });
  }
}
