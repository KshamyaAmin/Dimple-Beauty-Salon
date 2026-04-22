import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div
      data-testid="floating-actions"
      className="fixed z-40 bottom-5 right-5 md:bottom-7 md:right-7 flex flex-col gap-3"
    >
      <a
        href="https://wa.me/919867873647"
        target="_blank"
        rel="noreferrer"
        data-testid="float-whatsapp-btn"
        aria-label="WhatsApp"
        className="pulse-wa w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      </a>
      <a
        href="tel:+919867873647"
        data-testid="float-call-btn"
        aria-label="Call"
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[color:var(--emerald)] text-[color:var(--cream)] hover:bg-[color:var(--emerald-deep)] transition-colors duration-300"
      >
        <Phone className="w-5 h-5" strokeWidth={1.5} />
      </a>
    </div>
  );
};
