import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/nobel-sustainability.scss"

const Layout = ({ children }) => {
  console.log(children)

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
