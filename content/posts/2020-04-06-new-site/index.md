---
title: "New Site"
date: "2020-04-06T22:15:03.284Z"
layout: post
path: "/2020-04-06-new-site/"
image: ./one-px-black.jpg
description: "Information about the new version of Ramstetter.com, which went live in April 2020."
category: Work
tags:
- FOSS
- WorkInProgress
---

The [old version of Ramstetter.com](//old.ramstetter.com (now old.ramstetter.com)) was created with [GatsbyJS](//gatsbyjs.org) version 0, which dates to 2016. That software is no longer maintained, and it was becoming increasingly difficult to make updates.
<!--more-->

| | | |
| --- | --- | --- | --- |
| ![under-construction-1](./under-construction-1.gif) | ![under-construction-2](./under-construction-2.gif) | ![under-construction-3](./under-construction-3.gif) | ![under-construction-4](./under-construction-4.gif) |
*Because old web practices and technologies are fun only when used ironically*

### Gatsby, Bootstrap, Netlify

This new version is also using GatsbyJS, but version 2.11. The site is using [Bootstrap](//getbootstrap.com/) among others for CSS. I'm hosting it on [Netlify](//netlify.com). DNS is (as previously) on [Cloudflare](//cloudflare.com). The sources are hosted in [Github](//github.com/ut3/ramstetter.com). I've got a [CircleCI](//circleci.com/gh/ut3/ramstetter.com) job running. Can you believe all of this tooling is free (like beer, not freedom)?

### JAMstack is awesome

When I created the prior version of this site in 2016 (GatsbyJS v0), JAMstack was in its infancy. Only two years prior in 2014 I was blogging about my travels on the AT and [PCT](//pct.ramstetter.com) in a slow-to-load WordPress install. In the ~4 years since, it's become clear that JAMstack is here to stay. The static webpages of the late 90s are back (in this case, horrible gifs included).

### My experience

I'm not a frontend developer by any means, and yet I find web technologies fascinating if only because they're new to me. I've made a number of customizations to this new version of ramstetter.com, which have required that I dabble in CSS & SASS, GraphQL, and React JSX. There's aren't technologies I'd otherwise encounter.

In the few hours that I explored Gatsby's [starters](//www.gatsbyjs.org/starters/), I found that a common design practice is to artificially limit the screen width (see Bootstrap's "container" class). I can't discount that my sample set may have been invalid. Regardless, I understand the temptation to do this: it makes responsive design easier. But I refuse. I paid for the @#$% 4k monitor, and I'm going to use it.

Here's a screenshot of me editing this page in [Visual Studio Code (vscode)](//code.visualstudio.com/):

![vscode](./development.jpg)

### Site status

New tooling means better status reporting.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a720596-da73-46f0-b044-ad625673d79b/deploy-status)](https://app.netlify.com/sites/ramstetter-new/deploys)
[![CircleCI](https://circleci.com/gh/ut3/ramstetter.com.svg?style=svg)](https://circleci.com/gh/ut3/ramstetter.com)
[![Dependency Status](https://img.shields.io/david/ut3/ramstetter.com.svg?style=flat-square)](https://david-dm.org/ut3/ramstetter.com#info=dependencies)
