import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "End-to-end web applications built on modern stacks — performant, scalable, and built to last.",
    capabilities: ["React / Next.js / TypeScript", "Node.js & API architecture", "Performance optimization", "Progressive Web Apps"],
  },
  {
    number: "02",
    title: "Product Design",
    description: "Research-driven UX with pixel-perfect UI execution. We design systems, not just screens.",
    capabilities: ["User research & journey mapping", "Design systems & component libraries", "Prototyping & usability testing", "Interaction design"],
  },
  {
    number: "03",
    title: "Brand Identity",
    description: "Visual identities built for longevity — distinctive, coherent, and built around what you actually stand for.",
    capabilities: ["Logo & identity systems", "Brand strategy & positioning", "Typography & color systems", "Brand guidelines & assets"],
  },
  {
    number: "04",
    title: "Mobile Apps",
    description: "Native-quality mobile experiences for iOS and Android. Fast, fluid, and built around real user needs.",
    capabilities: ["React Native & Expo", "Native iOS & Android", "Offline-first architecture", "App Store optimization"],
  },
  {
    number: "05",
    title: "Performance Engineering",
    description: "We audit, diagnose, and surgically improve systems that are slow, brittle, or breaking under load.",
    capabilities: ["Core Web Vitals & Lighthouse", "Database query optimization", "Infrastructure & caching", "Load testing & profiling"],
  },
  {
    number: "06",
    title: "Strategic Consulting",
    description: "Technical and product leadership for companies at inflection points. We help you make the right call.",
    capabilities: ["Technical architecture review", "Product roadmap planning", "Team structure & hiring", "Build vs. buy analysis"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const rows = sectionRef.current?.querySelectorAll(".service-row");
    if (!rows) return;

    gsap.fromTo(
      rows,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white"
      data-testid="section-services"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
            Services designed to move your business forward
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="service-row group"
            >
              <button
                className="w-full text-left py-8 flex items-start gap-6 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                data-testid={`button-service-${index}`}
                aria-expanded={openIndex === index}
              >
                <span className="text-5xl font-black text-slate-100 leading-none select-none w-16 shrink-0 group-hover:text-blue-100 transition-colors duration-300">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300 ${
                        openIndex === index ? "rotate-45 border-blue-600 text-blue-600 bg-blue-50" : "group-hover:border-blue-300"
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-slate-500 mt-2 leading-relaxed pr-8">{service.description}</p>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: openIndex === index ? "200px" : "0px" }}
                  >
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
