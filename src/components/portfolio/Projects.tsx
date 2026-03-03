import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with cart, checkout, and payment integration.",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    desc: "A Kanban-style task board for teams with real-time updates and drag-and-drop.",
    techs: ["React", "Tailwind CSS", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio website with smooth animations and clean design.",
    techs: ["React", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather data visualization with location search and forecast charts.",
    techs: ["JavaScript", "REST API", "Chart.js"],
    github: "#",
    live: "#",
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
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground/40 font-heading text-sm">Project Preview</span>
              </div>
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
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Code
                  </a>
                </Button>
                <Button size="sm" asChild className="gap-1.5">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
