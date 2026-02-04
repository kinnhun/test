import { PhotoCategory } from "../hooks/usePhotoFilter";

interface FilterBarProps {
  activeCategory: PhotoCategory;
  onCategoryChange: (category: PhotoCategory) => void;
}

const categories: { value: PhotoCategory; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "wedding", label: "Ảnh cưới" },
  { value: "graduation", label: "Ảnh kỷ yếu" },
  { value: "personal", label: "Ảnh cá nhân" },
  { value: "product-review", label: "Review sản phẩm" },
];

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 lg:gap-3">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeCategory === category.value
              ? "bg-[#EAD8C2] text-[#2a2a2a] shadow-md scale-105"
              : "bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] hover:shadow-sm"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

