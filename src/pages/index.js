import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <section className="top-pad">
        <div className="container">
          <Link to="/profile/">
            <Img
              fixed={get(data, 'profile.childImageSharp.fixed')}
              className="rounded-circle"
            />
            <p className="lead">
              Software engineer specializing in remote embedded work
            </p>
          </Link>
        </div>
      </section>
      {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    profile: file(name: { eq: "rick-ramstetter" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
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
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
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
    }
  }
`
