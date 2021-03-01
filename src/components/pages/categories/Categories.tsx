import React from "react";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { SEO } from "@Util/SEO";
import { H1 } from "@Components/atoms/Typography";
import { Badge } from "@Components/atoms/Badge";
import { Link } from "gatsby";
import { useCategories } from "@Hooks/useStaticQuery/useCategories";
import { useSiteMetadata } from "@Hooks/useStaticQuery/useSiteMetadata";

const Categories: React.FC = () => {
  const categories = useCategories();
  const siteMetadata = useSiteMetadata();
  const title = "Categories";
  return (
    <BaseLayout siteMetadata={siteMetadata} pageTitle={title}>
      <SEO siteMetadata={siteMetadata} pageTitle={title} />
      <H1>Categories</H1>
      {categories.map((category, idx) => {
        return (
          <Link key={idx} to={`/category/${category.fieldValue}`}>
            <Badge>{category.fieldValue}</Badge>
          </Link>
        );
      })}
    </BaseLayout>
  );
};
export default Categories;
