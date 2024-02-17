+++
title = 'Switched to gohugo.io v0.121.2'
date = 2024-02-08T12:52:06-08:00
+++

{{< figure class="rick-responsive-figure" src="under-construction-1.gif" alt="mid-90s under construction gif animation" >}}

I've switched from [GatsbyJS](https://gatsbyjs.com) to [gohugo](https://gohugo.io). This new version of the site uses the [Vimux/Mainroad](https://github.com/Vimux/Mainroad/) Hugo theme. I've made a few modifications to the workings of the Mainroad theme, and you can find those modifications in the [Github repository for this site.](https://github.com/ut3/ramstetter.com/)

GatsbyJS is complicated: GraphQL, React, tens of other javascript dependencies, and the npm ecosystem to wrangle them all. In the worst case, making a new post in GatsbyJS requires updating npm, updating gatsby, considering security warnings, updating dependencies, and, finally, writing content. Given that I update this site around once per year, that level of complexity is not only unwarranted, but also dangerous.

My hope is that my move to gohugo represents a move towards simplicity.

To illustrate the point, at the time of this migration, the GatsbyJS version of this website had 1569 unique requirements to build:
```
$ jq '.dependencies | keys[]' package-lock.json | wc -l
1569

$ jq '.dependencies | keys[]' package-lock.json | tail -n 10
"workbox-precaching"
"workbox-range-requests"
"workbox-routing"
"workbox-strategies"
"workbox-streams"
"workbox-sw"
"workbox-window"
"wrap-ansi"
"wrappy"
"zwitch"
```

The GatsbyJS version of the site including all dependencies consumed 1.2G on my disk:
```
$ ls ramstetter.com
content            gatsby-config.js  jsconfig.json  local         package.json       public     renovate.json  static
gatsby-browser.js  gatsby-node.js    LICENSE        node_modules  package-lock.json  README.md  src

$ du -h --max-depth=0 ramstetter.com
1.2G    ramstetter.com
```
