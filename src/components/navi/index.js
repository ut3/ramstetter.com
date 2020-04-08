import React from 'react'
import { Link } from 'gatsby'
import Icon, { UnsizedIcon } from 'components/icon'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-lg-row bg-primary">
        <div className="container flex-wrap">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav">
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
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
                <a href="//github.com/ut3" className="nav-link">
                  <UnsizedIcon name="github" />
                </a>
              </li>
              <li className="nav-item">
                <a href="//linkedin.com/in/jramstet" className="nav-link">
                  <UnsizedIcon name="linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
