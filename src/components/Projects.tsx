import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

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
          {projects.map((project, i) => {
            const isClickable = project.clickable !== false;

            return (
              <motion.div
                key={project.slug}
                className={`glass rounded-2xl p-8 group transition-all duration-500 ${
                  isClickable
                    ? "cursor-pointer hover:glow hover:scale-[1.02]"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={isClickable ? () => navigate(`/project/${project.slug}`) : undefined}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                    {project.type}
                  </span>
                  {isClickable && (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground group-hover:text-primary transition-colors">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{project.title}</h3>

                {isClickable ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-4">{project.problem}</p>
                    <p className="text-sm text-foreground font-medium mb-5">↳ {project.impact}</p>
                  </>
                ) : (
                  <p className="text-sm text-secondary-foreground leading-relaxed mb-5">{project.overview}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-3">
                  {isClickable ? (
                    <>
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 font-mono">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-xs bg-secondary text-muted-foreground rounded-md px-2.5 py-1 font-mono">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </>
                  ) : (
                    project.stack.map((tech) => (
                      <span key={tech} className="text-xs bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 font-mono">
                        {tech}
                      </span>
                    ))
                  )}
                </div>
                {isClickable && (
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                    View project details
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
