import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Web Development",
    "Product Design",
    "Brand Identity",
    "Mobile Apps",
    "Performance Engineering",
    "Strategic Consulting",
  ];

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <a href="#" className="inline-block mb-4" data-testid="link-footer-logo">
              <span className="text-xl font-bold tracking-tight">
                Luminary <span className="text-blue-400">Studio</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Crafting digital excellence since 2012. We build software that outlasts trends and teams that choose us twice.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                aria-label="GitHub"
                data-testid="link-footer-github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    data-testid={`link-footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {year} Luminary Studio. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            hello@luminarystudio.io
          </p>
        </div>
      </div>
    </footer>
  );
}
