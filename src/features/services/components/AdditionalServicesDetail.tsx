import AppImage from "@/components/ui/AppImage";
import AppIcon from "@/components/ui/AppIcon";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  icon: string;
}

const services: ServiceDetail[] = [
  {
    id: "detail_dental",
    title: "Dental Services",
    description:
      "Professional dental care with a focus on preventive treatment and cosmetic dentistry. From routine cleanings to advanced procedures, ensuring your oral health is in expert hands.",
    features: [
      "Comprehensive dental examinations",
      "Professional teeth cleaning",
      "Cosmetic dentistry procedures",
      "Oral health consultations",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1663755785915-ef1748dda404",
    imageAlt:
      "Modern dental clinic with professional equipment and clean treatment room",
    icon: "HeartIcon",
  },
  {
    id: "detail_tattoo",
    title: "Tattoo Artistry",
    description:
      "Custom tattoo designs created with artistic precision and executed with professional technique. Specializing in various styles from minimalist to intricate detailed work.",
    features: [
      "Custom design consultation",
      "Professional tattooing",
      "Aftercare guidance",
      "Touch-up services",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1506518689316-96df67727a9b",
    imageAlt:
      "Tattoo artist working on custom design with professional equipment",
    icon: "PaintBrushIcon",
  },
  {
    id: "detail_computer",
    title: "Computer Repair",
    description:
      "Expert computer repair and maintenance services for both hardware and software issues. Quick diagnostics and efficient solutions to get your systems running smoothly.",
    features: [
      "Hardware troubleshooting",
      "Software installation",
      "System upgrades",
      "Data recovery assistance",
    ],
    imageUrl:
      "https://img.rocket.new/generatedImages/rocket_gen_img_12aca32ef-1767168263056.png",
    imageAlt:
      "Computer technician repairing laptop with diagnostic tools on workbench",
    icon: "ComputerDesktopIcon",
  },
];

export default function AdditionalServicesDetail() {
  return (
    <section className="py-section lg:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="reveal will-animate mb-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Additional Expertise
          </div>
          <h2 className="mb-6 text-4xl font-heading font-bold leading-tight text-foreground lg:text-5xl">
            Beyond Creative
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Diverse professional services to meet your various needs with
            quality and care.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`reveal will-animate delay-${
                (index + 1) * 100
              } grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                  <AppImage
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <AppIcon
                    // @ts-expect-error dynamic icon name
                    name={service.icon}
                    size={28}
                    className="text-accent"
                  />
                </div>
                <h3 className="mb-4 text-3xl font-heading font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={`${service.id}_feature_${idx}`}
                      className="flex items-start gap-3"
                    >
                      <AppIcon
                        name="CheckCircleIcon"
                        size={20}
                        className="mt-0.5 flex-shrink-0 text-primary"
                      />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


