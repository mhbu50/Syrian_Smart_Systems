import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-main section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="group">
                {t("hero.cta.primary")}
                <ArrowRight className={`group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play size={18} className={isRTL ? "ml-1" : "mr-1"} />
                {t("hero.cta.secondary")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.years")}</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.projects")}</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.satisfaction")}</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main visual container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Floating Cards */}
                <div className="absolute top-10 right-0 p-4 bg-card rounded-2xl shadow-elevated animate-float z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("hero.card.security")}</div>
                      <div className="text-xs text-muted-foreground">{t("hero.card.iso")}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 p-4 bg-card rounded-2xl shadow-elevated animate-float z-10" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("hero.card.uptime")}</div>
                      <div className="text-xs text-muted-foreground">{t("hero.card.guaranteed")}</div>
                    </div>
                  </div>
                </div>

                {/* Central Tech Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full gradient-primary shadow-glow flex items-center justify-center">
                        <svg className="w-20 h-20 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
