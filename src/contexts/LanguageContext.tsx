import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.whyUs": "Why Us",
    "nav.process": "Our Process",
    "nav.results": "Results",
    "nav.contact": "Contact",
    "nav.bookConsultation": "Book Consultation",
    
    // Hero
    "hero.badge": "Enterprise-Grade IT Solutions",
    "hero.title": "Smart IT Solutions That Help Your",
    "hero.titleHighlight": "Business Scale",
    "hero.subtitle": "We design, build, and manage reliable IT systems that drive efficiency, security, and growth for forward-thinking businesses.",
    "hero.cta.primary": "Book a Free Consultation",
    "hero.cta.secondary": "View Our Services",
    "hero.stats.years": "Years Experience",
    "hero.stats.projects": "Projects Delivered",
    "hero.stats.satisfaction": "Client Satisfaction",
    "hero.card.security": "Security Certified",
    "hero.card.iso": "ISO 27001",
    "hero.card.uptime": "99.9% Uptime",
    "hero.card.guaranteed": "Guaranteed",
    
    // Trust
    "trust.title": "Trusted by forward-thinking companies",
    
    // Services
    "services.badge": "Our Services",
    "services.title": "Comprehensive IT Solutions for",
    "services.titleHighlight": "Your Success",
    "services.subtitle": "From custom development to enterprise security, we provide end-to-end IT services that help businesses thrive in the digital age.",
    "services.software.title": "Custom Software Development",
    "services.software.desc": "Tailored applications built for your unique business needs with modern technologies and best practices.",
    "services.cloud.title": "Cloud & Infrastructure",
    "services.cloud.desc": "Secure, scalable cloud solutions that power modern businesses with reliable uptime and performance.",
    "services.erp.title": "ERP & CRM Solutions",
    "services.erp.desc": "Streamline operations, improve visibility, and drive growth with integrated business systems.",
    "services.security.title": "Cybersecurity",
    "services.security.desc": "Comprehensive protection for your systems, data, and users against evolving digital threats.",
    "services.ai.title": "AI & Automation",
    "services.ai.desc": "Reduce manual work and improve efficiency with intelligent automation and AI-powered solutions.",
    "services.consulting.title": "IT Consulting",
    "services.consulting.desc": "Strategic guidance from experienced engineers to align technology with your business goals.",
    
    // Why Us
    "whyUs.badge": "Why Choose Us",
    "whyUs.title": "Your Trusted Partner for",
    "whyUs.titleHighlight": "Digital Success",
    "whyUs.subtitle": "We combine technical excellence with business understanding to deliver solutions that truly make a difference. Here's what sets us apart.",
    "whyUs.experienced.title": "Experienced Team",
    "whyUs.experienced.desc": "Skilled engineers with deep expertise across diverse technologies and industries.",
    "whyUs.scalable.title": "Scalable Solutions",
    "whyUs.scalable.desc": "Future-ready systems designed to grow seamlessly with your business.",
    "whyUs.business.title": "Business-Focused",
    "whyUs.business.desc": "Technology aligned with your strategic goals and measurable outcomes.",
    "whyUs.local.title": "Local Expertise",
    "whyUs.local.desc": "Deep understanding of regional market dynamics and requirements.",
    "whyUs.support.title": "Dedicated Support",
    "whyUs.support.desc": "Responsive, personalized support that keeps your systems running smoothly.",
    "whyUs.delivery.title": "On-Time Delivery",
    "whyUs.delivery.desc": "Reliable project timelines with transparent communication throughout.",
    "whyUs.stats.years": "Years",
    "whyUs.stats.projects": "Projects",
    "whyUs.stats.clients": "Clients",
    
    // Process
    "process.badge": "Our Process",
    "process.title": "How We",
    "process.titleHighlight": "Work",
    "process.subtitle": "A streamlined approach that transforms your challenges into opportunities through collaboration and expertise.",
    "process.step": "Step",
    "process.discover.title": "Discover & Analyze",
    "process.discover.desc": "We dive deep into your business challenges, goals, and existing systems to create a tailored strategy.",
    "process.build.title": "Build & Implement",
    "process.build.desc": "Our expert team develops and deploys solutions using agile methodologies and best practices.",
    "process.support.title": "Support & Scale",
    "process.support.desc": "Ongoing optimization, monitoring, and support to ensure your systems evolve with your business.",
    
    // Results
    "results.badge": "Case Studies & Results",
    "results.title": "Real Results for Real Businesses",
    "results.subtitle": "Our solutions deliver measurable impact. Here are some outcomes our clients have achieved.",
    "results.costs.title": "Reduced Operational Costs",
    "results.costs.desc": "Streamlined processes and automation cut expenses significantly.",
    "results.performance.title": "Improved System Performance",
    "results.performance.desc": "Optimized infrastructure delivering faster, more reliable operations.",
    "results.workflows.title": "Automated Workflows",
    "results.workflows.desc": "Critical business processes automated for maximum efficiency.",
    "results.security.title": "Security Compliance",
    "results.security.desc": "Enterprise-grade security protecting sensitive business data.",
    "results.productivity.title": "Increased Productivity",
    "results.productivity.desc": "Teams empowered with better tools and streamlined workflows.",
    "results.market.title": "Faster Time-to-Market",
    "results.market.desc": "Accelerated development cycles for competitive advantage.",
    
    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Clients Say",
    "testimonials.subtitle": "Don't just take our word for it. Here's what our clients have to say about working with us.",
    
    // CTA
    "cta.title": "Ready to Upgrade Your IT?",
    "cta.subtitle": "Let's discuss how we can support your growth with smart, reliable IT solutions tailored to your business needs.",
    "cta.scheduleCall": "Schedule a Call",
    "cta.learnMore": "Learn More",
    
    // Contact
    "contact.badge": "Get in Touch",
    "contact.title": "Let's Start a",
    "contact.titleHighlight": "Conversation",
    "contact.subtitle": "Ready to transform your business with smart IT solutions? Reach out to us and let's discuss how we can help.",
    "contact.email": "Email Us",
    "contact.call": "Call Us",
    "contact.visit": "Visit Us",
    "contact.address": "Damascus, Syria",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Your Name",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "john@company.com",
    "contact.form.company": "Company Name",
    "contact.form.companyPlaceholder": "Your Company",
    "contact.form.message": "Your Message",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.toast.title": "Message sent successfully!",
    "contact.toast.desc": "We'll get back to you within 24 hours.",
    
    // Footer
    "footer.tagline": "Smart IT solutions that help your business scale with efficiency, security, and innovation.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourProcess": "Our Process",
    "footer.caseStudies": "Case Studies",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.copyright": "All rights reserved.",
    "footer.arabicName": "السورية للأنظمة الذكية",
    "footer.customSoftware": "Custom Software",
    "footer.cloudInfra": "Cloud & Infrastructure",
    "footer.erpCrm": "ERP & CRM Solutions",
    "footer.cybersecurity": "Cybersecurity",
    "footer.aiAutomation": "AI & Automation",
    "footer.itConsulting": "IT Consulting",
  },
  ar: {
    // Navbar
    "nav.services": "خدماتنا",
    "nav.whyUs": "لماذا نحن",
    "nav.process": "آلية العمل",
    "nav.results": "النتائج",
    "nav.contact": "تواصل معنا",
    "nav.bookConsultation": "احجز استشارة",
    
    // Hero
    "hero.badge": "حلول تقنية على مستوى المؤسسات",
    "hero.title": "حلول تقنية ذكية تساعد",
    "hero.titleHighlight": "أعمالك على النمو",
    "hero.subtitle": "نصمم وننشئ وندير أنظمة تقنية موثوقة تعزز الكفاءة والأمان والنمو للشركات الطموحة.",
    "hero.cta.primary": "احجز استشارة مجانية",
    "hero.cta.secondary": "اكتشف خدماتنا",
    "hero.stats.years": "سنوات خبرة",
    "hero.stats.projects": "مشروع منجز",
    "hero.stats.satisfaction": "رضا العملاء",
    "hero.card.security": "شهادة أمان",
    "hero.card.iso": "ISO 27001",
    "hero.card.uptime": "99.9% وقت التشغيل",
    "hero.card.guaranteed": "مضمون",
    
    // Trust
    "trust.title": "موثوق من قبل الشركات الرائدة",
    
    // Services
    "services.badge": "خدماتنا",
    "services.title": "حلول تقنية شاملة من أجل",
    "services.titleHighlight": "نجاحكم",
    "services.subtitle": "من التطوير المخصص إلى أمن المؤسسات، نقدم خدمات تقنية متكاملة تساعد الشركات على الازدهار في العصر الرقمي.",
    "services.software.title": "تطوير البرمجيات المخصصة",
    "services.software.desc": "تطبيقات مصممة خصيصاً لاحتياجات عملك الفريدة باستخدام أحدث التقنيات وأفضل الممارسات.",
    "services.cloud.title": "البنية التحتية والسحابة",
    "services.cloud.desc": "حلول سحابية آمنة وقابلة للتوسع تدعم الأعمال الحديثة بأداء موثوق.",
    "services.erp.title": "حلول ERP و CRM",
    "services.erp.desc": "تبسيط العمليات وتحسين الرؤية ودفع النمو من خلال أنظمة أعمال متكاملة.",
    "services.security.title": "الأمن السيبراني",
    "services.security.desc": "حماية شاملة لأنظمتك وبياناتك ومستخدميك ضد التهديدات الرقمية المتطورة.",
    "services.ai.title": "الذكاء الاصطناعي والأتمتة",
    "services.ai.desc": "تقليل العمل اليدوي وتحسين الكفاءة من خلال حلول الأتمتة الذكية.",
    "services.consulting.title": "الاستشارات التقنية",
    "services.consulting.desc": "إرشادات استراتيجية من مهندسين ذوي خبرة لمواءمة التقنية مع أهداف عملك.",
    
    // Why Us
    "whyUs.badge": "لماذا نحن",
    "whyUs.title": "شريكك الموثوق نحو",
    "whyUs.titleHighlight": "النجاح الرقمي",
    "whyUs.subtitle": "نجمع بين التميز التقني وفهم الأعمال لتقديم حلول تحدث فرقاً حقيقياً. إليك ما يميزنا.",
    "whyUs.experienced.title": "فريق خبير",
    "whyUs.experienced.desc": "مهندسون ماهرون بخبرة عميقة في تقنيات وصناعات متنوعة.",
    "whyUs.scalable.title": "حلول قابلة للتوسع",
    "whyUs.scalable.desc": "أنظمة جاهزة للمستقبل مصممة للنمو بسلاسة مع عملك.",
    "whyUs.business.title": "تركيز على الأعمال",
    "whyUs.business.desc": "تقنية متوافقة مع أهدافك الاستراتيجية ونتائج قابلة للقياس.",
    "whyUs.local.title": "خبرة محلية",
    "whyUs.local.desc": "فهم عميق لديناميكيات السوق الإقليمي ومتطلباته.",
    "whyUs.support.title": "دعم مخصص",
    "whyUs.support.desc": "دعم سريع الاستجابة ومخصص يحافظ على تشغيل أنظمتك بسلاسة.",
    "whyUs.delivery.title": "التسليم في الموعد",
    "whyUs.delivery.desc": "جداول زمنية موثوقة مع تواصل شفاف طوال المشروع.",
    "whyUs.stats.years": "سنوات",
    "whyUs.stats.projects": "مشروع",
    "whyUs.stats.clients": "عميل",
    
    // Process
    "process.badge": "آلية العمل",
    "process.title": "كيف",
    "process.titleHighlight": "نعمل",
    "process.subtitle": "نهج مبسط يحول تحدياتك إلى فرص من خلال التعاون والخبرة.",
    "process.step": "الخطوة",
    "process.discover.title": "الاكتشاف والتحليل",
    "process.discover.desc": "نتعمق في تحديات عملك وأهدافك وأنظمتك الحالية لإنشاء استراتيجية مخصصة.",
    "process.build.title": "البناء والتنفيذ",
    "process.build.desc": "يقوم فريقنا الخبير بتطوير ونشر الحلول باستخدام منهجيات رشيقة وأفضل الممارسات.",
    "process.support.title": "الدعم والتوسع",
    "process.support.desc": "تحسين ومراقبة ودعم مستمر لضمان تطور أنظمتك مع عملك.",
    
    // Results
    "results.badge": "دراسات الحالة والنتائج",
    "results.title": "نتائج حقيقية لأعمال حقيقية",
    "results.subtitle": "حلولنا تحقق تأثيراً قابلاً للقياس. إليك بعض النتائج التي حققها عملاؤنا.",
    "results.costs.title": "خفض التكاليف التشغيلية",
    "results.costs.desc": "تبسيط العمليات والأتمتة يقلل النفقات بشكل كبير.",
    "results.performance.title": "تحسين أداء الأنظمة",
    "results.performance.desc": "بنية تحتية محسنة توفر عمليات أسرع وأكثر موثوقية.",
    "results.workflows.title": "أتمتة سير العمل",
    "results.workflows.desc": "أتمتة العمليات التجارية الحرجة لتحقيق أقصى كفاءة.",
    "results.security.title": "الامتثال الأمني",
    "results.security.desc": "أمان على مستوى المؤسسات لحماية بيانات الأعمال الحساسة.",
    "results.productivity.title": "زيادة الإنتاجية",
    "results.productivity.desc": "فرق ممكّنة بأدوات أفضل وسير عمل مبسط.",
    "results.market.title": "وصول أسرع للسوق",
    "results.market.desc": "دورات تطوير متسارعة لميزة تنافسية.",
    
    // Testimonials
    "testimonials.badge": "شهادات العملاء",
    "testimonials.title": "ماذا يقول",
    "testimonials.titleHighlight": "عملاؤنا",
    "testimonials.subtitle": "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.",
    
    // CTA
    "cta.title": "هل أنت مستعد لتطوير تقنيتك؟",
    "cta.subtitle": "دعنا نناقش كيف يمكننا دعم نموك بحلول تقنية ذكية وموثوقة مصممة خصيصاً لاحتياجات عملك.",
    "cta.scheduleCall": "حجز مكالمة",
    "cta.learnMore": "اعرف المزيد",
    
    // Contact
    "contact.badge": "تواصل معنا",
    "contact.title": "لنبدأ",
    "contact.titleHighlight": "محادثة",
    "contact.subtitle": "هل أنت مستعد لتحويل عملك بحلول تقنية ذكية؟ تواصل معنا ودعنا نناقش كيف يمكننا المساعدة.",
    "contact.email": "راسلنا",
    "contact.call": "اتصل بنا",
    "contact.visit": "زورنا",
    "contact.address": "دمشق , سورية",
    "contact.whatsapp": "تواصل عبر واتساب",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "اسمك",
    "contact.form.namePlaceholder": "محمد أحمد",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.emailPlaceholder": "mohammed@company.com",
    "contact.form.company": "اسم الشركة",
    "contact.form.companyPlaceholder": "شركتك",
    "contact.form.message": "رسالتك",
    "contact.form.messagePlaceholder": "أخبرنا عن مشروعك...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.toast.title": "تم إرسال الرسالة بنجاح!",
    "contact.toast.desc": "سنرد عليك خلال 24 ساعة.",
    
    // Footer
    "footer.tagline": "حلول تقنية ذكية تساعد عملك على النمو بكفاءة وأمان وابتكار.",
    "footer.services": "الخدمات",
    "footer.company": "الشركة",
    "footer.aboutUs": "من نحن",
    "footer.ourProcess": "آلية العمل",
    "footer.caseStudies": "دراسات الحالة",
    "footer.careers": "الوظائف",
    "footer.contact": "تواصل معنا",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookies": "سياسة ملفات تعريف الارتباط",
    "footer.copyright": "جميع الحقوق محفوظة.",
    "footer.arabicName": "السورية للأنظمة الذكية",
    "footer.customSoftware": "البرمجيات المخصصة",
    "footer.cloudInfra": "البنية التحتية والسحابة",
    "footer.erpCrm": "حلول ERP و CRM",
    "footer.cybersecurity": "الأمن السيبراني",
    "footer.aiAutomation": "الذكاء الاصطناعي والأتمتة",
    "footer.itConsulting": "الاستشارات التقنية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
