import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Contact = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node
  console.log(html)
  return (
    <Layout>
      <div className="container">
        <div
          className="col-md-6"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
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
