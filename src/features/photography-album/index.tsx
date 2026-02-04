import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import VirtualPhotoGrid from "./components/VirtualPhotoGrid";
import { usePhotoFilter } from "./hooks/usePhotoFilter";
import AppIcon from "@/components/ui/AppIcon";

export default function PhotographyAlbumPage() {
  const {
    visiblePhotos,
    activeCategory,
    searchQuery,
    totalItems,
    visibleCount,
    hasMore,
    loadMore,
    setActiveCategory,
    setSearchQuery,
  } = usePhotoFilter();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF0E6]">
        {/* Hero Section */}
        <section className="relative border-b border-[#EAD8C2]/30 bg-[#FAF0E6] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-light tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
                Photography Album
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-base font-light leading-[1.7] text-[#3a3a3a] lg:text-lg">
                Explore our curated collection of photographs across different categories
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="sticky top-0 z-40 bg-[#FAF0E6]/95 backdrop-blur-sm border-b border-[#EAD8C2]/30 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <FilterBar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
            {/* Results count */}
            {totalItems > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#3a3a3a]/70">
                <span>
                  Hiển thị {Math.min(visibleCount, totalItems)} / {totalItems} ảnh
                </span>
                {hasMore && (
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-xs font-medium text-[#3a3a3a] shadow-sm transition hover:bg-white hover:shadow-md"
                  >
                    <AppIcon name="PlusIcon" size={16} className="text-[#3a3a3a]" />
                    Tải thêm
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Photo Grid with Virtual Scrolling */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <VirtualPhotoGrid photos={visiblePhotos} hasMore={hasMore} onLoadMore={loadMore} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

