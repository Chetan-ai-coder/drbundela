import ImageKit from "imagekit";
import { NextResponse } from "next/server";

// 1. Define the shape of an ImageKit file so TypeScript is happy
interface ImageKitFile {
  fileId: string;
  name: string;
  url: string;
  tags?: string[];
  thumbnailUrl?: string;
}

// 2. Initialize the SDK
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export async function GET() {
  try {
    // 3. Fetch files and tell TypeScript to treat them as ImageKitFile[]
    const files = (await imagekit.listFiles({
      path: "Dr Bundela/Gallery",
      limit: 100,
    })) as ImageKitFile[];

    console.log("Files found:", files.length);

    if (files.length === 0) {
      return NextResponse.json([]);
    }

    // 4. Map the files. Red lines will disappear because of the interface above.
    const formattedItems = files.map((file) => ({
      id: file.fileId,
      // If tags exist, use the first one as category, otherwise default to "Clinic"
      category: file.tags && file.tags.length > 0 ? file.tags[0] : "Clinic",
      url: file.url,
      // Remove file extension and replace hyphens with spaces for a clean title
      title: file.name.split('.')[0].replace(/-/g, ' '), 
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("ImageKit Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" }, 
      { status: 500 }
    );
  }
}