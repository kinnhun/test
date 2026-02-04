'use client';

import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";

export default function DesignerHero() {
  return (
    <section className="relative border-b border-[#EAD8C2]/30 bg-[#FAF0E6] pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 lg:pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#2a2a2a] shadow-soft">
              <span className="h-2 w-2 rounded-full bg-[#EAD8C2]" />
              Designer Services
            </div>
            <h1 className="mt-5 text-balance font-serif text-4xl font-light tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Brand · Logo · Web · Menu · App UI
            </h1>
            <p className="mt-4 max-w-2xl text-base font-light leading-[1.7] text-[#3a3a3a] lg:text-lg">
              Thiết kế chuyên nghiệp, thẩm mỹ hiện đại, bàn giao rõ ràng. Tập trung
              vào trải nghiệm người dùng và tiêu chuẩn in ấn / digital.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#EAD8C2] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#2a2a2a] transition hover:bg-[#EAD8C2]/90 hover:scale-[1.02] hover:shadow-soft-lg"
              >
                <AppIcon name="CurrencyDollarIcon" size={16} />
                Báo giá
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#2a2a2a] ring-1 ring-[#EAD8C2]/30 transition hover:bg-white hover:scale-[1.02] hover:shadow-soft"
              >
                <AppIcon name="EnvelopeIcon" size={16} />
                Tư vấn nhanh
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#EAD8C2]/25 bg-white/70 p-6 shadow-soft">
            <div className="text-xs font-medium uppercase tracking-widest text-[#2a2a2a]/70">
              Quy trình
            </div>
            <ol className="mt-4 space-y-3 text-sm text-[#3a3a3a]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EAD8C2]" />
                Brief & mục tiêu (thương hiệu / sản phẩm)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EAD8C2]" />
                Concept → thiết kế → feedback vòng lặp
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EAD8C2]" />
                Bàn giao file + guideline + hỗ trợ
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}


