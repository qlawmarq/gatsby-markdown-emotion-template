import React from "react";
import { graphql } from "gatsby";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { SEO } from "@Util/SEO";
import { Query } from "@GatsbyTypes";
import { PostListing } from "@Components/molecules/PostListing";

type PropsType = {
  data: Query;
};

const Post: React.FC<PropsType> = (props) => {
  const Posts = props.data.allMarkdownRemark.edges;
  const siteMetadata = props.data.site?.siteMetadata;
  const title = "Tag";
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={title}>
      <SEO siteMetadata={siteMetadata} pageTitle={title} />
      <PostListing data={Posts} />
    </BaseLayout>
  );
};
export const pageQuery = graphql`
  query Tag($tag: String!) {
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          template: { eq: "posts" }
          draft: { ne: true }
        }
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
`;
export default Post;
