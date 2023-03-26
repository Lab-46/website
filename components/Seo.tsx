import Head from "next/head";

interface SeoProps {
  canonicalUrl?: string;
  description?: string;
  title?: string;
  image?: string;
  url?: string;
}

export const TITLE = "Lab 46";

export const IMAGE =
  "https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1679825899/Lab%2046/seo.png";

export const DESCRIPTION = "A product studio";

const Seo = ({
  url = "https://lab-46.com",
  description = DESCRIPTION,
  title = TITLE,
  image = IMAGE,
  canonicalUrl,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
