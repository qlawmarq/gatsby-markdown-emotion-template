import { css } from "@emotion/react";
import { colors } from "@Constants/styles";

export const FooterStyle = css`
  position: relative;
  color: ${colors.Gray100};
  background-color: ${colors.Gray700};
  margin: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
