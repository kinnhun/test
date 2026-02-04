'use client';

import AppImage from "@/components/ui/AppImage";
import AppIcon from "@/components/ui/AppIcon";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white/60 border-b border-[#EAD8C2]/30 py-12 lg:py-16"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-12">
        <div className="reveal reveal-left relative w-full lg:w-[42%] lg:flex-shrink-0">
          <div className="group relative overflow-hidden rounded-[3rem] shadow-soft-lg glow-soft light-beam magnetic ambient-light border-animate scale-on-scroll transition-all duration-700 hover:shadow-soft-lg hover:scale-[1.03] hover:rotate-[-1deg]">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] image-vignette">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_13e03185c-1763293438763.png"
                alt="Creative professional portrait showcasing artistic vision and expertise"
                className="h-full w-full object-cover object-center image-sharp image-hover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                width={800}
                height={1000}
              />
              {/* Enhanced overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-900" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#EAD8C2]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1200" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#EAD8C2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </div>

        <div className="reveal reveal-right space-y-6 lg:flex-1 lg:max-w-2xl">
          <div>
            <div className="inline-block rounded-full bg-gradient-to-r from-[#EAD8C2]/25 via-[#EAD8C2]/20 to-[#EAD8C2]/25 backdrop-blur-md px-6 py-2.5 border border-[#EAD8C2]/50 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:scale-[1.02] mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2a2a2a]">
                About Me
              </p>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[0.92] tracking-[-0.02em] text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-7">
              Three decades of mastering the art of <span className="italic text-[#EAD8C2] font-normal">visual storytelling.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-light leading-[1.95] text-[#3a3a3a] lg:text-xl">
                With 30 years of experience across design, photography, video editing, and modeling,
                I bring a unique multidisciplinary perspective to every project. My journey began in
                fashion design and modeling, evolving into a comprehensive creative practice that
                serves luxury brands, editorial publications, and global campaigns.
              </p>
              <p className="text-base font-light leading-[1.95] text-gray-600 lg:text-lg">
                Today, I combine technical mastery with artistic vision to create work that is both
                timeless and contemporary—crafted for brands and individuals who value excellence,
                authenticity, and the power of visual narrative.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-[#EAD8C2]/40 pt-10 lg:grid-cols-4">
            <div className="group cursor-default">
              <div className="text-6xl font-extralight text-[#1a1a1a] transition-all duration-700 group-hover:scale-105 group-hover:text-[#EAD8C2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] bg-clip-text group-hover:from-[#EAD8C2] group-hover:to-[#EAD8C2]/80 inline-block" style={{ transformOrigin: 'center' }}>30+</div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a] group-hover:tracking-[0.35em]">
                Years Experience
              </p>
            </div>
            <div className="group cursor-default">
              <div className="text-6xl font-extralight text-[#1a1a1a] transition-all duration-700 group-hover:scale-105 group-hover:text-[#EAD8C2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] bg-clip-text group-hover:from-[#EAD8C2] group-hover:to-[#EAD8C2]/80 inline-block" style={{ transformOrigin: 'center' }}>500+</div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a] group-hover:tracking-[0.35em]">
                Projects
              </p>
            </div>
            <div className="group cursor-default">
              <div className="text-6xl font-extralight text-[#1a1a1a] transition-all duration-700 group-hover:scale-105 group-hover:text-[#EAD8C2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] bg-clip-text group-hover:from-[#EAD8C2] group-hover:to-[#EAD8C2]/80 inline-block" style={{ transformOrigin: 'center' }}>200+</div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a] group-hover:tracking-[0.35em]">
                Clients
              </p>
            </div>
            <div className="group cursor-default">
              <div className="text-6xl font-extralight text-[#1a1a1a] transition-all duration-700 group-hover:scale-105 group-hover:text-[#EAD8C2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] bg-clip-text group-hover:from-[#EAD8C2] group-hover:to-[#EAD8C2]/80 inline-block" style={{ transformOrigin: 'center' }}>4</div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 transition-all duration-300 group-hover:text-[#2a2a2a] group-hover:tracking-[0.35em]">
                Disciplines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

