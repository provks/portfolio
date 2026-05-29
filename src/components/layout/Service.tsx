import { motion } from "framer-motion";
import {
  FaServer,
  FaCode,
  FaCloud,
  FaLayerGroup,
  FaArrowRight,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Scalable backend systems, REST APIs, authentication, microservices, queues, caching, and production-grade server architecture.",
    technologies: [
      "Node.js",
      "NestJS",
      "Express",
      "Redis",
      "BullMQ",
    ],
  },
  {
    icon: <FaCode />,
    title: "Full Stack Applications",
    description:
      "Modern responsive web applications with clean UI architecture, reusable components, and scalable frontend systems.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Query",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description:
      "Efficient relational and NoSQL database architecture with optimized queries, indexing, and scalable data models.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "SQL",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Production deployments, Dockerized infrastructure, CI/CD pipelines, cloud hosting, monitoring, and scaling strategies.",
    technologies: [
      "AWS",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: "SaaS Architecture",
    description:
      "Multi-tenant SaaS platforms with secure authentication, subscription systems, RBAC, billing, and scalable architecture.",
    technologies: [
      "Stripe",
      "RBAC",
      "JWT",
      "Multi-Tenant",
    ],
  },
  {
    icon: <FaArrowRight />,
    title: "Performance Optimization",
    description:
      "API optimization, database tuning, caching strategies, lazy loading, and infrastructure improvements for better scalability.",
    technologies: [
      "Caching",
      "Optimization",
      "Scalability",
      "Performance",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 border-t border-white/10 bg-zinc-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-5">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Helping businesses build
            <span className="block text-zinc-400">
              scalable and modern digital products.
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            From backend architecture to full stack SaaS platforms,
            I help startups and businesses create reliable software
            systems optimized for growth and long-term scalability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/10 bg-black/30 text-sm text-zinc-300"
                  >
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

export default Services;