// lib/imagekitLoader.ts
export default function imagekitLoader({
  src,
  width,
  quality,
}: {
  src: any;
  width: number;
  quality?: number;
}) {
  if (!src || typeof src !== "string") {
    return "";
  }

  // If already a full URL, return as is
  if (src.startsWith("http")) {
    return src;
  }

  // ImageKit URL endpoint
  const urlEndpoint = "https://ik.imagekit.io/agenticimg";

  // Remove leading slash if present
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  // Replace spaces with %20
  const safeSrc = cleanSrc.replace(/ /g, "%20");

  // Build ImageKit URL with transformation parameters
  return `${urlEndpoint}/${safeSrc}?tr=w-${width},q-${quality || 75}`;
}
