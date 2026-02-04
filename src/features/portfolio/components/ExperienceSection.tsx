'use client';

import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2015 - Present",
    title: "Creative Director & Lead Photographer",
    company: "Independent Studio",
    description: "Leading creative direction for high-end brands, editorial publications, and luxury campaigns.",
  },
  {
    period: "2010 - 2015",
    title: "Senior Designer & Art Director",
    company: "Creative Agency",
    description: "Developed brand identities and visual systems for international clients across fashion and lifestyle sectors.",
  },
  {
    period: "2005 - 2010",
    title: "Photographer & Video Editor",
    company: "Media Production",
    description: "Specialized in portrait photography and cinematic video editing for commercial and editorial projects.",
  },
  {
    period: "1995 - 2005",
    title: "Graphic Designer & Model",
    company: "Fashion Industry",
    description: "Began career in fashion design and modeling, building foundation in visual storytelling and aesthetics.",
  },
];

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !progressRef.current) return;

    const updateProgress = () => {
      if (!progressRef.current || !timelineRef.current) return;
      
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      const visibleItems = Array.from(timelineItems).filter((item) => {
        const rect = item.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      });

      const progress = (visibleItems.length / timelineItems.length) * 100;
      progressRef.current.style.height = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <section className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 py-16 lg:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-[#EAD8C2]/5 blur-3xl animate-float float-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-[#EAD8C2]/4 blur-3xl animate-float float-particle" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
        <div className="reveal mb-12 text-center">
          <div className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/25 via-[#EAD8C2]/20 to-[#EAD8C2]/25 backdrop-blur-md px-6 py-2.5 border border-[#EAD8C2]/50 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:scale-[1.02] mb-5 elastic-bounce">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2a2a2a] text-reveal-stagger">
              Experience
            </p>
          </div>
          <h2 className="font-serif text-4xl font-light leading-[0.92] tracking-[-0.02em] text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-shadow-soft fade-up-stagger">
            <span className="text-reveal-stagger">30 Years</span>
            <span className="block text-reveal-stagger italic gradient-text-animated font-normal mt-1">of Excellence</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-light leading-[1.95] text-[#3a3a3a] mb-7 lg:text-xl fade-up-stagger">
            Three decades of creative evolution, from fashion design to leading creative direction for luxury brands worldwide.
          </p>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent fade-scale" />
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Enhanced Animated Timeline line with glow */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EAD8C2]/40 via-[#EAD8C2]/50 to-transparent hidden lg:block glow-pulse">
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#EAD8C2] via-[#EAD8C2]/80 to-[#EAD8C2] transition-all duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)] timeline-progress shadow-soft"
              style={{ height: '0%' }}
            />
            {/* Animated glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#EAD8C2]/20 to-transparent opacity-50 animate-pulse-slow" />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`reveal stagger-${index + 1} timeline-item relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Enhanced Animated Timeline dot with pulse ring */}
                <div className="absolute left-6 top-6 h-8 w-8 rounded-full bg-gradient-to-br from-[#EAD8C2] to-[#EAD8C2]/80 border-4 border-[#FAF0E6] shadow-soft-lg glow-soft transition-all duration-700 hover:scale-110 hover:bg-[#2a2a2a] hover:border-[#EAD8C2] hidden lg:block z-10 timeline-dot pulse-ring scale-bounce" style={{ transformOrigin: 'center', animationDelay: `${index * 0.2}s` }}>
                  {/* Inner dot with animation */}
                  <div className="absolute inset-2 rounded-full bg-[#FAF0E6] transition-all duration-500 group-hover:bg-[#EAD8C2] group-hover:scale-110" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#EAD8C2]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                </div>

                {/* Period - Enhanced with animation */}
                <div className={`lg:w-1/4 lg:pt-2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  <div className="bg-gradient-to-br from-white/95 via-white/90 to-[#FAF0E6]/80 backdrop-blur-md border border-[#EAD8C2]/50 rounded-2xl px-6 py-4 lg:px-7 lg:py-5 shadow-soft-lg glow-soft transition-all duration-700 hover:shadow-soft-lg hover:border-[#EAD8C2] hover:scale-[1.02] hover:-translate-y-1 fade-scale hover-lift-shadow slide-left-fade">
                    <p className="text-sm font-semibold text-[#2a2a2a] uppercase tracking-[0.25em] text-reveal-stagger">
                      {exp.period}
                    </p>
                    {/* Decorative line */}
                    <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-[#EAD8C2] to-transparent fade-scale" />
                  </div>
                </div>

                {/* Content - Enhanced with more animations */}
                <div className={`lg:w-3/4 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}`}>
                  <div className="group relative glass-enhanced border border-[#EAD8C2]/50 rounded-2xl p-7 lg:p-9 shadow-soft-lg hover:shadow-soft-lg ambient-light border-animate transition-all duration-700 hover:-translate-y-1 hover:scale-[1.01] fade-scale hover-lift-shadow tilt-3d overflow-hidden slide-right-fade" style={{ transformOrigin: 'center' }}>
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EAD8C2]/0 via-[#EAD8C2]/0 to-[#EAD8C2]/0 group-hover:from-[#EAD8C2]/5 group-hover:via-[#EAD8C2]/3 group-hover:to-[#EAD8C2]/5 transition-all duration-700 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#1a1a1a] mb-4 text-shadow-soft text-reveal-stagger">
                        {exp.title}
                      </h3>
                      <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-gradient-to-r from-[#EAD8C2] to-transparent fade-scale" />
                        <p className="text-sm font-semibold text-[#EAD8C2] uppercase tracking-[0.25em] text-reveal-stagger">
                          {exp.company}
                        </p>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#EAD8C2]/30 to-transparent fade-scale" />
                      </div>
                      <p className="text-base lg:text-lg font-light leading-loose text-[#3a3a3a] text-reveal-stagger">
                        {exp.description}
                      </p>
                    </div>

                    {/* Decorative corner elements with animation */}
                    <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-[#EAD8C2]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-float" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-4 left-4 h-20 w-20 rounded-full bg-[#EAD8C2]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-float" style={{ animationDelay: '1s' }} />
                    
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-[#EAD8C2]/0 group-hover:border-[#EAD8C2]/30 transition-all duration-700 pointer-events-none" />
                    
                    {/* Light beam effect */}
                    <div className="absolute inset-0 light-beam opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

