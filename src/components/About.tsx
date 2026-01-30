import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import { assets } from "../assets/assets";

const About = () => {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Education",
      items: [
        "MD - Johns Hopkins University",
        "Residency - Massachusetts General Hospital",
        "Fellowship - Mayo Clinic",
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Experience",
      items: [
        "15+ years in Internal Medicine",
        "Chief of Medicine - St. Mary's Hospital",
        "Clinical Professor - Medical School",
      ],
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Certifications",
      items: [
        "Board Certified - Internal Medicine",
        "American College of Physicians Fellow",
        "Advanced Cardiac Life Support",
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Publications",
      items: [
        "50+ peer-reviewed articles",
        'Author of "Modern Healthcare Approach"',
        "Regular speaker at medical conferences",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
            ABOUT AROBINDO MONDOL
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Dedicated to Your Health & Wellness
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience in internal medicine, I am
              committed to providing comprehensive, compassionate care that
              addresses your unique health needs and goals.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] aspect-square max-h-[500px] mx-auto lg:mx-0">
              <img
                src={assets.arobindo_profile_img}
                alt="Arobindo Mondol"
                className="w-full h-full object-cover object-center object-top"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative pattern or background element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-secondary/50 rounded-2xl blur-2xl" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              A Personal Approach to Medicine
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I believe that exceptional healthcare begins with truly
                listening to patients. Each person has a unique story, and
                understanding that story is essential to providing effective
                treatment.
              </p>
              <p>
                My practice focuses on preventive care, chronic disease
                management, and helping patients achieve optimal health through
                evidence-based medicine combined with a holistic perspective.
              </p>
              <p>
                Outside of medicine, I'm passionate about medical education,
                community health initiatives, and staying active through hiking
                and yoga—practices I often recommend to my patients.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mb-6 text-primary">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                {card.title}
              </h4>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    {item}
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

export default About;
