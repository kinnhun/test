import AppIcon from "@/components/ui/AppIcon";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: ProcessStep[] = [
  {
    id: "process_consultation",
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision, goals, and requirements to understand exactly what you need.",
    icon: "ChatBubbleLeftRightIcon",
  },
  {
    id: "process_creation",
    number: "02",
    title: "Creation",
    description:
      "I bring your ideas to life with expertise, creativity, and attention to detail.",
    icon: "SparklesIcon",
  },
  {
    id: "process_delivery",
    number: "03",
    title: "Delivery",
    description:
      "You receive high-quality deliverables in your preferred format and timeline.",
    icon: "CheckBadgeIcon",
  },
  {
    id: "process_support",
    number: "04",
    title: "Support",
    description:
      "Ongoing support and revisions to ensure complete satisfaction with the results.",
    icon: "HeartIcon",
  },
];

export default function ProcessBreakdown() {
  return (
    <section className="bg-secondary/30 py-section lg:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="reveal will-animate mb-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            How It Works
          </div>
          <h2 className="mb-6 text-4xl font-heading font-bold leading-tight text-foreground lg:text-5xl">
            Simple Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From initial consultation to final delivery, I ensure a smooth and
            professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`reveal will-animate delay-${
                (index + 1) * 100
              } relative`}
            >
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-1/2 hidden h-0.5 w-full -z-10 bg-border lg:block">
                  <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary" />
                </div>
              )}

              <div className="relative z-10 rounded-3xl border border-border bg-card p-8 text-center shadow-lg">
                <div className="absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-lg font-heading font-bold text-primary-foreground">
                  {step.number}
                </div>

                <div className="mx-auto mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <AppIcon
                    // @ts-expect-error dynamic icon
                    name={step.icon}
                    size={32}
                    className="text-accent"
                  />
                </div>

                <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


