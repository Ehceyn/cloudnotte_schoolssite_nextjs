import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";

export default function SEO({
  description,
  title,
  siteTitle,
  keywords,
  image,
  url,
}) {
  // PArse text from server to html
  function htmlDecode(content) {
    var doc =
      process.browser && new DOMParser().parseFromString(content, "text/html");
    return process.browser && doc.documentElement.textContent;
  }

  console.log(
    htmlDecode(
      DOMPurify.sanitize(
        "This string contains <b>HTML</b> and will safely be rendered!"
      )
    )
  );
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{`${title} | School Search Engine`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={htmlDecode("<span>jkndui<b>dd</b></span>")}
      />
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
