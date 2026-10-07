import type { NextPage } from "next";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export type LightboxItem = {
  src: string;
  alt: string;
};

type ImageLightboxType = {
  items?: LightboxItem[];
  index?: number | null;
  onClose?: () => void;
  onIndexChange?: (index: number) => void;
};

const ImageLightbox: NextPage<ImageLightboxType> = ({
  items = [],
  index = null,
  onClose,
  onIndexChange,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const isOpen = index !== null && index >= 0 && index < items.length;
  const hasMultipleItems = items.length > 1;

  const goToPrevious = useCallback(() => {
    if (index === null) {
      return;
    }
    onIndexChange?.((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const goToNext = useCallback(() => {
    if (index === null) {
      return;
    }
    onIndexChange?.((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const item = items[index as number];

  const controlClassName =
    "cursor-pointer [border:none] bg-transparent text-light-text-color w-[2.75rem] h-[2.75rem] rounded-45xl border-[1px] border-solid border-light-text-color/40 flex flex-row items-center justify-center text-[1.25rem] leading-none shrink-0";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bildansicht"
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-start p-[1rem] sm:p-[2rem]"
      onClick={onClose}
    >
      <div className="self-stretch w-full flex flex-row items-center justify-between z-[1]">
        <span className="text-mini text-light-text-color/70">
          {index + 1} / {items.length}
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Ansicht schließen"
          className={controlClassName}
          onClick={(event) => {
            event.stopPropagation();
            onClose?.();
          }}
        >
          ×
        </button>
      </div>
      <div
        className="self-stretch w-full flex-1 relative flex items-center justify-center py-[1rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          fill
          priority
          sizes="100vw"
          src={item.src}
          alt={item.alt}
          className="object-contain"
        />
      </div>
      <div
        className="self-stretch w-full flex flex-row items-center justify-center gap-[0.75rem] z-[1]"
        onClick={(event) => event.stopPropagation()}
      >
        {hasMultipleItems && (
          <button
            type="button"
            aria-label="Vorheriges Bild"
            className={controlClassName}
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
          >
            ←
          </button>
        )}
        <span className="text-mini text-light-text-color/70 text-center">
          {item.alt}
        </span>
        {hasMultipleItems && (
          <button
            type="button"
            aria-label="Nächstes Bild"
            className={controlClassName}
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
          >
            →
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ImageLightbox;
