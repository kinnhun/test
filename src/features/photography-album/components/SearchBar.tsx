import { useEffect, useState } from "react";
import AppIcon from "@/components/ui/AppIcon";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Update local query when prop changes (e.g., when cleared externally)
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQuery !== searchQuery) {
        onSearchChange(localQuery);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, searchQuery, onSearchChange]);

  return (
    <div className="relative w-full lg:w-auto lg:min-w-[300px]">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <AppIcon name="MagnifyingGlassIcon" size={20} className="text-[#3a3a3a]/60" />
      </div>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Tìm kiếm ảnh..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 border border-[#EAD8C2]/30 text-[#3a3a3a] placeholder:text-[#3a3a3a]/50 focus:outline-none focus:ring-2 focus:ring-[#EAD8C2]/50 focus:bg-white transition-all duration-300"
      />
      {localQuery && (
        <button
          onClick={() => {
            setLocalQuery("");
            onSearchChange("");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#EAD8C2]/20 transition-colors"
        >
          <AppIcon name="XMarkIcon" size={16} className="text-[#3a3a3a]/60" />
        </button>
      )}
    </div>
  );
}

