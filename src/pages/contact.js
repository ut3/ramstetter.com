import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'
import ProfileBlurb from 'components/profileblurb'

class Contact extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Contact" />
        <div>
          <div className="container">
            <ProfileBlurb data={data} />
            <h1>Contact information</h1>
            <h2>E-mail</h2>
            <p>
              <a href="mailto:rick.ramstetter@gmail.com">
                rick.ramstetter@gmail.com
              </a>
              <br />
              <small>Recruiters: use the address above</small>
            </p>
            <p>
              <small>
                Current and former clients, please send technical and/or
                administrative correspondence to: <br />
                <a href="mailto:rick@anteaterllc.com">rick@anteaterllc.com</a>
              </small>
            </p>
            <p>
              You can encrypt emails to me using GPG
              <br />
              Key fingerprint = 0xF58818CBFB5C8C8E
              <br />
              Available at the{' '}
              <a href="https://pgp.mit.edu/pks/lookup?op=vindex&search=0xF58818CBFB5C8C8E">
                MIT keyserver
              </a>
            </p>
            <h2>Instant messaging</h2>
            <p>
              <a href="https://en.wikipedia.org/wiki/Signal_(software)">
                Signal Software
              </a>{' '}
              (establish via email)
            </p>
            <h2>Physical</h2>
            <p>
              J Rick Ramstetter <br />
              Anteater LLC
              <br />
              305 SE Chkalov Dr #111-414
              <br />
              Vancouver, WA, 98683
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
