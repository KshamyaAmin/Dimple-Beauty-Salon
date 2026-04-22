import React from "react";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

const ABOUT_IMG = "https://images.unsplash.com/photo-1646526802761-98046c6f1f53";

export const About = () => {
  const { t } = useT();
  const ref = useReveal();

  return (
    <section
      id="about"
      data-testid="section-about"
      className="relative py-24 lg:py-32 bg-[color:var(--cream)]"
    >
      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left: image collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--emerald-deep)]">
              <img
                src={ABOUT_IMG}
                alt="Elegant salon portrait"
                data-testid="about-image"
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:flex absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[color:var(--emerald)] text-[color:var(--cream)] items-center justify-center flex-col">
              <span className="font-serif text-3xl leading-none">10+</span>
              <span className="overline text-[color:var(--gold)] text-[9px] mt-1">Years</span>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="block h-px w-12 bg-[color:var(--gold)]" />
              <span className="overline text-[color:var(--emerald)]">{t.about.overline}</span>
            </div>
            <h2
              data-testid="about-title"
              className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]"
            >
              {t.about.title}
            </h2>

            <div className="mt-8 space-y-5 max-w-2xl text-[15px] md:text-base leading-relaxed text-[color:var(--ink)]/75 font-sans">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.about.stats.map((s, i) => (
                <div
                  key={i}
                  data-testid={`about-stat-${i}`}
                  className="border-t border-[color:var(--gold)] pt-4"
                >
                  <div className="font-serif text-3xl md:text-4xl text-[color:var(--emerald-ink)]">
                    {s.value}
                  </div>
                  <div className="overline text-[color:var(--emerald)]/70 mt-2">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge icon={<Heart className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.about.badges[0]} />
              <Badge icon={<Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.about.badges[1]} />
              <Badge icon={<ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.about.badges[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 border border-[color:var(--emerald-ink)]/20 rounded-full text-[12px] tracking-[0.14em] uppercase text-[color:var(--emerald-ink)]">
    <span className="text-[color:var(--gold)]">{icon}</span>
    {label}
  </span>
);
