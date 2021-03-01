/// <reference types="@emotion/react/types/css-prop" />

declare module "*.svg" {
  import { FunctionComponent } from "react";

  const ReactComponent: FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
