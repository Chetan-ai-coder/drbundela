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

  if (src.startsWith("http")) {
    return src;
  }

  const urlEndpoint = "https://ik.imagekit.io/agenticimg";

  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  const safeSrc = cleanSrc.replace(/ /g, "%20");

  return `${urlEndpoint}/${safeSrc}?tr=w-${width},q-${quality || 75}`;
}