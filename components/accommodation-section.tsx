import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import ImageLightbox from "./image-lightbox";

export type SectionImage = {
  src: string;
  alt: string;
  className?: string;
};

type AccommodationSectionType = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  facts?: string[];
  images?: SectionImage[];
  ctaLabel?: string | null;
};

const AccommodationSection: NextPage<AccommodationSectionType> = ({
  id,
  eyebrow,
  title,
  description,
  facts,
  images = [],
  ctaLabel = "Jetzt reservieren",
}) => {
  const router = useRouter();

  const onReserveNowButtonClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onImageClick = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const onLightboxClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const triggerClassName =
    "[border:none] bg-transparent p-0 m-0 cursor-zoom-in relative rounded-13xl overflow-hidden";

  return (
    <section
      id={id}
      className="self-stretch w-full flex flex-col items-stretch justify-start"
    >
      <div className="self-stretch w-full flex flex-col items-stretch justify-start gap-[1.5rem]">
        <div className="w-full flex flex-col items-stretch justify-start">
          <div className="w-full grid grid-cols-2 gap-[0.75rem] sm:gap-[1rem] auto-rows-[5rem] sm:auto-rows-[6rem] lg:auto-rows-[10rem] xl:auto-rows-[15rem]">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`${image.alt} vergrößern`}
                className={`${triggerClassName} ${image.className ?? "col-span-1"}`}
                onClick={() => onImageClick(index)}
              >
                <Image
                  fill
                  sizes={image.className?.includes("col-span-2") ? "100vw" : "50vw"}
                  src={image.src}
                  alt={image.alt}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-start text-left justify-start gap-[1.25rem]">
          {eyebrow && (
            <div className="rounded-full bg-lightskyblue text-rectangle-805 text-base font-medium leading-none py-[0.3rem] px-[0.9rem]">
              {eyebrow}
            </div>
          )}
          {title && (
            <h3 className="m-0 self-stretch relative leading-[125%] text-[2rem] text-black">
              {title}
            </h3>
          )}
          {description && (
            <div className="self-stretch relative leading-[1.6rem] text-dimgray-200">
              {description}
            </div>
          )}
          {facts && facts.length > 0 && (
            <ul className="self-stretch m-0 p-0 flex flex-wrap items-start gap-[0.5rem] list-none">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border-[1px] border-solid border-dimgray-200 px-[0.9rem] py-[0.3rem] text-mini leading-[1.4rem] text-dimgray-200"
                >
                  {fact}
                </li>
              ))}
            </ul>
          )}
          {ctaLabel ? <Link
            className="cursor-pointer [text-decoration:none] rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row px-[1.5rem] box-border items-center justify-center text-[1.13rem] text-light-text-color z-[1]"
            href="/buchung"
            onClick={onReserveNowButtonClick}
          >
            <b className="relative leading-[1.5rem]">{ctaLabel}</b>
          </Link> : <div/>}
        </div>
      </div>
      <ImageLightbox
        items={images}
        index={lightboxIndex}
        onClose={onLightboxClose}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
};

export default AccommodationSection;
