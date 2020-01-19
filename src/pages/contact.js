import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/content'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
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

const Contact = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node
  return <ContactPageTemplate content={html} contentComponent={HTMLContent} />
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
