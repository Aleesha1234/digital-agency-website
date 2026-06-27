import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your business, your users, and the problem worth solving before we write a line of code.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Architecture decisions, tech stack selection, and a product roadmap grounded in business outcomes.",
  },
  {
    number: "03",
    title: "Design",
    description: "Wireframes evolve into a polished design system. Every interaction is considered before it's built.",
  },
  {
    number: "04",
    title: "Build",
    description: "Iterative sprints with weekly demos. Clean code, thorough testing, and zero surprises at handoff.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Production-grade deployment with monitoring, alerting, and a smooth rollout to real users.",
  },
  {
    number: "06",
    title: "Grow",
    description: "Post-launch support, performance tuning, and ongoing partnership as your product scales.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = sectionRef.current?.querySelectorAll(".process-step");
    if (!items) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-slate-50"
      data-testid="section-process"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
            A process that eliminates ambiguity
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step relative p-10 border-slate-100 ${
                index < 3 ? "border-b" : ""
              } ${
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${
                index % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""
              } ${
                index < 4 ? "sm:border-b" : ""
              }`}
              data-testid={`step-process-${index}`}
            >
              <span className="block text-6xl font-black text-slate-100 leading-none mb-6">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
