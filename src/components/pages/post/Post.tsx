import React from "react";
import { graphql, Link } from "gatsby";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { Badge } from "@Components/atoms/Badge";
import { SEO } from "@Util/SEO";
import { Query } from "@GatsbyTypes";
import { RelatedPosts } from "@Components/molecules/RelatedPosts";
import { postStyle } from "./style";

type PropsType = {
  data: Query;
};

const Post: React.FC<PropsType> = (props) => {
  const markdownRemark = props.data.markdownRemark;
  const frontmatter = markdownRemark?.frontmatter;
  const siteMetadata = props.data.site?.siteMetadata;
  const tableOfContents = markdownRemark?.tableOfContents
    ? markdownRemark.tableOfContents
    : "";
  const pageTitle = frontmatter?.title;

  if (!markdownRemark?.html || !frontmatter || !siteMetadata || !pageTitle) {
    console.error('Something is missing in data.')
    return null;
  }
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={pageTitle}>
      <SEO
        siteMetadata={siteMetadata}
        postMeta={markdownRemark}
        pageTitle={pageTitle}
      />
      <article css={postStyle}>
        <p>{frontmatter?.date}</p>
        {frontmatter.tags?.map((tag, idx) => {
          return (
            <Link key={idx} to={`/tag/${tag}`}>
              <Badge>{tag}</Badge>
            </Link>
          );
        })}
        {/* TODO: Create component for table of contents */}
        <div
          className="post-table"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
        <div
          className="post-contents"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <RelatedPosts frontmatter={frontmatter}></RelatedPosts>
      </article>
    </BaseLayout>
  );
};
export const pageQuery = graphql`
  query Posts($slug: String!) {
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
