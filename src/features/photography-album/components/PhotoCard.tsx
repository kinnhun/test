import { useState, memo } from "react";
import AppImage from "@/components/ui/AppImage";
import { Photo } from "../hooks/usePhotoFilter";

interface PhotoCardProps {
  photo: Photo;
  onClick?: () => void;
}

function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <AppImage
        src={photo.url}
        alt={photo.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      
      {/* Overlay on hover */}
      <div
        className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40"
      />
      
      {/* Title overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <h3 className="text-white text-sm font-medium mb-1">{photo.title}</h3>
        <div className="flex flex-wrap gap-1">
          {photo.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/80 bg-white/20 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(PhotoCard);

