import AppIcon from "@/components/ui/AppIcon";

interface CreativeService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  icon: string;
  color: string;
}

const services: CreativeService[] = [
  {
    id: "creative_photography",
    title: "Photography",
    description:
      "Capture stunning visuals for any occasion - from portraits to products, events to lifestyle.",
    deliverables: [
      "High-resolution edited photos",
      "RAW files (upon request)",
      "Online gallery for selection",
      "Print-ready formats",
    ],
    timeline: "1-2 weeks",
    icon: "CameraIcon",
    color: "bg-primary",
  },
  {
    id: "creative_design",
    title: "Graphic Design",
    description:
      "Create compelling visual identities and marketing materials that make your brand stand out.",
    deliverables: [
      "Logo and brand guidelines",
      "Marketing collateral",
      "Social media templates",
      "Source files (AI, PSD)",
    ],
    timeline: "2-3 weeks",
    icon: "PaintBrushIcon",
    color: "bg-accent",
  },
  {
    id: "creative_editing",
    title: "Video Editing",
    description:
      "Transform raw footage into engaging stories with professional post-production and effects.",
    deliverables: [
      "Edited video in multiple formats",
      "Color grading and correction",
      "Motion graphics integration",
      "Sound design and mixing",
    ],
    timeline: "2-4 weeks",
    icon: "VideoCameraIcon",
    color: "bg-primary",
  },
  {
    id: "creative_modeling",
    title: "Modeling",
    description:
      "Professional modeling services for fashion, commercial, and lifestyle photography projects.",
    deliverables: [
      "Professional modeling portfolio",
      "Fashion show appearances",
      "Commercial brand campaigns",
      "Editorial photo shoots",
    ],
    timeline: "Project-based",
    icon: "UserIcon",
    color: "bg-accent",
  },
];

export default function CreativeServicesGrid() {
  return (
    <section className="py-section lg:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="reveal will-animate mb-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Core Services
          </div>
          <h2 className="mb-6 text-4xl font-heading font-bold leading-tight text-foreground lg:text-5xl">
            Creative Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional creative solutions tailored to your specific needs and
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`reveal will-animate delay-${
                (index + 1) * 100
              } group border border-border bg-card rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-10`}
            >
              <div className="mb-6 flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${service.color} transition-transform group-hover:scale-110`}
                >
                  <AppIcon
                    // @ts-expect-error dynamic icon
                    name={service.icon}
                    size={28}
                    className="text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-heading font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Timeline: {service.timeline}
                  </p>
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, idx) => (
                    <li
                      key={`${service.id}_deliverable_${idx}`}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <AppIcon
                        name="CheckCircleIcon"
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-primary"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full rounded-full bg-secondary px-6 py-3 font-medium text-secondary-foreground transition-all hover:scale-105 hover:bg-secondary/80">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


