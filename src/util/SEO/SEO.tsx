import React from "react";
import Helmet from "react-helmet";
import { SiteSiteMetadata, MarkdownRemark } from "@GatsbyTypes";

type PropsType = {
  postMeta?: MarkdownRemark | null;
  siteMetadata?: SiteSiteMetadata | null;
  pageTitle?: string;
  pageDescription?: string;
};

export const SEO: React.FC<PropsType> = ({
  postMeta,
  siteMetadata,
  pageTitle,
  pageDescription,
}) => {
  const siteName = String(siteMetadata?.title);
  const title = pageTitle
    ? String(siteMetadata?.title) + " | " + pageTitle
    : String(siteMetadata?.title);
  const description = pageDescription
    ? pageDescription
    : String(postMeta?.frontmatter?.title);
  const image = siteMetadata?.image
    ? siteMetadata?.siteUrl + siteMetadata?.image
    : "";
  const charSet = siteMetadata?.charSet ? siteMetadata?.charSet : "utf-8";
  const lang = siteMetadata?.lang ? siteMetadata?.lang : "en";
  const author = siteMetadata?.author ? siteMetadata?.author : "author";
  const blogURL = siteMetadata?.siteUrl ? siteMetadata?.siteUrl : "";
  const postURL = postMeta?.frontmatter?.slug
    ? blogURL + "/" + postMeta?.frontmatter?.slug
    : blogURL;
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": postMeta ? "Article" : "WebSite",
    name: title,
    description: description,
    url: postURL,
    image: siteMetadata?.image,
    datePublished: postMeta?.frontmatter?.date,
  };
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta charSet={charSet} />
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={postURL} />
      <meta property="og:type" content={postMeta ? "article" : "website"} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {siteMetadata?.googleAdSense && (
        <script
          data-ad-client={siteMetadata?.googleAdSense}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      )}
    </Helmet>
  );
};
