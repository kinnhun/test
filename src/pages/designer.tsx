import Head from "next/head";
import DesignerPage from "@/features/designer";

export default function DesignerPageRoute() {
  return (
    <>
      <Head>
        <title>Designer – Brand · UI/UX · Print</title>
        <meta
          name="description"
          content="Professional design services: brand identity, logo, posters, menus, websites, and app UI/UX with clear pricing."
        />
      </Head>
      <DesignerPage />
    </>
  );
}


