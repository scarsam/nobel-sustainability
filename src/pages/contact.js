import React from 'react'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../templates/ContactPageTemplate'

const ContactPage = ({ data }) => {
  const {
    title,
    officeOne,
    officeTwo,
    emails,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <ContactPageTemplate
      title={title}
      officeOne={officeOne}
      officeTwo={officeTwo}
      emails={emails}
    />
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
            officeOne {
              name
              street
              zip
              city
              country
            }
            officeTwo {
              name
              street
              zip
              city
              country
            }
            emails {
              email
              name
            }
          }
        }
      }
    }
  }
`
