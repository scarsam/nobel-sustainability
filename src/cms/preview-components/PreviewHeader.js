import React from 'react'
import logo from '../../images/nobel-logo.svg'

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper container padding-top-none padding-bottom-20px">
        <div className="nav-menu d-none d-inline-block relative">
          <a className="logo d-flex c-black padding-top-30px">
            <img src={logo} alt="company logo" />
            <span className="padding-left-10px padding-top-5px">
              Nobel Sustainability Trust
            </span>
          </a>
          <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon padding-bottom-none float-right padding-top-45px padding-right-20px relative"
            htmlFor="menu-btn"
          >
            <span className="navicon relative d-block"></span>
          </label>

          <ul className="menu padding-none bg-white">
            <li>
              <a className="nav-link" activeClassName="active" to={`/about`}>
                <span className="nav-text c-black">about us</span>
              </a>
            </li>
            <li>
              <a className="nav-link" activeClassName="active" to={`/awards`}>
                <span className="nav-text c-black">awards</span>
              </a>
            </li>
            <li>
              <a className="nav-link" activeClassName="active" to={`/history`}>
                <span className="nav-text c-black">history</span>
              </a>
            </li>
            <li>
              <a className="nav-link" activeClassName="active" to={`/contact`}>
                <span className="nav-text c-black">contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
