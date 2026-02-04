'use client';

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";
import { gsap } from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create optimized timeline for hero animations - GPU accelerated
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', force3D: true } });

    // Animate badges - optimized
    if (badgesRef.current) {
      const badges = badgesRef.current.children;
      Array.from(badges).forEach((badge) => {
        gsap.set(badge, { force3D: true, willChange: 'transform, opacity' });
      });
      tl.fromTo(
        badges,
        { opacity: 0, y: 20, scale: 0.9, force3D: true },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.08,
          force3D: true,
          onComplete: () => {
            Array.from(badges).forEach((badge) => {
              gsap.set(badge, { willChange: 'auto' });
            });
          }
        }
      );
    }

    // Animate title - optimized
    if (titleRef.current) {
      const titleLines = titleRef.current.children;
      Array.from(titleLines).forEach((line) => {
        gsap.set(line, { force3D: true, willChange: 'transform, opacity' });
      });
      tl.fromTo(
        titleLines,
        { opacity: 0, y: 30, force3D: true },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          stagger: 0.12,
          force3D: true,
          onComplete: () => {
            Array.from(titleLines).forEach((line) => {
              gsap.set(line, { willChange: 'auto' });
            });
          }
        },
        '-=0.2'
      );
    }

    // Animate description - optimized
    const description = sectionRef.current.querySelector('.hero-description');
    if (description) {
      gsap.set(description, { force3D: true, willChange: 'transform, opacity' });
      tl.fromTo(
        description,
        { opacity: 0, y: 20, force3D: true },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7,
          force3D: true,
          onComplete: () => {
            gsap.set(description, { willChange: 'auto' });
          }
        },
        '-=0.3'
      );
    }

    // Animate buttons - optimized
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children;
      Array.from(buttons).forEach((btn) => {
        gsap.set(btn, { force3D: true, willChange: 'transform, opacity' });
      });
      tl.fromTo(
        buttons,
        { opacity: 0, scale: 0.9, y: 20, force3D: true },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.08,
          force3D: true,
          onComplete: () => {
            Array.from(buttons).forEach((btn) => {
              gsap.set(btn, { willChange: 'auto' });
            });
          }
        },
        '-=0.3'
      );
    }

    // Animate image - optimized
    if (imageRef.current) {
      gsap.set(imageRef.current, { force3D: true, willChange: 'transform, opacity' });
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95, x: 50, force3D: true },
        { 
          opacity: 1, 
          scale: 1, 
          x: 0, 
          duration: 0.8,
          force3D: true,
          onComplete: () => {
            gsap.set(imageRef.current, { willChange: 'auto' });
          }
        },
        '-=0.5'
      );
    }

    // Parallax effect for background particles
    const particles = sectionRef.current.querySelectorAll('.float-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -30,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 overflow-hidden">
      {/* Advanced decorative background elements */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[#EAD8C2]/8 blur-3xl animate-float float-particle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-[#EAD8C2]/6 blur-3xl animate-float float-particle" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 h-48 w-48 rounded-full bg-[#EAD8C2]/4 blur-2xl animate-float float-particle" style={{ animationDelay: '2s' }} />
      
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center gap-8 px-6 pb-12 pt-24 lg:flex-row lg:items-center lg:gap-8 lg:px-12">
        {/* Left – Text & CTA - Gen Z Modern Layout */}
        <div className="space-y-5 lg:flex-1 lg:max-w-xl">
          <div className="reveal reveal-left space-y-5" suppressHydrationWarning>
            {/* Role Badges - Gen Z Style */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2 gsap-stagger" data-stagger-selector="span" data-stagger-delay="0.1" suppressHydrationWarning>
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/30 to-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2a2a] border border-[#EAD8C2]/50 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                PHOTOGRAPHER
              </span>
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/30 to-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2a2a] border border-[#EAD8C2]/50 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                MODEL
              </span>
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/30 to-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2a2a] border border-[#EAD8C2]/50 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                EDITOR
              </span>
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/30 to-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2a2a] border border-[#EAD8C2]/50 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                DESIGNER
              </span>
            </div>
            
            <h1 ref={titleRef} className="text-balance font-serif font-light text-5xl leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-6xl lg:text-7xl gsap-stagger" data-stagger-selector="span" data-stagger-delay="0.15">
              <span className="block">Capturing</span>
              <span className="block italic gradient-text-animated mt-1 text-shadow-soft font-normal">beauty,</span>
              <span className="block mt-1 font-light">defining</span>
              <span className="block italic text-[#EAD8C2] mt-1 font-normal">style.</span>
            </h1>
            <p className="hero-description max-w-lg text-base font-light leading-[1.7] text-[#3a3a3a] lg:text-lg">
              Professional photographer and model with three decades of experience. Creating timeless imagery for luxury brands and leading publications worldwide.
            </p>
          </div>

          <div ref={buttonsRef} className="reveal stagger-1 flex flex-wrap items-center gap-5 fade-up-stagger gsap-stagger" data-stagger-selector="a" data-stagger-delay="0.1">
            <Link
              href="#work"
              className="btn-premium group magnetic-advanced inline-flex items-center gap-3 rounded-full hover:scale-103 px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] hover-lift-shadow relative overflow-hidden" style={{ transformOrigin: 'center' }}
            >
              <span className="relative z-10">View Portfolio</span>
              <AppIcon
                name="ArrowRightIcon"
                size={18}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 relative z-10"
              />
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link
              href="#contact"
              className="group/secondary magnetic-advanced inline-flex items-center gap-3 border-2 border-[#EAD8C2] bg-white/80 backdrop-blur-md px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] text-[#2a2a2a] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#EAD8C2] hover:bg-[#EAD8C2]/30 hover:scale-103 hover:-translate-y-0.5 hover:shadow-soft-lg hover-lift-shadow" style={{ transformOrigin: 'center' }}
            >
              <AppIcon name="EnvelopeIcon" size={18} className="transition-transform duration-500 group-hover/secondary:translate-x-1 group-hover/secondary:rotate-12" />
              Get in Touch
            </Link>
          </div>

          <div className="reveal mt-6 flex flex-wrap items-start gap-6 lg:gap-8 border-t border-[#EAD8C2]/30 pt-6">
            <div className="group cursor-default relative">
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] transition-all duration-500 group-hover:scale-110 group-hover:text-[#EAD8C2]" style={{ transformOrigin: 'center' }}>30+</div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a]">
                Years Experience
              </p>
            </div>
            <div className="group cursor-default relative">
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] transition-all duration-500 group-hover:scale-110 group-hover:text-[#EAD8C2]" style={{ transformOrigin: 'center' }}>500+</div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a]">
                Projects
              </p>
            </div>
            <div className="group cursor-default relative">
              <div className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] transition-all duration-500 group-hover:scale-110 group-hover:text-[#EAD8C2]" style={{ transformOrigin: 'center' }}>200+</div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a]">
                Clients
              </p>
            </div>
          </div>
        </div>

        {/* Right – Compact portrait - Gen Z Style */}
        <div ref={imageRef} className="reveal reveal-right relative w-full max-w-sm mx-auto lg:max-w-md lg:mx-0 gsap-fade-right">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1" style={{ transformOrigin: 'center' }}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_13e03185c-1763293438763.png"
                alt="Professional photographer and model"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                width={400}
                height={533}
                priority
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badge on hover */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[#EAD8C2]/30 shadow-sm">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2a2a2a]">Editorial Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


