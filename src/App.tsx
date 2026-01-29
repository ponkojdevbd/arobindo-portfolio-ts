import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
