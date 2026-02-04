import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DesignerHero from "./components/DesignerHero";
import DesignerPortfolioSection from "./components/DesignerPortfolioSection";
import DesignerPricingSection from "./components/DesignerPricingSection";
import { useDesignerFilter } from "./hooks/useDesignerFilter";

export default function DesignerPage() {
  const {
    categories,
    pricing,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    visibleProjects,
    totalItems,
    visibleCount,
    hasMore,
    loadMore,
  } = useDesignerFilter();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF0E6]">
        <DesignerHero />
        <DesignerPortfolioSection
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          projects={visibleProjects}
          totalItems={totalItems}
          visibleCount={visibleCount}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
        <DesignerPricingSection tiers={pricing} />
      </main>
      <Footer />
    </>
  );
}


