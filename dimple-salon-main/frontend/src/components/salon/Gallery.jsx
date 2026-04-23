import React from "react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";
import { ImageAutoSlider } from "../ui/image-auto-slider";

const SALON_IMAGES = [
  "/assest/Dimple.jpeg",
  "/assest/Hair.jpeg",
  "/assest/Makeup2.jpg",
  "/assest/mirror.jpeg",
  "/assest/Nail.jpeg",
  "/assest/Nail1.jpeg",
  "/assest/image.png",

];

export const Gallery = () => {
  const { t } = useT();
  const ref = useReveal();

  return (
    <section
      id="gallery"
      data-testid="section-gallery"
      className="relative py-24 lg:py-32 bg-[color:var(--emerald-ink)] text-[color:var(--cream)] overflow-hidden grain"
    >
      <div ref={ref} className="reveal relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="block h-px w-12 bg-[color:var(--gold)]" />
              <span className="overline text-[color:var(--gold)]">{t.gallery.overline}</span>
            </div>
            <h2
              data-testid="gallery-title"
              className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight"
            >
              {t.gallery.title}
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] md:text-base text-[color:var(--cream)]/75 font-sans leading-relaxed lg:pb-3">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Dual Scrolling Gallery - Two rows in opposite directions */}
        <div className="mt-8 flex flex-col gap-2">
          <ImageAutoSlider images={SALON_IMAGES} direction="left" />
          <ImageAutoSlider images={[...SALON_IMAGES].reverse()} direction="right" />
        </div>
      </div>
    </section>
  );
};
