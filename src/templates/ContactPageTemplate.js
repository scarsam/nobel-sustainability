import React from 'react'
import Layout from '../components/layout'

const ContactPageTemplate = ({ title }) => {
  return (
    <Layout>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </Layout>
  )
}

export default ContactPageTemplate
