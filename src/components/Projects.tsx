import { motion } from "framer-motion";

const projects = [
  {
    title: "Talenta → SAP Integration",
    type: "Backend System",
    problem: "Manual data transfer between HR and finance systems causing delays and errors",
    stack: [".NET Core", "REST API", "SAP", "SQL Server"],
    impact: "Automated data flow between Talenta HR and SAP, eliminating manual data entry",
  },
  {
    title: "Banking Middleware APIs",
    type: "Backend System",
    problem: "Legacy banking systems couldn't support real-time BI-FAST transactions",
    stack: [".NET Core", "Microservices", "SQL Server", "Docker"],
    impact: "1000+ daily transactions processed with 40% fewer errors",
  },
  {
    title: "StockLedger",
    type: "Full-Stack Application",
    problem: "No real-time visibility into inventory levels across warehouses",
    stack: ["React", ".NET Core", "SQL Server", "REST API"],
    impact: "Real-time inventory tracking with automated alerts and reporting",
  },
  {
    title: "Habit Tracker",
    type: "Full-Stack Application",
    problem: "Personal productivity tool to build and maintain daily habits",
    stack: ["React", ".NET Core", "MySQL", "Bootstrap"],
    impact: "Complete CRUD app with streak tracking and analytics dashboard",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world systems built to solve real business problems — from enterprise integrations to full-stack apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl p-8 group hover:glow transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-heading font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                  {project.type}
                </span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground group-hover:text-primary transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.problem}</p>
              <p className="text-sm text-foreground font-medium mb-5">↳ {project.impact}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
