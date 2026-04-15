import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep-dive into business requirements and system needs to define clear technical goals.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect scalable backend systems and design clean API contracts.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop APIs, services, and full-stack features with clean, maintainable code.",
    icon: "⚒️",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Performance tuning, testing, and deployment for production-grade reliability.",
    icon: "🚀",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-muted-foreground/30 -translate-y-1/2 z-10">
                  →
                </div>
              )}
              <div className="text-3xl mb-4">{step.icon}</div>
              <span className="text-xs font-mono text-primary font-bold">{step.number}</span>
              <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
