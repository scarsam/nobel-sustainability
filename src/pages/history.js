import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroText from '../components/intro_text'
import ImageOffset from '../components/image_offset'
import HistoryMidBreakpoint from '../components/history_mid_breakpoint'

const History = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <section>
        <IntroText headline="History" subheading={subheading} />
      </section>
      <section className="padding-top-none d-none d-block d-lg-none">
        <div className="container">
          <HistoryMidBreakpoint
            ludwig={sectionOne.column1.image.image.childImageSharp.fluid}
            immanuel={sectionOne.column2.image.image.childImageSharp.fluid}
          />
        </div>
      </section>

      <section className="padding-top-none d-none d-lg-block padding-bottom-none">
        <div className="container">
          <div className="row padding-bottom-60px">
            <div className="col-lg-3">
              <ImageOffset
                src={sectionOne.column1.image.image.childImageSharp.fluid}
                backgroundColor={'bg-water'}
              />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-5">
                  <h2>{sectionOne.column1.heading}</h2>
                  <ReactMarkdown source={sectionOne.column1.text} />
                </div>
                <div className="col-lg-12">
                  <div className="row padding-top-60px">
                    <div className="offset-lg-1 col-lg-4">
                      <ImageOffset
                        src={
                          sectionOne.column2.image.image.childImageSharp.fluid
                        }
                        backgroundColor={'bg-green'}
                      />
                    </div>
                    <div className="col-lg-6">
                      <h2>{sectionOne.column2.heading}</h2>
                      <ReactMarkdown source={sectionOne.column2.text} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h3>{sectionTwo.heading}</h3>
            </div>
            <div className="col-md-5">
              <ReactMarkdown source={sectionTwo.column1} />
            </div>
            <div className="col-md-5">
              <ReactMarkdown source={sectionTwo.column2} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <h2 className="text-left-sm text-center-md padding-bottom-45px">
            {sectionThree.heading}
          </h2>
          <div className="row">
            <div className="col-md-6 green-bullet-list">
              <ReactMarkdown source={sectionThree.column1} />
            </div>
            <div className="col-md-6">
              <ReactMarkdown source={sectionThree.column2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default History

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
//       filter: { fileAbsolutePath: { regex: "/history/" } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             subheading
//             sectionOne {
//               column1 {
//                 heading
//                 text
//                 image {
//                   alt
//                   image {
//                     childImageSharp {
//                       fluid(maxWidth: 960) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//               column2 {
//                 heading
//                 text
//                 image {
//                   alt
//                   image {
//                     childImageSharp {
//                       fluid(maxWidth: 960) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//             sectionTwo {
//               heading
//               column1
//               column2
//             }
//             sectionThree {
//               heading
//               column1
//               column2
//             }
//           }
//         }
//       }
//     }
//   }
// `
