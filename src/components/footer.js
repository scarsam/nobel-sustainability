import React from "react"
import logo from "../images/nobel-logo-white.svg"
import { Link } from "gatsby"
import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"

// TODO ADD CORRECT LINKS TO NST SOCIAL MEDIA

const footer = () => {
  return (
    <footer className="c-white bg-water">
      <div className="container d-flex justify-content-between">
        <div className="footer-title">
          <img src={logo} alt="company logo white" />
          <span className="padding-left-10px">Nobel Sustainability Trust</span>
        </div>
        <div className="social-links d-flex">
          <Link to={`/`} className="padding-right-15px">
            <img src={facebook} alt="facebook icon" />
          </Link>
          <Link to={`/`} className="padding-right-15px">
            <img src={instagram} alt=" instagram icon" />
          </Link>
          <Link to={`/`} className="padding-right-15px">
            <img src={linkedin} alt="linkedin icon" />
          </Link>
          <Link to={`/`} className="padding-right-15px">
            <img src={twitter} alt="twitter icon" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default footer
