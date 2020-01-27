import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import HistoryPageTemplate from '../templates/HistoryPageTemplate'

const HistoryPage = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <>
      <SEO title={title} />
      <HistoryPageTemplate
        title={title}
        subheading={subheading}
        sectionOne={sectionOne}
        sectionTwo={sectionTwo}
        sectionThree={sectionThree}
      />
    </>
  )
}

export default HistoryPage

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
      filter: { fileAbsolutePath: { regex: "/history/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            sectionOne {
              columnOne {
                heading
                text
                image {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              columnTwo {
                heading
                text
                image {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            sectionTwo {
              heading
              column1
              column2
            }
            sectionThree {
              heading
              column1
              column2
            }
          }
        }
      }
    }
  }
`
