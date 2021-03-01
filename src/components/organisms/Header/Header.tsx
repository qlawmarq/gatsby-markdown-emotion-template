import { Link } from "gatsby";
import React from "react";
import { Menu, MenuItem } from "@Components/atoms/Menu";
import { H1 } from "@Components/atoms/Typography";
import { SiteSiteMetadata } from "@GatsbyTypes";
import TwitterIcon from "@Assets/svg/twitter.svg";
import RssIcon from "@Assets/svg/rss.svg";
import GitHubIcon from "@Assets/svg/github.svg";
import EmailIcon from "@Assets/svg/email.svg";
import { HeaderStyle, MenuAreaStyle, IconStyle, TitleAreaStyle } from "./style";

interface HeaderProps {
  siteMetadata?: SiteSiteMetadata | null;
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteMetadata, pageTitle }) => {
  const title = pageTitle ? pageTitle : siteMetadata?.title;
  const twitterId = siteMetadata?.twitterId;
  const githubId = siteMetadata?.githubId;
  const email = siteMetadata?.email;

  const menuItems: MenuItem[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Privacy Policy",
      to: "/privacy",
    },
    // TODO: to use staticQuery for getting paths
    {
      name: "Categories",
      to: "/categories",
      subMenuItems: [
        {
          name: "Note",
          to: "/category/Note",
        },
        {
          name: "Tech",
          to: "/category/Tech",
        },
      ],
    },
  ];

  return (
    <header css={HeaderStyle}>
      <div css={MenuAreaStyle}>
        <div>
          {twitterId && (
            <a
              href={`https://twitter.com/${twitterId}`}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon css={IconStyle} />
            </a>
          )}
          {githubId && (
            <a
              href={`https://github.com/${githubId}`}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon css={IconStyle} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}>
              <EmailIcon css={IconStyle} />
            </a>
          )}
          <Link to="/rss.xml">
            <RssIcon css={IconStyle} />
          </Link>
        </div>
        <Menu menuItems={menuItems}></Menu>
      </div>
      <div css={TitleAreaStyle}>
        <Link to={"/"}>
          <H1>{title}</H1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
