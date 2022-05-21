import * as React from "react"
import Link from 'gatsby-link'
import './Header.css'

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">HOME</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/plans">PLANS</Link>
        <button> Lets Talk! </button>
    </div>
  </div>
)

export default Header
