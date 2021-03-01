import { Query, MarkdownRemarkGroupConnection } from "@GatsbyTypes";
import { useStaticQuery, graphql } from "gatsby";
type typeUseCategories = () => MarkdownRemarkGroupConnection[];

export const useCategories: typeUseCategories = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(
    graphql`
      query CategoriesQuery {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            totalCount
            fieldValue
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};
