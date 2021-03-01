/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

"use strict";
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
    allowJs: true,
  },
});
// Don't write detail function for Gatsby's Node APIs in this file.
// Instead, Please use `src/gatsby-node/index.ts`.
exports.createPages = require("./src/gatsby-node/index").createPages;
