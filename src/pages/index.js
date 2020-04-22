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
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/layout'
import Meta from 'components/meta'
import ProfileBlurb from 'components/profileblurb'
const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }

    if (normalizedProps.className && !normalizedProps.className.includes('non-stretched-image'))
        normalizedProps.className = normalizedProps.className + " non-stretched-image"
  }

  return <Img {...normalizedProps} />
}

class Profile extends React.Component {
  render() {
    const { location, data } = this.props
    const displayproject = get(data, 'displayproject.childImageSharp.fluid')
    const raverdubanner = get(data, 'raverdubanner.childImageSharp.fluid')

    const saleae = get(data, 'saleae.childImageSharp.fluid')
    const rdurickroll = get(data, 'rdurickroll.childImageSharp.fluid')
    const notforflight = get(data, 'notforflight.childImageSharp.fluid')

    return (
      <Layout location={location}>
        <Meta title="Profile" location={location} />
        <Helmet encodeSpecialCharacters={false}>
          <meta name="og:type" content="profile" />
          <meta name="profile:first_name" content="J Rick" />
          <meta name="profile:last_name" content="Ramstetter" />
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org/",
            "@type": 'Person',
            "@id" : "https://ramstetter.com/#rick",
            "name": 'J Rick Ramstetter',
            givenName: 'J Rick',
            familyName: 'Ramstetter',
            name: 'J. Rick Ramstetter',
            jobTitle: 'Software engineer',
            honorificSuffix: "M.Sc.",
            email: ['rick.ramstetter@gmail.com', 'rick@anteaterllc.com'],
            url: '//ramstetter.com',
            image: '//ramstetter.com/rick-ramstetter.jpg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Vancouver, WA',
              postalCode: '98683',
              streetAddress: '305 SE Chkalov Dr Suite 111 PMB 414',
            },
            alumniOf: [
              {
                '@type' : 'EducationalOrganization',
                '@id' : 'https://rutgers.edu',
                'name' : 'Rutgers, The State University of New Jersey',
                'sameAs' : '//en.wikipedia.org/wiki/Rutgers_University',
              },
              {
                '@type' : 'EducationalOrganization',
                '@id' : 'https://uci.edu',
                'name' : 'University of Califorina, Irvine',
                'sameAs' : '//en.wikipedia.org/wiki/University_of_California,_Irvine',
              }
            ],
          })}
        </script>
        </Helmet>
          <div className="" itemScope itemtype ="//schema.org/Person" itemid="https://ramstetter.com/#rick">
          <meta itemprop="name" content="J Rick Ramstetter" />
          <div className="container text-center">
            <ProfileBlurb isIndex={true} />
            <p>
              <a href="//ramstetter.com/Ramstetter-Rick--resume.pdf">
                J Rick Ramstetter's resume
              </a>
            </p>
          </div>

          <section className="">
            <Img sizes={displayproject} className="cover-image opacity-2" />
            <div className="container text-left">
              <h2 className="section-heading">Academics</h2>
              <p itemprop="hasCredential" itemScope itemtype="//schema.org/EducationalOccupationalCredential">
              <meta itemprop="competencyRequired" itemtype="//schema.org/Text" content="Operating systems, circuit fundamentals, Linux, C, C++, algorithms" />
                J Rick Ramstetter graduated from{' '}
                <span itemprop="recognizedBy" itemtype="//schema.org/EducationalOrganization" itemScope itemid="https://rutgers.edu">
                <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Rutgers_University" />
                <a href="//www.cs.rutgers.edu"><span itemprop="name" itemtype="//schema.org/Text">Rutgers University</span></a>
                </span> in 2010
                with a <span itemprop="educationalLevel" itemtype="//schema.org/Text">Master of Science</span>
                 <span itemprop="credentialCategory" itemtype="//schema.org/Text">degree</span> in 
                 <span itemprop="about" itemScope itemtype="//schema.org/Thing">
                   <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Computer_science" />
                   <span itemprop="name" itemtype="//schema.org/Text">computer science</span>
                </span>
                 (<span itemprop="award" itemtype="//schema.org/Text">GPA 3.85/4.0</span>).
                 His Master's final project was a simulator for{' '}
                <a href="//www.academia.edu/7018782/Trajectory_based_forwarding_and_its_applications">
                  trajectory based routing
                </a>{' '}
                protocols, along with a few whitepaper-sourced protocols
                implemented atop that simulator. Other interesting degree work
                included a distributed{' '}
                <a href="//en.wikipedia.org/wiki/Consistent_hashing">
                  consistent hashing
                </a>{' '}
                file store with a{' '}
                <a href="//en.wikipedia.org/wik/Filesystem_in_Userspace">
                  FUSE
                </a>{' '}
                frontend
                 a modification to the{' '}
                <a href="//web.archive.org/web/20100129163345///madwifi-project.org/">
                  madwifi
                </a>{' '}
                WLAN drivers to support{' '}
                <a href="/academic/stable-ping-paper.pdf">
                  stable latency ICMP pings
                </a>{' '}
                suitable for use in localization, and a{' '}
                <a href="//www.mdpi.com/1999-5903/2/3/190/pdf">publication</a>{' '}
                with{' '}
                <a href="//people.cs.vt.edu/danfeng/">Dr. Danfeng Yao</a>.
              </p>
              <p itemprop="hasCredential" itemScope itemtype="//schema.org/EducationalOccupationalCredential">
              <meta itemprop="competencyRequired" itemtype="//schema.org/Text" content="English, Mathematics, Signal Processing, C, Java, C++, Python" />
                Prior to Rutgers, Rick graduated from the{' '}
                <span itemprop="recognizedBy" itemtype="//schema.org/EducationalOrganization" itemScope itemid="https://uci.edu">
                <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/University_of_California,_Irvine" />
                <a href="//www.ics.uci.edu"><span itemprop="name" itemtype="//schema.org/Text">University of California, Irvine</span></a>
                </span>
                , with a <span itemprop="educationalLevel" itemtype="//schema.org/Text">Bachelor of Science</span>
                <span itemprop="credentialCategory" itemtype="//schema.org/Text">degree</span>
                 in <span itemprop="about" itemScope itemtype="//schema.org/Thing">
                   <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Computer_engineering" />
                   <span itemprop="name" itemtype="//schema.org/Text">computer engineering</span>
                </span>,
                where his senior project was a series of{' '}
                <a href="/img/display-project.jpg">small display units</a>{' '}
                which reconfigured into a single larger display when
                interconnected.
              </p>
            </div>
          </section>

          <section className="">
            <Img sizes={raverdubanner} className="cover-image opacity-2" />
            <div className="container text-left">
              <h2 className="section-heading">Industry</h2>
              <p>
                Rick's initial involvement with the aerospace industry came when
                he was recruited by <a href="//spacex.com">SpaceX</a>. There,
                Rick worked primarily on low-level tasks, including board
                bringup and firmware, for the{' '}
                <a href="//en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1">
                  COTS C1 & C2 missions.
                </a>{' '}
                This included leading a short, ultimately failed R&D project to
                execute two instances of Linux on a single, multi-core PowerPC
                device, this to enable fault tolerant flight control
                calculations via{' '}
                <a href="//weekly-geekly.github.io/articles/186806/index.html">
                  OpenMCAPI
                </a>{' '}
                and “asymmetric multiprocessing.” SpaceX was also Rick's first
                experience with remote work, as he bounced between Hawthorne,
                CA, USA and New Brunswick, NJ, USA to complete degree work while
                employed.
              </p>
              <p>
                After SpaceX, Rick moved to the in-flight entertainment and
                in-flight wifi industries at Zodiac Aerospace (now{' '}
                <a href="//www.safran-group.com/">Safran</a>). There, he worked
                as a full-stack generalist with an emphasis on low level work.
                In this industry, Rick worked at all levels of the software
                stack, from initial board bringup to Qt5/QML. Rick has developed
                a reputation as a focused, high performance team member, as
                evidenced by{' '}
                <Link to="/client-feedback/">positive client feedback</Link> and
                the dozens of times his contract for remote work was renewed by
                Safran.
              </p>
              <p>Rick is a strong supporter of FOSS software.</p>
              <div className="row justify-content-md-center">
                <div className="col-sm-4 py-2">
                  <NonStretchedImage fluid={rdurickroll} className="content-image" />
                </div>
                <div className="col-sm-4 py-2">
                  <NonStretchedImage fluid={notforflight} className="content-image" />
                </div>
                <div className="col-sm-4 py-2">
                  <NonStretchedImage fluid={saleae} className="content-image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    displayproject: file(name: { eq: "display-project-banner" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    raverdubanner: file(name: { eq: "rave-rdu-banner" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    saleae: file(name: { eq: "saleae" }) {
      childImageSharp {
        fluid(quality: 80 ) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    rdurickroll: file(name: { eq: "rdu-rickroll" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    notforflight: file(name: { eq: "not-for-flight" }) {
      childImageSharp {
        fluid(quality: 80 ) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`
