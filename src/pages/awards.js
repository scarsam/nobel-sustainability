import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import AwardsPageTemplate from '../templates/AwardsPageTemplate'
import '../styles/pages/awards.scss'

const AwardsPage = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
    sectionSeven,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <>
      <AwardsPageTemplate
        title={title}
        subheading={subheading}
        sectionOne={sectionOne}
        sectionTwo={sectionTwo}
        sectionThree={sectionThree}
        sectionFour={sectionFour}
        sectionFive={sectionFive}
        sectionSix={sectionSix}
        sectionSeven={sectionSeven}
      />
      <SEO title="Awards" />
    </>
  )
}

export default AwardsPage

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
      filter: { fileAbsolutePath: { regex: "/awards/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            sectionOne {
              heading
              column1
              column2
            }
            sectionTwo {
              heading
              text
            }
            sectionThree {
              heading
              column1
              column2
            }
            sectionFour {
              heading
              text
            }
            sectionFive {
              heading
              subheading
              column1
              column2
            }
            sectionSix {
              heading
              text
            }
            sectionSeven {
              heading
              subheading
              column1
              column2
            }
          }
        }
      }
    }
  }
`
