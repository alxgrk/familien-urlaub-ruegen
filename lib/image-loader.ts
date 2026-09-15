import type { ImageLoader } from "next/image";

const netlifyImageLoader: ImageLoader = ({ src, width, quality }) => {
  if (process.env.NEXT_PUBLIC_IMAGE_CDN !== "true") {
    return src;
  }
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality ?? 75),
  });
  return `/.netlify/images?${params.toString()}`;
};

export default netlifyImageLoader;
