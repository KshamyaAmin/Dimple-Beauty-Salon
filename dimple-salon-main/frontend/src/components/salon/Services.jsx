import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

const IMAGES = {
  hair: "https://images.pexels.com/photos/29189919/pexels-photo-29189919.jpeg",
  skin: "/assest/Vir.jpg",
  nails: "https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg",
  waxing: "/assest/wax.jpg",
  pedicure: "/assest/pedicure.jpg",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=70",
  bridal: "/assest/Makeup2.jpg",
};

export const Services = () => {
  const { t } = useT();
  const ref = useReveal();

  return (
    <section
      id="services"
      data-testid="section-services"
      className="relative py-24 lg:py-32 bg-[color:var(--cream-warm)]"
    >
      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="block h-px w-12 bg-[color:var(--gold)]" />
              <span className="overline text-[color:var(--emerald)]">{t.services.overline}</span>
            </div>
            <h2
              data-testid="services-title"
              className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]"
            >
              {t.services.title}
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] md:text-base text-[color:var(--ink)]/70 font-sans leading-relaxed lg:pb-3">
            {t.services.subtitle}
          </p>
        </div>

        {/* Editorial bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[1px] bg-[color:var(--emerald-ink)]/10">
          {t.services.items.map((item, i) => {
            // asymmetric column spans for bento feel
            const span =
              i === 0
                ? "md:col-span-4"
                : i === 1
                  ? "md:col-span-2"
                  : i === 2
                    ? "md:col-span-2"
                    : i === 3
                      ? "md:col-span-2"
                      : i === 4
                        ? "md:col-span-2"
                        : i === 5
                          ? "md:col-span-3"
                          : "md:col-span-3";
            return (
              <ServiceCard key={item.key} item={item} img={IMAGES[item.key]} className={span} index={i} />
            );
          })}
        </div>

        <p
          data-testid="services-footnote"
          className="mt-10 max-w-xl text-[13px] italic text-[color:var(--ink)]/60 font-serif"
        >
          {t.services.footnote}
        </p>
      </div>
    </section>
  );
};

const ServiceCard = ({ item, img, className = "", index }) => (
  <article
    data-testid={`service-card-${item.key}`}
    className={`group relative bg-[color:var(--cream)] overflow-hidden ${className}`}
  >
    <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
      <img
        src={img}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--emerald-ink)]/70 via-transparent to-transparent" />
      <div className="absolute top-4 left-4 text-[color:var(--cream)]">
        <span className="overline text-[color:var(--gold)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <button
        aria-label={item.name}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[color:var(--cream)] text-[color:var(--emerald-ink)] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45"
      >
        <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </div>
    <div className="p-6 md:p-7 border-t border-[color:var(--hairline)]">
      <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--emerald-ink)] leading-tight">
        {item.name}
      </h3>
      <p className="mt-3 text-[14px] text-[color:var(--ink)]/70 font-sans leading-relaxed">
        {item.desc}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-[0.12em] uppercase text-[color:var(--emerald)] border border-[color:var(--emerald)]/25 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);
