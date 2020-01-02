import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/nobel-sustainability.scss"

const Layout = props => {
  const { title, children } = props
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
