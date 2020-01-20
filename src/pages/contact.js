import React from 'react'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/content'
import ContactPageTemplate from '../templates/ContactPageTemplate'

const ContactPage = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node
  return <ContactPageTemplate content={html} contentComponent={HTMLContent} />
}

export default ContactPage

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
