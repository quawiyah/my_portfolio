import { Code, Layout, Server, Palette, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Code, title: "Frontend Web Development", desc: "Building modern, interactive web applications using React, JavaScript, and cutting-edge frontend technologies." },
  { icon: Layout, title: "Responsive Website Design", desc: "Creating pixel-perfect designs that look great on every device—mobile, tablet, and desktop." },
  { icon: Server, title: "Backend Development", desc: "Server-side development with Node.js and Express.js for robust APIs and data management." },
  { icon: Palette, title: "UI Implementation", desc: "Translating UI/UX designs into clean, functional code with attention to detail and accessibility." },
  { icon: Zap, title: "Website Optimization", desc: "Improving performance, SEO, and user experience through code optimization and best practices." },
];

const Services = () => (
  <section id="services">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">What I do</p>
        <h2 className="section-title">Services</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="glass-card group h-full">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
