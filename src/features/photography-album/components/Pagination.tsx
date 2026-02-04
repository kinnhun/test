import AppIcon from "@/components/ui/AppIcon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
          currentPage === 1
            ? "bg-white/50 text-[#3a3a3a]/30 cursor-not-allowed"
            : "bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] hover:shadow-sm"
        }`}
      >
        <AppIcon name="ChevronLeftIcon" size={18} />
        <span className="hidden sm:inline">Trước</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-[#3a3a3a]/50"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#EAD8C2] text-[#2a2a2a] shadow-md scale-105"
                  : "bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] hover:shadow-sm"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
          currentPage === totalPages
            ? "bg-white/50 text-[#3a3a3a]/30 cursor-not-allowed"
            : "bg-white/80 hover:bg-white border border-[#EAD8C2]/30 text-[#3a3a3a] hover:shadow-sm"
        }`}
      >
        <span className="hidden sm:inline">Sau</span>
        <AppIcon name="ChevronRightIcon" size={18} />
      </button>
    </div>
  );
}

