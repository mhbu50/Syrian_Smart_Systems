import { Award, TrendingUp, Target, MapPin, Headphones, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Team",
    description: "Skilled engineers with deep expertise across diverse technologies and industries.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-ready systems designed to grow seamlessly with your business.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description: "Technology aligned with your strategic goals and measurable outcomes.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep understanding of regional market dynamics and requirements.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Responsive, personalized support that keeps your systems running smoothly.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable project timelines with transparent communication throughout.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding gradient-subtle">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="text-gradient-accent">Digital Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine technical excellence with business understanding to deliver 
              solutions that truly make a difference. Here's what sets us apart.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                <h4 className="font-heading font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}

            {/* Stats Card */}
            <div className="sm:col-span-2 p-6 gradient-primary rounded-2xl text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm opacity-80">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-80">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Clients</div>
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
