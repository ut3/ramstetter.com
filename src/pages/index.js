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

          <div itemScope itemtype="http://schema.org/Person" itemid="https://ramstetter.com/#rick">
          <meta itemprop="image" content="//ramstetter.com/rick-ramstetter.jpg" />
          <meta itemprop="honorificSuffix" content="M.Sc." />
          <meta itemprop="familyName" content="Ramstetter" />
          <meta itemprop="givenName" content="J Rick" />
          <meta itemprop="email" content="rick.ramstetter@gmail.com" />
          <meta itemprop="email" content="rick@anteaterllc.com" />
          <meta itemprop="jobTitle" content="Embedded and systems software engineer" />
          <link itemprop="alumniOf" href="https://ramstetter.com/#rutgers" />
          <link itemprop="alumniOf" href="https://ramstetter.com/#uci" />
          <link itemprop="address" href="https://ramstetter.com/#address" />
          <meta itemprop="nationality" content="USA" />

          <div className="container text-center">
            <ProfileBlurb isIndex={true} />
            <p>
              <a href="//ramstetter.com/Ramstetter-Rick--resume.pdf">
                <span itemprop="name">J Rick Ramstetter</span>'s resume
              </a>
            </p>
          </div>

          <section className="">
            <div className="container text-left">
            <Img sizes={raverdubanner} className="cover-image opacity-2" />
              <h2 className="section-heading">Industry</h2>
              <p>
                <span itemprop="hasOccupation" itemScope itemType='http://schema.org/Occupation'>
                  I'm a{' '}
                  <span itemprop="occupationLocation" itemScope itemType="http://schema.org/AdministrativeArea" itemid="https://ramstetter.com/#usabased">
                    <link itemprop="address" href="https://ramstetter.com/#address" />
                    <span itemprop="name">USA-based</span>{' '}
                  </span>
                  <span itemprop="name">software engineer</span>{' '}
                  <meta itemprop="occupationalCategory" content="15-1252.00" />
                  <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Software_engineering" />
                  <link itemprop="qualifications" href="https://ramstetter.com/#rutgersmsc" />
                  <link itemprop="qualifications" href="https://ramstetter.com/#ucibsc" />
                  with <span itemprop="experienceRequirements">10 years of experience</span>{' '}
                  <meta itemprop="estimatedSalary" content="0" />
                </span>
                 in{' '}
                <span id="naicscodes">
                  <meta itemprop="naics" content="541511" />
                  <meta itemprop="naics" content="541512" />
                  <span itemprop="knowsAbout">GNU/Linux</span>{' '}
                  <span itemprop="knowsAbout">system software</span> and{' '}
                  <span itemprop="knowsAbout">embedded devices</span>.{' '}
                  I've worked in many industries, including{' '}
                  <meta itemprop="naics" content="541614"/> logistics,{' '}
                  <meta itemprop="naics" content="334511" />passenger aircraft,{' '}
                  <meta itemprop="naics" content="927110" />space launch, {' '}
                  <meta itemprop="naics" content="611310" />academia, and{' '} 
                  <meta itemprop="naics" content="541922"	/>sports photography.
                  <meta itemprop="isicv4" content="6202" />
                </span>
              </p>
              <p>
                My most enduring <span itemprop="knowsAbout">business relationship</span> is with{' '}
                <a href="//www.safran-group.com/" target="_blank">Safran S.A.</a>, where I serve as a{' '}
                <span itemprop="knowsAbout">contract</span> <span itemprop="knowsAbout">system software</span>{' '}
                generalist. Their myriad <span itemprop="knowsAbout">embedded devices</span> in the areas of{' '}
                seatback <span itemprop="knowsAbout">in-flight entertainment</span>,{' '}
                <span itemprop="knowsAbout">in-flight WiFi</span>, and{' '}
                <span itemprop="knowsAbout">aircraft cabin</span> <span itemprop="knowsAbout">power delivery</span>{' '}
                give me opportunity to work with everything from <span itemprop="knowsAbout">bootloaders</span>{' '}
                (<span itemprop="knowsAbout">BareBox</span> and <span itemprop="knowsAbout">U-Boot</span>) to{' '}
                <span itemprop="knowsAbout">Qt5</span>/<span itemprop="knowsAbout">QML</span>. The bulk of my experience{' '}
                is at the level of <span itemprop="knowsAbout">systemd</span> or below--
                <span itemprop="knowsAbout">GStreamer</span> work is frequent. Languages I use most often include{' '}
                <span itemprop="knowsAbout" itemScope itemtype="http://schema.org/ComputerLanguage">
                  <span itemprop="name">C</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/C_(programming_language)"/>
                </span>,{' '}
                <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">C++</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/C%2B%2B"/>
                </span>, shell (
                <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">posix</span>{' '}
                  <meta itemprop="sameAs" content="https://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html"/>
                </span>
                  and{' '}
                  <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">bash</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"/>
                </span>),{' '}
                <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">Python</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/Python_(programming_language)"/>
                </span>, and {' '}
                <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">QML</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/QML"/>
                </span>. 
                I've developed a reputation as a focused, high performance team member, 
                as evidenced by the dozens of times my contract for remote work has been renewed,
                 and also by <Link to="/client-feedback/">highly positive client feedback</Link>.
              </p>
              <p>
                I perform my <span itemprop="knowsAbout">contract work</span> through{' '}
                <span itemprop="brand" itemScope itemtype="http://schema.org/Organization" itemref="naicscodes" itemid="https://ramstetter.org/#anteaterllc">
                  <span itemprop="name">Anteater LLC</span>,{' '}
                  <link itemprop="areaServed" href="https://ramstetter.com/#usabased" />
                  <link itemprop="address" href="https://ramstetter.com/#address" />
                  a <span itemprop="numberOfEmployees">two</span> person Washington state LLC{' '}
                  which carries PLI/E&O insurance and is registered to do business in{' '}
                  <span itemprop="areaServed">Washington state</span>,{' '}
                  <span itemprop="areaServed">Oregon</span>, and{' '}
                  <span itemprop="areaServed">California</span>.
                </span>
              </p>
            </div>
          </section>

          <section className="">
            <Img sizes={displayproject} className="cover-image opacity-2" />
            <div className="container text-left">
              <h2 className="section-heading">Academics</h2>
              <p>
              <span itemprop="hasCredential" itemScope itemtype="http://schema.org/EducationalOccupationalCredential" itemid="https://ramstetter.com/#rutgersmsc">
              <meta itemprop="competencyRequired" content="Operating systems, circuit fundamentals, Linux, C, C++, algorithms" />
                I graduated from{' '}
                <span itemprop="recognizedBy" itemtype="http://schema.org/EducationalOrganization" itemScope itemid="https://ramstetter.com/#rutgers">
                <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Rutgers_University" />
                <a href="//www.cs.rutgers.edu"><span itemprop="name">Rutgers University</span></a>{' '}
                </span>
                with a <span itemprop="educationalLevel">Master of Science</span>{' '}
                 <span itemprop="credentialCategory">degree</span> in{' '}
                 <span itemprop="about" itemScope itemtype="http://schema.org/Thing">
                   <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Computer_science" />
                   <span itemprop="name">computer science</span>
                </span>{' '}
                 (<span itemprop="award">GPA 3.85/4.0</span>).
                 </span>{' '}
                 My Master's final project was a <a href="/academic/bezier-spline-routing.pdf">Bezier-spline routing protocol</a>{' '}
                 implemented atop a{' '}
                 <span itemprop="knowsAbout" itemScope itemtype='http://schema.org/ComputerLanguage'>
                  <span itemprop="name">Matlab</span>
                  <meta itemprop="sameAs" content="https://en.wikipedia.org/wiki/Matlab"/>
                </span>{' '}
                simulator for{' '}
                <a href="//www.academia.edu/7018782/Trajectory_based_forwarding_and_its_applications">
                <span itemprop="knowsAbout">trajectory based routing</span>
                </a>. Other interesting degree work
                included a distributed{' '}
                <a href="//en.wikipedia.org/wiki/Consistent_hashing">
                <span itemprop="knowsAbout">consistent hashing</span>
                </a>{' '}
                file store with a{' '}
                <a href="//en.wikipedia.org/wik/Filesystem_in_Userspace">
                <span itemprop="knowsAbout">FUSE</span>
                </a>{' '}
                frontend
                 a modification to the{' '}
                <a href="//web.archive.org/web/20100129163345///madwifi-project.org/">
                  madwifi
                </a>{' '}
                <span itemprop="knowsAbout">WLAN drivers</span> to support{' '}
                <a href="/academic/stable-ping-paper.pdf">
                  stable latency <span itemprop="knowsAbout">ICMP</span> pings
                </a>{' '}
                suitable for use in <span itemprop="knowsAbout">localization</span>, and a publication{' '}
                <span itemScope itemtype="http://schema.org/ScholarlyArticle">
                  <meta itemprop="image" content="//ramstetter.com/academic/applications-and-security-of-next-generation-user-centric-wireless-systems.jpg" />
                  <span itemprop="author" itemScope itemtype="http://schema.org/Person">
                    <meta itemprop="sameAs" content="https://ramstetter.com/#rick" />
                    <meta itemprop="name" content="J Rick Ramstetter" />
                  </span>
                  <meta itemprop="URL" content="//www.mdpi.com/1999-5903/2/3/190/pdf" />
                  <meta itemprop="datePublished" content="2010-07-28" />
                  <link itemprop="publisher" href="https://ramstetter.com/#mdpi" />
                  <a href="//www.mdpi.com/1999-5903/2/3/190/pdf">
                      <span itemprop="name headline">
                        Applications and Security of Next-Generation, User-Centric Wireless Systems
                      </span>
                  </a>{' '}
                  with{' '}
                  <span itemprop="author" itemScope itemtype="http://schema.org/Person">
                    <meta itemprop="sameAs" content="//people.cs.vt.edu/danfeng" />
                    <a href="//people.cs.vt.edu/danfeng/">
                      <span itemprop="name">Dr. Danfeng Yao</span>
                    </a>.
                  </span>
                </span>
              </p>
              <p>
              <span itemprop="hasCredential" itemScope itemtype="http://schema.org/EducationalOccupationalCredential" itemid="https://ramstetter.com/#ucibsc">
              <meta itemprop="competencyRequired" content="English, Mathematics, Signal Processing, C, Java, C++, Python" />
                Prior to Rutgers, I graduated from the{' '}
                <span itemprop="recognizedBy" itemtype="http://schema.org/EducationalOrganization" itemScope itemid="https://ramstetter.com/#uci">
                <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/University_of_California,_Irvine" />
                <a href="//www.ics.uci.edu"><span itemprop="name">University of California, Irvine</span></a>
                </span>
                , with a <span itemprop="educationalLevel">Bachelor of Science</span>{' '}
                <span itemprop="credentialCategory">degree</span>{' '}
                 in <span itemprop="about" itemScope itemtype="http://schema.org/Thing">
                   <meta itemprop="sameAs" content="//en.wikipedia.org/wiki/Computer_engineering" />
                   <span itemprop="name">computer engineering</span>
                </span>,{' '}
                </span>
                where my senior project was a series of{' '}
                <a href="/img/display-project.jpg"><span itemprop="knowsAbout">embedded</span> display units</a>{' '}
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
