import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with cart, checkout, and payment integration.",
    techs: ["React"],
    word: "Yet to be deployed",
    link: null
  },
  {
    title: "Event Management Website",
    desc: "A full-stack web application that allows users to create, manage, and book events with dynamic ticket generation and user authentication.",
    techs: ["HTML", "CSS", "Node.js", "Express", "MySQL"],
    word: "Yet to be deployed",
    link: null
  },
  {
    title: "Portfolio Website",
    desc: "A personal website showcasing my projects, skills, and experience with a responsive and user-friendly design.",
    techs: ["React"],
    link: "https://quawiyah.github.io/my_portfolio/"
  },
  {
    title: "Landing Page",
    desc: "A visually appealing and responsive landing page designed to promote a product/service.",
    techs: ["HTML", "CSS"],
    link: "https://quawiyah.github.io/landing/"
  },
  {
    title: "To-do List",
    desc: "A task management application that enables users to add, update, and delete tasks, improving productivity and organization.",
    techs: ["JavaScript", "HTML", "CSS"],
    link: "https://quawiyah.github.io/todo/"
  },
  {
    title: "Tip Calculator",
    desc: "A simple tool that calculates tips based on user input, helping users quickly determine total payment amounts.",
    techs: ["JavaScript", "HTML", "CSS"],
    link: "https://quawiyah.github.io/project/"
  },
  {
    title: "Gadget Magazine",
    desc: "A modern blog-style website that displays tech and gadget-related articles.",
    techs: ["HTML", "CSS"],
    link: "https://quawiyah.github.io/tech/"
  },
];

const Projects = () => (
  <section id="projects" className="bg-secondary/30">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">My work</p>
        <h2 className="section-title">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="glass-card group h-full flex flex-col">
              {/* <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground/40 font-heading text-sm">Project Preview</span>
              </div> */}
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.techs.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {p.link && (
                  <Button size="sm" asChild className="gap-1.5">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> View Project
                    </a>
                  </Button>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{p.word}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
