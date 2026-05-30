import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative py-32 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm text-zinc-300">
            Available for Freelance & Contract Work
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
            Need a reliable engineer
            <span className="block text-zinc-400">
              for your next project?
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Whether you're building a SaaS product, scaling backend
            infrastructure, optimizing APIs, or launching a new platform,
            I can help transform your ideas into production-ready software.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl border border-white/10 p-6 bg-black/20">
              <h3 className="text-xl font-semibold">
                Fast Communication
              </h3>

              <p className="mt-3 text-zinc-400">
                Clear updates, transparent progress, and reliable delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-black/20">
              <h3 className="text-xl font-semibold">
                Scalable Architecture
              </h3>

              <p className="mt-3 text-zinc-400">
                Built with growth, performance, and maintainability in mind.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-black/20">
              <h3 className="text-xl font-semibold">
                Long-Term Partnership
              </h3>

              <p className="mt-3 text-zinc-400">
                More than code—strategic technical support for your business.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
            >
              Start a Project

              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition duration-300"
            >
              <FaCalendarAlt />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;