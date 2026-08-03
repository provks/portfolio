import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="
                  inline-flex
                  items-center
                  px-1 py-1
                  rounded-full
                  border border-emerald-500/20
                  bg-emerald-500/10
                  text-emerald-400
                  text-sm
                "
              >
                ● Available for Contract / Freelance Projects
              </div>

              <h1 className="mt-2 text-5xl md:text-5xl font-bold leading-tight">
                Building scalable
                <span className="block text-zinc-400">SaaS products,</span>
                <span className="block">backend systems &</span>
                <span className="block text-zinc-400">
                  AI-powered applications.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  text-xl
                  text-zinc-400
                  max-w-2xl
                  leading-relaxed
                "
              >
                Full Stack Engineer specializing in Node.js, NestJS, React,
                PostgreSQL, MongoDB, cloud infrastructure, and AI integrations.
                I help startups and businesses launch, automate, and scale
                software products that drive measurable business outcomes.
              </p>

              <div className="flex gap-4 mt-8">
                <a
                  href="#contact"
                  className="
                    px-8 py-4
                    rounded-2xl
                    bg-white
                    text-black
                    font-semibold
                  "
                >
                  Start a Project
                </a>

                <a
                  href="#projects"
                  className="
                    px-8 py-4
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                  "
                >
                  View Case Studies
                </a>
              </div>

              {/* Trust Badges */}

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "5+ Years Experience",
                  "20+ Projects Delivered",
                  "SaaS & AI Solutions",
                  "Available Worldwide",
                  "Long-Term Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm
                    "
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              {/* Social */}

              <div className="flex gap-5 mt-8">
                <a href="https://github.com/provks" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={26} />
                </a>

                <a href="https://www.linkedin.com/in/varun-kumar-sharma/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={26} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="VS"
                className="
                  w-[380px]
                  h-[500px]
                  object-cover
                  rounded-[32px]
                  border border-white/10
                "
              />

              {/* Floating Card 1 */}

              <div
                className="
                  absolute
                  -left-10
                  top-16
                  bg-black/70
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  p-4
                "
              >
                <p className="text-sm text-zinc-400">Experience</p>

                <h3 className="text-2xl font-bold">5+ Years</h3>
              </div>

              {/* Floating Card 2 */}

              <div
                className="
                  absolute
                  -right-10
                  bottom-20
                  bg-black/70
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  p-4
                "
              >
                <p className="text-sm text-zinc-400">Projects</p>

                <h3 className="text-2xl font-bold">20+</h3>
              </div>

              {/* Bottom Profile Card */}

              <div
                className="
                  absolute
                  -bottom-8
                  left-1/2
                  -translate-x-1/2
                  w-[90%]
                  rounded-3xl
                  bg-black/80
                  backdrop-blur-xl
                  border border-white/10
                  p-6
                "
              >
                <h3 className="font-semibold">VS</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  📍 Delhi, India (GMT+5:30)
                </p>

                <p className="text-zinc-400 text-sm">
                  🌍 Working with clients worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;