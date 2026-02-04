'use client';

import { useMemo, useRef, useEffect, useState } from "react";
import AppIcon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import type { DesignerCategory, DesignerProject } from "../hooks/useDesignerFilter";
import DesignerLightbox from "./DesignerLightbox";

interface CategoryOption {
  value: DesignerCategory;
  label: string;
}

interface DesignerPortfolioSectionProps {
  categories: CategoryOption[];
  activeCategory: DesignerCategory;
  onCategoryChange: (c: DesignerCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  projects: DesignerProject[];
  totalItems: number;
  visibleCount: number;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function DesignerPortfolioSection({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  projects,
  totalItems,
  visibleCount,
  hasMore,
  onLoadMore,
}: DesignerPortfolioSectionProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!hasMore) return;

    const el = sentinelRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) onLoadMore();
      },
      { root: null, rootMargin: "600px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, onLoadMore]);

  const safeCategories = useMemo(() => {
    if (categories?.length) return categories;
    return [
      { value: "all" as const, label: "Tất cả" },
      { value: "logo" as const, label: "Logo" },
      { value: "web" as const, label: "Web" },
      { value: "poster" as const, label: "Poster" },
      { value: "menu" as const, label: "Menu quán" },
      { value: "app" as const, label: "App UI" },
    ];
  }, [categories]);

  return (
    <section id="work" className="relative bg-[#FAF0E6] py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-[#2a2a2a]/70">
              Selected Works
            </div>
            <h2 className="mt-2 font-serif text-3xl font-light tracking-tight text-[#1a1a1a] sm:text-4xl">
              Portfolio thiết kế
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-light leading-[1.8] text-[#3a3a3a]">
              Poster, logo, web, menu quán, app UI… Mỗi layout tối ưu cho mục tiêu
              và ngữ cảnh sử dụng.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-2">
              {safeCategories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => onCategoryChange(c.value)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    activeCategory === c.value
                      ? "bg-[#EAD8C2] text-[#2a2a2a] shadow-md"
                      : "bg-white/80 text-[#3a3a3a] ring-1 ring-[#EAD8C2]/30 hover:bg-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[360px]">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <AppIcon
                  name="MagnifyingGlassIcon"
                  size={18}
                  className="text-[#3a3a3a]/60"
                />
              </div>
              <input
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm kiếm (logo, menu, web, app...)"
                className="w-full rounded-lg bg-white/80 py-2 pl-10 pr-3 text-sm text-[#3a3a3a] ring-1 ring-[#EAD8C2]/30 placeholder:text-[#3a3a3a]/40 focus:outline-none focus:ring-2 focus:ring-[#EAD8C2]/60"
              />
            </div>

            <div className="text-xs text-[#3a3a3a]/70">
              Hiển thị {Math.min(visibleCount, totalItems)} / {totalItems}
            </div>
          </div>
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-white/80 text-left shadow-soft transition hover:shadow-soft-lg"
              style={{ aspectRatio: `${p.width} / ${p.height}` }}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="relative h-full w-full">
                <AppImage
                  src={p.thumb}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2a2a2a]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EAD8C2]" />
                    {p.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div ref={sentinelRef} className="h-1 w-full" />

        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <button
              onClick={onLoadMore}
              className="rounded-full bg-white/80 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#2a2a2a] ring-1 ring-[#EAD8C2]/30 transition hover:bg-white hover:shadow-soft"
            >
              Tải thêm
            </button>
          </div>
        ) : null}
      </div>

      {activeIndex !== null ? (
        <DesignerLightbox
          projects={projects}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((prev) => {
              if (prev === null) return null;
              return prev <= 0 ? projects.length - 1 : prev - 1;
            })
          }
          onNext={() =>
            setActiveIndex((prev) => {
              if (prev === null) return null;
              return prev >= projects.length - 1 ? 0 : prev + 1;
            })
          }
        />
      ) : null}
    </section>
  );
}


