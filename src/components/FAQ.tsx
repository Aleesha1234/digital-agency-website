import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "How does your engagement process work?",
    answer:
      "We start with a scoping call to understand your product, goals, and constraints. From there, we put together a detailed proposal with timeline, milestones, and a fixed or retainer-based pricing structure. Once aligned, we embed with your team via a kickoff workshop and move into our six-phase delivery process: Discovery, Strategy, Design, Build, Launch, and Grow.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most product engagements run between 8 and 20 weeks depending on scope. A focused MVP is usually 8–12 weeks. A full product with custom design system, backend infrastructure, and go-to-market support typically takes 14–20 weeks. We're transparent about timeline early and hold it through delivery.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes — some of our best relationships started at the seed stage. For early-stage companies, we focus on helping you identify what to build first, not just how to build it. We're comfortable operating with incomplete information and can move fast without creating a mess to clean up later.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our primary frontend stack is React (Next.js, Vite), TypeScript, and Tailwind CSS. On the backend we work extensively with Node.js, PostgreSQL, and cloud-native infrastructure on AWS and GCP. For mobile, we use React Native and Expo. We've also shipped projects in Python, Go, and Ruby — we're opinionated but not dogmatic.",
  },
  {
    question: "How do you handle ongoing maintenance after launch?",
    answer:
      "We offer post-launch retainer agreements for teams that need continued engineering support — whether that's bug fixes, feature additions, performance monitoring, or scaling work. We document everything thoroughly so handoffs to your internal team are smooth whenever you're ready.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Project-based work is scoped and priced at a fixed amount based on deliverables and timeline. Ongoing retainers start at $12,000/month for a dedicated pod of senior engineers and designers. We don't quote by hour — we quote by outcome, which aligns our incentives with yours.",
  },
  {
    question: "How do we get started?",
    answer:
      "Fill out the contact form below or email us directly at hello@luminarystudio.io. We respond within one business day and schedule an initial scoping call within the week. From first conversation to signed agreement typically takes 7–14 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = sectionRef.current?.querySelectorAll(".faq-item");
    if (!items) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
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
      id="faq"
      ref={sectionRef}
      className="py-24 bg-slate-50"
      data-testid="section-faq"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
            Common questions, honest answers
          </h2>
        </div>

        <div className="max-w-3xl divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item"
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full text-left py-7 flex items-start justify-between gap-6 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                data-testid={`button-faq-${index}`}
              >
                <span className="text-base md:text-lg font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 mt-0.5 w-6 h-6 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45 text-blue-600" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? "400px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "max-height 0.35s ease, opacity 0.25s ease",
                }}
              >
                <p className="pb-7 text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
