import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.5 }
      );
    }
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
            Luminary <span className="text-blue-600">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            data-testid="button-nav-cta"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white px-6 py-8 md:hidden flex flex-col h-[calc(100vh-72px)]" data-testid="mobile-menu">
          <ul className="flex flex-col gap-6 text-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium text-slate-900 block w-full py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-8">
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-4 text-base font-medium text-white shadow hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-mobile-nav-cta"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
