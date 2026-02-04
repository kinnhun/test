'use client';

import AppIcon from "@/components/ui/AppIcon";

interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

export default function DesignerPricingSection({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section id="pricing" className="relative border-t border-[#EAD8C2]/30 bg-[#FAF0E6] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-[#2a2a2a]/70">
            Pricing
          </div>
          <h2 className="mt-2 font-serif text-3xl font-light tracking-tight text-[#1a1a1a] sm:text-4xl">
            Báo giá minh bạch
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm font-light leading-[1.8] text-[#3a3a3a]">
            Giá có thể thay đổi theo scope (số màn hình, số hạng mục, deadline). Mình luôn chốt rõ
            deliverables trước khi bắt đầu.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border bg-white/85 p-6 shadow-soft transition hover:shadow-soft-lg ${
                tier.highlight
                  ? "border-[#EAD8C2] ring-1 ring-[#EAD8C2]/40"
                  : "border-[#EAD8C2]/25"
              }`}
            >
              {tier.highlight ? (
                <div className="absolute -top-3 left-6 rounded-full bg-[#EAD8C2] px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#2a2a2a] shadow-soft">
                  Most Popular
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#2a2a2a]">
                    {tier.title}
                  </div>
                  <div className="mt-1 text-xs text-[#3a3a3a]/70">
                    {tier.description}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-[#1a1a1a]">
                    {tier.price}
                  </div>
                  <div className="text-[11px] text-[#3a3a3a]/60">
                    / dự án
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-[#3a3a3a]">
                {tier.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <AppIcon name="CheckIcon" size={18} className="mt-0.5 text-[#2a2a2a]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition ${
                  tier.highlight
                    ? "bg-[#EAD8C2] text-[#2a2a2a] hover:bg-[#EAD8C2]/90 hover:shadow-soft-lg"
                    : "bg-white text-[#2a2a2a] ring-1 ring-[#EAD8C2]/30 hover:bg-[#EAD8C2]/15 hover:shadow-soft"
                }`}
              >
                <AppIcon name="EnvelopeIcon" size={16} />
                Nhận báo giá chi tiết
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


