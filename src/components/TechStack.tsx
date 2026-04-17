import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Tech {
  name: string;
  icon: string; // URL to icon image
}

interface Category {
  title: string;
  headerIcon: ReactNode;
  techs: Tech[];
}

// Devicon CDN base
const d = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
// Simple Icons CDN base
const s = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

// Category header icons (these look good already — keep as SVG)
const BackendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <circle cx="6" cy="18" r="1" fill="currentColor" />
  </svg>
);

const FrontendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const DevOpsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const OtherIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const categories: Category[] = [
  {
    title: "Backend",
    headerIcon: <BackendIcon />,
    techs: [
      { name: ".NET Core", icon: `${d}/dotnetcore/dotnetcore-original.svg` },
      { name: "C#", icon: `${d}/csharp/csharp-original.svg` },
      { name: "ASP.NET", icon: `${d}/dot-net/dot-net-plain-wordmark.svg` },
      { name: "gRPC", icon: s("trpc", "2596BE") },
      { name: "RESTful APIs", icon: s("fastapi", "009688") },
      { name: "PHP / Laravel", icon: `${d}/laravel/laravel-original.svg` },
      { name: "Microservices", icon: s("consul", "F24C53") },
      { name: "API Gateway", icon: s("kong", "003459") },
      { name: "Clean Architecture", icon: s("archlinux", "1793D1") },
      { name: "Background Services", icon: s("clockify", "03A9F4") },
    ],
  },
  {
    title: "Frontend",
    headerIcon: <FrontendIcon />,
    techs: [
      { name: "React.js", icon: `${d}/react/react-original.svg` },
      { name: "JavaScript", icon: `${d}/javascript/javascript-original.svg` },
      { name: "Bootstrap", icon: `${d}/bootstrap/bootstrap-original.svg` },
      { name: "Material UI", icon: `${d}/materialui/materialui-original.svg` },
      { name: "HTML / CSS", icon: `${d}/html5/html5-original.svg` },
    ],
  },
  {
    title: "Database",
    headerIcon: <DatabaseIcon />,
    techs: [
      { name: "SQL Server", icon: `${d}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "MySQL", icon: `${d}/mysql/mysql-original.svg` },
      { name: "Relational DB Design", icon: s("databricks", "FF3621") },
      { name: "Query Optimization", icon: s("lightning", "FBBF24") },
    ],
  },
  {
    title: "Tools & DevOps",
    headerIcon: <DevOpsIcon />,
    techs: [
      { name: "Git", icon: `${d}/git/git-original.svg` },
      { name: "GitHub", icon: s("github", "f0f0f0") },
      { name: "GitLab", icon: `${d}/gitlab/gitlab-original.svg` },
      { name: "Docker", icon: `${d}/docker/docker-original.svg` },
      { name: "Postman", icon: `${d}/postman/postman-original.svg` },
      { name: "Jira", icon: `${d}/jira/jira-original.svg` },
    ],
  },
  {
    title: "Other",
    headerIcon: <OtherIcon />,
    techs: [
      { name: "Agile / Scrum", icon: s("scrumalliance", "009FDA") },
      { name: "SAP Integration", icon: s("sap", "0FAAFF") },
      { name: "API Documentation", icon: s("swagger", "85EA2D") },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-primary">{cat.headerIcon}</span>
                <h3 className="font-heading font-semibold text-lg gradient-text">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, j) => (
                  <motion.span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/70 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="flex-shrink-0"
                      loading="lazy"
                    />
                    <span>{tech.name}</span>
                  </motion.span>
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
