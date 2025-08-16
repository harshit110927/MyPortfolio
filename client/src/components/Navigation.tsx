import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Harshit Shukla</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-dark-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-text-secondary hover:text-accent-blue transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
