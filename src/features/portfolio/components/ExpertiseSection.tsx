import AppImage from "@/components/ui/AppImage";
import AppIcon from "@/components/ui/AppIcon";
import Link from "next/link";

interface ExpertiseCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const expertiseCards: ExpertiseCard[] = [
  {
    id: "photographer",
    title: "Photographer",
    subtitle: "Visual Storytelling",
    description: "Portrait · Lifestyle · Conceptual",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_174ce5528-1766817880345.png",
    imageAlt:
      "Professional photography portfolio showcasing portrait and lifestyle work",
  },
  {
    id: "designer",
    title: "Designer",
    subtitle: "Brand Identity",
    description: "Branding · Visual · Social Media",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18ee29488-1770113889089.png",
    imageAlt:
      "Graphic design work including branding and visual identity systems",
  },
  {
    id: "editor",
    title: "Editor",
    subtitle: "Motion & Color",
    description: "Video Editing · Color Grading · Reels",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1f9bb1bfa-1768199564122.png",
    imageAlt:
      "Video editing workspace showcasing professional post-production equipment",
  },
  {
    id: "model",
    title: "Model",
    subtitle: "Visual Expression",
    description: "Editorial · Commercial · Concept",
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1a218e052-1770113899408.png",
    imageAlt:
      "Professional modeling portfolio featuring editorial and commercial work",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative bg-[#FAF0E6] border-b border-[#EAD8C2]/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.15em] text-gray-500">
            Expertise
          </p>
          <h2 className="text-3xl font-light tracking-tight text-[#5a5a5a] sm:text-4xl lg:text-5xl mb-4">
            What I do best.
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-600">
            A focused selection of services tailored for brands, studios, and
            individuals who care about thoughtful visuals.
          </p>
        </div>

        {/* Soft grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {expertiseCards.map((card, index) => {
            const getImageHeight = () => {
              if (index === 0 || index === 3) return 'h-56 lg:h-64'; // Taller
              return 'h-48 lg:h-52'; // Standard
            };

            return (
              <div
                key={card.id}
                className="reveal group relative flex flex-col bg-white/80 backdrop-blur-sm border border-[#EAD8C2]/50 rounded-[2.5rem] transition-all duration-500 ease-out hover:border-[#EAD8C2] hover:shadow-soft-lg hover:-translate-y-2"
              >
                <div className="overflow-hidden bg-white/40 rounded-t-[2.5rem]">
                  <AppImage
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    className={`${getImageHeight()} w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08]`}
                    width={500}
                    height={320}
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs font-normal uppercase tracking-[0.15em] text-gray-500">
                    {card.subtitle}
                  </p>
                  <h3 className="text-lg font-light text-[#5a5a5a]">
                    {card.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="#work"
                      className="group/link inline-flex items-center gap-2 text-xs font-normal text-[#5a5a5a] transition-all duration-300 hover:text-[#6a6a6a]"
                    >
                      View related work
                      <AppIcon 
                        name="ArrowRightIcon" 
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
                {/* Floating decorative element */}
                <div className={`absolute ${index % 2 === 0 ? '-top-2 -right-2' : '-bottom-2 -left-2'} h-10 w-10 rounded-full bg-[#EAD8C2]/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

