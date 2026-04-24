import React from "react";
import { Quote, Star } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";
import { CircularTestimonials } from "../ui/circular-testimonials";

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

        <div className="mt-14">
          <CircularTestimonials
            testimonials={t.testimonials.items}
            autoplay={true}
            colors={{
              name: "var(--emerald-ink)",
              designation: "var(--emerald)",
              testimony: "var(--emerald-ink)",
              arrowBackground: "var(--emerald)",
              arrowForeground: "var(--cream)",
              arrowHoverBackground: "var(--gold)",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.875rem",
              quote: "1.25rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};
