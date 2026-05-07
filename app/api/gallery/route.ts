import { NextResponse } from "next/server";

// Check if ImageKit credentials are configured
const hasImageKitConfig = 
  process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY &&
  process.env.IMAGEKIT_PRIVATE_KEY &&
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

export async function GET() {
  try {
    // Return empty array if ImageKit is not configured
    if (!hasImageKitConfig) {
      console.warn("ImageKit not configured. Set environment variables to enable gallery.");
      return NextResponse.json([]);
    }

    // Lazy import only if configured
    const ImageKit = (await import("imagekit")).default;
    
    const imagekit = new ImageKit({
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    });

    interface ImageKitFile {
      fileId: string;
      name: string;
      url: string;
      tags?: string[];
      thumbnailUrl?: string;
    }

    const files = (await imagekit.listFiles({
      path: "Dr Bundela/Gallery",
      limit: 100,
    })) as ImageKitFile[];

    console.log("Gallery images found:", files.length);

    if (files.length === 0) {
      return NextResponse.json([]);
    }

    const formattedItems = files.map((file) => ({
      id: file.fileId,
      category: file.tags && file.tags.length > 0 ? file.tags[0] : "Clinic",
      url: file.url,
      title: file.name.split('.')[0].replace(/-/g, ' '), 
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("Gallery API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images", data: [] }, 
      { status: 200 }
    );
  }
}
