import React from 'react'
import logo from '../../images/nobel-logo-white.svg'
import facebook from '../../images/social/facebook.svg'
import linkedin from '../../images/social/linkedin.svg'

const footer = () => {
  return (
    <footer className="c-white bg-water">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-title d-flex align-items-center">
          <img src={logo} alt="company logo white" />
          <span className="padding-left-10px">Nobel Sustainability Trust</span>
        </div>
        <div className="social-links d-flex">
          <a
            href={'https://www.facebook.com/Nobelsustainabilitytrust/'}
            className="padding-right-20px"
          >
            <img src={facebook} alt="facebook icon" />
          </a>
          <a
            href={
              'https://www.linkedin.com/company/nobel-sustainability-trust/about/'
            }
          >
            <img src={linkedin} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default footer
