import { Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { useT } from "../../i18n";

export const Footer = () => {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[color:var(--emerald-ink)] text-[color:var(--cream)] overflow-hidden grain"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--gold)]">
                <span className="font-serif text-xl italic leading-none">D</span>
              </span>
              <span className="font-serif text-2xl tracking-tight">{t.brand.name}</span>
            </div>
            <p className="mt-5 text-[14px] text-[color:var(--cream)]/70 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="overline text-[color:var(--gold)] mb-4">Studio</div>
            <div className="flex items-start gap-3 text-[14px] text-[color:var(--cream)]/80 leading-relaxed">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-[color:var(--gold)]" strokeWidth={1.5} />
              <span>{t.contact.address}</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="overline text-[color:var(--gold)] mb-4">Connect</div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919867873647"
                data-testid="footer-phone"
                className="flex items-center gap-3 text-[14px] text-[color:var(--cream)]/90 hover:text-[color:var(--gold)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[color:var(--gold)]" strokeWidth={1.5} />
                {t.contact.phone}
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                className="flex items-center gap-3 text-[14px] text-[color:var(--cream)]/90 hover:text-[color:var(--gold)] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[color:var(--gold)]" strokeWidth={1.5} />
                {t.contact.instagram}
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-youtube"
                className="flex items-center gap-3 text-[14px] text-[color:var(--cream)]/90 hover:text-[color:var(--gold)] transition-colors"
              >
                <Youtube className="w-4 h-4 text-[color:var(--gold)]" strokeWidth={1.5} />
                {t.contact.youtube}
              </a>
            </div>
            <div className="mt-6 text-[13px] text-[color:var(--cream)]/60">
              {t.contact.hours}
            </div>
          </div>
        </div>

        <div className="hairline mt-14 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-[color:var(--cream)]/55 tracking-[0.14em] uppercase">
          <div>
            © {year} {t.brand.name}. {t.footer.rights}
          </div>
          <div className="font-serif italic text-[14px] normal-case tracking-normal text-[color:var(--cream)]/70">
            {t.footer.crafted} — Navi Mumbai
          </div>
        </div>
      </div>
    </footer>
  );
};
