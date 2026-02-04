'use client';

import AppImage from "@/components/ui/AppImage";
import AppIcon from "@/components/ui/AppIcon";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  skills: string[];
  results: string[];
  client?: string;
}

const projects: Project[] = [
  {
    id: "project_1",
    title: "Luxury Fashion Editorial",
    category: "Photography · Modeling",
    year: "2024",
    imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_13e8c661b-1767127114590.png",
    imageAlt: "High-end fashion editorial photography",
    description: "A comprehensive editorial shoot for a luxury fashion brand, combining photography and modeling expertise to create a cohesive visual narrative that captured the essence of modern elegance.",
    skills: ["Editorial Photography", "Fashion Styling", "Model Direction", "Color Grading", "Post-Production"],
    results: [
      "Featured in 3 major fashion publications",
      "Increased brand visibility by 40%",
      "Won Best Editorial Photography Award 2024"
    ],
    client: "Luxury Fashion House"
  },
  {
    id: "project_2",
    title: "Brand Identity Redesign",
    category: "Design · Creative Direction",
    year: "2024",
    imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a7eca-1770113891430.png",
    imageAlt: "Modern brand identity design system",
    description: "Complete brand identity overhaul for an international lifestyle brand, including logo design, visual system, and brand guidelines that elevated their market presence.",
    skills: ["Brand Strategy", "Visual Identity", "Typography", "Art Direction", "UI/UX Design"],
    results: [
      "Brand recognition increased by 60%",
      "Implemented across 15+ touchpoints",
      "Received Design Excellence Award"
    ],
    client: "Global Lifestyle Brand"
  },
  {
    id: "project_3",
    title: "Cinematic Commercial Campaign",
    category: "Video Editing · Photography",
    year: "2025",
    imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_116fd56f4-1767440498724.png",
    imageAlt: "Cinematic video production with professional editing",
    description: "End-to-end production of a high-budget commercial campaign, from concept development to final delivery, showcasing technical mastery in both photography and video editing.",
    skills: ["Cinematic Videography", "Color Grading", "Motion Design", "Sound Design", "Post-Production"],
    results: [
      "Campaign reached 2M+ views",
      "ROI increased by 85%",
      "Featured in AdWeek's Top Campaigns"
    ],
    client: "Premium Automotive Brand"
  },
  {
    id: "project_4",
    title: "Editorial Portrait Series",
    category: "Photography",
    year: "2024",
    imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_12ca7cee4-1767127118847.png",
    imageAlt: "Editorial portrait photography series",
    description: "An intimate portrait series exploring human emotion and connection, demonstrating technical excellence in lighting and composition while capturing authentic moments.",
    skills: ["Portrait Photography", "Natural Lighting", "Composition", "Post-Processing", "Storytelling"],
    results: [
      "Exhibited in 5 galleries worldwide",
      "Published in 8 international magazines",
      "Sold 200+ limited edition prints"
    ]
  },
  {
    id: "project_5",
    title: "Fashion Campaign Photography",
    category: "Photography · Modeling",
    year: "2025",
    imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1163b9a25-1770113899439.png",
    imageAlt: "Fashion campaign photography",
    description: "Multi-platform fashion campaign combining photography and modeling expertise, creating cohesive visuals across print, digital, and social media channels.",
    skills: ["Fashion Photography", "Model Direction", "Creative Styling", "Multi-format Delivery", "Social Media Content"],
    results: [
      "Campaign generated 1.5M+ impressions",
      "Sales increased by 35%",
      "Featured in Vogue and Elle"
    ],
    client: "International Fashion Brand"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative bg-white/60 border-b border-[#EAD8C2]/30 py-16 lg:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-[#EAD8C2]/4 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-[#EAD8C2]/3 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="reveal mb-16 text-center">
          <div className="inline-block rounded-full bg-[#EAD8C2]/20 backdrop-blur-sm px-5 py-2 border border-[#EAD8C2]/40 mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
              Featured Projects
            </p>
          </div>
          <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl xl:text-7xl mb-7 text-shadow-soft">
            Portfolio Gallery
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-light leading-[1.95] text-[#3a3a3a] mb-7 lg:text-xl">
            A detailed showcase of projects spanning three decades, highlighting skills, processes, and measurable results.
          </p>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent" />
        </div>

        <div className="space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal stagger-${index + 1} ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div className={`w-full lg:w-[48%] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="group relative overflow-hidden rounded-3xl shadow-soft-lg glow-soft light-beam transition-all duration-700 hover:shadow-soft-lg hover:scale-[1.02]">
                  <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                    <AppImage
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-center image-sharp image-hover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                      width={1200}
                      height={960}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-[52%] space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#EAD8C2]">
                      {project.category}
                    </span>
                    <span className="text-xs font-light text-gray-400">·</span>
                    <span className="text-xs font-medium text-gray-600">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl lg:text-4xl font-normal text-[#1a1a1a] mb-4 text-shadow-soft">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-sm font-medium text-gray-600 uppercase tracking-[0.15em] mb-5">
                      Client: {project.client}
                    </p>
                  )}
                  <p className="text-base lg:text-lg font-light leading-[1.9] text-[#3a3a3a]">
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="border-t border-[#EAD8C2]/30 pt-6">
                  <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-[#2a2a2a] mb-4">
                    Skills & Techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full bg-[#EAD8C2]/20 backdrop-blur-sm px-4 py-2 text-xs font-medium text-[#2a2a2a] border border-[#EAD8C2]/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-[#EAD8C2]/30 pt-6">
                  <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-[#2a2a2a] mb-4 flex items-center gap-2">
                    <AppIcon name="CheckCircleIcon" size={16} className="text-[#EAD8C2]" />
                    Results & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-start gap-3 text-sm lg:text-base font-light text-[#3a3a3a]"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EAD8C2] flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

