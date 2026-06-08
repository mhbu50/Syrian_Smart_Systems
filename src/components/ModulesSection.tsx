import {
  Calculator,
  Package,
  Users,
  ShoppingCart,
  UserCog,
  Briefcase,
  LifeBuoy,
  Boxes,
  FileText,
  Store,
  Megaphone,
  LayoutGrid,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ModulesSection = () => {
  const { t } = useLanguage();

  const modules = [
    { icon: Calculator, titleKey: "modules.accounting.title", descKey: "modules.accounting.desc" },
    { icon: Package, titleKey: "modules.inventory.title", descKey: "modules.inventory.desc" },
    { icon: Users, titleKey: "modules.crm.title", descKey: "modules.crm.desc" },
    { icon: ShoppingCart, titleKey: "modules.buying.title", descKey: "modules.buying.desc" },
    { icon: UserCog, titleKey: "modules.hr.title", descKey: "modules.hr.desc" },
    { icon: Briefcase, titleKey: "modules.projects.title", descKey: "modules.projects.desc" },
    { icon: LifeBuoy, titleKey: "modules.support.title", descKey: "modules.support.desc" },
    { icon: Boxes, titleKey: "modules.assets.title", descKey: "modules.assets.desc" },
    { icon: FileText, titleKey: "modules.einvoice.title", descKey: "modules.einvoice.desc" },
    { icon: Store, titleKey: "modules.ecommerce.title", descKey: "modules.ecommerce.desc" },
    { icon: Megaphone, titleKey: "modules.marketing.title", descKey: "modules.marketing.desc" },
    { icon: LayoutGrid, titleKey: "modules.planning.title", descKey: "modules.planning.desc" },
  ];

  return (
    <section id="modules" className="section-padding gradient-subtle">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("modules.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("modules.title")}{" "}
            <span className="text-gradient-accent">{t("modules.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("modules.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {modules.map((m, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <m.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {t(m.titleKey)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(m.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
