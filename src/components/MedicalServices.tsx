import {
  Heart,
  Activity,
  Stethoscope,
  ClipboardCheck,
  UserCheck,
  Pill,
  Video,
  Shield,
} from "lucide-react";

const MedicalServices = () => {
  const services = [
    {
      title: "Preventive Care",
      description:
        "Comprehensive health screenings, vaccinations, and lifestyle counseling to keep you healthy and prevent disease before it starts.",
      icon: <Heart className="w-6 h-6" />,
      bullets: [
        "Annual Physical Exams",
        "Health Risk Assessments",
        "Vaccination Programs",
        "Wellness Counseling",
      ],
    },
    {
      title: "Chronic Disease Management",
      description:
        "Expert care for long-term conditions including diabetes, hypertension, heart disease, and respiratory disorders.",
      icon: <Activity className="w-6 h-6" />,
      bullets: [
        "Diabetes Care",
        "Hypertension Management",
        "Asthma & COPD",
        "Heart Disease Monitoring",
      ],
    },
    {
      title: "Acute Care",
      description:
        "Same-day appointments for sudden illnesses, infections, minor injuries, and urgent medical concerns.",
      icon: <Stethoscope className="w-6 h-6" />,
      bullets: [
        "Same-Day Appointments",
        "Infection Treatment",
        "Minor Injury Care",
        "Urgent Consultations",
      ],
    },
    {
      title: "Diagnostic Services",
      description:
        "On-site laboratory testing, imaging coordination, and comprehensive diagnostic evaluations.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      bullets: [
        "Blood Work",
        "EKG Testing",
        "Imaging Referrals",
        "Health Screenings",
      ],
    },
    {
      title: "Geriatric Care",
      description:
        "Specialized care for older adults focusing on maintaining independence, managing multiple conditions, and quality of life.",
      icon: <UserCheck className="w-6 h-6" />,
      bullets: [
        "Senior Wellness",
        "Memory Care",
        "Fall Prevention",
        "Medication Management",
      ],
    },
    {
      title: "Medication Management",
      description:
        "Careful oversight of your medications to ensure safety, effectiveness, and minimize side effects or interactions.",
      icon: <Pill className="w-6 h-6" />,
      bullets: [
        "Prescription Review",
        "Drug Interaction Check",
        "Side Effect Monitoring",
        "Medication Education",
      ],
    },
    {
      title: "Telemedicine",
      description:
        "Convenient virtual appointments for follow-ups, medication reviews, and minor health concerns from the comfort of your home.",
      icon: <Video className="w-6 h-6" />,
      bullets: [
        "Video Consultations",
        "Online Prescription Refills",
        "Remote Monitoring",
        "Digital Health Records",
      ],
    },
    {
      title: "Specialized Referrals",
      description:
        "Coordinated care with trusted specialists to ensure you receive the best comprehensive treatment for complex conditions.",
      icon: <Shield className="w-6 h-6" />,
      bullets: [
        "Specialist Coordination",
        "Second Opinions",
        "Treatment Planning",
        "Care Continuity",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
            Comprehensive Care
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Medical Services
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
            From preventive care to chronic disease management, I offer a full
            spectrum of internal medicine services to meet your healthcare needs
            at every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-primary mb-4 leading-tight">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mt-auto">
                {service.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
