'use client';

import { useEffect } from "react";
import AppIcon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import type { DesignerProject } from "../hooks/useDesignerFilter";

interface DesignerLightboxProps {
  projects: DesignerProject[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function DesignerLightbox({
  projects,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: DesignerLightboxProps) {
  const project = projects[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Project viewer"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-white/90">
              {project.title}
            </div>
            <div className="text-xs text-white/60">
              {activeIndex + 1} / {projects.length}
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15"
          >
            <AppIcon name="XMarkIcon" size={18} className="text-white/90" />
            Close
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-[16/10] w-full">
            <AppImage
              src={project.thumb}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <button
          onClick={onPrev}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/90 transition hover:bg-white/15"
        >
          <AppIcon name="ChevronLeftIcon" size={22} className="text-white/90" />
        </button>
        <button
          onClick={onNext}
          aria-label="Next project"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/90 transition hover:bg-white/15"
        >
          <AppIcon
            name="ChevronRightIcon"
            size={22}
            className="text-white/90"
          />
        </button>
      </div>
    </div>
  );
}


