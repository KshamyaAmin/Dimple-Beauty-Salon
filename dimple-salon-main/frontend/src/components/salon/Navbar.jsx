import React, { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useT } from "../../i18n";

const LINKS = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#nails", key: "nails" },
  { href: "#contact", key: "contact" },
];

export const Navbar = () => {
  const { lang, setLang, t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "hi" : "en");

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[color:var(--cream)]/85 backdrop-blur-xl border-b border-[color:var(--hairline)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14 flex items-center justify-between h-[72px]">
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[color:var(--gold)] text-[color:var(--emerald)]">
            <span className="font-serif text-lg italic leading-none">D</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-[18px] md:text-[20px] text-[color:var(--emerald-ink)] tracking-tight">
              {t.brand.name}
            </span>
            <span className="overline text-[10px] text-[color:var(--gold)]">
              {t.brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10" data-testid="nav-desktop">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              data-testid={`nav-link-${l.key}`}
              className="group relative font-sans text-[13px] tracking-[0.18em] uppercase text-[color:var(--emerald-ink)] hover:text-[color:var(--gold)] transition-colors duration-300"
            >
              {t.nav[l.key]}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            data-testid="language-toggle"
            aria-label="Toggle language"
            className="hidden sm:flex items-center border border-[color:var(--emerald-ink)]/25 rounded-full overflow-hidden"
          >
            <span
              className={`px-3 py-1.5 text-[11px] tracking-widest transition-colors ${lang === "en"
                ? "bg-[color:var(--emerald-ink)] text-[color:var(--cream)]"
                : "text-[color:var(--emerald-ink)]"
                }`}
            >
              EN
            </span>
            <span
              className={`px-3 py-1.5 text-[11px] tracking-widest transition-colors ${lang === "hi"
                ? "bg-[color:var(--emerald-ink)] text-[color:var(--cream)]"
                : "text-[color:var(--emerald-ink)]"
                }`}
            >
              हिंदी
            </span>
          </button>

          <a
            href="tel:+919867873647"
            data-testid="nav-cta-call"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[color:var(--emerald)] text-[color:var(--cream)] hover:bg-[color:var(--emerald-deep)] transition-colors duration-300 group"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            <span className="font-sans text-[12px] tracking-[0.22em] uppercase">
              {t.nav.callNow}
            </span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            aria-label="Menu"
            className="lg:hidden p-2 text-[color:var(--emerald-ink)]"
          >
            {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-[color:var(--cream)] border-t border-[color:var(--hairline)] transition-[max-height,opacity] duration-500 ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        data-testid="mobile-menu"
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-link-${l.key}`}
              className="font-serif text-2xl text-[color:var(--emerald-ink)]"
            >
              {t.nav[l.key]}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleLang}
              data-testid="mobile-language-toggle"
              className="flex items-center border border-[color:var(--emerald-ink)]/25 rounded-full overflow-hidden"
            >
              <span
                className={`px-3 py-1.5 text-[11px] tracking-widest ${lang === "en" ? "bg-[color:var(--emerald-ink)] text-[color:var(--cream)]" : "text-[color:var(--emerald-ink)]"
                  }`}
              >
                EN
              </span>
              <span
                className={`px-3 py-1.5 text-[11px] tracking-widest ${lang === "hi" ? "bg-[color:var(--emerald-ink)] text-[color:var(--cream)]" : "text-[color:var(--emerald-ink)]"
                  }`}
              >
                हिंदी
              </span>
            </button>
            <a
              href="tel:+919867873647"
              data-testid="mobile-cta-call"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--emerald)] text-[color:var(--cream)]"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[12px] tracking-[0.2em] uppercase">{t.nav.callNow}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
