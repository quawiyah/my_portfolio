import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Dairo Quawiyah. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/quawiyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/dairo-quawiyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:olajomi21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
