import React from "react";
import { graphql } from "gatsby";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { SEO } from "@Util/SEO";
import { Query } from "@GatsbyTypes";
import { RelatedPosts } from "@Components/molecules/RelatedPosts";

type PropsType = {
  data: Query;
};

const Post: React.FC<PropsType> = (props) => {
  const markdownRemark = props.data.markdownRemark;
  const frontmatter = markdownRemark?.frontmatter;
  const siteMetadata = props.data.site?.siteMetadata;
  const pagetitle = frontmatter?.title;

  if (!markdownRemark?.html || !frontmatter || !siteMetadata || !pagetitle) {
    return null;
  }
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={pagetitle}>
      <SEO
        siteMetadata={siteMetadata}
        postMeta={markdownRemark}
        pageTitle={pagetitle}
      />
      <p>{frontmatter?.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <RelatedPosts frontmatter={frontmatter}></RelatedPosts>
    </BaseLayout>
  );
};
export const pageQuery = graphql`
  query Pages($slug: String!) {
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
    markdownRemark(frontmatter: { slug: { eq: $slug }, draft: { ne: true } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
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
`;
export default Post;
