import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "IT Application Developer",
    company: "PT Bluebird Group",
    period: "Mar 2023 — Present",
    description:
      "Designed scalable RESTful APIs for E-Timesheet and Talenta Receiver services integrating Portal Timesheet and Talenta HR with SAP. Engineered the Journaling Service for multi-gateway financial transaction recording.",
    highlights: ["SAP Integration", "API Middleware", "Background Processing", "Agile/Scrum"],
    bullets: [
      "Designed and developed scalable RESTful APIs for the E-Timesheet Service, an API middleware integrating Portal Timesheet with SAP, covering driver contract, driver timesheet, and Driver SIO (Surat Izin Operasi) data to improve HR and operational data accuracy.",
      "Built and maintained the Talenta Receiver Service, an API middleware integrating Talenta (external HR platform) with SAP, handling driver shift schedules, overtime, and time-off data with reliable background processing.",
      "Engineered the Journaling Service, an internal finance application to record and manage transactions from multiple payment gateway platforms, improving financial tracking accuracy and reducing manual reconciliation.",
      "Designed backend service flows and background processing for high-volume data integration systems, ensuring reliability, scalability, and fault tolerance.",
      "Optimized SQL queries and implemented fault-handling mechanisms, improving API performance and stability under high-load conditions.",
      "Collaborated with cross-functional teams (business, QA, SAP) to design system architecture and deliver features iteratively using Agile/Scrum methodology.",
    ],
  },
  {
    role: "Backend Developer",
    company: "PT Bank Raya",
    period: "Mar 2021 — Feb 2023",
    description:
      "Designed and developed BI-FAST middleware APIs using .NET Core & SQL Server, supporting 1,000+ daily interbank transactions. Built and maintained a Card Management System for 5,000+ active cardholders.",
    highlights: ["BI-FAST Integration", "1,000+ Daily Transactions", "Card Management", ".NET Core"],
    bullets: [
      "Designed and developed RESTful APIs for the BI-FAST middleware service using .NET Core and SQL Server, enabling secure real-time integration across web and mobile banking applications.",
      "Implemented backend service flows for interbank fund transfers, supporting over 1,000 daily transactions with a strong focus on data consistency, validation, and reliability.",
      "Collaborated with cross-functional teams to integrate frontend and backend components, ensuring low-latency and seamless real-time transaction experiences.",
      "Optimized SQL Server queries and backend logic to improve transaction performance and maintain system stability under peak usage.",
      "Developed and maintained a Card Management System using .NET Framework Web Forms and SQL Server, supporting daily operations for 5,000+ active cardholders through automated issuance and status tracking.",
      "Used Git-based workflows and team collaboration practices to streamline development, improve code quality, and support faster release cycles.",
    ],
  },
  {
    role: "IT Application Developer",
    company: "PT Bayer Indonesia",
    period: "Apr 2019 — Feb 2021",
    description:
      "Developed enterprise web applications using .NET C#, SQL Server, Laravel & Bootstrap. Optimized the Credit Management system reducing processing errors by 40%.",
    highlights: ["40% Error Reduction", "5+ Enterprise Apps", "Credit Management", ".NET & Laravel"],
    bullets: [
      "Developed and maintained enterprise web applications using .NET C#, SQL Server, Laravel, and Bootstrap, supporting multiple internal business processes.",
      "Optimized database design and backend workflows for the Credit Management system, reducing processing errors by 40% and improving overall system reliability.",
      "Improved mailing and approval workflows by resolving critical backend issues, resulting in faster approvals and reduced operational bottlenecks.",
      "Collaborated closely with business stakeholders to gather requirements and translate them into backend solutions, contributing to the successful delivery of 5+ internal applications.",
      "Provided application guidance and user training to improve system adoption and reduce support requests by over 25%.",
      "Enhanced HR-related web applications in collaboration with external vendors, improving system performance and cross-departmental data flow.",
      "Developed and optimized the E-Management of Change (E-MOC) application, increasing documentation and approval efficiency by approximately 30%.",
    ],
  },
  {
    role: "Web Developer",
    company: "Thortech Asia",
    period: "Apr 2018 — Apr 2019",
    description:
      "Built RESTful APIs for the Kirimkanai mobile app serving 1,000+ active users. Developed the Gapallan logistics and ship maintenance system, reducing manual data entry by ~40%.",
    highlights: ["Full-Stack Development", "Mobile API", "Logistics Systems", "Laravel & MySQL"],
    bullets: [
      "Developed and maintained web applications using Laravel, MySQL, JavaScript, Bootstrap, and AJAX, supporting internal business operations across multiple departments.",
      "Designed and implemented RESTful APIs for the Kirimkanai mobile application, enabling secure transactions for 1,000+ active users and seamless integration with admin systems.",
      "Built backend services for Kirimkanai admin tools, improving transaction monitoring, reporting, and operational visibility, resulting in a 25% increase in administrative efficiency.",
      "Developed core features for the Gapallan Web Application, a logistics and ship maintenance management system, reducing manual data entry by approximately 40% and improving operational turnaround time.",
      "Collaborated with product and operational teams to gather requirements and deliver full-stack features aligned with business needs.",
    ],
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

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
              <div
                className="ml-12 md:ml-0 md:w-1/2 glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:glow group"
                onClick={() => setSelectedExp(exp)}
              >
                <span className="text-xs font-heading text-primary font-semibold">{exp.period}</span>
                <h3 className="font-heading text-lg font-semibold mt-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-sm text-secondary-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.highlights.map((h) => (
                    <span key={h} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                      {h}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  Click to view details
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
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
            href="https://www.linkedin.com/in/muhammad-puntodewo-fadhillah-347169160/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass rounded-lg px-8 py-3.5 font-heading font-semibold text-foreground transition-all hover:bg-secondary"
          >
            View on LinkedIn
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </motion.div>
      </div>

      {/* Experience Detail Dialog */}
      <Dialog open={!!selectedExp} onOpenChange={(open) => !open && setSelectedExp(null)}>
        <DialogContent className="sm:max-w-[600px] glass border-border max-h-[85vh] overflow-y-auto">
          {selectedExp && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-heading font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                    {selectedExp.period}
                  </span>
                </div>
                <DialogTitle className="font-heading text-2xl">
                  {selectedExp.role}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedExp.company}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Key Contributions</h4>
                <ul className="space-y-3">
                  {selectedExp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-secondary-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {selectedExp.highlights.map((h) => (
                    <span key={h} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
