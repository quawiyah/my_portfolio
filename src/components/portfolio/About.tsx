import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
];

const About = () => (
  <section id="about" className="bg-secondary/30">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">Get to know me</p>
        <h2 className="section-title">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ScrollReveal>
          <div className="glass-card flex items-center justify-center aspect-square max-w-sm mx-auto md:mx-0">
            <img src="/mypicture2.jpg" alt="Dairo Quawiyah" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate FullStack Web Developer with a strong focus on building
              responsive, accessible, and performant web applications. With
              experience across modern frontend and backend technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I enjoy solving complex problems and continuously learning new
              technologies to stay at the forefront of web development. My goal is
              to create seamless digital experiences that delight users.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="font-heading font-semibold text-lg mb-4">Tech Stack</h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
