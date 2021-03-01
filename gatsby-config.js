/**
 * Implement Gatsby's Config APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
"use strict";

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
});

require("./gatsby-types");

const {
  createPages,
  // onCreateNode,
  // createSchemaCustomization,
} = require("./src/gatsby-node/index");

exports.createPages = createPages;
// exports.onCreateNode = onCreateNode
// exports.createSchemaCustomization = createSchemaCustomization

module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-blog/`,
    title: `GATSBY`,
    description: `A certain software engineer's notes and labs.`,
    image: `/icon.png`,
    author: `Masaki Yoshiiwa`,
    email: `yopinoji@gmail.com`,
    twitterId: `GatsbyJS`,
    githubId: `yopinoji`,
    googleAdSense: ``,
    copyright: `© Masaki Yoshiiwa. All Rights Reserved.`,
    lang: `ja`,
    charSet: `utf-8`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-tsconfig-paths`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-123456789-0",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YopiNoji.com`,
        short_name: `YopiNoji.com`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              backgroundColor: "none",
              quality: 60,
            },
          },
        ],
      },
    },
    // If you need to analyze bundle size, uncomment following.
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `gatsby-types.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  categories: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.frontmatter.slug,
                  custom_elements: [
                    { "content:encoded": edge.node.html },
                    { author: "" },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        slug
                        category
                        cover
                        date
                        tags
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed",
          },
        ],
      },
    },
  ],
};
