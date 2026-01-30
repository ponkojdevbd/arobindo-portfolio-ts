import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValue from "@/components/CoreValue";
import MedicalServices from "@/components/MedicalServices";
import YourCareJourney from "@/components/YourCareJourney";

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
      </main>
    </>
  );
}

export default App;
