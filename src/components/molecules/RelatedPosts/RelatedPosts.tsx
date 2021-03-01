import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MarkdownRemarkFrontmatter, Query } from "@GatsbyTypes";
import { H2 } from "@Components/atoms/Typography";
import { PostListing } from "@Components/molecules/PostListing";

type PropsType = {
  frontmatter: MarkdownRemarkFrontmatter;
};

export const RelatedPosts: React.FC<PropsType> = ({ frontmatter }) => {
  const data: Query = useStaticQuery(graphql`
    query RelatedPostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { template: { eq: "posts" }, draft: { ne: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              category
              lang
              tags
            }
          }
        }
      }
    }
  `);
  const category = frontmatter?.category;
  const title = frontmatter?.title;
  const lang = frontmatter?.lang;
  const tags = frontmatter?.tags;
  const getArraysIntersect = (
    array01?: unknown[] | null,
    array02?: unknown[] | null
  ) => {
    if (!array02 || !array01) {
      return false;
    }
    return (
      [...array01, ...array02].filter(
        (item) => array01.includes(item) && array02.includes(item)
      ).length > 0
    );
  };
  const relatedPosts = data.allMarkdownRemark.edges.filter(
    (post) =>
      post.node.frontmatter?.category === category &&
      post.node.frontmatter?.lang === lang &&
      getArraysIntersect(post.node.frontmatter?.tags, tags) &&
      post.node.frontmatter?.title !== title
  );
  if (!relatedPosts.length) {
    return null;
  }
  return (
    <>
      <H2>Related Posts</H2>
      <PostListing data={relatedPosts} />
    </>
  );
};
