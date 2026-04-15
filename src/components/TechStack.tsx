import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend",
    color: "primary",
    techs: [
      { name: ".NET Core", icon: "⚙️" },
      { name: "C#", icon: "🔷" },
      { name: "REST APIs", icon: "🔌" },
      { name: "Microservices", icon: "🧩" },
    ],
  },
  {
    title: "Frontend",
    color: "accent",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "HTML/CSS", icon: "🎨" },
    ],
  },
  {
    title: "Database",
    color: "primary",
    techs: [
      { name: "SQL Server", icon: "🗄️" },
      { name: "MySQL", icon: "🐬" },
      { name: "Query Optimization", icon: "⚡" },
      { name: "Data Modeling", icon: "📊" },
    ],
  },
  {
    title: "Tools",
    color: "accent",
    techs: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🔀" },
      { name: "Postman", icon: "📮" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">Technologies</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to build reliable, scalable systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
