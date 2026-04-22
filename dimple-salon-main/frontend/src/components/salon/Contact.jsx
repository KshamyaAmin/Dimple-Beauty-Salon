import React from "react";
import { Clock, ExternalLink, Instagram, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { useT } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Dimple+Beauty+Salon+Sector+9+Kopar+Khairane&output=embed";
const MAPS_LINK = "https://maps.app.goo.gl/hyW3ex23wCpx8QHM6";

export const Contact = () => {
  const { t } = useT();
  const ref = useReveal();

  return (
    <section
      id="contact"
      data-testid="section-contact"
      className="relative py-24 lg:py-32 bg-[color:var(--cream-warm)]"
    >
      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-px w-12 bg-[color:var(--gold)]" />
            <span className="overline text-[color:var(--emerald)]">{t.contact.overline}</span>
          </div>
          <h2
            data-testid="contact-title"
            className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]"
          >
            {t.contact.title}
          </h2>
          <p className="mt-6 text-[15px] md:text-base text-[color:var(--ink)]/70 font-sans leading-relaxed max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Info */}
          <div className="lg:col-span-5 space-y-10">
            <InfoRow
              icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />}
              label={t.contact.addressLabel}
              testId="contact-address"
            >
              <p className="font-serif text-xl text-[color:var(--emerald-ink)] leading-snug">
                {t.contact.address}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-directions-link"
                className="mt-3 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[color:var(--emerald)] hover:text-[color:var(--gold)] transition-colors"
              >
                {t.contact.directions}
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </InfoRow>

            <InfoRow
              icon={<Clock className="w-5 h-5" strokeWidth={1.5} />}
              label={t.contact.hoursLabel}
              testId="contact-hours"
            >
              <p className="font-serif text-xl text-[color:var(--emerald-ink)]">{t.contact.hours}</p>
            </InfoRow>

            <InfoRow
              icon={<Phone className="w-5 h-5" strokeWidth={1.5} />}
              label={t.contact.phoneLabel}
              testId="contact-phone"
            >
              <a
                href="tel:+919867873647"
                data-testid="contact-phone-link"
                className="font-serif text-xl text-[color:var(--emerald-ink)] hover:text-[color:var(--gold)] transition-colors"
              >
                {t.contact.phone}
              </a>
            </InfoRow>

            <InfoRow
              icon={<Instagram className="w-5 h-5" strokeWidth={1.5} />}
              label={t.contact.instagramLabel}
              testId="contact-instagram"
            >
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-instagram-link"
                className="font-serif text-xl text-[color:var(--emerald-ink)] hover:text-[color:var(--gold)] transition-colors"
              >
                {t.contact.instagram}
              </a>
            </InfoRow>

            <InfoRow
              icon={<Youtube className="w-5 h-5" strokeWidth={1.5} />}
              label={t.contact.youtubeLabel}
              testId="contact-youtube"
            >
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-youtube-link"
                className="font-serif text-xl text-[color:var(--emerald-ink)] hover:text-[color:var(--gold)] transition-colors"
              >
                {t.contact.youtube}
              </a>
            </InfoRow>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://wa.me/919867873647"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--emerald)] text-[color:var(--cream)] hover:bg-[color:var(--emerald-deep)] transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[12px] tracking-[0.22em] uppercase">{t.contact.whatsapp}</span>
              </a>
              <a
                href="tel:+919867873647"
                data-testid="contact-call-btn"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[color:var(--emerald-ink)] text-[color:var(--emerald-ink)] hover:bg-[color:var(--emerald-ink)] hover:text-[color:var(--cream)] transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[12px] tracking-[0.22em] uppercase">{t.contact.call}</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div
              data-testid="contact-map-wrap"
              className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden border border-[color:var(--emerald-ink)]/15 bg-[color:var(--emerald-deep)]"
            >
              <iframe
                title="Dimple Beauty Salon map"
                src={MAPS_EMBED}
                data-testid="contact-map-iframe"
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, children, testId }) => (
  <div data-testid={testId} className="flex items-start gap-5 border-t border-[color:var(--emerald-ink)]/15 pt-6">
    <span className="shrink-0 w-10 h-10 rounded-full border border-[color:var(--gold)] text-[color:var(--emerald)] flex items-center justify-center">
      {icon}
    </span>
    <div className="flex-1">
      <div className="overline text-[color:var(--emerald)]/70 mb-2">{label}</div>
      {children}
    </div>
  </div>
);
