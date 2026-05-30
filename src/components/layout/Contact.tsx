import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 border-t border-white/10 bg-zinc-950"
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
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's discuss your
            <span className="block text-zinc-400">
              next project.
            </span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            Looking for a backend engineer, full stack developer,
            or technical partner? I'd love to hear about your
            project and explore how I can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:hello@yourdomain.com"
              className="flex items-center gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              <FaEnvelope className="text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-zinc-400">
                  hello@yourdomain.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              <FaLinkedin className="text-2xl" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-zinc-400">
                  Connect professionally
                </p>
              </div>
            </a>

            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              <FaGithub className="text-2xl" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-zinc-400">
                  View code & projects
                </p>
              </div>
            </a>

            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              <FaCalendarAlt className="text-2xl" />
              <div>
                <h3 className="font-semibold">
                  Schedule a Call
                </h3>
                <p className="text-zinc-400">
                  Book a free discovery call
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Project Details
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:scale-[1.01] transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;