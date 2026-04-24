import { useEffect, useState } from "react";
import { MessageCircle, Phone, Star } from "lucide-react";
import { useT } from "../../i18n";

const HERO_IMAGES = [
  "/assest/Dimple.jpeg",
  "/assest/mirror.jpeg",
  "/assest/Hair.jpeg",
];

export const Hero = () => {
  const { t } = useT();
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" data-testid="section-hero" className="relative pt-24 lg:pt-28 bg-[color:var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14 pb-8 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          {/* Left: headline */}
          <div className="lg:col-span-7 pt-6 lg:pt-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="block h-px w-12 bg-[color:var(--gold)]" />
              <span className="overline text-[color:var(--emerald)]">{t.hero.eyebrow}</span>
            </div>

            <h1
              data-testid="hero-title"
              className="font-serif text-[56px] sm:text-[76px] lg:text-[104px] leading-[0.92] tracking-tight text-[color:var(--emerald-ink)]"
            >
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block italic text-[color:var(--gold)]">{t.hero.titleLine2}</span>
            </h1>

            <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[color:var(--ink)]/75 font-sans">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919867873647"
                target="_blank"
                rel="noreferrer"
                data-testid="hero-cta-whatsapp"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--emerald)] text-[color:var(--cream)] hover:bg-[color:var(--emerald-deep)] transition-colors duration-300"
              >
                <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="font-sans text-[12px] tracking-[0.22em] uppercase">
                  {t.hero.ctaPrimary}
                </span>
              </a>
              <a
                href="tel:+919867873647"
                data-testid="hero-cta-call"
                className="inline-flex items-center gap-3 px-7 py-4 border border-[color:var(--emerald-ink)] text-[color:var(--emerald-ink)] hover:bg-[color:var(--emerald-ink)] hover:text-[color:var(--cream)] transition-colors duration-300"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="font-sans text-[12px] tracking-[0.22em] uppercase">
                  {t.hero.ctaSecondary}
                </span>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap" data-testid="hero-rating">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[2px] text-[color:var(--gold)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[color:var(--gold)]" strokeWidth={1} />
                  ))}
                </div>
                <span className="font-sans text-[13px] text-[color:var(--emerald-ink)]">
                  {t.hero.rating}
                </span>
              </div>
              <span className="h-4 w-px bg-[color:var(--emerald-ink)]/20" />
              <span className="font-sans text-[13px] text-[color:var(--emerald-ink)]/80">
                {t.hero.reviews}
              </span>
              <span className="h-4 w-px bg-[color:var(--emerald-ink)]/20" />
              <span className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.16em] uppercase text-[color:var(--emerald)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--emerald)] animate-pulse" />
                {t.hero.badgeLine}
              </span>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              {HERO_IMAGES.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Salon scene ${idx + 1}`}
                  data-testid={`hero-image-${idx}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${idx === currentIdx ? "opacity-100" : "opacity-0"
                    }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-[color:var(--cream)]/90 backdrop-blur-sm px-4 py-3">
                  <div className="overline text-[color:var(--emerald)]">Kopar Khairane</div>
                  <div className="font-serif text-xl text-[color:var(--emerald-ink)] leading-tight">
                    Sector 9, Navi Mumbai
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end text-[color:var(--cream)]">
                  <span className="overline text-[color:var(--gold)]">Since</span>
                  <span className="font-serif text-3xl">2007</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 border border-[color:var(--gold)] w-40 h-40 -z-10" />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <Marquee />
    </section>
  );
};

const Marquee = () => {
  const { t } = useT();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div
      data-testid="hero-marquee"
      className="relative border-y border-[color:var(--emerald-ink)]/15 bg-[color:var(--cream-warm)] overflow-hidden"
    >
      <div className="flex gap-14 py-4 whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-14">
            <span className="font-serif italic text-xl md:text-2xl text-[color:var(--emerald-ink)]">
              {w}
            </span>
            <span className="w-2 h-2 rotate-45 bg-[color:var(--gold)]" />
          </div>
        ))}
      </div>
    </div>
  );
};
