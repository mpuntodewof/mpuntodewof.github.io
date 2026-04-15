import { useState } from "react";
import { motion } from "framer-motion";
import ContactFormDialog from "./ContactFormDialog";

const FinalCTA = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Clients */}
          <motion.div
            className="glass rounded-2xl p-10 text-center glow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-heading text-2xl font-bold mb-3">Need a Scalable System?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a backend API, full-stack app, or system integration — let's build something that scales.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-heading font-semibold text-primary-foreground transition-all hover:scale-105"
              style={{ backgroundImage: 'linear-gradient(135deg, hsl(239 84% 67%), hsl(263 70% 50%))' }}
            >
              Start a Project
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>

          {/* Recruiters */}
          <motion.div
            className="glass rounded-2xl p-10 text-center glow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-heading text-2xl font-bold mb-3">Looking for an Engineer?</h3>
            <p className="text-muted-foreground mb-6">
              I'm open to remote Software Engineer and Full-Stack roles. Let's discuss how I can contribute to your team.
            </p>
            <a
              href="https://www.linkedin.com/in/muhammad-puntodewo-fadhillah-347169160/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass rounded-lg px-8 py-3.5 font-heading font-semibold text-foreground transition-all hover:bg-secondary hover:scale-105"
            >
              View Resume
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </motion.div>
        </div>
      </div>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default FinalCTA;
