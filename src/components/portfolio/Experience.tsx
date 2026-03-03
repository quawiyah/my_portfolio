import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Company",
    duration: "2023 – Present",
    responsibilities: [
      "Developed responsive UI components with React and Tailwind CSS",
      "Collaborated with designers to implement pixel-perfect interfaces",
      "Optimized application performance and load times",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2022 – 2023",
    responsibilities: [
      "Built custom websites for small businesses and startups",
      "Delivered projects on time with clean, maintainable code",
      "Managed client communication and project requirements",
    ],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    duration: "2021 – 2022",
    responsibilities: [
      "Assisted in building full-stack web applications",
      "Implemented REST APIs with Node.js and Express",
      "Participated in code reviews and agile sprints",
    ],
  },
];

const Experience = () => (
  <section id="experience">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">My journey</p>
        <h2 className="section-title">Experience</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

                <div className="md:w-1/2" />
                <div className="md:w-1/2 ml-10 md:ml-0">
                  <div className="glass-card">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
