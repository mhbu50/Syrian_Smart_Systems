const TrustSection = () => {
  const logos = [
    { name: "Company 1", width: "120px" },
    { name: "Company 2", width: "100px" },
    { name: "Company 3", width: "130px" },
    { name: "Company 4", width: "110px" },
    { name: "Company 5", width: "120px" },
    { name: "Company 6", width: "100px" },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by forward-thinking companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
              style={{ width: logo.width }}
            >
              <div className="w-full h-full bg-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
