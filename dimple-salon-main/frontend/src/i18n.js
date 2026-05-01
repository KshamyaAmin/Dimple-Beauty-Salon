import React, { createContext, useContext, useEffect, useState } from "react";

const START_YEAR = 2007;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - START_YEAR;

export const translations = {
  en: {
    brand: {
      name: "Dimple Beauty Salon",
      tagline: "Only For Ladies",
    },
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      nails: "Nails",
      about: "About",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      eyebrow: "Est. Navi Mumbai · Women-Owned",
      titleLine1: "Timeless Beauty,",
      titleLine2: "Personally Crafted.",
      subtitle:
        "A ladies-only sanctuary in Kopar Khairane — trusted for over a decade for quietly luxurious hair, skin, nail and bridal care.",
      ctaPrimary: "Book on WhatsApp",
      ctaSecondary: "Call 098678 73647",
      rating: "Rated 4.6 on Google",
      reviews: "258+ Reviews",
      badgeLine: "Open Today · Closes 9 PM",
    },
    marquee: [
      "Ladies Only Sanctuary",
      "Women-Owned",
      "Rated 4.6 / 5",
      "LGBTQ+ Friendly",
      "Since a decade",
      "Kopar Khairane · Navi Mumbai",
    ],
    about: {
      overline: "Our Story",
      title: "Beauty. Elegance. Experience. Since 2007.",
      body1:
        `Welcome to Dimple Beauty Salon, a trusted name in beauty and personal care for over ${yearsOfExperience} years. Nestled in Kopar Khairane, Navi Mumbai, we’ve become a go-to destination for women seeking quality, comfort, and confidence — all under one roof.`,
      body2:
        "At the heart of Dimple Beauty Salon is its visionary founder, Mrs. Shubha S. Shriyan, a passionate beauty professional and entrepreneur who started the salon in 2007 with a simple mission:“To empower every woman to feel confident, cared for, and beautiful — just as she is.”",
      storyTitle: "Our Story",
      storySubtitle: "Est. 2007",
      founderName: "Mrs. Shubha S. Shriyan",
      founderRole: "Founder & Visionary",
      promiseTitle: "Our Promise",
      promiseSubtitle: "Quality & Comfort",
      promiseBody:
        "From daily beauty rituals to dream bridal looks, we’re proud to be part of your special moments, transformations, and self-care journeys.",
      stats: [
        { value: `${yearsOfExperience}+`, label: "Years of Trust" },
        { value: "4.6★", label: "Google Rating" },
        { value: "258+", label: "Happy Reviews" },
        { value: "100%", label: "Ladies-Only" },
      ],
      badges: ["Women-Owned", "LGBTQ+ Friendly", "Open till 9 PM"],
    },
    nails: {
      overline: "Nail Artistry",
      title: "Elegance at your fingertips.",
      body1:
        "Your nails are the finishing touch to your unique style. From classic manicures to intricate nail art, our technicians craft every detail with precision and passion.",
      body2:
        "Using only premium, long-lasting products, we ensure your nails stay stunning and healthy. Because life is too short for boring nails.",
      badges: ["Manicure", "Nail Art", "Gel Extensions"],
    },
    services: {
      overline: "Menu of Services",
      title: "Rituals, refined.",
      subtitle:
        "From a quick threading touch-up to a full bridal day — everything we do is designed to feel unhurried and cared for.",
      footnote:
        "Service prices vary by length, texture and products used. Call us for a precise quote — we are happy to talk.",
      items: [
        {
          key: "hair",
          name: "Hair Studio",
          desc: "Cuts, colour, keratin, smoothening, global highlights and treatments with premium brands.",
          tags: ["Cut & Style", "Colour", "Keratin", "Treatments"],
        },
        {
          key: "skin",
          name: "Skin & Facials",
          desc: "Clean-ups, hydrating, de-tan and signature glow facials tailored to your skin type.",
          tags: ["Clean-up", "Glow Facial", "De-Tan", "Anti-Ageing"],
        },
        {
          key: "nails",
          name: "Nail Atelier",
          desc: "Manicures, pedicures, nail art and extensions — done by our detail-obsessed nail artists.",
          tags: ["Manicure", "Pedicure", "Nail Art", "Extensions"],
        },
        {
          key: "waxing",
          name: "Waxing & Threading",
          desc: "Rica, chocolate and liposoluble waxing plus precision threading in a calm private room.",
          tags: ["Rica", "Chocolate", "Threading", "Bleach"],
        },
        {
          key: "spa",
          name: "Body Spa",
          desc: "Head massage, body polish and relaxation rituals — pause the city for an afternoon.",
          tags: ["Head Spa", "Body Polish", "Massage"],
        },
        {
          key: "bridal",
          name: "Bridal & Makeup",
          desc: "Engagement, reception and HD bridal packages. Trials on appointment.",
          tags: ["Party", "HD Bridal", "Engagement", "Pre-Bridal"],
        },
        {
          key: "pedicure",
          name: "Pedicure & Foot Care",
          desc: "Indulgent foot rituals, skin softening, and precision nail care for feet that feel light and look beautiful.",
          tags: ["Foot Spa", "Heel Peel", "Classic Pedicure", "Gel Toes"],
        },
      ],
    },
    gallery: {
      overline: "Gallery",
      title: "Inside the studio.",
      subtitle:
        "Actual studio photos coming soon — the owner will upload them here. Until then, a curated preview of the mood and craft.",
      placeholder: "Owner photos coming soon",
    },
    testimonials: {
      overline: "What Guests Say",
      title: "Loved by 258+ women across Navi Mumbai.",
      items: [
        {
          name: "Ashwini Jawale",
          role: "Google Review · 2 months ago",
          body:
            "I had a wonderful experience at this beauty parlour. I opted for spa, manicure, and pedicure services, and I am extremely satisfied.",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
        },
        {
          name: "Pallavi Jogula",
          role: "Google Review · 3 months ago",
          body:
            "The experience with Dimple Parlor is awesome. The service, staff and hygiene is excellent. The rates are reasonable. I have been associated with this salon for more than 10 years.",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
        },
        {
          name: "Aisha Akanksha Shukul",
          role: "Local Guide · 25 reviews",
          body:
            "Thank you Dimple Salon team for wonderful service and hospitality — especially Akshita for the nail work. Every time, it makes people turn around and ask 'wow, where did you get that done?'",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop"
        },
      ],
    },
    contact: {
      overline: "Visit Us",
      title: "Come say hello.",
      subtitle:
        "Walk-ins welcome. For bridal & colour, we recommend a quick call so we can set the room just right for you.",
      addressLabel: "Studio Address",
      address:
        "Giriraj Darshan CHS, Plot 6, Sector 9 Kopar Khairane Road, near Balaji Multiplex, Navi Mumbai, Maharashtra 400709",
      hoursLabel: "Hours",
      hours: "Open Today · Closes 9:00 PM",
      phoneLabel: "Phone",
      phone: "098678 73647",
      instagramLabel: "Instagram",
      instagram: "@dimplebeautysalon",
      youtubeLabel: "YouTube",
      youtube: "Dimple Beauty Salon",
      directions: "Open in Google Maps",
      whatsapp: "Chat on WhatsApp",
      call: "Call the Salon",
    },
    footer: {
      tagline: "Ladies-only luxury. Kopar Khairane, Navi Mumbai.",
      rights: "All rights reserved.",
      crafted: "Crafted with care",
    },
    lang: { en: "EN", hi: "हिंदी" },
  },
  hi: {
    brand: {
      name: "डिम्पल ब्यूटी सालों",
      tagline: "ओनली फॉर लेडीज़",
    },
    nav: {
      home: "होम",
      services: "सेवाएँ",
      gallery: "गैलरी",
      nails: "नाखून",
      about: "हमारे बारे में",
      contact: "संपर्क",
      callNow: "कॉल करें",
    },
    hero: {
      eyebrow: "नवी मुंबई · महिला-स्वामित्व में",
      titleLine1: "सदा सुंदरता,",
      titleLine2: "आपके लिए, आपके अंदाज़ में।",
      subtitle:
        "कोपर खैरणे में एक 'सिर्फ़ महिलाओं के लिए' सलोन — हेयर, स्किन, नेल्स और ब्राइडल के लिए एक दशक से भरोसेमंद।",
      ctaPrimary: "व्हाट्सऐप पर बुक करें",
      ctaSecondary: "कॉल 098678 73647",
      rating: "गूगल पर 4.6 रेटिंग",
      reviews: "258+ रिव्यूज़",
      badgeLine: "आज खुला है · रात 9 बजे तक",
    },
    marquee: [
      "सिर्फ़ महिलाओं के लिए",
      "महिला-स्वामित्व",
      "4.6 / 5 रेटिंग",
      "LGBTQ+ फ्रेंडली",
      "एक दशक से",
      "कोपर खैरणे · नवी मुंबई",
    ],
    about: {
      overline: "हमारी कहानी",
      title: "2007 से सुंदरता और भरोसा — एक वक़्त में एक मेहमान।",
      body1:
        `डिम्पल ब्यूटी सालों सेक्टर 9, कोपर खैरणे का एक भरोसेमंद पता है — ${yearsOfExperience} सालों से। हमारा स्टूडियो जानबूझकर सिर्फ़ महिलाओं के लिए है — एक निजी जगह जहाँ आप पूरी तरह से आराम कर सकें।`,
      body2:
        "लक्मे-ग्रेड उत्पादों से लेकर गर्मजोशी भरे स्टाफ़ तक, हर बारीकी सोच-समझकर चुनी गई है। हम गर्व से महिला-स्वामित्व वाले हैं, LGBTQ+ फ्रेंडली हैं, और हर मेहमान की ख़ूबसूरती में उसकी अपनी कहानी देखते हैं।",
      storyTitle: "हमारी कहानी",
      storySubtitle: "स्थापना 2007",
      founderName: "श्रीमती शुभा एस. श्रियान",
      founderRole: "संस्थापक और विजनरी",
      promiseTitle: "हमारा वादा",
      promiseSubtitle: "गुणवत्ता और आराम",
      promiseBody:
        "दैनिक सौंदर्य अनुष्ठानों से लेकर सपनों के ब्राइडल लुक्स तक, हमें आपके विशेष क्षणों, बदलावों और आत्म-देखभाल की यात्राओं का हिस्सा बनने पर गर्व है।",
      stats: [
        { value: `${yearsOfExperience}+`, label: "वर्षों का भरोसा" },
        { value: "4.6★", label: "गूगल रेटिंग" },
        { value: "258+", label: "खुश रिव्यूज़" },
        { value: "100%", label: "सिर्फ़ महिलाएँ" },
      ],
      badges: ["महिला-स्वामित्व", "LGBTQ+ फ्रेंडली", "रात 9 बजे तक खुला"],
    },
    nails: {
      overline: "नेल आर्टिस्ट्री",
      title: "आपकी उंगलियों पर सुंदरता।",
      body1:
        "आपके नाखून आपकी अनूठी शैली के अंतिम स्पर्श हैं। क्लासिक मैनीक्योर से लेकर जटिल नेल आर्ट तक, हमारे तकनीशियन हर विवरण को सटीकता और जुनून के साथ तैयार करते हैं।",
      body2:
        "केवल प्रीमियम, लंबे समय तक चलने वाले उत्पादों का उपयोग करते हुए, हम सुनिश्चित करते हैं कि आपके नाखून आश्चर्यजनक और स्वस्थ रहें। क्योंकि जीवन उबाऊ नाखूनों के लिए बहुत छोटा है।",
      badges: ["मैनीक्योर", "नेल आर्ट", "जेल एक्सटेंशन"],
    },
    services: {
      overline: "सेवाओं की सूची",
      title: "हर सेवा, नज़ाकत से।",
      subtitle:
        "थ्रेडिंग की एक छोटी टच-अप से लेकर पूरी ब्राइडल डे तक — हर सेवा सुकून और देखभाल के साथ।",
      footnote:
        "कीमतें लंबाई, टेक्सचर और उत्पादों पर निर्भर करती हैं। सटीक क्वोट के लिए हमें कॉल करें — हम मदद के लिए उपलब्ध हैं।",
      items: [
        {
          key: "hair",
          name: "हेयर स्टूडियो",
          desc: "कट, कलर, केराटिन, स्मूदनिंग, हाइलाइट्स और ट्रीटमेंट्स — प्रीमियम ब्रांड्स के साथ।",
          tags: ["कट & स्टाइल", "कलर", "केराटिन", "ट्रीटमेंट"],
        },
        {
          key: "skin",
          name: "स्किन & फेशियल",
          desc: "क्लीन-अप, हाइड्रेटिंग, डी-टैन और हमारे सिग्नेचर ग्लो फेशियल — आपकी त्वचा के अनुसार।",
          tags: ["क्लीन-अप", "ग्लो फेशियल", "डी-टैन", "एंटी-एजिंग"],
        },
        {
          key: "nails",
          name: "नेल अटेलियर",
          desc: "मैनिक्योर, पेडिक्योर, नेल आर्ट और एक्सटेंशन — हमारे बारीकी-पसंद नेल आर्टिस्ट्स के साथ।",
          tags: ["मैनिक्योर", "पेडिक्योर", "नेल आर्ट", "एक्सटेंशन"],
        },
        {
          key: "waxing",
          name: "वैक्सिंग & थ्रेडिंग",
          desc: "रीका, चॉकलेट और लिपोसॉल्युबल वैक्सिंग के साथ सटीक थ्रेडिंग — शांत, निजी कमरे में।",
          tags: ["रीका", "चॉकलेट", "थ्रेडिंग", "ब्लीच"],
        },
        {
          key: "spa",
          name: "बॉडी स्पा",
          desc: "हेड मसाज, बॉडी पॉलिश और रिलैक्सेशन रिचुअल — शहर से एक दोपहर का विराम।",
          tags: ["हेड स्पा", "बॉडी पॉलिश", "मसाज"],
        },
        {
          key: "bridal",
          name: "ब्राइडल & मेकअप",
          desc: "एंगेजमेंट, रिसेप्शन और HD ब्राइडल पैकेज। अपॉइंटमेंट पर ट्रायल उपलब्ध।",
          tags: ["पार्टी", "HD ब्राइडल", "एंगेजमेंट", "प्री-ब्राइडल"],
        },
        {
          key: "pedicure",
          name: "पेडिक्योर और पैर की देखभाल",
          desc: "पैरों के लिए शानदार देखभाल, त्वचा को मुलायम बनाना और नाखूनों की सटीक सफाई — ताकि आपके पैर सुंदर और हल्के महसूस हों।",
          tags: ["फ़ुट स्पा", "हील पील", "क्लासिक पेडिक्योर", "जेल टोज़"],
        },
      ],
    },
    gallery: {
      overline: "गैलरी",
      title: "स्टूडियो के अंदर।",
      subtitle:
        "असली स्टूडियो तस्वीरें जल्द ही — मालकिन उन्हें यहाँ अपलोड करेंगी। तब तक, माहौल की एक झलक।",
      placeholder: "असली तस्वीरें जल्द ही",
    },
    testimonials: {
      overline: "मेहमान क्या कहते हैं",
      title: "नवी मुंबई की 258+ महिलाओं का भरोसा।",
      items: [
        {
          name: "अश्विनी जवले",
          role: "गूगल रिव्यू · 2 महीने पहले",
          body:
            "मुझे इस ब्यूटी पार्लर में बहुत अच्छा अनुभव हुआ। मैंने स्पा, मैनिक्योर और पेडिक्योर लिया — और मैं बेहद संतुष्ट हूँ।",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
        },
        {
          name: "पल्लवी जोगुला",
          role: "गूगल रिव्यू · 3 महीने पहले",
          body:
            "डिम्पल पार्लर का अनुभव शानदार है। सेवा, स्टाफ़ और स्वच्छता — सब उत्कृष्ट। दाम भी वाजिब। मैं 10 साल से जुड़ी हूँ।",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
        },
        {
          name: "आईशा आकांक्षा शुकुल",
          role: "लोकल गाइड · 25 रिव्यूज़",
          body:
            "धन्यवाद डिम्पल सालों टीम — ख़ासकर अक्षिता को नेल वर्क के लिए। हर बार लोग पलट कर पूछते हैं — वाह, ये कहाँ से करवाया!",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop"
        },
      ],
    },
    contact: {
      overline: "हमसे मिलें",
      title: "नमस्ते कहने आइए।",
      subtitle:
        "वॉक-इन स्वागत है। ब्राइडल और कलर के लिए एक छोटा कॉल मददगार होगा — ताकि हम आपके लिए कमरा तैयार रख सकें।",
      addressLabel: "स्टूडियो पता",
      address:
        "गिरिराज दर्शन CHS, प्लॉट 6, सेक्टर 9 कोपर खैरणे रोड, बालाजी मल्टीप्लेक्स के पास, नवी मुंबई, महाराष्ट्र 400709",
      hoursLabel: "समय",
      hours: "आज खुला · रात 9:00 बजे तक",
      phoneLabel: "फ़ोन",
      phone: "098678 73647",
      instagramLabel: "इंस्टाग्राम",
      instagram: "@dimplebeautysalon",
      youtubeLabel: "यूट्यूब",
      youtube: "Dimple Beauty Salon",
      directions: "गूगल मैप्स में खोलें",
      whatsapp: "व्हाट्सऐप पर चैट",
      call: "सलोन को कॉल करें",
    },
    footer: {
      tagline: "सिर्फ़ महिलाओं के लिए लक्ज़री। कोपर खैरणे, नवी मुंबई।",
      rights: "सर्वाधिकार सुरक्षित।",
      crafted: "प्यार से बनाया गया",
    },
    lang: { en: "EN", hi: "हिंदी" },
  },
};

const LanguageContext = createContext({ lang: "en", setLang: () => { }, t: translations.en });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("dimple-lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("dimple-lang", lang);
    } catch {
      /* noop */
    }
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const t = translations[lang] || translations.en;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useT = () => useContext(LanguageContext);
