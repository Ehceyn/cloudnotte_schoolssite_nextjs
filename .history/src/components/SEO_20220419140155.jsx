import Head from "next/head";
import Interweave from "interweave";

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
      <title>{`${title} | School Search Engine`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          <Interweave
            content="This contains a URL, https://github.com/milesj/interweave, and a hashtag, #interweave, that will be converted to an anchor link!"
            matchers={[new UrlMatcher("url"), new HashtagMatcher("hashtag")]}
          />
        }
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
