import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-dark-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary">
            © 2024 Harshit Shukla. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
