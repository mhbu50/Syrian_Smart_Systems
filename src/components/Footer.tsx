import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Custom Software",
    "Cloud & Infrastructure",
    "ERP & CRM Solutions",
    "Cybersecurity",
    "AI & Automation",
    "IT Consulting",
  ];

  const company = [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Case Studies", href: "#results" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
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
              Smart IT solutions that help your business scale with efficiency, security, and innovation.
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
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item.label}
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
              © {currentYear} Syrian Smart Systems. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              السورية للأنظمة الذكية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
