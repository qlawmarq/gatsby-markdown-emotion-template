import React from "react";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { SEO } from "@Util/SEO";
import { H1 } from "@Components/atoms/Typography";
import { Link } from "gatsby";
import { useTags } from "@Hooks/useStaticQuery/useTags";
import { useSiteMetadata } from "@Hooks/useStaticQuery/useSiteMetadata";

const Tags: React.FC = () => {
  const tags = useTags();
  const siteMetadata = useSiteMetadata();
  const title = "Tags";
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={title}>
      <SEO siteMetadata={siteMetadata} pageTitle={title} />
      <H1>Tags</H1>
      {tags.map((tag, idx) => {
        return (
          <Link key={idx} to={`/tag/${tag.fieldValue}`}>
            {tag.fieldValue}
          </Link>
        );
      })}
    </BaseLayout>
  );
};
export default Tags;
