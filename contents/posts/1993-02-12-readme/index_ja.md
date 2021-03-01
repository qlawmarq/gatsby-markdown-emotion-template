---
title: "README"
cover: "1993-02-12-readme/header.png"
category: "Note"
lang: "ja"
date: "1993-02-12"
slug: "readme"
draft: false
template: "posts"
tags:
  - README
---

# gatsby-starter-emotion-typescript

Gatsby template for Blog, Web Site, CMS.

## Integrated Libraries

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)

# Set up

## Prerequisites software

- [VSCode](https://code.visualstudio.com/)
  - [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Docker (Optional)](https://www.docker.com/)
- [Node.js 14.x (Optional)](https://nodejs.org/)

## Set up develop environment

There are two way to set up develop environment:

- Use Node.js in Docker
- Use Local Node.js

You can choose the way you like.

### Set up with Docker

Make sure you have Docker installed on your PC.

```bash
docker -v
Docker version 19.03.13, build 4484c46d9d
docker-compose -v
docker-compose version 1.27.4, build 40524192
```

Execute the following commands.

```bash
git clone https://github.com/YopiNoji/gatsby-blog.git
cd gatsby-blog
docker-compose up
```

Visit http://localhost:8000/.

### Setup with Node.js

Make sure you have Node.js installed on your PC.

```bash
node -v
v14.14.0
```

Execute the following commands.

```bash
git clone https://github.com/YopiNoji/gatsby-blog.git
cd gatsby-blog
npm i
npm run develop
```

Visit http://localhost:8000/.

# Deploy

You can choose your own way to deploy website, such as using AWS S3 & CloudFront or GCP or Netlify or Vercel or something.

If you are new to Gatsby, I recommend to use Vercel or Netlify for deployment.

How to deploy Gatsby website to Vercel:
https://vercel.com/solutions/gatsby

How to deploy Gatsby website to Netlify:
https://www.netlify.com/with/gatsby/#deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yopinoji/gatsby-starter-emotion-typescript)
