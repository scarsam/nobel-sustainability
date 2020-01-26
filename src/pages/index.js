import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import HomePageTemplate from '../templates/HomePageTemplate'

const Home = ({ data }) => {
  const {
    title,
    subheading,
    image,
    partners,
    news,
    firstSection,
    secondSection,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

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

export default Home

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       limit: 1
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { fileAbsolutePath: { regex: "/home/" } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             subheading
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1400) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             firstSection {
//               heading
//               column1
//               column2
//             }
//             partners {
//               partner1 {
//                 publicURL
//               }
//               partner2 {
//                 publicURL
//               }
//             }
//             secondSection {
//               heading
//               column1
//               image {
//                 childImageSharp {
//                   fluid(maxWidth: 500) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//             news
//           }
//         }
//       }
//     }
//   }
// `
