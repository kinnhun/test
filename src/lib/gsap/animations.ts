import { gsap } from 'gsap';

// Dynamically import ScrollTrigger only on client side
let ScrollTrigger: any = null;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then((module) => {
    ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

// Animation presets that work harmoniously with CSS animations
export const gsapAnimations = {
  // Fade in from bottom (works with CSS reveal)
  fadeUp: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
      }
    );
  },

  // Fade in from left (works with CSS reveal-left)
  fadeLeft: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
      }
    );
  },

  // Fade in from right (works with CSS reveal-right)
  fadeRight: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
      }
    );
  },

  // Scale fade (works with CSS fade-scale)
  scaleFade: (element: HTMLElement, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        ease: 'back.out(1.2)',
      }
    );
  },

  // Stagger children (works with CSS stagger classes)
  staggerChildren: (container: HTMLElement, selector: string, delay = 0.1) => {
    const children = container.querySelectorAll(selector);
    return gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: delay,
        ease: 'power2.out',
      }
    );
  },

  // Text reveal (works with CSS text-reveal)
  textReveal: (element: HTMLElement, delay = 0) => {
    const text = element.textContent || '';
    element.textContent = '';
    element.style.opacity = '1';
    
    return gsap.fromTo(
      { progress: 0 },
      {
        progress: 1,
        duration: text.length * 0.05,
        delay,
        ease: 'none',
        onUpdate: function() {
          const chars = Math.floor(this.progress * text.length);
          element.textContent = text.slice(0, chars);
        },
      }
    );
  },

  // Magnetic hover effect (works with CSS magnetic)
  magnetic: (element: HTMLElement) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },

  // Scroll-triggered animation
  scrollReveal: (
    element: HTMLElement,
    options: {
      start?: string;
      end?: string;
      scrub?: boolean;
      markers?: boolean;
    } = {}
  ) => {
    if (typeof window === 'undefined' || !ScrollTrigger) {
      // Fallback to regular animation if ScrollTrigger not available
      return gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
    
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: options.start || 'top 80%',
          end: options.end || 'top 50%',
          scrub: options.scrub || false,
          markers: options.markers || false,
        },
      }
    );
  },

  // Parallax effect
  parallax: (element: HTMLElement, speed = 0.5) => {
    if (typeof window === 'undefined' || !ScrollTrigger) {
      return gsap.to(element, { y: 0 }); // No-op if ScrollTrigger not available
    }
    
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  },

  // Smooth scale on hover (works with CSS hover effects)
  hoverScale: (element: HTMLElement, scale = 1.05) => {
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },
};

// Initialize GSAP animations for elements with specific classes
export const initGSAPAnimations = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  setTimeout(() => {
    // Animate elements with .gsap-fade-up
    document.querySelectorAll<HTMLElement>('.gsap-fade-up').forEach((el, index) => {
      gsapAnimations.fadeUp(el, index * 0.1);
    });

    // Animate elements with .gsap-fade-left
    document.querySelectorAll<HTMLElement>('.gsap-fade-left').forEach((el, index) => {
      gsapAnimations.fadeLeft(el, index * 0.1);
    });

    // Animate elements with .gsap-fade-right
    document.querySelectorAll<HTMLElement>('.gsap-fade-right').forEach((el, index) => {
      gsapAnimations.fadeRight(el, index * 0.1);
    });

    // Animate elements with .gsap-scale-fade
    document.querySelectorAll<HTMLElement>('.gsap-scale-fade').forEach((el, index) => {
      gsapAnimations.scaleFade(el, index * 0.1);
    });

    // Stagger animations for containers
    document.querySelectorAll<HTMLElement>('.gsap-stagger').forEach((container) => {
      const selector = container.getAttribute('data-stagger-selector') || '> *';
      const delay = parseFloat(container.getAttribute('data-stagger-delay') || '0.1');
      gsapAnimations.staggerChildren(container, selector, delay);
    });

    // Magnetic effects
    document.querySelectorAll<HTMLElement>('.gsap-magnetic').forEach((el) => {
      gsapAnimations.magnetic(el);
    });

    // Hover scale effects
    document.querySelectorAll<HTMLElement>('.gsap-hover-scale').forEach((el) => {
      gsapAnimations.hoverScale(el);
    });

    // Scroll-triggered reveals
    document.querySelectorAll<HTMLElement>('.gsap-scroll-reveal').forEach((el) => {
      gsapAnimations.scrollReveal(el);
    });

    // Parallax effects
    document.querySelectorAll<HTMLElement>('.gsap-parallax').forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.5');
      gsapAnimations.parallax(el, speed);
    });
  }, 100);
};

