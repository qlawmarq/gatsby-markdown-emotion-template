import { Query, MarkdownRemarkGroupConnection } from "@GatsbyTypes";
import { useStaticQuery, graphql } from "gatsby";
type typeUseTags = () => MarkdownRemarkGroupConnection[];

export const useTags: typeUseTags = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(
    graphql`
      query TagsQuery {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};
