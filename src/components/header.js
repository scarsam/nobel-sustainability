import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/nobel-logo.svg'

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper container padding-top-none padding-bottom-20px">
        <div className="nav-menu d-none d-inline-block relative">
          <Link to={`/`} className="logo d-flex c-black padding-top-30px">
            <img src={logo} alt="company logo" />
            <span className="padding-left-10px padding-top-5px">
              Nobel Sustainability Trust
            </span>
          </Link>
          <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon float-right margin-top-35px padding-top-10px padding-bottom-10px padding-right-20px relative"
            htmlFor="menu-btn"
          >
            <span className="navicon relative d-block"></span>
          </label>

          <ul className="menu padding-top-20px bg-white">
            <li>
              <Link className="nav-link" activeClassName="active" to={`/about`}>
                <span className="nav-text c-black">about us</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClassName="active"
                to={`/awards`}
              >
                <span className="nav-text c-black">awards</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClassName="active"
                to={`/history`}
              >
                <span className="nav-text c-black">history</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClassName="active"
                to={`/contact`}
              >
                <span className="nav-text c-black">contact</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" activeClassName="active" to={`/news`}>
                <span className="nav-text c-black">news</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
