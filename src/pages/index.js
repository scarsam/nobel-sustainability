import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import HomePageTemplate from '../templates/HomePageTemplate'
import '../styles/pages/home.scss'

const HomePage = ({ data }) => {
  const news = data.news.edges

  const {
    title,
    subheading,
    image,
    partners,
    firstSection,
    secondSection,
  } = data.home.edges[0].node.frontmatter

  return (
    <>
      <SEO title="Home" />
      <HomePageTemplate
        title={title}
        subheading={subheading}
        image={image}
        partners={partners}
        news={news}
        firstSection={firstSection}
        secondSection={secondSection}
      />
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/news/" } }
    ) {
      edges {
        node {
          frontmatter {
            text
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
    home: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            image {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            firstSection {
              heading
              column1
              column2
            }
            partners {
              partner1 {
                image {
                  image {
                    publicURL
                  }
                  alt
                }
              }
              partner2 {
                image {
                  image {
                    publicURL
                  }
                  alt
                }
              }
            }
            secondSection {
              heading
              column1
              image {
                text
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
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
