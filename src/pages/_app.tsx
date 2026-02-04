import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@/styles/globals.css";
import { initGSAPAnimations } from "@/lib/gsap/animations";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize GSAP animations (works harmoniously with CSS animations)
    initGSAPAnimations();

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 50);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    // Observe all reveal elements with advanced animations
    const observeReveals = () => {
      const selectors = [
        ".reveal", ".reveal-left", ".reveal-right", ".reveal-rotate", ".reveal-scale",
        ".text-reveal", ".text-reveal-stagger", ".rotate-reveal", ".slide-up",
        ".fade-scale", ".rotate-fade", ".scroll-reveal", ".slide-left-fade",
        ".slide-right-fade", ".zoom-fade", ".fade-up-stagger"
      ];
      
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          if (!el.classList.contains("active")) {
            observer.observe(el);
          }
        });
      });
    };

    // Initial observe with delay to ensure DOM is ready
    setTimeout(observeReveals, 100);
    
    // Observe new elements periodically (for dynamic content)
    const interval = setInterval(observeReveals, 300);
    
    // Also observe on DOM mutations
    const mutationObserver = new MutationObserver(() => {
      observeReveals();
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Optimized parallax scroll effect with requestAnimationFrame and caching
    let ticking = false;
    let cachedElements: {
      parallax: HTMLElement[];
      scaleOnScroll: HTMLElement[];
      scrollReveals: HTMLElement[];
      timelineDots: HTMLElement[];
      parallaxTexts: HTMLElement[];
    } | null = null;

    // Cache DOM queries once
    const cacheElements = () => {
      if (cachedElements) return cachedElements;
      cachedElements = {
        parallax: Array.from(document.querySelectorAll<HTMLElement>(".parallax")),
        scaleOnScroll: Array.from(document.querySelectorAll<HTMLElement>(".scale-on-scroll")),
        scrollReveals: Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal, .fade-up-stagger")),
        timelineDots: Array.from(document.querySelectorAll<HTMLElement>(".timeline-dot")),
        parallaxTexts: Array.from(document.querySelectorAll<HTMLElement>(".parallax-text")),
      };
      return cachedElements;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const elements = cacheElements();
          
          // Parallax elements - optimized
          elements.parallax.forEach((el) => {
            const speed = parseFloat(el.dataset.speed || "0.5");
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementCenter = elementTop + rect.height / 2;
            const windowCenter = scrolled + window.innerHeight / 2;
            const distance = windowCenter - elementCenter;
            el.style.transform = `translate3d(0, ${distance * speed * 0.1}px, 0)`;
            el.style.willChange = 'transform';
          });

          // Scale on scroll - batch check
          const viewportHeight = window.innerHeight;
          elements.scaleOnScroll.forEach((el) => {
            if (!el.classList.contains("active")) {
              const rect = el.getBoundingClientRect();
              if (rect.top < viewportHeight && rect.bottom > 0) {
                el.classList.add("active");
              }
            }
          });

          // Scroll reveal animations - batch check
          const threshold = viewportHeight * 0.9;
          elements.scrollReveals.forEach((el) => {
            if (!el.classList.contains("active")) {
              const rect = el.getBoundingClientRect();
              if (rect.top < threshold && rect.bottom > 0) {
                el.classList.add("active");
              }
            }
          });

          // Timeline progress animation - batch check
          const timelineThreshold = viewportHeight * 0.8;
          elements.timelineDots.forEach((dot, index) => {
            if (!dot.classList.contains("active")) {
              const rect = dot.getBoundingClientRect();
              if (rect.top < timelineThreshold && rect.bottom > 0) {
                setTimeout(() => {
                  dot.classList.add("active");
                }, index * 200);
              }
            }
          });

          // Parallax text effect - optimized
          elements.parallaxTexts.forEach((el) => {
            const speed = parseFloat(el.dataset.speed || "0.3");
            const yPos = -(scrolled * speed);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            el.style.willChange = 'transform';
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    // Re-cache on DOM mutations (for dynamic content)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    const recacheObserver = new MutationObserver(() => {
      cachedElements = null; // Invalidate cache
    });
    recacheObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Smooth cursor effect for interactive elements
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    // Optimized magnetic effect with requestAnimationFrame
    const magneticElements = document.querySelectorAll<HTMLElement>(".magnetic-advanced");
    let magneticRaf: number | null = null;
    
    magneticElements.forEach((el) => {
      // Set transform origin to prevent layout shift
      el.style.transformOrigin = "center";
      el.style.willChange = "transform";
      el.style.backfaceVisibility = "hidden";
      el.style.perspective = "1000px";
      
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      
      const updateTransform = () => {
        // Smooth interpolation
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        
        if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
          el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.02)`;
          magneticRaf = requestAnimationFrame(updateTransform);
        } else {
          el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.02)`;
        }
      };
      
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          targetX = (x / maxDistance) * 5;
          targetY = (y / maxDistance) * 5;
          
          if (!magneticRaf) {
            magneticRaf = requestAnimationFrame(updateTransform);
          }
        } else {
          targetX = 0;
          targetY = 0;
        }
      }, { passive: true });
      
      el.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;
        if (!magneticRaf) {
          magneticRaf = requestAnimationFrame(updateTransform);
        }
      });
    });

    // Optimized cursor update with requestAnimationFrame
    let cursorRaf: number | null = null;
    let cursorX = 0;
    let cursorY = 0;
    let targetCursorX = 0;
    let targetCursorY = 0;
    
    const updateCursorTransform = () => {
      cursorX += (targetCursorX - cursorX) * 0.15;
      cursorY += (targetCursorY - cursorY) * 0.15;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      
      if (Math.abs(targetCursorX - cursorX) > 0.1 || Math.abs(targetCursorY - cursorY) > 0.1) {
        cursorRaf = requestAnimationFrame(updateCursorTransform);
      }
    };
    
    const updateCursor = (e: MouseEvent) => {
      targetCursorX = e.clientX;
      targetCursorY = e.clientY;
      
      if (!cursorRaf) {
        cursorRaf = requestAnimationFrame(updateCursorTransform);
      }
      
      // Update CSS variables for ambient light (throttled)
      if (!cursorRaf) {
        const ambientElements = document.querySelectorAll<HTMLElement>(".ambient-light");
        ambientElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          el.style.setProperty("--mouse-x", `${x}%`);
          el.style.setProperty("--mouse-y", `${y}%`);
        });
      }
    };

    const handleMouseEnter = () => cursor.classList.add("active");
    const handleMouseLeave = () => cursor.classList.remove("active");

    document.addEventListener("mousemove", updateCursor);
    const interactiveElements = document.querySelectorAll("a, button, .group, .magnetic");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      clearInterval(interval);
      mutationObserver.disconnect();
      recacheObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", updateCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (magneticRaf) cancelAnimationFrame(magneticRaf);
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      cursor.remove();
    };
  }, []);

  return <Component {...pageProps} />;
}


