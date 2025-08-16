import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import profileImage from "@assets/profile.jpg";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 px-6 fade-in"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Professional Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent-blue">
          <img
            src={profileImage}
            alt="Harshit Shukla - Professional headshot"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Harshit Shukla
        </h1>

        <h2 className="text-2xl md:text-3xl text-accent-blue font-medium mb-6">
          Aspiring Software Developer
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          I build secure, scalable backend solutions and explore machine learning.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="mailto:harshit110927@gmail.com"
            className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all duration-300 hover-glow"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/harshit110927"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all duration-300 hover-glow"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/harshit110927"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all duration-300 hover-glow"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center space-x-2 text-accent-blue hover:text-accent-blue-hover transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
