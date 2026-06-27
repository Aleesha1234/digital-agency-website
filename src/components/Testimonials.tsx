import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote:
      "Luminary didn't just build what we asked for — they pushed back on three of our assumptions and were right every time. The product we launched was better than what we imagined.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Meridian Finance",
    initials: "SC",
    color: "bg-blue-600",
  },
  {
    quote:
      "We've worked with agencies before. Luminary is the first one that felt like a real partner. They were in our Slack, in our stand-ups, and genuinely cared whether the product succeeded.",
    name: "Marcus Webb",
    role: "Founder & CEO",
    company: "Bloom Health",
    initials: "MW",
    color: "bg-emerald-600",
  },
  {
    quote:
      "The codebase they handed off was cleaner than anything our internal team has produced. Six months later, new engineers are still complimenting the architecture. That's rare.",
    name: "Priya Patel",
    role: "VP of Product",
    company: "Vertex Commerce",
    initials: "PP",
    color: "bg-violet-600",
  },
  {
    quote:
      "We came in over budget on timeline projections from three other agencies. Luminary delivered on time, on budget, and without a single deadline conversation that felt tense.",
    name: "James Thornton",
    role: "CEO",
    company: "Aurum Labs",
    initials: "JT",
    color: "bg-amber-600",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
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
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-white"
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">Client Voices</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="testimonial-card group bg-white rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <svg
                className="w-10 h-10 text-blue-100 mb-6"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 20c0-5.5 4.5-10 10-10V6C9.4 6 2 13.4 2 22v12h16V20H10zm22 0c0-5.5 4.5-10 10-10V6c-10.6 0-18 7.4-18 16v12h16V20h-8z" />
              </svg>
              <p className="text-slate-700 leading-relaxed text-lg mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
