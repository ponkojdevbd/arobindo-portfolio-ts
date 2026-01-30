const YourCareJourney = () => {
  const steps = [
    {
      number: "01",
      title: "Schedule",
      description:
        "Book your appointment online or by phone at your convenience",
    },
    {
      number: "02",
      title: "Consultation",
      description:
        "Comprehensive evaluation and discussion of your health concerns",
    },
    {
      number: "03",
      title: "Treatment Plan",
      description:
        "Personalized care plan tailored to your specific needs and goals",
    },
    {
      number: "04",
      title: "Follow-Up",
      description:
        "Ongoing support and monitoring to ensure optimal health outcomes",
    },
  ];

  return (
    <section id="journey" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Journey Banner */}
        <div className="bg-card text-primary rounded-[3rem] p-8 md:p-16 border border-border shadow-sm relative overflow-hidden">
          {/* Header */}
          <div className="text-center relative z-10 mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your Care Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined process designed with your comfort and health in
              mind
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="space-y-6 group">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block h-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Insurance & Payment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We accept most major insurance plans and offer flexible payment
              options to ensure quality healthcare remains accessible to
              everyone in our community. Our billing team is here to assist with
              any coverage questions.
            </p>
          </div>
          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Accessible Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our practice is designed to provide convenient, comfortable, and
              inclusive healthcare for all patients. From ADA-compliant
              facilities to language translation services, we strive to remove
              barriers to care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourCareJourney;
