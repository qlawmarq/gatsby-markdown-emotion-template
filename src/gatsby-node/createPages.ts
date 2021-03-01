import path from "path";
import { GatsbyNode } from "gatsby";
import { Query } from "@GatsbyTypes";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Index
  createPage({
    path: "/",
    component: path.resolve("src/components/pages/index/Index.tsx"),
    context: {},
  });

  // 404
  createPage({
    path: "/404",
    component: path.resolve("src/components/pages/404/404.tsx"),
    context: {},
  });

  // All contents(posts & pages)
  const allContents = await graphql<Query>(`
    query AllContents {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `);
  if (allContents.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  if (!allContents.data) {
    reporter.panicOnBuild(`No data in result of GraphQL query.`);
    return;
  }
  allContents.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // contents/pages
    if (node.frontmatter?.template === "pages") {
      createPage({
        path: node.frontmatter?.slug ? node.frontmatter.slug : "",
        component: path.resolve("src/components/pages/page/Page.tsx"),
        context: {
          slug: node.frontmatter?.slug ? node.frontmatter.slug : "",
        },
      });
    }
    // contents/posts
    if (node.frontmatter?.template === "posts") {
      createPage({
        path: node.frontmatter?.slug ? node.frontmatter.slug : "",
        component: path.resolve("src/components/pages/post/Post.tsx"),
        context: {
          slug: node.frontmatter?.slug ? node.frontmatter.slug : "",
        },
      });
    }
  });

  // Tags
  createPage({
    path: "/tags",
    component: path.resolve("src/components/pages/tags/Tags.tsx"),
    context: {},
  });

  // Tag
  const allTags = await graphql<Query>(`
    query AllTags {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  if (allTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  if (!allTags.data) {
    reporter.panicOnBuild(`No data in result of GraphQL query.`);
    return;
  }
  allTags.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
    if (fieldValue) {
      createPage({
        path: `/tag/` + fieldValue,
        component: path.resolve("src/components/pages/tag/Tag.tsx"),
        context: {
          tag: fieldValue,
        },
      });
    }
  });

  // Categories
  createPage({
    path: "/categories",
    component: path.resolve("src/components/pages/categories/Categories.tsx"),
    context: {},
  });

  // Category
  const allCategories = await graphql<Query>(`
    query AllCategories {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);
  if (allCategories.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  if (!allCategories.data) {
    reporter.panicOnBuild(`No data in result of GraphQL query.`);
    return;
  }
  allCategories.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
    if (fieldValue) {
      createPage({
        path: `/category/` + fieldValue,
        component: path.resolve("src/components/pages/category/Category.tsx"),
        context: {
          category: fieldValue,
        },
      });
    }
  });
};
