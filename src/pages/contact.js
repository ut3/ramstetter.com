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

import React from 'react'

import Layout from 'components/layout'
import Meta from 'components/meta'

class Contact extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <Meta title="Contact" location={location} />
        <div className="container-fluid">
          <h1>Contact information</h1>
          <h2>E-mail</h2>
          <p>
            <a href="mailto:rick.ramstetter@gmail.com">
              <span itemScope itemType="//schema.org/Text">
                rick.ramstetter@gmail.com
              </span>
            </a>
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
          <p itemScope itemType="//schema.org/PostalAddress">
            J Rick Ramstetter <br />
            Anteater LLC
            <br />
            <span itemProp="streetAddress">
              305 SE Chkalov Dr Ste 111 PMB 414
            </span>
            <br />
            <span itemProp="addressLocality">Vancouver</span>,{' '}
            <span itemProp="addressRegion">WA</span>,{' '}
            <span itemProp="postalCode">98683</span>,{' '}
            <span itemProp="addressCountry">USA</span>
          </p>
        </div>
      </Layout>
    )
  }
}

export default Contact
