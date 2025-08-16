import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C++", "SQL"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "Cloud/DevOps",
    skills: ["AWS", "Docker", "Git", "Linux"]
  },
  {
    title: "ML/AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"]
  }
];

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-6 fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-blue">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-sm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
