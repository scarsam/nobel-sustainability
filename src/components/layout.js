import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ScrollTop from "../components/scroll_top"
import "../styles/nobel-sustainability.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </>
  )
}

export default Layout
