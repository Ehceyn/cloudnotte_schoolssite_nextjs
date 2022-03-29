import Head from "next/head";

export default function SEO({
  description,
  title,
  siteTitle,
  keywords,
  image,
  url,
}) {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{`${title} | Schools Search Engine`}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
