import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Their IT solutions helped us modernize our operations quickly and securely. The team understood our needs perfectly and delivered beyond expectations.",
    author: "Ahmad Al-Hassan",
    role: "CEO, Tech Innovations Ltd",
    avatar: "A",
  },
  {
    quote: "Syrian Smart Systems transformed our infrastructure. We saw a 40% improvement in efficiency within the first quarter. Highly recommended!",
    author: "Sarah Mitchell",
    role: "CIO, Global Trading Co",
    avatar: "S",
  },
  {
    quote: "Professional, reliable, and truly expert. They've been our trusted IT partner for over 3 years. Their support team is exceptional.",
    author: "Mohammad Khalil",
    role: "IT Director, Finance Corp",
    avatar: "M",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding gradient-subtle">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border/50 hover:shadow-elevated transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
