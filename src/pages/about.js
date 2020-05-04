import React from 'react'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../templates/AboutPageTemplate'
import SEO from '../components/seo'

const AboutPage = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <>
      <SEO title={title} />
      <AboutPageTemplate
        title={title}
        subheading={subheading}
        sectionOne={sectionOne}
        sectionTwo={sectionTwo}
        sectionThree={sectionThree}
        sectionFour={sectionFour}
      />
    </>
  )
}

export default AboutPage

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
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 960) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              offsetImage {
                alt
                image {
                  publicURL
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
              boardMemberOne {
                name
                text
                image {
                  alt
                  image {
                    childImageSharp {
                      fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
              boardMemberTwo {
                name
                text
                image {
                  alt
                  image {
                    childImageSharp {
                      fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                      }
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
                  alt
                  image {
                    childImageSharp {
                      fixed(width: 100, height: 100) {
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
  }
`
