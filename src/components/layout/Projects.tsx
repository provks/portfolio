import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Multi-Tenant SaaS Platform",
    description:
      "Built a scalable SaaS platform with authentication, RBAC, subscriptions, and tenant isolation. Designed for startups serving multiple organizations from a single codebase.",

    impact: [
      "Multi-tenant architecture",
      "Stripe subscriptions",
      "Role-based access control",
      "Production-ready infrastructure",
    ],

    stack: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "React",
      "AWS",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "High Performance API Platform",
    description:
      "Designed and implemented backend services handling thousands of daily requests with optimized queries, caching, and asynchronous processing.",

    impact: [
      "Reduced API response times",
      "Queue-based processing",
      "Redis caching",
      "Horizontal scalability",
    ],

    stack: [
      "Node.js",
      "Express",
      "Redis",
      "BullMQ",
      "Docker",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "E-Commerce Management System",
    description:
      "Built inventory, order management, payments, and customer workflows for a modern e-commerce platform with admin dashboards and analytics.",

    impact: [
      "Order automation",
      "Inventory management",
      "Payment integrations",
      "Reporting dashboard",
    ],

    stack: [
      "NestJS",
      "React",
      "PostgreSQL",
      "Prisma",
    ],

    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 border-t border-white/10"
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
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Projects focused on
            <span className="block text-zinc-400">
              scale, performance and business value.
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            A selection of systems and applications I've designed,
            developed, and optimized for startups and growing businesses.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left */}
                <div className="p-10">
                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
                    >
                      <FaGithub />
                      Code
                    </a>

                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Right */}
                <div className="p-10 border-t lg:border-t-0 lg:border-l border-white/10">
                  <h4 className="text-lg font-semibold mb-5">
                    Key Outcomes
                  </h4>

                  <ul className="space-y-3">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="text-zinc-400 flex items-start gap-3"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-white/10 bg-black/30 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;