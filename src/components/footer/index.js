import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container text-center text-muted">
      <hr className="border-primary" />
      <p>
        <small>
          Copyright © {new Date().getFullYear()}{' '}
          <Link to="/contact/">{author}</Link>.
          <br />
          Licensed under <Link to="CC-BY-NC-ND-4.0.txt">CC BY-NC-ND 4.0</Link>.{' '}
          <Link to="/privacy/">Privacy policy</Link>.
          <br />
        </small>
      </p>
    </div>
  </div>
)

export default Footer
