import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

export const Header = ({ data }) => {
  const logo = data.file.childImageSharp.fixed

  return (
    <header>
      <nav className="nav-wrapper container padding-top-none padding-bottom-20px">
        <div className="nav-menu d-none d-inline-block relative">
          <Link to={`/`} className="logo d-flex c-black padding-top-30px">
            <span>
              <Img
                className="padding-top-15px"
                fixed={logo}
                alt="company logo"
              />
            </span>
            Nobel Sustainability Trust
          </Link>
          <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
          <label className="menu-icon padding-bottom-none float-right padding-top-45px padding-right-20px relative" htmlFor="menu-btn">
            <span className="navicon relative d-block"></span>
          </label>

          <ul className="menu padding-none bg-white">
            <li>
              <Link className="nav-link" to={`/about`}>
                <span className="nav-text c-black">about us</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={`/partners`}>
                <span className="nav-text c-black">partners</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={`/news`}>
                <span className="nav-text c-black">news</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={`/contact`}>
                <span className="nav-text c-black">contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
