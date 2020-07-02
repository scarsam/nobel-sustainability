import React from 'react'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../templates/ContactPageTemplate'
import SEO from '../components/seo'

const ContactPage = ({ data }) => {
  const {
    title,
    emails,
    offices,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <>
      <SEO title={title} />
      <ContactPageTemplate title={title} emails={emails} offices={offices} />
    </>
  )
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
          frontmatter {
            title
            offices {
              name
              street
              zip
              city
              country
              lat
              long
            }
            emails {
              email
              name
              phone
            }
          }
        }
      }
    }
  }
`
