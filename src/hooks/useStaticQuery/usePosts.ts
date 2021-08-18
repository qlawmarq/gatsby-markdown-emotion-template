import { Query, MarkdownRemarkEdge } from "@GatsbyTypes";
import { useStaticQuery, graphql } from "gatsby";
type typeUsePosts = () => MarkdownRemarkEdge[];

export const usePosts: typeUsePosts = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(
    graphql`
      query PostsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { template: { eq: "posts" }, draft: { ne: true } }
          }
        ) {
          edges {
            node {
              frontmatter {
                category
                lang
                date
                slug
                tags
                title
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark.edges;
};
