import { Award, TrendingUp, Target, MapPin, Headphones, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: "whyUs.experienced.title",
      descKey: "whyUs.experienced.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "whyUs.scalable.title",
      descKey: "whyUs.scalable.desc",
    },
    {
      icon: Target,
      titleKey: "whyUs.business.title",
      descKey: "whyUs.business.desc",
    },
    {
      icon: MapPin,
      titleKey: "whyUs.local.title",
      descKey: "whyUs.local.desc",
    },
    {
      icon: Headphones,
      titleKey: "whyUs.support.title",
      descKey: "whyUs.support.desc",
    },
    {
      icon: Clock,
      titleKey: "whyUs.delivery.title",
      descKey: "whyUs.delivery.desc",
    },
  ];

  return (
    <section id="why-us" className="section-padding gradient-subtle">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("whyUs.badge")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("whyUs.title")}{" "}
              <span className="text-gradient-accent">{t("whyUs.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("whyUs.subtitle")}
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{t(feature.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.slice(3).map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{t(feature.titleKey)}</h4>
                <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
              </div>
            ))}

            {/* Stats Card */}
            <div className="sm:col-span-2 p-6 gradient-primary rounded-2xl text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm opacity-80">{t("whyUs.stats.years")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-80">{t("whyUs.stats.projects")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">{t("whyUs.stats.clients")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
