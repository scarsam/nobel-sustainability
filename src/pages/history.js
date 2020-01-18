import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroText from '../components/intro_text'
import ImageOffset from '../components/image_offset'
import HistoryMidBreakpoint from '../components/history_mid_breakpoint'

const History = ({ data }) => {
  const {
    title,
    subheading,
    firstSection,
    secondSection,
    thirdSection,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  console.log(data)

  return (
    <Layout>
      <SEO title={title} />
      <section>
        <IntroText headline="History" subheading={subheading} />
      </section>
      <section className="padding-top-none d-none d-block d-lg-none">
        <div className="container">
          <HistoryMidBreakpoint
            ludwig={firstSection.image1.childImageSharp.fluid}
            immanuel={firstSection.image2.childImageSharp.fluid}
          />
        </div>
      </section>

      <section className="padding-top-none d-none d-lg-block padding-bottom-none">
        <div className="container">
          <div className="row padding-bottom-60px">
            <div className="col-lg-3">
              <ImageOffset
                src={firstSection.image1.childImageSharp.fluid}
                backgroundColor={'bg-water'}
              />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-5">
                  <h2>{firstSection.heading1}</h2>
                  <p>{firstSection.text1}</p>
                </div>
                <div className="col-lg-12">
                  <div className="row padding-top-60px">
                    <div className="offset-lg-1 col-lg-4">
                      <ImageOffset
                        src={firstSection.image2.childImageSharp.fluid}
                        backgroundColor={'bg-green'}
                      />
                    </div>
                    <div className="col-lg-6">
                      <h2>{firstSection.heading2}</h2>
                      <p>{firstSection.text2}</p>
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
              <h3>{secondSection.heading}</h3>
            </div>
            <div className="col-md-5">
              <p>{secondSection.column1}</p>
            </div>
            <div className="col-md-5">
              <p>{secondSection.column2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <h2 className="text-left-sm text-center-md padding-bottom-45px">
            {thirdSection.heading}
          </h2>
          <div className="row">
            <div
              className="col-md-6"
              dangerouslySetInnerHTML={{ __html: thirdSection.column1 }}
            >
              {/* <p>
                <b>
                  The Nobel Family Society is a private association with the
                  following objectives
                </b>
              </p>
              <ul className="padding-left-15px green-bullet-list">
                <li>
                  Climate change with emphasis on reduction of global warming;
                </li>
                <li>
                  Advances in clean and renewable technologies and policies;
                </li>
                <li>A pollution-free, life-sustaining environment;</li>
                <li>Inspiration for present and future generations</li>
              </ul> */}
            </div>
            <div className="col-md-6">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the father of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in Baku, the largest company in Russia and the second
                largest oil company in the world. The Nobel family is also
                represented at the Nobel Prizes Award Ceremonies which are held
                in Stockholm on the 10th of December every year since 1901. In
                2007, the Nobel family archives, kept in the town archives of
                Lund, were inscribed in UNESCO’s Memory of the World Register.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default History

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
            firstSection {
              heading1
              heading2
              text1
              text2
              image1 {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image2 {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            secondSection {
              heading
              column1
              column2
            }
            thirdSection {
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
