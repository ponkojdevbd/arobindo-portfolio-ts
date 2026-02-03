import { Users, Award, Heart, Clock } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="bg-background text-foreground py-16 px-2 sm:px-4 lg:px-8 overflow-hidden transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 ">
            {/* Badge */}
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide">
              BOARD CERTIFIED PHYSICIAN
            </div> */}

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary antialiased">
              Arobindo Mondol
            </h1>
            <p className="text-base md:text-lg font-semibold text-primary/50 tracking-tight">
              Sub-Assistant <br className="hidden md:block max-w-md" />
              Community Medical Officer (SACMO)
            </p>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Compassionate healthcare focused on your wellness. Specializing in
              internal medicine with a holistic approach to patient care.
            </p>

            {/* Buttons */}
            <div className="flex md:justify-start flex-wrap gap-4">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm md:text-base font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                Book Appointment
              </button>
              <button className="px-8 py-3 rounded-full border border-input bg-transparent text-foreground text-sm md:text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-secondary/50 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">5000+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Patients Served
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-secondary/50 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-secondary/50 text-primary">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">98%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Success Rate
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-secondary/50 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">24/7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Emergency Care
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animation1">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={assets.arobindo_profile_img}
                alt="Arobindo Mondol"
                className="w-full h-full object-cover object-center object-top"
              />

              {/* Gradient Overlay for better text readability if needed, though design doesn't show much */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:w-80 bg-card/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="p-3 rounded-full bg-primary text-primary-foreground shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Patient-Centered Care
                </h3>
                <p className="text-xs text-muted-foreground">
                  Personalized treatment plans for every patient
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
