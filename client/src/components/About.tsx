import { useEffect, useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-6 fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern coding workspace with multiple monitors"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              I am a Computer Science undergraduate specializing in backend development and machine learning. My focus is on creating secure, scalable applications, demonstrated by my work on a multi-tenant REST API using Spring Boot, Java, and PostgreSQL.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              I am proficient in multiple languages and have a strong foundation in algorithms, data structures, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm">
                Backend Development
              </span>
              <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm">
                Cloud Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
