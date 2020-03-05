import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/nobel-sustainability.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
