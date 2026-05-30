import { motion } from "framer-motion";
import {
  FaRocket,
  FaServer,
  FaDatabase,
  FaCodeBranch,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaRocket />,
    value: "20+",
    title: "Projects Delivered",
    description:
      "Successfully delivered full stack and backend-heavy applications for startups and businesses.",
  },
  {
    icon: <FaServer />,
    value: "50+",
    title: "APIs Designed",
    description:
      "Built secure, scalable APIs including authentication, payments, SaaS modules, and integrations.",
  },
  {
    icon: <FaDatabase />,
    value: "40%",
    title: "Performance Improvements",
    description:
      "Optimized database queries, caching strategies, and infrastructure for faster response times.",
  },
  {
    icon: <FaCodeBranch />,
    value: "5+",
    title: "Years Experience",
    description:
      "Building scalable backend systems and modern web applications using industry best practices.",
  },
];

const highlights = [
  "Designed multi-tenant SaaS architectures",
  "Implemented RBAC and authentication systems",
  "Integrated Stripe payment workflows",
  "Built scalable REST APIs using NestJS",
  "Optimized PostgreSQL query performance",
  "Implemented Docker-based deployments",
  "Created CI/CD pipelines for automated releases",
  "Developed full stack applications using React",
];

const Results = () => {
  return (
    <section
      id="results"
      className="relative py-28 border-t border-white/10 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-5">
            Results & Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Delivering measurable
            <span className="block text-zinc-400">
              technical and business outcomes.
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            Over the years, I’ve helped businesses improve
            performance, build scalable systems, and launch
            production-ready software with a focus on long-term
            maintainability.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="text-3xl mb-6 text-white">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.value}
              </h3>

              <p className="mt-3 text-xl font-semibold">
                {item.title}
              </p>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
        >
          <h3 className="text-3xl font-bold mb-10">
            Technical Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 text-zinc-300"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;