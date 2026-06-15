import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const navigation = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold">
              VS
              <span className="text-zinc-500">.dev</span>
            </h3>

            <p className="mt-6 text-zinc-400 leading-relaxed max-w-sm">
              Full Stack Engineer specializing in scalable backend
              systems, SaaS platforms, cloud infrastructure, and
              modern web applications.
            </p>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/varun-kumar-sharma/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:varun.fsd@gmail.com"
                className="text-zinc-400 hover:text-white transition"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              Navigation
            </h4>

            <ul className="space-y-4">
              {navigation[0].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              Let's Build Something Great
            </h4>

            <p className="text-zinc-400 leading-relaxed">
              Available for freelance projects, backend consulting,
              SaaS development, and long-term collaborations.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center mt-6 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} VS.dev. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>Built with</span>

            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              React
            </span>

            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              TypeScript
            </span>

            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;