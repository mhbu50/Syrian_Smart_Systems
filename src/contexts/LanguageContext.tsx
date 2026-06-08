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
    "nav.services": "Industries",
    "nav.modules": "ERP Modules",
    "nav.whyUs": "Why Us",
    "nav.process": "Our Process",
    "nav.results": "Results",
    "nav.contact": "Contact",
    "nav.bookConsultation": "Book Consultation",

    // Hero
    "hero.badge": "National Syrian ERP & Smart Systems Company",
    "hero.title": "Smart ERP Systems That Move Your",
    "hero.titleHighlight": "Business Forward",
    "hero.subtitle":
      "We are a national Syrian company specialized in developing and upgrading systems. We deliver advanced digital solutions for services, production, manufacturing, assets and healthcare — powered by AI, IoT and sensor technologies through our international partners.",
    "hero.cta.primary": "Book a Free Consultation",
    "hero.cta.secondary": "Explore Our Services",
    "hero.stats.years": "Years Experience",
    "hero.stats.projects": "Projects Delivered",
    "hero.stats.satisfaction": "Client Satisfaction",
    "hero.card.security": "Security Certified",
    "hero.card.iso": "ISO 27001",
    "hero.card.uptime": "99.9% Uptime",
    "hero.card.guaranteed": "Guaranteed",

    // Trust
    "trust.title": "Trusted by forward-thinking companies",

    // Services (Industries)
    "services.badge": "Industries We Serve",
    "services.title": "Industry-Specific ERP",
    "services.titleHighlight": "Solutions",
    "services.subtitle":
      "Purpose-built ERP platforms tailored to the unique workflows of Syria's leading industries — from manufacturing to healthcare.",
    "services.manufacturing.title": "Manufacturing ERP",
    "services.manufacturing.desc":
      "Improve manufacturing efficiency with an ERP unifying operations across plants, ensuring smooth coordination throughout production.",
    "services.distribution.title": "Distribution ERP",
    "services.distribution.desc":
      "Streamline logistics and supply chains with smarter distribution tools designed for businesses operating in Syria.",
    "services.nonprofit.title": "Non-Profit ERP",
    "services.nonprofit.desc":
      "Built for transparency and compliance — track donations, manage funds and report effortlessly to stakeholders.",
    "services.retail.title": "Retail ERP",
    "services.retail.desc":
      "Optimize back-office and in-store operations, elevate customer experience and unify omnichannel retail.",
    "services.healthcare.title": "Healthcare ERP",
    "services.healthcare.desc":
      "Enhance clinical, administrative and operational workflows to improve care quality and facility efficiency.",
    "services.agriculture.title": "Agriculture ERP",
    "services.agriculture.desc":
      "Optimize crop and livestock management, boost productivity and support environmental sustainability.",
    "services.education.title": "Education ERP",
    "services.education.desc":
      "Empower educational institutions to manage academic, administrative and operational tasks efficiently.",
    "services.realestate.title": "Real Estate ERP",
    "services.realestate.desc":
      "Automate property, leasing and financial operations — enabling faster, more accurate decisions for developers and agencies.",

    // Modules
    "modules.badge": "Core ERP Modules",
    "modules.title": "Everything You Need in",
    "modules.titleHighlight": "One Platform",
    "modules.subtitle":
      "A complete suite of integrated modules that power every department of your organization.",
    "modules.accounting.title": "Accounting",
    "modules.accounting.desc":
      "Manage your finances with our advanced accounting module — precise, transparent and intelligent financial control.",
    "modules.inventory.title": "Inventory",
    "modules.inventory.desc":
      "Maintain optimal stock levels and improve decision-making through real-time inventory visibility.",
    "modules.crm.title": "CRM",
    "modules.crm.desc":
      "Build stronger customer relationships with full lifecycle tracking, personalization and effective communication.",
    "modules.buying.title": "Procurement",
    "modules.buying.desc":
      "Streamline buying, reduce costs and strengthen supplier relationships with an efficient procurement workflow.",
    "modules.hr.title": "Human Resources",
    "modules.hr.desc":
      "Simplify workforce management, reduce administrative load and unlock smart insights about your people.",
    "modules.projects.title": "Projects",
    "modules.projects.desc":
      "Plan, align resources and deliver projects on time and within budget with full project visibility.",
    "modules.support.title": "Support",
    "modules.support.desc":
      "Keep ERP operations running smoothly with rapid issue resolution and continuous technical support.",
    "modules.assets.title": "Assets",
    "modules.assets.desc":
      "Track, maintain and financially manage physical assets across their entire lifecycle for maximum ROI.",
    "modules.einvoice.title": "E-Invoicing",
    "modules.einvoice.desc":
      "Issue, send and manage invoices fully compliant with the Syrian General Authority for Taxes & Fees.",
    "modules.ecommerce.title": "E-Commerce",
    "modules.ecommerce.desc":
      "Launch and run online stores with integrated payments, inventory and shipping — for B2C, B2B and D2C.",
    "modules.marketing.title": "Digital Marketing",
    "modules.marketing.desc":
      "Social media management, content, paid campaigns, SEO and creative production to grow your brand online.",
    "modules.planning.title": "Resource Planning",
    "modules.planning.desc":
      "Allocate capital, people, materials and time strategically with data-driven planning and automation.",

    // Why Us
    "whyUs.badge": "Why Choose Us",
    "whyUs.title": "Your Trusted Partner for",
    "whyUs.titleHighlight": "Digital Success",
    "whyUs.subtitle":
      "A Syrian national company bridging the gap between traditional operations and a transparent, smooth, AI-powered future — backed by global partners in AI, IoT and smart sensors.",
    "whyUs.experienced.title": "Experienced Team",
    "whyUs.experienced.desc":
      "Skilled engineers with deep expertise across diverse technologies and industries.",
    "whyUs.scalable.title": "Scalable Solutions",
    "whyUs.scalable.desc":
      "Future-ready systems designed to grow seamlessly with your business.",
    "whyUs.business.title": "Business-Focused",
    "whyUs.business.desc":
      "Technology aligned with your strategic goals and measurable outcomes.",
    "whyUs.local.title": "Local Expertise",
    "whyUs.local.desc":
      "Deep understanding of regional market dynamics and requirements.",
    "whyUs.support.title": "Dedicated Support",
    "whyUs.support.desc":
      "Responsive, personalized support that keeps your systems running smoothly.",
    "whyUs.delivery.title": "On-Time Delivery",
    "whyUs.delivery.desc":
      "Reliable project timelines with transparent communication throughout.",
    "whyUs.stats.years": "Years",
    "whyUs.stats.projects": "Projects",
    "whyUs.stats.clients": "Clients",

    // Process
    "process.badge": "Our Process",
    "process.title": "How We",
    "process.titleHighlight": "Work",
    "process.subtitle":
      "A streamlined approach that transforms your challenges into opportunities through collaboration and expertise.",
    "process.step": "Step",
    "process.discover.title": "Discover & Analyze",
    "process.discover.desc":
      "We dive deep into your business challenges, goals, and existing systems to create a tailored strategy.",
    "process.build.title": "Build & Implement",
    "process.build.desc":
      "Our expert team develops and deploys solutions using agile methodologies and best practices.",
    "process.support.title": "Support & Scale",
    "process.support.desc":
      "Ongoing optimization, monitoring, and support to ensure your systems evolve with your business.",

    // Results
    "results.badge": "Case Studies & Results",
    "results.title": "Real Results for Real Businesses",
    "results.subtitle":
      "Our solutions deliver measurable impact. Here are some outcomes our clients have achieved.",
    "results.costs.title": "Reduced Operational Costs",
    "results.costs.desc":
      "Streamlined processes and automation cut expenses significantly.",
    "results.performance.title": "Improved System Performance",
    "results.performance.desc":
      "Optimized infrastructure delivering faster, more reliable operations.",
    "results.workflows.title": "Automated Workflows",
    "results.workflows.desc":
      "Critical business processes automated for maximum efficiency.",
    "results.security.title": "Security Compliance",
    "results.security.desc":
      "Enterprise-grade security protecting sensitive business data.",
    "results.productivity.title": "Increased Productivity",
    "results.productivity.desc":
      "Teams empowered with better tools and streamlined workflows.",
    "results.market.title": "Faster Time-to-Market",
    "results.market.desc":
      "Accelerated development cycles for competitive advantage.",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Clients Say",
    "testimonials.subtitle":
      "Don't just take our word for it. Here's what our clients have to say about working with us.",

    // CTA
    "cta.title": "Ready to Upgrade Your IT?",
    "cta.subtitle":
      "Let's discuss how we can support your growth with smart, reliable IT solutions tailored to your business needs.",
    "cta.scheduleCall": "Schedule a Call",
    "cta.learnMore": "Learn More",

    // Contact
    "contact.badge": "Get in Touch",
    "contact.title": "Let's Start a",
    "contact.titleHighlight": "Conversation",
    "contact.subtitle":
      "Ready to transform your business with smart IT solutions? Reach out to us and let's discuss how we can help.",
    "contact.email": "Email Us",
    "contact.call": "Call Us",
    "contact.visit": "Visit Us",
    "contact.address": "Damascus, Syrian Arab Republic",
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
    "footer.tagline":
      "A national Syrian company delivering advanced ERP and smart digital solutions powered by AI and IoT.",
    "footer.services": "Industries",
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
    "footer.manufacturing": "Manufacturing",
    "footer.distribution": "Distribution",
    "footer.healthcare": "Healthcare",
    "footer.retail": "Retail",
    "footer.education": "Education",
    "footer.realestate": "Real Estate",
  },
  ar: {
    // Navbar
    "nav.services": "القطاعات",
    "nav.modules": "وحدات ERP",
    "nav.whyUs": "لماذا نحن",
    "nav.process": "آلية العمل",
    "nav.results": "النتائج",
    "nav.contact": "تواصل معنا",
    "nav.bookConsultation": "احجز استشارة",

    // Hero
    "hero.badge": "شركة سورية وطنية متخصصة بأنظمة ERP والحلول الذكية",
    "hero.title": "أنظمة ERP ذكية تنقل",
    "hero.titleHighlight": "أعمالك إلى الأمام",
    "hero.subtitle":
      "نحن شركة سورية وطنية متخصصة في تطوير وترقية الأنظمة، نقدم حلولاً رقمية متقدمة لقطاعات الخدمات والإنتاج والتصنيع والأصول والرعاية الصحية، مدعومة بالذكاء الاصطناعي وأجهزة الاستشعار وإنترنت الأشياء من خلال شركائنا الدوليين.",
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

    // Services (Industries)
    "services.badge": "القطاعات التي نخدمها",
    "services.title": "حلول ERP مخصصة",
    "services.titleHighlight": "لكل قطاع",
    "services.subtitle":
      "منصات ERP مصممة خصيصاً لتناسب احتياجات كبرى الصناعات السورية، من التصنيع إلى الرعاية الصحية.",
    "services.manufacturing.title": "ERP لقطاع التصنيع",
    "services.manufacturing.desc":
      "حسّن كفاءة التصنيع من خلال نظام ERP يوحّد العمليات ويعزّز النمو، ويضمن التنسيق السلس في جميع أقسام التصنيع.",
    "services.distribution.title": "ERP لقطاع التوزيع",
    "services.distribution.desc":
      "عزّز الخدمات اللوجستية وبسّط سلسلة التوريد بأدوات إدارة ذكية مصممة لاحتياجات الشركات في سورية.",
    "services.nonprofit.title": "ERP للقطاع غير الربحي",
    "services.nonprofit.desc":
      "مصمم للشفافية والامتثال، يسهّل تتبع التبرعات وإعداد التقارير وإدارة الأموال بكفاءة.",
    "services.retail.title": "ERP لقطاع التجزئة",
    "services.retail.desc":
      "تحسين الوظائف الإدارية والتشغيلية وتعزيز تجربة العملاء وتبسيط العمليات داخل المتاجر.",
    "services.healthcare.title": "ERP لقطاع الرعاية الصحية",
    "services.healthcare.desc":
      "تحسين العمليات الإدارية والسريرية والتشغيلية لرفع جودة الرعاية وزيادة كفاءة المرافق الطبية.",
    "services.agriculture.title": "ERP لقطاع الزراعة",
    "services.agriculture.desc":
      "تحسين إدارة المحاصيل والثروة الحيوانية وتعزيز الإنتاجية ودعم الاستدامة البيئية.",
    "services.education.title": "ERP لقطاع التعليم",
    "services.education.desc":
      "تمكين المؤسسات التعليمية من إدارة المهام الأكاديمية والإدارية والتشغيلية بكفاءة عالية.",
    "services.realestate.title": "ERP لقطاع العقارات",
    "services.realestate.desc":
      "أتمتة عمليات العقارات وإدارة الممتلكات والتأجير والعمليات المالية لقرارات أسرع وأدق.",

    // Modules
    "modules.badge": "وحدات ERP الأساسية",
    "modules.title": "كل ما تحتاجه في",
    "modules.titleHighlight": "منصة واحدة",
    "modules.subtitle":
      "مجموعة متكاملة من الوحدات تدعم كل قسم في مؤسستك بكفاءة وذكاء.",
    "modules.accounting.title": "المحاسبة",
    "modules.accounting.desc":
      "أدر أموالك باستخدام وحدة محاسبة متطورة لإدارة مالية دقيقة وشفافة وذكية.",
    "modules.inventory.title": "المخزون",
    "modules.inventory.desc":
      "حافظ على مستويات مثالية للمخزون وطوّر اتخاذ القرار من خلال الرؤية اللحظية.",
    "modules.crm.title": "إدارة علاقات العملاء",
    "modules.crm.desc":
      "بناء علاقات أقوى مع العملاء عبر تتبع كامل ودعم شخصي وتواصل فعّال.",
    "modules.buying.title": "المشتريات",
    "modules.buying.desc":
      "تعزيز عملية التوريد وتقليل التكاليف وتقوية العلاقات مع الموردين.",
    "modules.hr.title": "الموارد البشرية",
    "modules.hr.desc":
      "تبسيط إدارة القوى العاملة وتقليل المهام الإدارية والحصول على رؤى ذكية.",
    "modules.projects.title": "المشاريع",
    "modules.projects.desc":
      "تنظيم الخطط ومواءمة الموارد لتسليم المشاريع في الوقت المحدد وضمن الميزانية.",
    "modules.support.title": "الدعم الفني",
    "modules.support.desc":
      "ضمان سير عمليات ERP بسلاسة عبر حل سريع للمشاكل التقنية ودعم مستمر.",
    "modules.assets.title": "الأصول",
    "modules.assets.desc":
      "تتبع وصيانة وإدارة مالية للأصول المادية عبر دورة حياتها كاملة لأفضل عائد.",
    "modules.einvoice.title": "الفوترة الإلكترونية",
    "modules.einvoice.desc":
      "إصدار وإرسال وإدارة الفواتير بما يتوافق مع متطلبات الهيئة العامة للضرائب والرسوم السورية.",
    "modules.ecommerce.title": "التجارة الإلكترونية",
    "modules.ecommerce.desc":
      "إطلاق وتشغيل متاجر إلكترونية متكاملة مع الدفع والمخزون والشحن للنماذج B2C وB2B وD2C.",
    "modules.marketing.title": "التسويق الرقمي",
    "modules.marketing.desc":
      "إدارة السوشيال ميديا والمحتوى والحملات المدفوعة و SEO والإنتاج الإبداعي لنمو علامتك التجارية.",
    "modules.planning.title": "تخطيط الموارد",
    "modules.planning.desc":
      "تخصيص استراتيجي لرأس المال والكوادر والمواد والوقت عبر تخطيط مبني على البيانات والأتمتة.",

    // Why Us
    "whyUs.badge": "لماذا نحن",
    "whyUs.title": "شريكك الموثوق نحو",
    "whyUs.titleHighlight": "النجاح الرقمي",
    "whyUs.subtitle":
      "شركة سورية وطنية تسدّ الفجوة بين العمليات التقليدية ومستقبل شفاف وسلس مدعوم بالذكاء الاصطناعي، بالشراكة مع كبرى الشركات العالمية في AI وIoT.",
    "whyUs.experienced.title": "فريق خبير",
    "whyUs.experienced.desc":
      "مهندسون ماهرون بخبرة عميقة في تقنيات وصناعات متنوعة.",
    "whyUs.scalable.title": "حلول قابلة للتوسع",
    "whyUs.scalable.desc":
      "أنظمة جاهزة للمستقبل مصممة للنمو بسلاسة مع عملك.",
    "whyUs.business.title": "تركيز على الأعمال",
    "whyUs.business.desc":
      "تقنية متوافقة مع أهدافك الاستراتيجية ونتائج قابلة للقياس.",
    "whyUs.local.title": "خبرة محلية",
    "whyUs.local.desc": "فهم عميق لديناميكيات السوق الإقليمي ومتطلباته.",
    "whyUs.support.title": "دعم مخصص",
    "whyUs.support.desc":
      "دعم سريع الاستجابة ومخصص يحافظ على تشغيل أنظمتك بسلاسة.",
    "whyUs.delivery.title": "التسليم في الموعد",
    "whyUs.delivery.desc":
      "جداول زمنية موثوقة مع تواصل شفاف طوال المشروع.",
    "whyUs.stats.years": "سنوات",
    "whyUs.stats.projects": "مشروع",
    "whyUs.stats.clients": "عميل",

    // Process
    "process.badge": "آلية العمل",
    "process.title": "كيف",
    "process.titleHighlight": "نعمل",
    "process.subtitle":
      "نهج مبسط يحول تحدياتك إلى فرص من خلال التعاون والخبرة.",
    "process.step": "الخطوة",
    "process.discover.title": "الاكتشاف والتحليل",
    "process.discover.desc":
      "نتعمق في تحديات عملك وأهدافك وأنظمتك الحالية لإنشاء استراتيجية مخصصة.",
    "process.build.title": "البناء والتنفيذ",
    "process.build.desc":
      "يقوم فريقنا الخبير بتطوير ونشر الحلول باستخدام منهجيات رشيقة وأفضل الممارسات.",
    "process.support.title": "الدعم والتوسع",
    "process.support.desc":
      "تحسين ومراقبة ودعم مستمر لضمان تطور أنظمتك مع عملك.",

    // Results
    "results.badge": "دراسات الحالة والنتائج",
    "results.title": "نتائج حقيقية لأعمال حقيقية",
    "results.subtitle":
      "حلولنا تحقق تأثيراً قابلاً للقياس. إليك بعض النتائج التي حققها عملاؤنا.",
    "results.costs.title": "خفض التكاليف التشغيلية",
    "results.costs.desc": "تبسيط العمليات والأتمتة يقلل النفقات بشكل كبير.",
    "results.performance.title": "تحسين أداء الأنظمة",
    "results.performance.desc":
      "بنية تحتية محسنة توفر عمليات أسرع وأكثر موثوقية.",
    "results.workflows.title": "أتمتة سير العمل",
    "results.workflows.desc":
      "أتمتة العمليات التجارية الحرجة لتحقيق أقصى كفاءة.",
    "results.security.title": "الامتثال الأمني",
    "results.security.desc":
      "أمان على مستوى المؤسسات لحماية بيانات الأعمال الحساسة.",
    "results.productivity.title": "زيادة الإنتاجية",
    "results.productivity.desc": "فرق ممكّنة بأدوات أفضل وسير عمل مبسط.",
    "results.market.title": "وصول أسرع للسوق",
    "results.market.desc": "دورات تطوير متسارعة لميزة تنافسية.",

    // Testimonials
    "testimonials.badge": "شهادات العملاء",
    "testimonials.title": "ماذا يقول",
    "testimonials.titleHighlight": "عملاؤنا",
    "testimonials.subtitle":
      "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.",

    // CTA
    "cta.title": "هل أنت مستعد لتطوير تقنيتك؟",
    "cta.subtitle":
      "دعنا نناقش كيف يمكننا دعم نموك بحلول تقنية ذكية وموثوقة مصممة خصيصاً لاحتياجات عملك.",
    "cta.scheduleCall": "حجز مكالمة",
    "cta.learnMore": "اعرف المزيد",

    // Contact
    "contact.badge": "تواصل معنا",
    "contact.title": "لنبدأ",
    "contact.titleHighlight": "محادثة",
    "contact.subtitle":
      "هل أنت مستعد لتحويل عملك بحلول تقنية ذكية؟ تواصل معنا ودعنا نناقش كيف يمكننا المساعدة.",
    "contact.email": "راسلنا",
    "contact.call": "اتصل بنا",
    "contact.visit": "زورنا",
    "contact.address": "دمشق، الجمهورية العربية السورية",
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
    "footer.tagline":
      "شركة سورية وطنية تقدم حلول ERP متقدمة وحلولاً رقمية ذكية مدعومة بالذكاء الاصطناعي وإنترنت الأشياء.",
    "footer.services": "القطاعات",
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
    "footer.manufacturing": "التصنيع",
    "footer.distribution": "التوزيع",
    "footer.healthcare": "الرعاية الصحية",
    "footer.retail": "التجزئة",
    "footer.education": "التعليم",
    "footer.realestate": "العقارات",
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
