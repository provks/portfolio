import { motion } from "framer-motion";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Global Clients",
  },
  {
    value: "99%",
    label: "Project Success",
  },
];

const expertise = [
  {
    icon: <FaServer />,
    title: "Backend Architecture",
    description:
      "Building scalable APIs, microservices, authentication systems, and SaaS backends using Node.js, Express, and NestJS.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Optimization",
    description:
      "Designing efficient schemas, optimizing queries, caching strategies, and handling large-scale relational databases.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Deployment",
    description:
      "Deploying production-grade applications with Docker, AWS, CI/CD pipelines, monitoring, and scalable infrastructure.",
  },
  {
    icon: <FaCode />,
    title: "Modern Frontend",
    description:
      "Developing clean and responsive frontend applications using React, TypeScript, TailwindCSS, and modern UI architecture.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-5">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Engineering reliable software
            <span className="block text-zinc-400">
              for startups and growing businesses.
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            I specialize in designing scalable backend systems and
            full stack applications with a strong focus on performance,
            maintainability, and business impact. Over the last 5+
            years, I’ve helped businesses build SaaS products,
            automation systems, REST APIs, and modern web platforms.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;