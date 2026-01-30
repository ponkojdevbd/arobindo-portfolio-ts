const NewPatientCta = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-16 text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
          {/* Subtle Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
                New Patients Welcome
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We're accepting new patients and would be honored to be your
                healthcare partner. Most insurance plans accepted.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95">
                Book Online
              </button>
              <button className="px-8 py-4 rounded-full border border-input bg-transparent text-primary font-bold hover:bg-secondary transition-all hover:scale-[1.02] active:scale-95">
                Call Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPatientCta;
