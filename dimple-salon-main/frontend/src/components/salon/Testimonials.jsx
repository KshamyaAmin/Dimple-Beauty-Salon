import React from "react";
import { Quote, Star } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

export const Testimonials = () => {
  const { t } = useT();
  const ref = useReveal();
  return (
    <section
      data-testid="section-testimonials"
      className="relative py-24 lg:py-32 bg-[color:var(--cream)]"
    >
      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-px w-12 bg-[color:var(--gold)]" />
            <span className="overline text-[color:var(--emerald)]">{t.testimonials.overline}</span>
          </div>
          <h2
            data-testid="testimonials-title"
            className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]"
          >
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((it, i) => (
            <article
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="relative p-7 md:p-8 border border-[color:var(--emerald-ink)]/15 bg-[color:var(--cream)] hover:border-[color:var(--gold)] transition-colors duration-500"
            >
              <Quote className="w-8 h-8 text-[color:var(--gold)]" strokeWidth={1.25} />
              <p className="mt-5 font-serif italic text-xl md:text-[22px] leading-snug text-[color:var(--emerald-ink)]">
                "{it.body}"
              </p>
              <div className="mt-8 pt-5 border-t border-[color:var(--hairline)]">
                <div className="flex items-center gap-1 text-[color:var(--gold)] mb-2">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[color:var(--gold)]" strokeWidth={1} />
                  ))}
                </div>
                <div className="font-sans text-[14px] text-[color:var(--emerald-ink)] font-medium">
                  {it.name}
                </div>
                <div className="font-sans text-[11px] tracking-[0.12em] uppercase text-[color:var(--ink)]/55 mt-1">
                  {it.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
