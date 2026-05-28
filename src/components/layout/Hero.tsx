import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Available for freelance projects
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Building
              <span className="block text-zinc-400">
                scalable backend systems
              </span>
              for modern businesses.
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Senior Full Stack Engineer with 5+ years of experience
              specializing in Node.js, NestJS, Express, React, PostgreSQL,
              and cloud-ready SaaS architecture.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
              >
                Hire Me
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-zinc-400 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-zinc-400 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Code Snippet */}
              <pre className="overflow-x-auto text-sm md:text-base text-zinc-300 leading-relaxed">
                <code>{`const engineer = {
  name: "VS",
  role: "Senior Full Stack Engineer",
  experience: "5+ years",

  backend: [
    "Node.js",
    "NestJS",
    "Express"
  ],

  frontend: [
    "React",
    "TypeScript"
  ],

  databases: [
    "PostgreSQL",
    "MongoDB"
  ],

  cloud: [
    "AWS",
    "Docker"
  ]
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;