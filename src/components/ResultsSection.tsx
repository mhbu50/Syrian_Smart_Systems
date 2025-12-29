import { TrendingDown, Zap, Workflow, Shield, Users, Clock } from "lucide-react";

const results = [
  {
    icon: TrendingDown,
    metric: "30%",
    title: "Reduced Operational Costs",
    description: "Streamlined processes and automation cut expenses significantly.",
  },
  {
    icon: Zap,
    metric: "2x",
    title: "Improved System Performance",
    description: "Optimized infrastructure delivering faster, more reliable operations.",
  },
  {
    icon: Workflow,
    metric: "50+",
    title: "Automated Workflows",
    description: "Critical business processes automated for maximum efficiency.",
  },
  {
    icon: Shield,
    metric: "99.9%",
    title: "Security Compliance",
    description: "Enterprise-grade security protecting sensitive business data.",
  },
  {
    icon: Users,
    metric: "40%",
    title: "Increased Productivity",
    description: "Teams empowered with better tools and streamlined workflows.",
  },
  {
    icon: Clock,
    metric: "60%",
    title: "Faster Time-to-Market",
    description: "Accelerated development cycles for competitive advantage.",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Case Studies & Results
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg opacity-80">
            Our solutions deliver measurable impact. Here are some outcomes our clients have achieved.
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
                  <h4 className="font-heading font-semibold mb-2">{result.title}</h4>
                  <p className="text-sm opacity-70">{result.description}</p>
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
