import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll(".hero-animate");
    
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 1.6 
      }
    );
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white" 
      id="hero"
      data-testid="section-hero"
    >
      {/* Subtle particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-50 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-slate-50 blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" ref={containerRef}>
          
          <div className="max-w-2xl">
            <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
              We craft<br />
              digital products<br />
              that <span className="text-blue-600">endure.</span>
            </h1>
            
            <div className="hero-animate flex flex-wrap items-center gap-4 mb-16">
              <a 
                href="#work" 
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-base font-medium text-white shadow hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                data-testid="button-hero-work"
              >
                View Our Work
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent px-8 py-4 text-base font-medium text-slate-900 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                data-testid="button-hero-about"
              >
                Learn More
              </a>
            </div>

            <div className="hero-animate flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">200+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">12+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">98%</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Retention</span>
              </div>
            </div>
          </div>

          <div className="hero-animate hidden lg:flex justify-center items-center h-[600px]">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600 w-full h-full max-w-lg"
              data-testid="hero-illustration"
            >
              {/* Outer rotating ring */}
              <g className="origin-center" style={{ animation: 'spin 20s linear infinite' }}>
                <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" opacity="0.2"/>
                <circle cx="200" cy="20" r="4" fill="currentColor"/>
                <circle cx="380" cy="200" r="4" fill="currentColor"/>
                <circle cx="200" cy="380" r="4" fill="currentColor"/>
                <circle cx="20" cy="200" r="4" fill="currentColor"/>
              </g>

              {/* Inner geometric shapes */}
              <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="2" opacity="0.1"/>
              <path d="M200 80 L304 260 L96 260 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinejoin="round"/>
              <path d="M200 320 L96 140 L304 140 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinejoin="round"/>
              
              {/* Core */}
              <circle cx="200" cy="200" r="40" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1"/>
              <circle cx="200" cy="200" r="20" fill="currentColor"/>
              
              {/* Connecting lines */}
              <line x1="200" y1="200" x2="304" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              <line x1="200" y1="200" x2="96" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              <line x1="200" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            </svg>
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
          
        </div>
      </div>
    </section>
  );
}
