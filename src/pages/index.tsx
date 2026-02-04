import Head from "next/head";
import PortfolioPage from "@/features/portfolio";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Creative Portfolio – Photographer · Designer · Editor · Model</title>
        <meta
          name="description"
          content="Professional photographer, designer, editor, and model offering high-end creative services and portfolio work."
        />
      </Head>
      <PortfolioPage />
    </>
  );
}
