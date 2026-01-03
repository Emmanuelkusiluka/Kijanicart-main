import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.signin": "Sign In",
    "nav.getstarted": "Get Started",
    
    // Hero
    "hero.badge": "The Future of Agribusiness",
    "hero.title1": "Digital",
    "hero.title2": "Agriculture",
    "hero.title3": "Reimagined",
    "hero.description": "Transform your farm-to-market journey with AI-powered analytics and a thriving marketplace ecosystem.",
    "hero.cta1": "Launch Your Store",
    "hero.cta2": "View Products",
    "hero.stat1": "Businesses",
    "hero.stat2": "Processed",
    "hero.stat3": "Revenue",
    "hero.growth": "Growth Rate",
    
    // Products
    "products.badge": "Our Products",
    "products.title1": "Our",
    "products.title2": "Products",
    "products.subtitle": "Two powerful platforms, one ecosystem. Choose your starting point.",
    "products.marketplace.title": "Marketplace",
    "products.marketplace.tagline": "Sell & Connect",
    "products.marketplace.for": "For Sellers & Buyers",
    "products.marketplace.description": "A vibrant digital marketplace connecting farmers, suppliers, and buyers. Manage your inventory, process orders, and grow your customer base with powerful e-commerce tools built for agriculture.",
    "products.marketplace.feature1": "Multi-vendor storefront",
    "products.marketplace.feature2": "Mobile money integration",
    "products.marketplace.feature3": "Real-time order tracking",
    "products.marketplace.feature4": "Customer reviews & ratings",
    "products.marketplace.feature5": "Automated invoicing",
    "products.marketplace.short": "Launch your online store and connect with thousands of customers across Africa",
    "products.analytics.title": "Analytics",
    "products.analytics.tagline": "Insights & Intelligence",
    "products.analytics.for": "For Business Intelligence",
    "products.analytics.description": "Harness the power of AI to make smarter business decisions. Track inventory, forecast demand, understand seasonal patterns, and get actionable insights that drive profitability.",
    "products.analytics.feature1": "AI-powered demand forecasting",
    "products.analytics.feature2": "Inventory optimization",
    "products.analytics.feature3": "Seasonal trend analysis",
    "products.analytics.feature4": "Sales performance metrics",
    "products.analytics.feature5": "Custom dashboards",
    "products.analytics.short": "Get AI-powered insights to optimize inventory, predict demand, and boost profits",
    "products.cta": "Get Started with",
    
    // CTA
    "cta.badge": "Limited Time Offer",
    "cta.title1": "Start Growing",
    "cta.title2": "Today",
    "cta.description": "Join 5,000+ agribusiness owners who are already transforming their operations with Kijanicart. Get started with a 30-day free trial.",
    "cta.benefit1": "No credit card required",
    "cta.benefit2": "Full access to all features",
    "cta.benefit3": "Cancel anytime",
    "cta.benefit4": "24/7 priority support",
    "cta.button1": "Start Free Trial",
    "cta.button2": "Book a Demo",
    "cta.rating": "User Rating",
    "cta.uptime": "Uptime",
    "cta.sales": "Sales Processed",
    
    // Footer
    "footer.description": "Empowering African agribusinesses with digital tools for growth and success.",
    "footer.products": "Products",
    "footer.marketplace": "Marketplace",
    "footer.analytics": "Analytics",
    "footer.pricing": "Pricing",
    "footer.enterprise": "Enterprise",
    "footer.company": "Company",
    "footer.features": "Features",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.getintouch": "Get in Touch",
    "footer.copyright": "© 2026 Kijanicart. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    
    // Common
    "common.readmore": "Read More",
    "common.learnmore": "Learn More",
    "common.startfree": "Start Free Trial",
    "common.contactsales": "Contact Sales",
  },
  sw: {
    // Navigation
    "nav.products": "Bidhaa",
    "nav.features": "Vipengele",
    "nav.pricing": "Bei",
    "nav.blog": "Blogu",
    "nav.contact": "Wasiliana",
    "nav.signin": "Ingia",
    "nav.getstarted": "Anza",
    
    // Hero
    "hero.badge": "Mustakabali wa Kilimo",
    "hero.title1": "Kilimo",
    "hero.title2": "cha Kidijitali",
    "hero.title3": "Kimebadilishwa",
    "hero.description": "Badilisha safari yako kutoka shambani hadi sokoni kwa uchambuzi unaotumia AI na mfumo wa soko lenye nguvu.",
    "hero.cta1": "Fungua Duka Lako",
    "hero.cta2": "Angalia Bidhaa",
    "hero.stat1": "Biashara",
    "hero.stat2": "Imechakatwa",
    "hero.stat3": "Mapato",
    "hero.growth": "Kiwango cha Ukuaji",
    
    // Products
    "products.badge": "Bidhaa Zetu",
    "products.title1": "Bidhaa",
    "products.title2": "Zetu",
    "products.subtitle": "Mifumo miwili yenye nguvu, mfumo mmoja. Chagua mahali pako pa kuanza.",
    "products.marketplace.title": "Soko",
    "products.marketplace.tagline": "Uza & Unganisha",
    "products.marketplace.for": "Kwa Wauzaji na Wanunuzi",
    "products.marketplace.description": "Soko la kidijitali lenye nguvu linalounganisha wakulima, wasambazaji, na wanunuzi. Simamia hesabu yako, sindika maagizo, na kua mauzo yako kwa zana za biashara zilizojengwa kwa ajili ya kilimo.",
    "products.marketplace.feature1": "Duka la wauzaji wengi",
    "products.marketplace.feature2": "Uunganishaji wa pesa za simu",
    "products.marketplace.feature3": "Ufuatiliaji wa maagizo wa muda halisi",
    "products.marketplace.feature4": "Tathmini za wateja",
    "products.marketplace.feature5": "Ankara za kiotomatiki",
    "products.marketplace.short": "Fungua duka lako la mtandaoni na unganisha na maelfu ya wateja kote Afrika",
    "products.analytics.title": "Uchambuzi",
    "products.analytics.tagline": "Maarifa na Akili",
    "products.analytics.for": "Kwa Akili ya Biashara",
    "products.analytics.description": "Tumia nguvu za AI kufanya maamuzi bora ya biashara. Fuatilia hesabu, tabiri mahitaji, elewa mifumo ya msimu, na pata maarifa yanayosaidia kuongeza faida.",
    "products.analytics.feature1": "Utabiri wa mahitaji unaotumia AI",
    "products.analytics.feature2": "Uboreshaji wa hesabu",
    "products.analytics.feature3": "Uchambuzi wa mwenendo wa msimu",
    "products.analytics.feature4": "Vipimo vya utendaji wa mauzo",
    "products.analytics.feature5": "Dashibodi maalum",
    "products.analytics.short": "Pata maarifa yanayotumia AI kuboresha hesabu, tabiri mahitaji, na ongeza faida",
    "products.cta": "Anza na",
    
    // CTA
    "cta.badge": "Ofa ya Muda Mfupi",
    "cta.title1": "Anza Kukua",
    "cta.title2": "Leo",
    "cta.description": "Jiunge na wakulima 5,000+ ambao tayari wanabadilisha shughuli zao kwa Kijanicart. Anza jaribio lako la siku 30 bure.",
    "cta.benefit1": "Hakuna kadi ya mkopo inayohitajika",
    "cta.benefit2": "Ufikiaji kamili wa vipengele vyote",
    "cta.benefit3": "Futa wakati wowote",
    "cta.benefit4": "Msaada wa kipaumbele wa saa 24/7",
    "cta.button1": "Anza Jaribio Bure",
    "cta.button2": "Weka Onyesho",
    "cta.rating": "Ukadiriaji wa Mtumiaji",
    "cta.uptime": "Wakati wa Utumikaji",
    "cta.sales": "Mauzo Yaliyosindikwa",
    
    // Footer
    "footer.description": "Kutia nguvu biashara za kilimo za Kiafrika kwa zana za kidijitali kwa ukuaji na mafanikio.",
    "footer.products": "Bidhaa",
    "footer.marketplace": "Soko",
    "footer.analytics": "Uchambuzi",
    "footer.pricing": "Bei",
    "footer.enterprise": "Biashara Kubwa",
    "footer.company": "Kampuni",
    "footer.features": "Vipengele",
    "footer.blog": "Blogu",
    "footer.contact": "Wasiliana",
    "footer.getintouch": "Wasiliana Nasi",
    "footer.copyright": "© 2026 Kijanicart. Haki zote zimehifadhiwa.",
    "footer.privacy": "Sera ya Faragha",
    "footer.terms": "Masharti ya Huduma",
    "footer.cookies": "Sera ya Vidakuzi",
    
    // Common
    "common.readmore": "Soma Zaidi",
    "common.learnmore": "Jifunze Zaidi",
    "common.startfree": "Anza Jaribio Bure",
    "common.contactsales": "Wasiliana na Mauzo",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
