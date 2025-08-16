import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Multi-Tenant Ticket Booking Service",
    description: "Architected a secure, multi-tenant REST API using Spring Boot and Java. Implemented PostgreSQL Row-Level Security to enforce 100% data isolation between tenants.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Server room with organized network infrastructure",
    tags: ["Spring Boot", "Java", "PostgreSQL"],
    github: "https://github.com/harshit110927/ticket-booking-service"
  },
  {
    title: "Chickpea Anomaly Detection",
    description: "Implemented a YOLOv7-Tiny pipeline trained on 20,000+ images, achieving 96.4% accuracy for anomaly detection in agricultural produce.",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Agricultural field with technology integration for crop monitoring",
    tags: ["YOLOv7", "Computer Vision", "Python"],
    github: "https://github.com/harshit110927/Chickpea-Anomaly"
  },
  {
    title: "Solar Panel Efficiency Prediction",
    description: "Formulated predictive models using XGBoost and CatBoost, achieving a top-30 rank out of 500+ teams in a machine learning hackathon.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Solar panel installation with modern analytics dashboard",
    tags: ["XGBoost", "CatBoost", "ML"],
    github: "https://github.com/harshit110927/Zelestra-Hackathon"
  }
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6 bg-dark-card/30 fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-6 project-card transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-accent-blue hover:text-accent-blue-hover transition-colors"
              >
                <Github size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
