import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({children, className, delay = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame2 = 0;
    let observer: IntersectionObserver | undefined;
    const frame1 = requestAnimationFrame(() => {
      setShown(false);
      frame2 = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setShown(true);
                  observer?.disconnect();
                }
              });
            },
            {threshold: 0.15},
        );
        observer.observe(node);
      });
    });
    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      observer?.disconnect();
    };
  }, []);

  return (
      <div
          ref={ref}
          className={`${className ?? ""} transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={delay ? {transitionDelay: `${delay}ms`} : undefined}
      >
        {children}
      </div>
  );
}

export default Reveal;
