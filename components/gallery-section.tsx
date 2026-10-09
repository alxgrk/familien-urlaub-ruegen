import type { NextPage } from "next";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageLightbox from "./image-lightbox";

export type GalleryItem = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
};

type GallerySectionType = {
  id?: string;
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];
};

const GallerySection: NextPage<GallerySectionType> = ({
  id = "weitere-eindruecke",
  title = "Weitere Eindrücke",
  subtitle = "Impressionen aus unserem Familiencamp",
  items = [],
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onImageClick = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const onLightboxClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  return (
    <section
      id={id}
      className="self-stretch w-full flex flex-col items-center justify-start gap-[1.5rem]"
    >
      <div className="flex flex-col items-center justify-start gap-[0.5rem]">
        <h2 className="m-0 relative leading-[125%] text-[2.25rem] sm:text-[2rem]">
          {title}
        </h2>
        <div className="relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
          {subtitle}
        </div>
      </div>
      <div className="self-stretch w-full grid grid-cols-2 grid-flow-dense auto-rows-[6rem] lg:auto-rows-[10rem] xl:auto-rows-[15rem] gap-[0.75rem] sm:gap-[1rem]">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-label={`${item.alt} vergrößern`}
            className={`group relative [border:none] bg-transparent p-0 m-0 cursor-zoom-in rounded-13xl overflow-hidden bg-lightskyblue ${item.className} transition-shadow duration-300 hover:shadow-[0px_6px_12px_rgba(0,_0,_0,_0.1)]`}
            onClick={() => onImageClick(index)}
          >
            <Image
              fill
              sizes={item.sizes}
              src={item.src}
              alt={item.alt}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <ImageLightbox
        items={items}
        index={lightboxIndex}
        onClose={onLightboxClose}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
};

export default GallerySection;
