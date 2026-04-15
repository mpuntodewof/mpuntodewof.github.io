import { motion } from "framer-motion";

const experiences = [
  {
    role: "IT Application Developer",
    company: "PT Bluebird Group",
    period: "Mar 2023 — Present",
    description: "Designed scalable RESTful APIs for E-Timesheet and Talenta Receiver services integrating Portal Timesheet and Talenta HR with SAP. Engineered the Journaling Service for multi-gateway financial transaction recording. Optimized SQL queries and implemented fault-handling for high-volume systems.",
    highlights: ["SAP Integration", "API Middleware", "Background Processing", "Agile/Scrum"],
  },
  {
    role: "Backend Developer",
    company: "PT Bank Raya",
    period: "Mar 2021 — Feb 2023",
    description: "Designed and developed BI-FAST middleware APIs using .NET Core & SQL Server, supporting 1,000+ daily interbank transactions. Built and maintained a Card Management System for 5,000+ active cardholders with automated issuance and status tracking.",
    highlights: ["BI-FAST Integration", "1,000+ Daily Transactions", "Card Management", ".NET Core"],
  },
  {
    role: "IT Application Developer",
    company: "PT Bayer Indonesia",
    period: "Apr 2019 — Feb 2021",
    description: "Developed enterprise web applications using .NET C#, SQL Server, Laravel & Bootstrap. Optimized the Credit Management system reducing processing errors by 40%. Delivered 5+ internal applications and improved HR workflows with external vendor collaboration.",
    highlights: ["40% Error Reduction", "5+ Enterprise Apps", "Credit Management", ".NET & Laravel"],
  },
  {
    role: "Web Developer",
    company: "Thortech Asia",
    period: "Apr 2018 — Apr 2019",
    description: "Built RESTful APIs for the Kirimkanai mobile app serving 1,000+ active users. Developed the Gapallan logistics and ship maintenance system, reducing manual data entry by ~40%. Improved admin tool efficiency by 25%.",
    highlights: ["Full-Stack Development", "Mobile API", "Logistics Systems", "Laravel & MySQL"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">Career</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            7+ years delivering scalable backend systems and enterprise applications across transportation, banking, pharmaceutical, and logistics domains.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-8 glow" />

              <div className="md:w-1/2" />
              <div className="ml-12 md:ml-0 md:w-1/2 glass rounded-2xl p-6">
                <span className="text-xs font-heading text-primary font-semibold">{exp.period}</span>
                <h3 className="font-heading text-lg font-semibold mt-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-sm text-secondary-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span key={h} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass rounded-lg px-8 py-3.5 font-heading font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Download Resume
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
