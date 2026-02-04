import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";


interface WorkItem {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  category: string;
  year: string;
  description?: string;
  skills?: string[];
  size: "small" | "medium" | "large";
}

const works: WorkItem[] = [
  {
    id: "work_1",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
    imageAlt:
      "Luxury fashion editorial photography",
    title: "Luxury Fashion Editorial",
    category: "Photography · Modeling",
    year: "2024",
    description: "Comprehensive editorial shoot combining photography and modeling expertise for luxury fashion brand.",
    skills: ["Editorial Photography", "Fashion Styling", "Model Direction"],
    size: "large",
  },
  {
    id: "work_2",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
    imageAlt: "Brand identity design system",
    title: "Brand Identity Redesign",
    category: "Design · Creative Direction",
    year: "2024",
    description: "Complete brand identity overhaul for international lifestyle brand.",
    skills: ["Brand Strategy", "Visual Identity", "Typography"],
    size: "medium",
  },
  {
    id: "work_3",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
    imageAlt:
      "Cinematic video production",
    title: "Cinematic Commercial",
    category: "Video Editing · Photography",
    year: "2025",
    description: "End-to-end production of high-budget commercial campaign.",
    skills: ["Cinematic Videography", "Color Grading", "Motion Design"],
    size: "medium",
  },
  {
    id: "work_4",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
    imageAlt:
      "Editorial portrait photography",
    title: "Editorial Portrait Series",
    category: "Photography",
    year: "2024",
    description: "Intimate portrait series exploring human emotion and connection.",
    skills: ["Portrait Photography", "Natural Lighting", "Composition"],
    size: "small",
  },
];

export default function SelectedWorksSection() {
  const featuredWork = works[0];
  const otherWorks = works.slice(1);

  return (
    <section
      id="work"
      className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 py-10 lg:py-14 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 h-64 w-64 rounded-full bg-[#EAD8C2]/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-0 h-56 w-56 rounded-full bg-[#EAD8C2]/5 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal mb-6 md:mb-8 text-center">
          <div className="inline-block rounded-full bg-[#EAD8C2]/20 backdrop-blur-sm px-4 py-1.5 border border-[#EAD8C2]/40 mb-3">
            <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
              Portfolio
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-4 text-shadow-soft">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg font-light leading-[1.8] text-[#3a3a3a] mb-4 lg:text-xl">
            A curated selection of projects showcasing 30 years of creative excellence, from photography and design to video editing and modeling.
          </p>
          <div className="mx-auto h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent" />
        </div>

        {/* Gen Z Grid Layout - Compact & Modern */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {works.map((work, index) => (
            <div
              key={work.id}
              className={`reveal stagger-${(index % 6) + 1} group`}
            >
              <Link href={`/work/${work.id}`} className="block">
                <div className="group/work relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm border border-[#EAD8C2]/40 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1 hover:border-[#EAD8C2]">
                  {/* Compact Image - Square/Rectangle */}
                  <div className="relative aspect-square overflow-hidden">
                    <AppImage
                      src={work.imageUrl}
                      alt={work.imageAlt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/work:scale-110"
                      width={400}
                      height={400}
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/work:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge - Top Left */}
                    <div className="absolute top-2 left-2 opacity-0 group-hover/work:opacity-100 transition-opacity duration-300">
                      <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#2a2a2a] border border-[#EAD8C2]/40">
                        {work.category.split(' · ')[0]}
                      </span>
                    </div>
                    
                    {/* Year Badge - Top Right */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover/work:opacity-100 transition-opacity duration-300">
                      <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[9px] font-bold text-[#2a2a2a]">
                        {work.year}
                      </span>
                    </div>
                  </div>

                  {/* Compact Content - Bottom */}
                  <div className="p-3 md:p-4">
                    <h3 className="font-serif text-sm md:text-base font-medium text-[#1a1a1a] leading-tight mb-1.5 group-hover/work:text-[#EAD8C2] transition-colors duration-300 line-clamp-2">
                      {work.title}
                    </h3>
                    
                    {work.skills && work.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {work.skills.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="inline-block rounded-full bg-[#EAD8C2]/10 px-2 py-0.5 text-[9px] font-semibold text-[#2a2a2a] border border-[#EAD8C2]/30"
                          >
                            {skill.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#EAD8C2]/0 via-[#EAD8C2]/0 to-[#EAD8C2]/0 group-hover/work:from-[#EAD8C2]/8 group-hover/work:via-[#EAD8C2]/5 group-hover/work:to-[#EAD8C2]/8 transition-all duration-500 pointer-events-none" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

