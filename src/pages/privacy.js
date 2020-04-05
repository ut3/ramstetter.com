import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Privacy extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Privacy" />
        <div>
          <div className="container">
            <h1>Privacy policy</h1>
            <p>
              J. Rick Ramstetter (“I”, "me") operates the ramstetter.com and
              anteaterllc.com sites (the “Site”). I also offer contract services
              ("Services"). This page informs you of my policies regarding the
              collection, use and disclosure of Personal Information when you
              use my Site, communicate with me, or contract with me for
              Services. I will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <h2>Collected information</h2>
            <p>
              I may collect information that your browser sends whenever you
              visit my Site (“Log Data”). This Log Data may include browser
              name, the type of computer, your IP address, referring web site,
              or other web page parameters.
            </p>
            <p>
              My Site's server(s) (which is/are hosted by third party service
              providers, including <a href="https://netlify.com">Netlify</a> and{' '}
              <a href="https://github">Github</a>) will likely collect similar
              Log Data. Similarly, I may use services such as Google Analytics
              to collect, monitor, and analyze Log Data in order to better my
              Site’s functionality. These service providers have their own
              privacy policies addressing how they use such Log Data.
            </p>
            <p>
              If you contact me, I may keep records and copies of your
              correspondence (including email addresses and other personally
              identifying information, "Correspondence").
            </p>
            <h2>Use of information</h2>
            <p>
              Use of collected information may be necessary for this Site to
              operate correctly. I may use collected information to present my
              Site to you, to allow you to participate in interactive features
              on my Site, to enhance the experience of using my Site and
              Services, to manage access to my Site, and to gather statistics
              about the use of my Site (including via Google Analytics).
            </p>
            <p>
              I may use collected information to carry out my obligations and
              enforce my rights that arise from any contracts entered into
              between you and I, including for billing and collections.
            </p>
            <p>
              I may use collected information to comply with legal or regulatory
              obligations, including tax filings.
            </p>
            <p>
              I rely on the positive feedback of my clients for success. I may
              use your collected information to publish feedback and comments in
              a portfolio, including on this website.
            </p>
            <p>
              With your consent, I may use your collected information for any
              other purpose.
            </p>
            <h2>Automatic collection</h2>
            <p>Log Data may be collected automatically.</p>
            <h2>Duration of storage</h2>
            <p>
              I may keep your collected information indefinitely. You may
              request that I delete such information. I will honor such a
              request unless there are reasons for further storage that prevail
              over your interests, such as enforcing my rights, defending
              against legal claims, billing, and collections.
            </p>
            <h2>Sharing of information</h2>
            <p>
              I may share your information to comply with any court order, law,
              legal process (such as a subpoena), or law enforcement
              requirement.
            </p>
            <p>
              I believe in due process, and it is unlikely that I would share
              your information with regulatory agencies without lawful subpoena.
              Nonetheless such decisions are situational, and thus I may share
              your information when responding to any governmental, regulatory
              body, or public authority request.
            </p>
            <p>
              In the event that I sell my business or some portion thereof, I
              may share your personal information with a buyer or other
              successor of my business.
            </p>
            <p>
              I may share your information to carry out obligations or enforce
              my rights, including for billings, collections, and legal
              pursuits.
            </p>
            <p>
              I may share your information to protect my rights, property, or
              safety. This includes exchanging information for the purposes of
              fraud protection and credit risk reduction.
            </p>
            <p>
              I may share your information for any other purpose disclosed by me
              when you provide the information.
            </p>
            <p>
              I rely on the positive feedback of my clients for success. I may
              share your information with prospective clients to enable them to
              speak with you about my performance. You may opt-out of serving as
              a reference at any time.
            </p>

            <h2>Protection of information</h2>
            <p>
              My email accounts are hosted by{' '}
              <a href="https://zoho.com">Zoho</a> and{' '}
              <a href="https://gmail.com">GMail</a>. You may use GPG to
              communicate with me via email.
            </p>
            <p>
              Established Services clients may use the{' '}
              <a href="https://en.wikipedia.org/wiki/Signal_(software)">
                Signal Software
              </a>{' '}
              to communicate with me with perfect forward secrecy.
            </p>
            <p>
              The security of communications sent by electronic means or by post
              cannot be guaranteed. Each individual that provides information to
              me via the internet or by post does so at their own risk. I cannot
              accept responsibility for misuse or loss of, or unauthorised
              access to, data where the security of information is not within my
              control.
            </p>
            <p>
              I am not responsible for the privacy or security practices of any
              third party.
            </p>
            <h2>Changes to this policy</h2>
            <p>
              Changes and clarifications to this policy will take effect
              immediately upon posting. It is your responsibility to refer back
              to this policy to review changes. Established Services clients
              will be notified directly of material changes.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Privacy
