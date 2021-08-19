import React from "react";
import { navigate, Link } from "gatsby";
import { MarkdownRemarkEdge } from "@GatsbyTypes";
import { H2 } from "@Components/atoms/Typography";
import { Badge } from "@Components/atoms/Badge";
import { Card } from "@Components/atoms/Card";
import { useSpring, animated } from "react-spring";
import { cardStyle, listStyle } from "./style";

type PropsType = {
  data: MarkdownRemarkEdge[];
};

const calc = (x: number, y: number) =>
  `perspective(600px) rotateX(${
    -(y - window.innerWidth / 2) / 20
  }deg) rotateY(${(x - window.innerHeight / 2) / 20}deg) scale(1.05)`;

const PostListing: React.FC<PropsType> = ({ data }) => {
  const [springProps, setSpring] = useSpring(() => ({
    transform: `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const onMouseMoveHandle = (e: { clientX: number; clientY: number }) =>
    setSpring({ transform: calc(e.clientX, e.clientY) });

  const onMouseLeaveHandle = () =>
    setSpring({
      transform: `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
    });

  const handleOnClick = React.useCallback((e) => {
    navigate("/" + e);
  }, []);
  return (
    <div css={listStyle}>
      {data?.map((row, index) => {
        return (
          <animated.div
            key={index}
            onMouseMove={onMouseMoveHandle}
            onMouseLeave={onMouseLeaveHandle}
            style={springProps}
          >
            <Card
              onClick={() => handleOnClick(String(row.node.frontmatter?.slug))}
              css={cardStyle}
            >
              <H2>{String(row.node.frontmatter?.title)}</H2>
              <p>{row.node.frontmatter?.date}</p>
              <div className="card-badge-area">
                <Link to={`/category/${row.node.frontmatter?.category}`}>
                  <Badge>{row.node.frontmatter?.category}</Badge>
                </Link>
                <div>
                  {row.node.frontmatter?.tags?.map((row, index) => (
                    <Link key={index} to={`/tag/${row}`}>
                      <Badge>{row}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </animated.div>
        );
      })}
    </div>
  );
};

export default PostListing;
