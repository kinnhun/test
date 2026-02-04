import { useEffect, useRef, memo } from "react";
import { Photo } from "../hooks/usePhotoFilter";
import PhotoCard from "./PhotoCard";
import { gsap } from "gsap";

interface PhotoGridProps {
  photos: Photo[];
}

function PhotoGrid({ photos }: PhotoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".photo-card");
    
    // Animate cards on mount/update
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95, force3D: true },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        force3D: true,
      }
    );
  }, [photos]);

  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#3a3a3a] text-lg">Không tìm thấy ảnh nào.</p>
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
    >
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card mb-4 break-inside-avoid">
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(PhotoGrid);

