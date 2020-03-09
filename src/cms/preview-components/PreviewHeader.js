import React from 'react'
import logo from '../../images/nobel-logo.svg'

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper bg-white">
        <div className="container padding-top-none padding-bottom-none">
          <div className="nav-menu d-flex flex-wrap padding-bottom-20px padding-top-20px align-items-center justify-content-between relative">
            <a className="logo d-flex c-black">
              <img src={logo} alt="company logo" />
              <span className="padding-left-10px padding-top-5px">
                Nobel Sustainability Trust
              </span>
            </a>
            <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon padding-top-10px padding-bottom-10px padding-right-20px margin-none relative"
              htmlFor="menu-btn"
            >
              <span className="navicon relative d-block"></span>
            </label>

            <ul className="menu bg-white">
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
                <a
                  className="nav-link"
                  activeClassName="active"
                  to={`/history`}
                >
                  <span className="nav-text c-black">history</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  activeClassName="active"
                  to={`/contact`}
                >
                  <span className="nav-text c-black">contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
