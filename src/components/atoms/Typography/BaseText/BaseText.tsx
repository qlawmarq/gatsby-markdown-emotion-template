import React, { HtmlHTMLAttributes } from "react";

export const BaseText: React.FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  return (
    <p
      className="text-base text-gray-700 no-underline dark:text-gray-300"
      {...props}
    >
      {props.children}
    </p>
  );
};
