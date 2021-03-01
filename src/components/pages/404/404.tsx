import React from "react";
import { BaseLayout } from "@Components/templates/BaseLayout";
import { H1 } from "@Components/atoms/Typography";

const NFPage: React.VFC = () => {
  const title = "404";
  return (
    <BaseLayout pageTitle={title}>
      <H1>404 not found</H1>
    </BaseLayout>
  );
};

export default NFPage;
