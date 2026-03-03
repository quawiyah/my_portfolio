import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 – 2022",
  },
  {
    degree: "Full-Stack Web Development Certification",
    institution: "Online Academy",
    year: "2022",
  },
  {
    degree: "React & Advanced JavaScript",
    institution: "Udemy / Coursera",
    year: "2023",
  },
];

const Education = () => (
  <section id="education" className="bg-secondary/30">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">Qualifications</p>
        <h2 className="section-title">Education</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card h-full">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <GraduationCap size={20} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-primary text-sm font-medium mt-2">{edu.year}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
