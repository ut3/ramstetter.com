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

import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import ProfileBlurb from 'components/profileblurb'

class Contact extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Contact" />
        <div>
          <div className="container">
            <ProfileBlurb />
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
              <a href="//pgp.mit.edu/pks/lookup?op=vindex&search=0xF58818CBFB5C8C8E">
                MIT keyserver
              </a>
            </p>
            <h2>Instant messaging</h2>
            <p>
              <a href="//en.wikipedia.org/wiki/Signal_(software)">
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
