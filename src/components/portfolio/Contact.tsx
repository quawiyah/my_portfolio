import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-1">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                <a href="mailto:olajomi21@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Mail size={18} className="text-accent-foreground" />
                  </div>
                  <span>olajomi21@gmail.com</span>
                </a>
                <a href="https://github.com/quawiyah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Github size={18} className="text-accent-foreground" />
                  </div>
                  <span>github.com/quawiyah</span>
                </a>
                <a href="https://www.linkedin.com/in/dairo-quawiyah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Linkedin size={18} className="text-accent-foreground" />
                  </div>
                  <span>linkedin.com/in/dairo-quawiyah</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
              />
              <Button type="submit" className="w-full gap-2">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
