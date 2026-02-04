'use client';

import { useState, useEffect, useRef } from "react";
import AppIcon from "@/components/ui/AppIcon";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial_1",
    quote: "Working with this creative professional was an absolute pleasure. Their 30 years of experience shone through in every aspect of our campaign. The attention to detail, artistic vision, and ability to understand our brand's essence was remarkable.",
    author: "Sarah Mitchell",
    role: "Creative Director",
    company: "Luxury Fashion House",
    rating: 5
  },
  {
    id: "testimonial_2",
    quote: "The combination of photography and modeling expertise brought a unique perspective to our project. The results exceeded our expectations, and the professionalism throughout the entire process was outstanding.",
    author: "James Chen",
    role: "Marketing Director",
    company: "Global Lifestyle Brand",
    rating: 5
  },
  {
    id: "testimonial_3",
    quote: "As someone who has worked with many photographers and designers, I can confidently say this is one of the most talented professionals in the industry. The ability to seamlessly blend multiple disciplines creates work that is truly exceptional.",
    author: "Emma Rodriguez",
    role: "Art Director",
    company: "International Agency",
    rating: 5
  },
  {
    id: "testimonial_4",
    quote: "The brand identity redesign transformed our company's visual presence. The strategic thinking combined with creative execution resulted in a cohesive system that perfectly represents our values and resonates with our audience.",
    author: "Michael Thompson",
    role: "CEO",
    company: "Tech Startup",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3); // Desktop: 3 items
      } else if (width >= 768) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const maxIndex = Math.max(0, testimonials.length - itemsPerView);
          return prev >= maxIndex ? 0 : prev + 1;
        });
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView]);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToSlide = (index: number) => {
    const clampedIndex = Math.min(index, maxIndex);
    if (clampedIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(clampedIndex);
      setIsAutoPlaying(false);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
      setIsAutoPlaying(false);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setIsAutoPlaying(false);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 py-10 lg:py-14 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-[#EAD8C2]/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-[#EAD8C2]/4 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="reveal mb-6 md:mb-8 text-center">
          <div className="inline-block rounded-full bg-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 border border-[#EAD8C2]/40 mb-3">
            <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
              Client Feedback
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-4 text-shadow-soft">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg font-light leading-[1.8] text-[#3a3a3a] mb-4 lg:text-xl">
            Trusted by leading brands and creative professionals worldwide. Here's what clients say about working together.
          </p>
          <div className="mx-auto h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent" />
        </div>

        {/* Slider Container */}
        <div className="relative" ref={containerRef}>
          {/* Slider Wrapper */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3 md:px-4 flex items-stretch"
                >
                  <div className={`group relative w-full h-full bg-white/95 backdrop-blur-md border border-[#EAD8C2]/50 rounded-xl p-4 md:p-5 lg:p-6 shadow-soft-lg glow-soft light-beam transition-all duration-700 hover:shadow-soft-lg hover:scale-[1.02] hover:-translate-y-1 hover:border-[#EAD8C2] hover:bg-white flex flex-col ${isTransitioning ? 'opacity-60 scale-95' : 'opacity-100 scale-100'}`} style={{ transformOrigin: 'center' }}>
                    {/* Quote Icon - Animated */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <AppIcon name="HeartIcon" size={48} className="text-[#EAD8C2] animate-pulse-slow" />
                    </div>

                    {/* Quote - Centered and Aligned */}
                    <div className="relative z-10 mb-4 flex-1 flex flex-col justify-center">
                      <div className="mb-3 flex justify-center">
                        <div className="rounded-full bg-[#EAD8C2]/10 p-2 md:p-2.5 transition-all duration-500 group-hover:bg-[#EAD8C2]/30 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-soft-lg inline-block" style={{ transformOrigin: 'center' }}>
                          <AppIcon name="HeartIcon" size={20} className="md:w-6 md:h-6 text-[#EAD8C2] opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 inline-block" style={{ transformOrigin: 'center' }} />
                        </div>
                      </div>
                      <p className="text-sm md:text-base lg:text-lg font-light leading-[1.7] text-[#2a2a2a] italic mx-auto text-center transition-all duration-500 group-hover:text-[#1a1a1a]">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Rating - Centered with Animation */}
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div
                          key={i}
                          className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 inline-block"
                          style={{ transformOrigin: 'center', transitionDelay: `${i * 80}ms` }}
                        >
                          <AppIcon
                            name="HeartIcon"
                            size={16}
                            className="md:w-4 md:h-4 text-[#EAD8C2] fill-[#EAD8C2] transition-all duration-500 group-hover:text-[#EAD8C2] group-hover:fill-[#EAD8C2]"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Author - Centered */}
                    <div className="border-t border-[#EAD8C2]/30 pt-4 text-center">
                      <p className="text-sm md:text-base font-medium text-[#1a1a1a] mb-1 transition-all duration-500 group-hover:text-[#EAD8C2] group-hover:font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-xs font-light text-gray-600 mb-1 transition-all duration-300 group-hover:text-[#2a2a2a] group-hover:font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-[10px] md:text-xs font-medium text-[#EAD8C2] uppercase tracking-[0.15em] transition-all duration-300 group-hover:tracking-[0.2em] group-hover:text-[#EAD8C2]">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Hover Glow Effect - Enhanced */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EAD8C2]/0 via-[#EAD8C2]/0 to-[#EAD8C2]/0 group-hover:from-[#EAD8C2]/15 group-hover:via-[#EAD8C2]/8 group-hover:to-[#EAD8C2]/15 transition-all duration-700 pointer-events-none" />
                    
                    {/* Light Beam Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Enhanced */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border-2 border-[#EAD8C2]/50 shadow-soft-lg glow-soft transition-all duration-500 hover:bg-[#EAD8C2]/30 hover:scale-110 hover:shadow-soft-lg hover:border-[#EAD8C2] group" style={{ transformOrigin: 'center' }}
            aria-label="Previous testimonial"
          >
            <AppIcon name="ChevronLeftIcon" size={22} className="text-[#2a2a2a] transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border-2 border-[#EAD8C2]/50 shadow-soft-lg glow-soft transition-all duration-500 hover:bg-[#EAD8C2]/30 hover:scale-110 hover:shadow-soft-lg hover:border-[#EAD8C2] group" style={{ transformOrigin: 'center' }}
            aria-label="Next testimonial"
          >
            <AppIcon name="ChevronRightIcon" size={22} className="text-[#2a2a2a] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Dots Indicator - Enhanced */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-[#EAD8C2] shadow-soft-lg'
                    : 'w-3 h-3 bg-[#EAD8C2]/30 hover:bg-[#EAD8C2]/60 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

