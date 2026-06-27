import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Meridian Finance",
    category: "Fintech / Web App",
    description:
      "A real-time portfolio analytics platform serving 50,000+ investors. We rebuilt their legacy monolith into a modular React + Node architecture with sub-100ms data refresh.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Bloom Health",
    category: "Healthcare / Mobile App",
    description:
      "A mental wellness platform connecting patients with therapists. HIPAA-compliant infrastructure, video consultations, and a scheduling system that reduced no-shows by 34%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "TypeScript", "AWS"],
  },
  {
    title: "Vertex Commerce",
    category: "E-commerce / Platform",
    description:
      "A headless commerce platform for a DTC brand doing $80M ARR. Custom storefront with a 3-second checkout, multi-warehouse inventory sync, and 40% faster page loads.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["Next.js", "Shopify", "GraphQL"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="work"
      ref={sectionRef}
      className="py-24 bg-white"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-blue-600"></div>
              <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">Featured Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-xl leading-tight">
              Work we're proud to put our name on
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            data-testid="link-all-work"
          >
            See all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
