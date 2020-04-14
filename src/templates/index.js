/* SPDX-License-Identifier: GPL-2.0-only
 *
 * Copyright 2020 J Rick Ramstetter, rick.ramstetter@gmail.com
 *
 * This file is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This project incorporates work covered by the following copyright and
 * permission notices
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2015 gatsbyjs
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Page from 'templates/page'

const Template = ({ data, location }) => (
  <div>
    <Layout location={location}>
      <Meta
        title={get(data, 'post.frontmatter.title')}
        site={get(data, 'site.meta')}
      />
      {get(data, 'post.frontmatter.layout') != 'page' ? (
        <Post
          data={get(data, 'post')}
          options={{
            isIndex: false,
            adsense: get(data, 'site.meta.adsense'),
          }}
        />
      ) : (
        <Page {...this.props} />
      )}
    </Layout>
  </div>
)
export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        layout
        title
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
