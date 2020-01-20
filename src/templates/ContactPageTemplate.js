import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'

const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const MarkDown = contentComponent || Content

  return (
    <Layout>
      <div className="container">
        <h2>{title}</h2>
        <MarkDown className="col-md-6" content={content} />
      </div>
    </Layout>
  )
}

export default ContactPageTemplate
