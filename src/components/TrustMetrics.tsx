import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 1000, suffix: "+", label: "Daily Transactions Handled", icon: "⚡" },
  { value: 40, suffix: "%", label: "Error Reduction Achieved", icon: "📉" },
  { value: 5, suffix: "+", label: "Years of Experience", icon: "🎯" },
  { value: 10, suffix: "+", label: "Enterprise Systems Delivered", icon: "🏗️" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="gradient-text text-4xl sm:text-5xl font-heading font-bold">
      {count}{suffix}
    </span>
  );
}

const TrustMetrics = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center glass rounded-2xl p-6 glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl mb-3">{metric.icon}</div>
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
