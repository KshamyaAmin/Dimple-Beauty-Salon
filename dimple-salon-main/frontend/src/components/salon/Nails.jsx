import React from "react";
import { Sparkles, Star, Heart } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

const NAIL_IMAGES = [
  "/assest/nail_elegant.png",
  "/assest/nail_vibrant.png",
  "/assest/nail_bridal.png"
];

export const Nails = () => {
  const { t } = useT();
  const ref = useReveal();

  return (
    <section
      id="nails"
      data-testid="section-nails"
      className="relative py-24 lg:py-32 bg-[color:var(--emerald-deep)] text-[color:var(--cream)] overflow-hidden"
    >
      {/* Background grain or texture if applicable */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="block h-px w-12 bg-[color:var(--gold)]" />
              <span className="overline text-[color:var(--gold)] uppercase tracking-[0.2em] text-xs">
                {t.nails.overline}
              </span>
            </div>
            
            <h2
              className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight mb-8"
            >
              {t.nails.title}
            </h2>

            <div className="space-y-6 max-w-xl text-[15px] md:text-base leading-relaxed text-[color:var(--cream)]/80 font-sans">
              <p>{t.nails.body1}</p>
              <p>{t.nails.body2}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge icon={<Star className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.nails.badges[0]} />
              <Badge icon={<Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.nails.badges[1]} />
              <Badge icon={<Heart className="w-3.5 h-3.5" strokeWidth={1.5} />} label={t.nails.badges[2]} />
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden bg-white/5 rounded-sm">
              <img
                src={NAIL_IMAGES[0]}
                alt="Elegant Nails"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden bg-white/5 rounded-sm">
                <img
                  src={NAIL_IMAGES[1]}
                  alt="Vibrant Nails"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-white/5 rounded-sm">
                <img
                  src={NAIL_IMAGES[2]}
                  alt="Bridal Nails"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Badge = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 border border-[color:var(--gold)]/30 rounded-full text-[11px] tracking-[0.14em] uppercase text-[color:var(--cream)] bg-white/5">
    <span className="text-[color:var(--gold)]">{icon}</span>
    {label}
  </span>
);
