import React from 'react'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../templates/AboutPageTemplate'

const About = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <AboutPageTemplate
      title={title}
      subheading={subheading}
      sectionOne={sectionOne}
      sectionTwo={sectionTwo}
      sectionThree={sectionThree}
      sectionFour={sectionFour}
    />
  )
}

export default About

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
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            sectionOne {
              heading
              text1
              text2
              image {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              offsetimage {
                publicURL
              }
            }
            sectionTwo {
              heading
              column1
              column2
            }
            sectionThree {
              heading
              boardMemberOne {
                name
                text
                image {
                  childImageSharp {
                    fixed(width: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              boardMemberTwo {
                name
                text
                image {
                  childImageSharp {
                    fixed(width: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            sectionFour {
              heading
              employeeOne {
                name
                text
                image {
                  childImageSharp {
                    fixed(width: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              employeeTwo {
                name
                text
                image {
                  childImageSharp {
                    fixed(width: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
