import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Appointment = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Emergency: (555) 987-6543"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: [
        "info@drarobindomondol.com",
        "appointments@drarobindomondol.com",
      ],
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: ["123 Medical Plaza, Suite 400", "San Francisco, CA 94102"],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <section id="appointment" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Schedule an Appointment
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
            Taking new patients and accepting most insurance plans. Book your
            appointment today and take the first step toward better health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
          {/* Appointment Form */}
          <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Request an Appointment
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Appointment Type *
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none appearance-none cursor-pointer">
                    <option>Select type</option>
                    <option>General Consultation</option>
                    <option>Follow-up Visit</option>
                    <option>Specialized Exam</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  placeholder="Please share any specific concerns or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:border-primary/20 focus:bg-background transition-all outline-none resize-none"
                />
              </div>

              <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Request Appointment
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-primary mb-6">
                    {info.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {info.title}
                  </h4>
                  <div className="space-y-1 overflow-hidden">
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground text-sm break-words md:break-normal lg:break-words xl:break-normal"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
