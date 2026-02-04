import CreativeServicesGrid from "@/features/services/components/CreativeServicesGrid";
import ProcessBreakdown from "@/features/services/components/ProcessBreakdown";
import AdditionalServicesDetail from "@/features/services/components/AdditionalServicesDetail";
import PricingTiers from "@/features/services/components/PricingTiers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-container px-6 text-center lg:px-12">
            <div className="reveal will-animate">
              <h1 className="mb-6 text-5xl font-heading font-bold leading-tight text-foreground lg:text-7xl">
                Services &amp; Expertise
              </h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                From creative vision to practical solutions, discover the full
                range of professional services designed to bring your projects to
                life.
              </p>
            </div>
          </div>
        </section>

        <CreativeServicesGrid />
        <ProcessBreakdown />
        <AdditionalServicesDetail />
        <PricingTiers />
      </main>
      <Footer />
    </>
  );
}


