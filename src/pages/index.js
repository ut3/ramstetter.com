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
          <meta property="og:type" content="profile" />
          <meta name="profile:first_name" content="J Rick" />
          <meta name="profile:last_name" content="Ramstetter" />
          <script type="application/ld+json">
          {JSON.stringify(
            {
              "@id" : "https://ramstetter.com/#address",
              "@context": "http://schema.org/",
              '@type': 'PostalAddress',
              addressLocality: 'Vancouver',
              addressRegion: 'WA',
              addressCountry: 'USA',
              postalCode: '98683',
              streetAddress: '305 SE Chkalov Dr Suite 111 PMB 414',
            },
            {
              "@id" : "https://ramstetter.com/#mdpi",
              "@context": "http://schema.org/",
              "@type" : "Organization", 
              name: "MDPI", 
              sameAs: "https://en.wikipedia.org/wiki/MDPI",
              url: "http://www.mdpi.com/",
            }
          )}
          </script>
          </Helmet>

          <div itemScope itemType="http://schema.org/Person" itemID="https://ramstetter.com/#rick">
          <meta itemProp="image" content="//ramstetter.com/rick-ramstetter.jpg" />
          <meta itemProp="honorificSuffix" content="M.Sc." />
          <meta itemProp="familyName" content="Ramstetter" />
          <meta itemProp="givenName" content="J Rick" />
          <meta itemProp="email" content="rick.ramstetter@gmail.com" />
          <meta itemProp="email" content="rick@anteaterllc.com" />
          <meta itemProp="jobTitle" content="Embedded and systems software engineer" />
          <link itemProp="alumniOf" href="https://ramstetter.com/#rutgers" />
          <link itemProp="alumniOf" href="https://ramstetter.com/#uci" />
          <link itemProp="address" href="https://ramstetter.com/#address" />
          <meta itemProp="nationality" content="USA" />

          <div className="container text-center">
            <ProfileBlurb isIndex={true} />
            <p>
              <a href="//ramstetter.com/Ramstetter-Rick--resume.pdf">
                <span itemProp="name">J Rick Ramstetter</span>'s resume
              </a>
            </p>
          </div>

          <section className="">
            <div className="container text-left">
            <Img sizes={raverdubanner} className="cover-image opacity-2" />
              <h2 className="section-heading">Industry</h2>
              <p>
                <span itemProp="hasOccupation" itemScope itemType='http://schema.org/Occupation'>
                  I'm a{' '}
                  <span itemProp="occupationLocation" itemScope itemType="http://schema.org/AdministrativeArea" itemID="https://ramstetter.com/#usabased">
                    <link itemProp="address" href="https://ramstetter.com/#address" />
                    <span itemProp="name">USA-based</span>{' '}
                  </span>
                  <span itemProp="name">software engineer</span>{' '}
                  <meta itemProp="occupationalCategory" content="15-1252.00" />
                  <meta itemProp="sameAs" content="//en.wikipedia.org/wiki/Software_engineering" />
                  <link itemProp="qualifications" href="https://ramstetter.com/#rutgersmsc" />
                  <link itemProp="qualifications" href="https://ramstetter.com/#ucibsc" />
                  with <span itemProp="experienceRequirements">10 years of experience</span>{' '}
                  <meta itemProp="estimatedSalary" content="0" />
                </span>
                 in{' '}
                <span id="naicscodes">
                  <meta itemProp="naics" content="541511" />
                  <meta itemProp="naics" content="541512" />
                  <span itemProp="knowsAbout">GNU/Linux</span>{' '}
                  <span itemProp="knowsAbout">system software</span> and{' '}
                  <span itemProp="knowsAbout">embedded devices</span>.{' '}
                  I've worked in many industries, including{' '}
                  <meta itemProp="naics" content="541614"/> logistics,{' '}
                  <meta itemProp="naics" content="334511" />passenger aircraft,{' '}
                  <meta itemProp="naics" content="927110" />space launch, {' '}
                  <meta itemProp="naics" content="611310" />academia, and{' '} 
                  <meta itemProp="naics" content="541922"	/>sports photography.
                  <meta itemProp="isicv4" content="6202" />
                </span>
              </p>
              <p>
                My most enduring <span itemProp="knowsAbout">business relationship</span> is with{' '}
                <a href="//www.safran-group.com/" target="_blank">Safran S.A.</a>, where I serve as a{' '}
                <span itemProp="knowsAbout">contract</span> <span itemProp="knowsAbout">system software</span>{' '}
                generalist. Their myriad <span itemProp="knowsAbout">embedded devices</span> in the areas of{' '}
                seatback <span itemProp="knowsAbout">in-flight entertainment</span>,{' '}
                <span itemProp="knowsAbout">in-flight WiFi</span>, and{' '}
                <span itemProp="knowsAbout">aircraft cabin</span> <span itemProp="knowsAbout">power delivery</span>{' '}
                give me opportunity to work with everything from <span itemProp="knowsAbout">bootloaders</span>{' '}
                (<span itemProp="knowsAbout">BareBox</span> and <span itemProp="knowsAbout">U-Boot</span>) to{' '}
                <span itemProp="knowsAbout">Qt5</span>/<span itemProp="knowsAbout">QML</span>. The bulk of my experience{' '}
                is at the level of <span itemProp="knowsAbout">systemd</span> or below--
                <span itemProp="knowsAbout">GStreamer</span> work is frequent. Languages I use most often include{' '}
                <span itemProp="knowsAbout" itemScope itemType="http://schema.org/ComputerLanguage">
                  <span itemProp="name">C</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/C_(programming_language)"/>
                </span>,{' '}
                <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">C++</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/C%2B%2B"/>
                </span>, shell (
                <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">posix</span>{' '}
                  <meta itemProp="sameAs" content="https://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html"/>
                </span>
                  and{' '}
                  <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">bash</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"/>
                </span>),{' '}
                <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">Python</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/Python_(programming_language)"/>
                </span>, and {' '}
                <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">QML</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/QML"/>
                </span>. 
                I've developed a reputation as a focused, high performance team member, 
                as evidenced by the dozens of times my contract for remote work has been renewed,
                 and also by <Link to="/client-feedback/">highly positive client feedback</Link>.
              </p>
              <p>
                I perform my <span itemProp="knowsAbout">contract work</span> through{' '}
                <span itemProp="brand" itemScope itemType="http://schema.org/Organization" itemRef="naicscodes" itemID="https://ramstetter.org/#anteaterllc">
                  <span itemProp="name">Anteater LLC</span>,{' '}
                  <link itemProp="areaServed" href="https://ramstetter.com/#usabased" />
                  <link itemProp="address" href="https://ramstetter.com/#address" />
                  a <span itemProp="numberOfEmployees">two</span> person Washington state LLC{' '}
                  which carries PLI/E&O insurance and is registered to do business in{' '}
                  <span itemProp="areaServed">Washington state</span>,{' '}
                  <span itemProp="areaServed">Oregon</span>, and{' '}
                  <span itemProp="areaServed">California</span>.
                </span>
              </p>
            </div>
          </section>

          <section className="">
            <Img sizes={displayproject} className="cover-image opacity-2" />
            <div className="container text-left">
              <h2 className="section-heading">Academics</h2>
              <p>
              <span itemProp="hasCredential" itemScope itemType="http://schema.org/EducationalOccupationalCredential" itemID="https://ramstetter.com/#rutgersmsc">
              <meta itemProp="competencyRequired" content="Operating systems, circuit fundamentals, Linux, C, C++, algorithms" />
                I graduated from{' '}
                <span itemProp="recognizedBy" itemType="http://schema.org/EducationalOrganization" itemScope itemID="https://ramstetter.com/#rutgers">
                <meta itemProp="sameAs" content="//en.wikipedia.org/wiki/Rutgers_University" />
                <a href="//www.cs.rutgers.edu"><span itemProp="name">Rutgers University</span></a>{' '}
                </span>
                with a <span itemProp="educationalLevel">Master of Science</span>{' '}
                 <span itemProp="credentialCategory">degree</span> in{' '}
                 <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                   <meta itemProp="sameAs" content="//en.wikipedia.org/wiki/Computer_science" />
                   <span itemProp="name">computer science</span>
                </span>{' '}
                 (<span itemProp="award">GPA 3.85/4.0</span>).
                 </span>{' '}
                 My Master's final project was a <a href="/academic/bezier-spline-routing.pdf">Bezier-spline routing protocol</a>{' '}
                 implemented atop a{' '}
                 <span itemProp="knowsAbout" itemScope itemType='http://schema.org/ComputerLanguage'>
                  <span itemProp="name">Matlab</span>
                  <meta itemProp="sameAs" content="https://en.wikipedia.org/wiki/Matlab"/>
                </span>{' '}
                simulator for{' '}
                <a href="//www.academia.edu/7018782/Trajectory_based_forwarding_and_its_applications">
                <span itemProp="knowsAbout">trajectory based routing</span>
                </a>. Other interesting degree work
                included a distributed{' '}
                <a href="//en.wikipedia.org/wiki/Consistent_hashing">
                <span itemProp="knowsAbout">consistent hashing</span>
                </a>{' '}
                file store with a{' '}
                <a href="//en.wikipedia.org/wik/Filesystem_in_Userspace">
                <span itemProp="knowsAbout">FUSE</span>
                </a>{' '}
                frontend
                 a modification to the{' '}
                <a href="//web.archive.org/web/20100129163345///madwifi-project.org/">
                  madwifi
                </a>{' '}
                <span itemProp="knowsAbout">WLAN drivers</span> to support{' '}
                <a href="/academic/stable-ping-paper.pdf">
                  stable latency <span itemProp="knowsAbout">ICMP</span> pings
                </a>{' '}
                suitable for use in <span itemProp="knowsAbout">localization</span>, and a publication{' '}
                <span itemScope itemType="http://schema.org/ScholarlyArticle">
                  <meta itemProp="image" content="//ramstetter.com/academic/applications-and-security-of-next-generation-user-centric-wireless-systems.jpg" />
                  <span itemProp="author" itemScope itemType="http://schema.org/Person">
                    <meta itemProp="sameAs" content="https://ramstetter.com/#rick" />
                    <meta itemProp="name" content="J Rick Ramstetter" />
                  </span>
                  <meta itemProp="URL" content="//www.mdpi.com/1999-5903/2/3/190/pdf" />
                  <meta itemProp="datePublished" content="2010-07-28" />
                  <link itemProp="publisher" href="https://ramstetter.com/#mdpi" />
                  <a href="//www.mdpi.com/1999-5903/2/3/190/pdf">
                      <span itemProp="name headline">
                        Applications and Security of Next-Generation, User-Centric Wireless Systems
                      </span>
                  </a>{' '}
                  with{' '}
                  <span itemProp="author" itemScope itemType="http://schema.org/Person">
                    <meta itemProp="sameAs" content="//people.cs.vt.edu/danfeng" />
                    <a href="//people.cs.vt.edu/danfeng/">
                      <span itemProp="name">Dr. Danfeng Yao</span>
                    </a>.
                  </span>
                </span>
              </p>
              <p>
              <span itemProp="hasCredential" itemScope itemType="http://schema.org/EducationalOccupationalCredential" itemID="https://ramstetter.com/#ucibsc">
              <meta itemProp="competencyRequired" content="English, Mathematics, Signal Processing, C, Java, C++, Python" />
                Prior to Rutgers, I graduated from the{' '}
                <span itemProp="recognizedBy" itemType="http://schema.org/EducationalOrganization" itemScope itemID="https://ramstetter.com/#uci">
                <meta itemProp="sameAs" content="//en.wikipedia.org/wiki/University_of_California,_Irvine" />
                <a href="//www.ics.uci.edu"><span itemProp="name">University of California, Irvine</span></a>
                </span>
                , with a <span itemProp="educationalLevel">Bachelor of Science</span>{' '}
                <span itemProp="credentialCategory">degree</span>{' '}
                 in <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                   <meta itemProp="sameAs" content="//en.wikipedia.org/wiki/Computer_engineering" />
                   <span itemProp="name">computer engineering</span>
                </span>,{' '}
                </span>
                where my senior project was a series of{' '}
                <a href="/img/display-project.jpg"><span itemProp="knowsAbout">embedded</span> display units</a>{' '}
                which reconfigured into a single larger display when
                interconnected.
              </p>
        
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
