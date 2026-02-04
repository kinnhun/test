import AppIcon from "@/components/ui/AppIcon";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    id: "pricing_starter",
    name: "Starter",
    price: "5,000,000",
    period: "per project",
    description: "Perfect for small projects and one-time needs.",
    features: [
      "Basic photography session",
      "Simple design projects",
      "Standard video editing",
      "3 revision rounds",
      "1-week delivery",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "pricing_professional",
    name: "Professional",
    price: "15,000,000",
    period: "per project",
    description: "Ideal for comprehensive projects with multiple deliverables.",
    features: [
      "Extended photography coverage",
      "Complete brand design",
      "Advanced video production",
      "Unlimited revisions",
      "Priority delivery",
      "Source files included",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    id: "pricing_premium",
    name: "Premium",
    price: "Custom",
    period: "contact for quote",
    description: "Tailored solutions for large-scale or ongoing projects.",
    features: [
      "Full-service production",
      "Dedicated project manager",
      "Multi-channel campaigns",
      "Unlimited revisions",
      "Rush delivery available",
      "Lifetime support",
      "Exclusive rights",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export default function PricingTiers() {
  return (
    <section className="bg-secondary/30 py-section lg:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="reveal will-animate mb-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Transparent Pricing
          </div>
          <h2 className="mb-6 text-4xl font-heading font-bold leading-tight text-foreground lg:text-5xl">
            Choose Your Package
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Flexible pricing options designed to fit projects of any size and
            budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`reveal will-animate delay-${
                (index + 1) * 100
              } relative rounded-3xl bg-card p-8 shadow-lg border-2 transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-heading font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-heading font-bold text-foreground">
                    {tier.price === "Custom" ? tier.price : `${tier.price}₫`}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.period}</p>
              </div>

              <ul className="mb-8 space-y-4">
                {tier.features.map((feature, idx) => (
                  <li
                    key={`${tier.id}_feature_${idx}`}
                    className="flex items-start gap-3"
                  >
                    <AppIcon
                      name="CheckCircleIcon"
                      size={20}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full px-6 py-3 font-medium transition-all hover:scale-105 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="reveal will-animate delay-400 mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices are in Vietnamese Dong (VND). Custom quotes available for
            unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
}


