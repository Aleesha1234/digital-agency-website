import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current || !countersRef.current) return;

    const counters = countersRef.current.querySelectorAll(".stat-number");
    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute("data-target") || "0");
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out",
          });
        });
      },
      once: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 bg-slate-50"
      data-testid="section-about"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Stats */}
          <div ref={countersRef} className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline mb-2">
                <span className="stat-number text-4xl lg:text-5xl font-bold text-blue-600" data-target="12">0</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-600">+</span>
              </div>
              <span className="text-slate-600 font-medium">Years Experience</span>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center translate-y-8">
              <div className="flex items-baseline mb-2">
                <span className="stat-number text-4xl lg:text-5xl font-bold text-blue-600" data-target="200">0</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-600">+</span>
              </div>
              <span className="text-slate-600 font-medium">Projects Delivered</span>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline mb-2">
                <span className="stat-number text-4xl lg:text-5xl font-bold text-blue-600" data-target="40">0</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-600">+</span>
              </div>
              <span className="text-slate-600 font-medium">Active Clients</span>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center translate-y-8">
              <div className="flex items-baseline mb-2">
                <span className="stat-number text-4xl lg:text-5xl font-bold text-blue-600" data-target="98">0</span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-600">%</span>
              </div>
              <span className="text-slate-600 font-medium">Client Retention</span>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="pl-0 lg:pl-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-blue-600"></div>
              <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase">About Us</h2>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              We are a collective of senior engineers and designers focused on quality.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                Founded on the belief that great software requires both rigorous engineering and meticulous design, Luminary Studio builds digital products for companies that refuse to compromise.
              </p>
              <p>
                We don't do quick fixes or disposable code. We architect systems designed to scale, wrapped in interfaces that users love. Our small, specialized team partners directly with founders and product leaders to turn complex problems into elegant solutions.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              data-testid="link-our-story"
            >
              Our Story 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
