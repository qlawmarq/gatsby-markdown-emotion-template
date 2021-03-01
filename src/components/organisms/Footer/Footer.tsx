import React from "react";
import { NormalButton } from "@Components/atoms/Button";
import { BaseText } from "@Components/atoms/Typography";
import { TwitterTimeline } from "@Components/atoms/TwitterTimeline";
import { SiteSiteMetadata } from "@GatsbyTypes";
import { FooterStyle } from "./style";

interface FooterProps {
  siteMetadata?: SiteSiteMetadata | null;
}

const Footer: React.FC<FooterProps> = ({ siteMetadata }) => {
  const [isTop, setIsTop] = React.useState(true);
  React.useEffect(() => {
    setIsTop(window.location.pathname === "/");
  }, []);
  const moveToTop = () => {
    window.location.href = window.location.origin;
  };
  const twitterId = React.useMemo(() => siteMetadata?.twitterId, [
    siteMetadata,
  ]);
  const copyright = React.useMemo(() => siteMetadata?.copyright, [
    siteMetadata,
  ]);

  return (
    <footer css={FooterStyle}>
      {!isTop && <NormalButton onClick={moveToTop}>Back to Top.</NormalButton>}
      {twitterId && <TwitterTimeline twitterId={twitterId} />}
      {copyright && <BaseText>{copyright}</BaseText>}
    </footer>
  );
};

export default Footer;
