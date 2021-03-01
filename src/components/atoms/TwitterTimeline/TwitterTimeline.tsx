import React from "react";

interface TwitterTimelineProps {
  twitterId?: string;
}

export const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  twitterId,
  ...props
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (!twitterId) {
    return null;
  }
  return (
    <a
      className="twitter-timeline"
      data-lang="en"
      data-width="300"
      data-height="200"
      href={"https://twitter.com/" + twitterId}
      {...props}
    >
      @{twitterId}
    </a>
  );
};
