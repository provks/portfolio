import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaBuilding,
  FaGraduationCap,
  FaTruck,
  FaHeartbeat,
  FaLaptopCode,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Inventory management, order processing, payment integrations, and customer portals.",
  },
  {
    icon: <FaBuilding />,
    title: "Real Estate",
    description:
      "Property management systems, CRMs, lead tracking, and business automation.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Learning platforms, student management systems, and online assessments.",
  },
  {
    icon: <FaTruck />,
    title: "Logistics",
    description:
      "Tracking systems, operational dashboards, and workflow automation.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "Appointment systems, patient portals, and secure business applications.",
  },
  {
    icon: <FaLaptopCode />,
    title: "SaaS Products",
    description:
      "Multi-tenant platforms, subscriptions, RBAC, billing, and scalable architecture.",
  },
];

const Industries = () => {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-5">
            Industries
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience across multiple
            <span className="block text-zinc-400">
              business domains.
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            I've worked on software solutions across various industries,
            helping businesses improve operations, automate workflows,
            and scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="text-3xl mb-5">
                {industry.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {industry.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;