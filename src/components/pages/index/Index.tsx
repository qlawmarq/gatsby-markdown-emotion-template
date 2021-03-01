import React from "react";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { PostListing } from "@Components/molecules/PostListing";
import { SEO } from "@Util/SEO";
import { useSiteMetadata } from "@Hooks/useStaticQuery/useSiteMetadata";
import { usePosts } from "@Hooks/useStaticQuery/usePosts";

const Index: React.VFC = () => {
  const siteMetadata = useSiteMetadata();
  const Posts = usePosts();
  const title = siteMetadata?.title ? siteMetadata?.title : "";
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={title}>
      <SEO siteMetadata={siteMetadata} />
      <PostListing data={Posts} />
    </BaseLayout>
  );
};

export default Index;
