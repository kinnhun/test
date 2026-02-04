import AppIcon from "@/components/ui/AppIcon";

const skillCategories = [
  {
    title: "Design",
    icon: "PaintBrushIcon",
    skills: ["Brand Identity", "Visual Design", "UI/UX", "Typography", "Art Direction"],
    years: "30+",
  },
  {
    title: "Photography",
    icon: "CameraIcon",
    skills: ["Portrait", "Editorial", "Commercial", "Fashion", "Lifestyle"],
    years: "25+",
  },
  {
    title: "Video Editing",
    icon: "VideoCameraIcon",
    skills: ["Color Grading", "Motion Design", "Cinematic", "Commercial", "Social Media"],
    years: "20+",
  },
  {
    title: "Modeling",
    icon: "UserIcon",
    skills: ["Editorial", "Commercial", "Fashion", "Portrait", "Concept"],
    years: "15+",
  },
  {
    title: "Dentistry",
    icon: "SparklesIcon",
    skills: ["Cosmetic Dentistry", "Teeth Whitening", "Dental Implants", "Orthodontics", "Preventive Care"],
    years: "10+",
  },
  {
    title: "Tattoo Art",
    icon: "PaintBrushIcon",
    skills: ["Custom Designs", "Cover-up Work", "Realistic Art", "Geometric Patterns", "Color & Blackwork"],
    years: "8+",
  },
  {
    title: "Computer Repair",
    icon: "ComputerDesktopIcon",
    skills: ["Hardware Repair", "Software Troubleshooting", "Data Recovery", "System Optimization", "Network Setup"],
    years: "12+",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-white/60 border-b border-[#EAD8C2]/30 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="reveal mb-12 text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Expertise
          </p>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#2a2a2a] sm:text-5xl lg:text-6xl mb-7 text-shadow-soft">
            Mastery Across Disciplines
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-[1.9] text-[#3a3a3a] mb-7 lg:text-lg">
            Three decades of honing skills across design, photography, video, and modeling.
          </p>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-[#EAD8C2] to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`reveal stagger-${index + 1} group relative glass-enhanced border border-[#EAD8C2]/50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg ambient-light border-animate scale-on-scroll transition-all duration-600 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#EAD8C2]/70`}
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAD8C2]/30 transition-all duration-600 group-hover:bg-[#EAD8C2]/50 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-soft">
                <AppIcon
                  // @ts-expect-error – mapping by string
                  name={category.icon}
                  size={28}
                  className="text-[#3a3a3a] transition-transform duration-600"
                />
              </div>

              {/* Years badge */}
              <div className="absolute top-5 right-5">
                <span className="text-xs font-normal text-[#EAD8C2] uppercase tracking-[0.15em] font-medium">
                  {category.years} Years
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg lg:text-xl font-normal text-[#2a2a2a] mb-5 text-shadow-soft">
                {category.title}
              </h3>

              <ul className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm font-light text-[#3a3a3a] transition-all duration-300 hover:text-[#2a2a2a] hover:translate-x-1"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <div className="h-2 w-2 rounded-full bg-[#EAD8C2] transition-all duration-300 group-hover:scale-125" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

