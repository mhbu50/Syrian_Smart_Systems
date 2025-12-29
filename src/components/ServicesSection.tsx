import { Code2, Cloud, Database, Shield, Bot, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      titleKey: "services.software.title",
      descKey: "services.software.desc",
      color: "primary",
    },
    {
      icon: Cloud,
      titleKey: "services.cloud.title",
      descKey: "services.cloud.desc",
      color: "accent",
    },
    {
      icon: Database,
      titleKey: "services.erp.title",
      descKey: "services.erp.desc",
      color: "primary",
    },
    {
      icon: Shield,
      titleKey: "services.security.title",
      descKey: "services.security.desc",
      color: "accent",
    },
    {
      icon: Bot,
      titleKey: "services.ai.title",
      descKey: "services.ai.desc",
      color: "primary",
    },
    {
      icon: Users,
      titleKey: "services.consulting.title",
      descKey: "services.consulting.desc",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("services.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}{" "}
            <span className="text-gradient">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
            >
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "primary" ? "gradient-primary" : "gradient-accent"
                }`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
