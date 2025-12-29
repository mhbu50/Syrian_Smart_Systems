import { Code2, Cloud, Database, Shield, Bot, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored applications built for your unique business needs with modern technologies and best practices.",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Secure, scalable cloud solutions that power modern businesses with reliable uptime and performance.",
    color: "accent",
  },
  {
    icon: Database,
    title: "ERP & CRM Solutions",
    description: "Streamline operations, improve visibility, and drive growth with integrated business systems.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive protection for your systems, data, and users against evolving digital threats.",
    color: "accent",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Reduce manual work and improve efficiency with intelligent automation and AI-powered solutions.",
    color: "primary",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic guidance from experienced engineers to align technology with your business goals.",
    color: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="text-gradient">Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From custom development to enterprise security, we provide end-to-end IT services 
            that help businesses thrive in the digital age.
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
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
