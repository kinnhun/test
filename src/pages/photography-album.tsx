import Head from "next/head";
import PhotographyAlbumPage from "@/features/photography-album";

export default function PhotographyAlbumPageRoute() {
  return (
    <>
      <Head>
        <title>Photography Album – Portfolio Gallery</title>
        <meta
          name="description"
          content="Browse through our photography portfolio featuring wedding photos, graduation photos, personal portraits, and product reviews."
        />
      </Head>
      <PhotographyAlbumPage />
    </>
  );
}

