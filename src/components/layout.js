import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/nobel-sustainability.scss"

const Layout = props => {
  const { title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <header>
        <Header title={title} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default Layout
