'use client';

import { useEffect, useRef, useState, useMemo, memo, useCallback } from "react";
import { Photo } from "../hooks/usePhotoFilter";
import PhotoCard from "./PhotoCard";
import PhotoLightbox from "./PhotoLightbox";

interface VirtualPhotoGridProps {
  photos: Photo[];
  hasMore?: boolean;
  onLoadMore?: () => void;
}

function VirtualPhotoGrid({ photos, hasMore, onLoadMore }: VirtualPhotoGridProps) {
  const loadMoreSentinelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLoadMore = useCallback(() => {
    if (!hasMore) return;
    onLoadMore?.();
  }, [hasMore, onLoadMore]);

  // Infinite load-more when sentinel enters viewport
  useEffect(() => {
    if (!loadMoreSentinelRef.current) return;
    if (!hasMore) return;

    const el = loadMoreSentinelRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          handleLoadMore();
        }
      },
      { root: null, rootMargin: "600px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleLoadMore, hasMore]);

  // keep lightbox index valid if list changes
  useEffect(() => {
    if (activeIndex === null) return;
    if (photos.length === 0) {
      setActiveIndex(null);
      return;
    }
    if (activeIndex > photos.length - 1) {
      setActiveIndex(photos.length - 1);
    }
  }, [activeIndex, photos.length]);

  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#3a3a3a] text-lg">Không tìm thấy ảnh nào.</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((photo, index) => (
            <div key={photo.id} className="photo-card mb-4 break-inside-avoid">
              <PhotoCard photo={photo} onClick={() => setActiveIndex(index)} />
            </div>
          ))}
        </div>

        {/* Sentinel for infinite loading */}
        <div ref={loadMoreSentinelRef} className="h-1 w-full" />
      </div>

      {activeIndex !== null && (
        <PhotoLightbox
          photos={photos}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((prev) => {
              if (prev === null) return null;
              return prev <= 0 ? photos.length - 1 : prev - 1;
            })
          }
          onNext={() =>
            setActiveIndex((prev) => {
              if (prev === null) return null;
              return prev >= photos.length - 1 ? 0 : prev + 1;
            })
          }
        />
      )}
    </>
  );
}

export default memo(VirtualPhotoGrid);

