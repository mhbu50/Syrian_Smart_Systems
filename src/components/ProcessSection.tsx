import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Analyze",
    description: "We dive deep into your business challenges, goals, and existing systems to create a tailored strategy.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Implement",
    description: "Our expert team develops and deploys solutions using agile methodologies and best practices.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Support & Scale",
    description: "Ongoing optimization, monitoring, and support to ensure your systems evolve with your business.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined approach that transforms your challenges into opportunities 
            through collaboration and expertise.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 gradient-accent rounded-full text-accent-foreground text-sm font-bold">
                    Step {step.number}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-20">
                    <div className="w-full h-full bg-card border border-border rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
