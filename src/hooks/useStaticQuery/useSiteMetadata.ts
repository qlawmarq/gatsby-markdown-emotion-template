import { Query, SiteSiteMetadata } from "@GatsbyTypes";
import { useStaticQuery, graphql } from "gatsby";
type typeUseSiteMetadata = () => SiteSiteMetadata | undefined | null;

export const useSiteMetadata: typeUseSiteMetadata = () => {
  const { site } = useStaticQuery<Query>(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            email
            image
            twitterId
            githubId
            googleAdSense
            copyright
            lang
            charSet
          }
        }
      }
    `
  );

  return site?.siteMetadata;
};
