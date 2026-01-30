import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValue from "@/components/CoreValue";
import YourCareJourney from "@/components/YourCareJourney";
import MedicalServices from "@/components/MedicalServices";
import Appointment from "@/components/Appointment";
import NewPatientCta from "@/components/NewPatientCta";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <CoreValue />
        <MedicalServices />
        <YourCareJourney />
        <NewPatientCta />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}

export default App;
