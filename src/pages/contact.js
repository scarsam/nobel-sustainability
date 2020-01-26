import React from 'react'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../templates/ContactPageTemplate'

const ContactPage = ({ data }) => {
  const { title } = data.allMarkdownRemark.edges[0].node.frontmatter
  return <ContactPageTemplate title={title} />
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
