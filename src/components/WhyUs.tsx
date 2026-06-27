import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Craft Over Output",
    body: "We measure success by the quality of what ships, not the velocity of what leaves the sprint board. Every component, every API, every interaction gets the attention it deserves — because speed without craftsmanship just accelerates debt.",
  },
  {
    icon: Users,
    title: "Partners, Not Vendors",
    body: "We embed with your team. We attend your stand-ups, challenge your assumptions, and celebrate your wins. You get senior talent who are invested in outcomes, not just invoice cycles. We've maintained relationships with the same clients for over a decade.",
  },
  {
    icon: Zap,
    title: "Built to Last",
    body: "The systems we deliver are documented, tested, and designed for the engineers who come after us. No black boxes, no hero code. Clean architecture that a new hire can understand on day two — and that will still run cleanly five years from now.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
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
      id="why-us"
      ref={sectionRef}
      className="py-24 bg-slate-50"
      data-testid="section-why-us"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">Why Luminary</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
            The difference is in how we think
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMiddle = index === 1;
            return (
              <div
                key={feature.title}
                className={`feature-card group relative bg-white rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isMiddle ? "lg:mt-8" : ""
                }`}
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.body}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
