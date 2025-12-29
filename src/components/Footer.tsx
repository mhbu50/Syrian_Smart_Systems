import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const services = [
    { key: "footer.customSoftware", href: "#services" },
    { key: "footer.cloudInfra", href: "#services" },
    { key: "footer.erpCrm", href: "#services" },
    { key: "footer.cybersecurity", href: "#services" },
    { key: "footer.aiAutomation", href: "#services" },
    { key: "footer.itConsulting", href: "#services" },
  ];

  const company = [
    { key: "footer.aboutUs", href: "#" },
    { key: "footer.ourProcess", href: "#process" },
    { key: "footer.caseStudies", href: "#results" },
    { key: "footer.careers", href: "#" },
    { key: "footer.contact", href: "#contact" },
  ];

  const legal = [
    { key: "footer.privacy", href: "#" },
    { key: "footer.terms", href: "#" },
    { key: "footer.cookies", href: "#" },
  ];

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding !pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Syrian Smart Systems" className="h-14 w-auto bg-primary-foreground rounded-lg p-1" />
            </div>
            <p className="font-heading text-lg font-bold mb-2">Syrian Smart Systems</p>
            <p className="text-primary-foreground/70 text-sm mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {t(service.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Syrian Smart Systems. {t("footer.copyright")}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t("footer.arabicName")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
