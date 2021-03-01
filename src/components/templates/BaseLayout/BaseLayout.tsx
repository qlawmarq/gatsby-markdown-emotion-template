import React from "react";
import { Header } from "@Components/organisms/Header";
import { Footer } from "@Components/organisms/Footer";
import { SiteSiteMetadata } from "@GatsbyTypes";
import { InnerStyle, OuterStyle } from "./Style";

interface BaseLayoutProps {
  siteMetadata?: SiteSiteMetadata | null;
  pageTitle: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  siteMetadata,
  children,
  pageTitle,
}) => {
  return (
    <div css={OuterStyle}>
      <Header siteMetadata={siteMetadata} pageTitle={pageTitle} />
      <div css={InnerStyle}>{children}</div>
      <Footer siteMetadata={siteMetadata} />
    </div>
  );
};

export default BaseLayout;
