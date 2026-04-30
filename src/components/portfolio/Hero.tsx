import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading mb-4 text-foreground"
        >
          Dairo Quawiyah Olayinka
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl font-heading text-primary mb-6"
        >
          FullStack Web Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
        >
          Building responsive, user-friendly and scalable web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              View Projects <ArrowDown size={16} />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={handleDownloadResume}>
            <Download size={16} /> Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
