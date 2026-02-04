'use client';

import { useState, useEffect, useRef } from "react";
import AppIcon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import { gsap } from 'gsap';

// Dynamically import ScrollTrigger
let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then((scrollTriggerModule) => {
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const coreDisciplines = [
  {
    title: "Photographer",
    subtitle: "Editorial · Fashion · Commercial",
    description: "Master of light and composition. Specialized in editorial photography, fashion campaigns, and high-end commercial work.",
    icon: "CameraIcon",
    color: "from-[#EAD8C2] to-[#EAD8C2]/60",
    years: "30+",
    featured: true,
    gallery: [
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
    ],
  },
  {
    title: "Model",
    subtitle: "Editorial · Runway · Campaign",
    description: "Professional model with deep understanding of both sides of the camera. Bringing authenticity and versatility to every project.",
    icon: "UserIcon",
    color: "from-[#EAD8C2]/90 to-[#EAD8C2]/50",
    years: "15+",
    featured: true,
    gallery: [
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
    ],
  },
  {
    title: "Designer",
    subtitle: "Visual & Brand Identity",
    description: "Creating compelling visual narratives through brand identity, UI/UX design, and art direction for luxury brands.",
    icon: "PaintBrushIcon",
    color: "from-[#EAD8C2]/80 to-[#EAD8C2]/40",
    years: "30+",
    featured: false,
    gallery: [
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
    ],
  },
  {
    title: "Video Editor",
    subtitle: "Cinematic & Motion",
    description: "Crafting cinematic stories through color grading, motion design, and seamless editing for commercial and artistic projects.",
    icon: "VideoCameraIcon",
    color: "from-[#EAD8C2]/70 to-[#EAD8C2]/30",
    years: "25+",
    featured: false,
    gallery: [
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
    ],
  },
];

export default function CoreDisciplinesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activeCardRef = useRef<HTMLDivElement>(null);
  const sideCardsRef = useRef<HTMLDivElement>(null);

  // GSAP animations when activeIndex changes
  useEffect(() => {
    if (activeCardRef.current) {
      gsap.fromTo(
        activeCardRef.current,
        { opacity: 0, x: -30, force3D: true },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          ease: 'power2.out',
          force3D: true
        }
      );
    }

    if (sideCardsRef.current) {
      const cards = sideCardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, x: 30, force3D: true },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power2.out',
          force3D: true
        }
      );
    }
  }, [activeIndex]);

  // GSAP animations on mount
  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate header
    const header = sectionRef.current.querySelector('.section-header');
    if (header) {
      gsap.set(header, { force3D: true, willChange: 'transform, opacity' });
      gsap.fromTo(
        header,
        { opacity: 0, y: 30, force3D: true },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out',
          force3D: true,
          onComplete: () => {
            gsap.set(header, { willChange: 'auto' });
          }
        }
      );
    }
  }, []);

  // Get other disciplines (excluding active one)
  const otherDisciplines = coreDisciplines.filter((_, index) => index !== activeIndex);

  return (
    <section ref={sectionRef} className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 py-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header text-center mb-8 lg:mb-10">
          <div className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/30 via-[#EAD8C2]/25 to-[#EAD8C2]/30 backdrop-blur-md px-4 py-1.5 border border-[#EAD8C2]/50 shadow-sm mb-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2a2a2a]">
              Photography & Modeling
            </p>
          </div>
          <h2 className="font-serif text-2xl font-light leading-tight tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl xl:text-5xl mb-3">
            Behind & In Front of the Lens
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-[#3a3a3a] sm:text-base">
            Three decades of experience as both photographer and model, bringing unique perspective to every editorial, fashion, and commercial project.
          </p>
        </div>

        {/* Split Layout: Active Card Left, Other Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 lg:gap-6 lg:min-h-[600px]">
          {/* Left: Active/Selected Card - Expanded View */}
          <div ref={activeCardRef} className="order-2 lg:order-1">
            {coreDisciplines.map((discipline, index) => {
              if (index !== activeIndex) return null;
              
              return (
                <div
                  key={discipline.title}
                  className="group/card relative bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-[#EAD8C2]/20 shadow-lg hover:shadow-xl transition-all duration-300 ease-out w-full h-full flex flex-col"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${discipline.color} rounded-xl opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  {/* Icon & Header */}
                  <div className="flex items-start gap-4 mb-3 relative z-10">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${discipline.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/card:scale-110 shrink-0`}>
                      <AppIcon
                        // @ts-expect-error – mapping by string
                        name={discipline.icon}
                        size={28}
                        className="text-[#2a2a2a]"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#1a1a1a]">
                          {discipline.title}
                        </h3>
                        {discipline.featured && (
                          <span className="inline-block rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-widest bg-gradient-to-r from-[#EAD8C2] to-[#EAD8C2]/80 text-[#2a2a2a] shrink-0">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-[0.15em]">
                        {discipline.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Years Experience */}
                  <div className="flex items-baseline gap-3 mb-3 pb-3 border-b border-[#EAD8C2]/15 relative z-10">
                    <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#EAD8C2] to-[#EAD8C2]/60 bg-clip-text text-transparent">
                      {discipline.years}
                    </span>
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-[0.15em]">
                      Years Experience
                    </span>
                  </div>

                  {/* Description - Extended */}
                  <div className="mb-4 relative z-10 space-y-2">
                    <p className="text-sm font-light leading-relaxed text-[#3a3a3a]">
                      {discipline.description}
                    </p>
                    <p className="text-xs font-light leading-relaxed text-[#5a5a5a]">
                      With expertise spanning multiple decades, I bring a unique perspective that combines technical mastery with artistic vision. Each project is approached with meticulous attention to detail, ensuring that every image tells a compelling story and captures the essence of the moment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EAD8C2]/20 text-xs font-medium text-[#3a3a3a]">
                        Professional Quality
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EAD8C2]/20 text-xs font-medium text-[#3a3a3a]">
                        Creative Vision
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EAD8C2]/20 text-xs font-medium text-[#3a3a3a]">
                        Timeless Results
                      </span>
                    </div>
                  </div>

                  {/* Full Gallery Grid - 3 columns, 9 images */}
                  <div className="grid grid-cols-3 gap-3 relative z-10 mb-4">
                    {discipline.gallery.slice(0, 9).map((imageUrl, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="group/image relative overflow-hidden rounded-lg aspect-square bg-gray-100"
                      >
                        <AppImage
                          src={imageUrl}
                          alt={`${discipline.title} ${imgIndex + 1}`}
                          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover/image:scale-110"
                          width={300}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 relative z-10">
                    <button className="px-6 py-3 rounded-lg bg-[#EAD8C2] hover:bg-[#EAD8C2]/90 text-[#2a2a2a] text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                      <AppIcon
                        name="CameraIcon"
                        size={18}
                        className="text-[#2a2a2a]"
                      />
                      View Album
                    </button>
                    <button className="px-6 py-3 rounded-lg bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
                      <AppIcon
                        name="ArrowRightIcon"
                        size={18}
                        className="text-[#3a3a3a]"
                      />
                      Learn More
                    </button>
                    <button className="px-6 py-3 rounded-lg bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
                      <AppIcon
                        name="EnvelopeIcon"
                        size={18}
                        className="text-[#3a3a3a]"
                      />
                      Contact
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Other Cards - Compact View */}
          <div ref={sideCardsRef} className="order-1 lg:order-2 flex flex-col gap-3 lg:gap-4">
            {otherDisciplines.map((discipline) => {
              // Find original index in coreDisciplines array
              const originalIdx = coreDisciplines.findIndex(d => d.title === discipline.title);
              
              return (
                <div
                  key={discipline.title}
                  className="group/card relative bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-[#EAD8C2]/20 shadow-sm hover:shadow-md hover:border-[#EAD8C2]/40 transition-all duration-300 ease-out flex flex-col"
                >
                  {/* Icon & Header - Compact */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${discipline.color} flex items-center justify-center shadow-md transition-transform duration-300 group-hover/card:scale-110 shrink-0`}>
                      <AppIcon
                        // @ts-expect-error – mapping by string
                        name={discipline.icon}
                        size={20}
                        className="text-[#2a2a2a]"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base lg:text-lg font-normal text-[#1a1a1a] truncate">
                          {discipline.title}
                        </h3>
                        {discipline.featured && (
                          <span className="inline-block rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest bg-gradient-to-r from-[#EAD8C2] to-[#EAD8C2]/80 text-[#2a2a2a] shrink-0">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.15em] truncate">
                        {discipline.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Years Experience - Compact */}
                  <div className="flex items-baseline gap-2 mb-2 pb-2 border-b border-[#EAD8C2]/10">
                    <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#EAD8C2] to-[#EAD8C2]/60 bg-clip-text text-transparent">
                      {discipline.years}
                    </span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.15em]">
                      Years
                    </span>
                  </div>

                  {/* Description - Compact */}
                  <p className="text-xs font-light leading-relaxed text-[#3a3a3a] line-clamp-2 mb-3">
                    {discipline.description}
                  </p>

                  {/* Mini Gallery Preview - 3 small images */}
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    {discipline.gallery.slice(0, 3).map((imageUrl, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden rounded-md aspect-square bg-gray-100"
                      >
                        <AppImage
                          src={imageUrl}
                          alt={`${discipline.title} ${imgIndex + 1}`}
                          className="h-full w-full object-cover object-center"
                          width={100}
                          height={100}
                        />
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => setActiveIndex(originalIdx)}
                    className="w-full px-3 py-2 rounded-lg bg-[#EAD8C2]/20 hover:bg-[#EAD8C2]/30 text-[#3a3a3a] text-xs font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-sm mt-auto"
                  >
                    View More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
