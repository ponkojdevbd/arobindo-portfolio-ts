import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValue from "@/components/CoreValue";
import MedicalServices from "@/components/MedicalServices";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <CoreValue />
        <MedicalServices />
      </main>
    </>
  );
}

export default App;
