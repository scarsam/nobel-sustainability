import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageOffset from "../components/image_offset"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import Img from "gatsby-image"

const Home = props => {
  const { data } = props
  console.log(data)
  // const siteTitle = data.site.siteMetadata.title
  const treesImage = data.trees.childImageSharp.fluid
  const solarImage = data.solarImage.childImageSharp.fluid
  const homeData = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(homeData.second_section.image)
  return (
    <Layout>
      <SEO title="Home" />
      <IntroText headline={homeData.title} subheading={homeData.subheading} />
      <section id="banner">
        <Img fluid={solarImage} />
      </section>

      <section id="awards" className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>{homeData.first_section.heading}</h3>
          </div>
          <div className="col-md-5">
            <p>{homeData.first_section.column_1}</p>
          </div>
          <div className="col-md-5">
            <p>{homeData.first_section.column_2}</p>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-grey-beige">
        <div className="container">
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h2>Partners</h2>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={homeData.partners.partner_1}
                alt="Earth Captial company logo"
              />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={homeData.partners.partner_2}
                alt="Lombard company logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="conference" className="container border-bottom">
        <div className="row">
          <div className="col-md-2">
            <h3>{homeData.second_section.heading}</h3>
          </div>
          <div className="col-md-5">
            <p>{homeData.second_section.column_1}</p>
          </div>
          <div className="col-10 offset-1 col-md-5 offset-md-0 col-lg-3 offset-lg-1">
            <ImageOffset
              src={homeData.second_section.image}
              backgroundColor={"bg-green"}
              text={homeData.second_section.image_text}
            />
          </div>
        </div>
      </section>

      <section id="news" className="container">
        <div className="row">
          <div className="col-md-2">
            <h2>News</h2>
          </div>
          {homeData.news.map(article => (
            <div className="col-md-10">
              <p className="c-green">March 24, 2018</p>
              <p>{article}</p>
              <p>Read More</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Home

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
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            first_section {
              heading
              column_1
              column_2
            }
            partners {
              partner_1
              partner_2
            }
            second_section {
              heading
              column_1
              image
              image_text
            }
            news
          }
        }
      }
    }
    trees: file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solarImage: file(relativePath: { eq: "building.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
