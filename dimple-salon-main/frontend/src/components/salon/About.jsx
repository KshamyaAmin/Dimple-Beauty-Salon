import React from "react";
import { CircularTestimonials } from "../ui/circular-testimonials";
import { useT } from "../../i18n";

export const About = () => {
  const { t } = useT();

  const aboutItems = [
    {
      quote: t.about.body1,
      name: "Our Story",
      designation: "Est. 2007",
      src: "/assest/abt.png",
    },
    {
      quote: t.about.body2,
      name: "Mrs. Shubha S. Shriyan",
      designation: "Founder & Visionary",
      src: "/assest/shubha.png",
    },
    {
      quote: "From daily beauty rituals to dream bridal looks, we’re proud to be part of your special moments, transformations, and self-care journeys.",
      name: "Our Promise",
      designation: "Quality & Comfort",
      src: "/assest/Makeup2.jpg",
    },
  ];

  return (
    <section id="about" data-testid="section-about">
      {/* Light section style from prompt */}
      <div className="bg-[color:var(--cream)] py-12 lg:py-32 px-2 md:px-10 flex flex-col gap-6 md:gap-16 items-center justify-center relative overflow-hidden">

        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <span className="block h-px w-8 md:w-12 bg-[color:var(--gold)]" />
            <span className="overline text-[color:var(--emerald)]">{t.about.overline}</span>
            <span className="block h-px w-8 md:w-12 bg-[color:var(--gold)]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]">
            {t.about.title}
          </h2>
        </div>

        <div
          className="items-center justify-center relative flex w-full"
          style={{ maxWidth: "1456px" }}
        >
          <CircularTestimonials
            testimonials={aboutItems}
            autoplay={true}
            colors={{
              name: "var(--emerald-ink)",
              designation: "var(--emerald)",
              testimony: "var(--ink)",
              arrowBackground: "var(--emerald-deep)",
              arrowForeground: "var(--cream)",
              arrowHoverBackground: "var(--gold)",
            }}
            fontSizes={{
              name: "clamp(1.125rem, 2.5vw, 1.75rem)",
              designation: "clamp(0.875rem, 2vw, 1.25rem)",
              quote: "clamp(0.875rem, 2vw, 1.25rem)",
            }}
            containerMaxWidthClass="max-w-full lg:max-w-[1400px]"
            imageHeightClass="h-[14rem] sm:h-[20rem] md:h-[28rem] lg:h-[32rem]"
            textMaxHeightClass="max-h-[14rem] md:max-h-[18rem] lg:max-h-[22rem]"
          />
        </div>

        {/* Keeping stats and badges for continuity */}
        <div className="max-w-[1456px] w-full mx-auto mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-[color:var(--gold)]/30 pt-8 md:pt-12">
          {t.about.stats.map((s, i) => (
            <div key={i} data-testid={`about-stat-${i}`}>
              <div className="font-serif text-3xl md:text-5xl text-[color:var(--emerald-ink)]">
                {s.value}
              </div>
              <div className="overline text-[color:var(--emerald)]/70 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
