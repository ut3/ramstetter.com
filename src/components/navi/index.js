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
import { Link } from 'gatsby'
import Icon from 'components/icon'
// import gnome from './gnome.svg'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary" id="mainnav">
        <div className="container-fluid flex-wrap">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="">
            <ul className="navbar-nav bd-navbar-nav">
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link pl-0">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/open-source/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/open-source/" className="nav-link">
                  FOSS
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/skills/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/skills/" className="nav-link">
                  Skills
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/contact/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/contact/" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href="//linkedin.com/in/ut3" className="nav-link">
                  <Icon name="linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a href="//github.com/ut3" className="nav-link">
                  <Icon name="github" />
                </a>
              </li>
{/*              <li className="nav-item">
                <a
                  href="//gitlab.gnome.org/ut3"
                  className="nav-link"
                  title="gnome"
                >
                  <img src={gnome} alt="gnome" title="gnome" />
                </a>
              </li>
*/}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
