import { Factory, Truck, HeartHandshake, ShoppingBag, Stethoscope, Sprout, GraduationCap, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Factory, titleKey: "services.manufacturing.title", descKey: "services.manufacturing.desc", color: "primary" },
    { icon: Truck, titleKey: "services.distribution.title", descKey: "services.distribution.desc", color: "accent" },
    { icon: HeartHandshake, titleKey: "services.nonprofit.title", descKey: "services.nonprofit.desc", color: "primary" },
    { icon: ShoppingBag, titleKey: "services.retail.title", descKey: "services.retail.desc", color: "accent" },
    { icon: Stethoscope, titleKey: "services.healthcare.title", descKey: "services.healthcare.desc", color: "primary" },
    { icon: Sprout, titleKey: "services.agriculture.title", descKey: "services.agriculture.desc", color: "accent" },
    { icon: GraduationCap, titleKey: "services.education.title", descKey: "services.education.desc", color: "primary" },
    { icon: Building2, titleKey: "services.realestate.title", descKey: "services.realestate.desc", color: "accent" },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("services.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}{" "}
            <span className="text-gradient">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "primary" ? "gradient-primary" : "gradient-accent"
                }`}
              >
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
