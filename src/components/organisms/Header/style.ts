import { css } from "@emotion/react";
import { colors, breakpoints } from "@Constants/styles";

export const HeaderStyle = css`
  position: relative;
  background-color: ${colors.Gray700};
  margin: auto;
  padding: 1rem 0;
`;

export const TitleAreaStyle = css`
  margin: auto;
  padding: 1rem;
  height: 22rem;
  display: table;
  text-align: center;
  @media (${breakpoints.TABLET}) {
    height: 14rem;
  }

  a {
    display: table-cell;
    vertical-align: middle;
    color: ${colors.Blue};
    text-decoration: none;
  }
`;

export const MenuAreaStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconStyle = css`
  padding: 0.25rem;
  width: 1.2rem;
  fill: ${colors.Gray100};
`;
