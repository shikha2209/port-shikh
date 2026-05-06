import { Cursor } from "../components/Cursor";
import { BackgroundBlobs } from "../components/BackgroundBlobs";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Journey } from "../components/Journey";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Global Decorators */}
      <Cursor />
      <BackgroundBlobs />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col gap-12 md:gap-24 overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
