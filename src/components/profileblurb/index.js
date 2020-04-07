import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import get from 'lodash/get'

import './style.scss'

const ProfileBlurb = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ProfileBlurbQuery {
        profile: file(name: { eq: "rick-ramstetter" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <section className="top-pad">
        <div className="container text-center">
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
    )}
  />
)

export default ProfileBlurb
