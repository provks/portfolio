import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand business goals, requirements, timelines, and project scope.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Define architecture, milestones, deliverables, and technical strategy.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build scalable, maintainable software with regular progress updates.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Validate functionality, performance, security, and edge cases.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Launch production-ready applications with monitoring and support.",
  },
  {
    number: "06",
    title: "Growth",
    description:
      "Provide ongoing enhancements, maintenance, and scaling support.",
  },
];

const Process = () => {
  return (
    <section className="py-28 border-t border-white/10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-5">
            Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A transparent process
            <span className="block text-zinc-400">
              from idea to deployment.
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Clear communication, predictable delivery, and a structured
            development workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5"
            >
              <span className="text-5xl font-bold text-zinc-700">
                {step.number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;