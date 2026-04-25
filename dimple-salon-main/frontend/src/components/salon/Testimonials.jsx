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
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2
            data-testid="testimonials-title"
            className="font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-[color:var(--emerald-ink)]"
          >
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#fcfbf9] border border-[#eee9df] p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#d4af37] mb-6 opacity-70" strokeWidth={1} />
                <p className="font-serif italic text-[17px] leading-relaxed text-[#3a4f41] mb-8">
                  "{item.body}"
                </p>
              </div>
              
              <div>
                <div className="h-px w-full bg-[#eee9df] mb-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[14px] h-[14px] fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <h4 className="font-medium text-[13px] text-[#3a4f41] mb-1.5">{item.name}</h4>
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#8b918a]">
                  {item.role.replace(' · ', ' - ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
