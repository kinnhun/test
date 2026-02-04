import Head from "next/head";
import ServicesPage from "@/features/services";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - CreativePortfolio</title>
        <meta
          name="description"
          content="Explore creative services including photography, design, editing, modeling, and more."
        />
      </Head>
      <ServicesPage />
    </>
  );
}


