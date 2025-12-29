import { TrendingDown, Zap, Workflow, Shield, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ResultsSection = () => {
  const { t } = useLanguage();

  const results = [
    {
      icon: TrendingDown,
      metric: "30%",
      titleKey: "results.costs.title",
      descKey: "results.costs.desc",
    },
    {
      icon: Zap,
      metric: "2x",
      titleKey: "results.performance.title",
      descKey: "results.performance.desc",
    },
    {
      icon: Workflow,
      metric: "50+",
      titleKey: "results.workflows.title",
      descKey: "results.workflows.desc",
    },
    {
      icon: Shield,
      metric: "99.9%",
      titleKey: "results.security.title",
      descKey: "results.security.desc",
    },
    {
      icon: Users,
      metric: "40%",
      titleKey: "results.productivity.title",
      descKey: "results.productivity.desc",
    },
    {
      icon: Clock,
      metric: "60%",
      titleKey: "results.market.title",
      descKey: "results.market.desc",
    },
  ];

  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            {t("results.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("results.title")}
          </h2>
          <p className="text-lg opacity-80">
            {t("results.subtitle")}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <result.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">{result.metric}</div>
                  <h4 className="font-heading font-semibold mb-2">{t(result.titleKey)}</h4>
                  <p className="text-sm opacity-70">{t(result.descKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
