

const CoreValue = () => {
  const values = [
    {
      title: "Compassionate Care",
      description:
        "Every patient deserves empathy, respect, and personalized attention throughout their healthcare journey.",
    },
    {
      title: "Evidence-Based Medicine",
      description:
        "Staying current with the latest research to provide the most effective, scientifically-proven treatments.",
    },
    {
      title: "Holistic Approach",
      description:
        "Addressing not just symptoms, but the whole person—mind, body, and lifestyle factors that impact health.",
    },
    {
      title: "Patient Education",
      description:
        "Empowering patients with knowledge and understanding to make informed decisions about their health.",
    },
  ];

  return (
    <section id="values" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            My Core Values
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The principles that guide every patient interaction
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
