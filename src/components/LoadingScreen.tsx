import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .to(
      containerRef.current,
      { opacity: 0, duration: 0.4, delay: 0.4, ease: "power2.inOut" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      data-testid="loading-screen"
    >
      <h1 
        ref={textRef} 
        className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl"
      >
        Luminary Studio
      </h1>
    </div>
  );
}
