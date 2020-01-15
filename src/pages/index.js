import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageOffset from "../components/image_offset"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import eartCapitalLogo from "../images/partners/earth-capital-logo.svg"
import lombardLogo from "../images/partners/lombard-logo.svg"
import Img from "gatsby-image"

const Home = props => {
  const { data } = props
  console.log(data)
  // const siteTitle = data.site.siteMetadata.title
  const treesImage = data.trees.childImageSharp.fluid
  const solarImage = data.solarImage.childImageSharp.fluid
  const pageText = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <IntroText
        headline={pageText.heading}
        subheading="We bring public awareness to the issues of pollution and clean energy and encouraging change"
      />
      <section id="banner">
        <Img fluid={solarImage} />
      </section>

      <section id="awards" className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>Sustainability Award</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <p>
                  It shall be awarded to the individuals who during the past
                  year have shown the most inventive and effective development –
                  or discoveries – within the field of alternative, renewable
                  and sustainable energy as well as promoting the use of the
                  same energy. The result must be feasible for practical use.
                </p>
                <p>
                  Candidates are primarily to be found among young researchers
                  and inventors from all over the world. Should a company,
                  organisation or politician fulfil the above criteria, they can
                  also become a candidate, provided that the result of their
                  efforts will come to the benefit for all mankind.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  The ENTRANTS are requested to send their ENTRIES to a
                  Selection Committee who will select a maximum of five
                  finalists. The winner will be selected by a jury of seven
                  judges, selected among international and national experts
                  within the domain of sustainability.
                </p>
                <p>
                  The Award shall be given once every year and will be presented
                  in Copenhagen, Denmark and save in the respect of the
                  qualities required to be worthy of the Award, there shall be
                  no discrimination in the presenting thereof.
                </p>
                <p>
                  Nobel Sustainability Trust will release further information
                  regarding The Sustainability Award in the near future.
                </p>
              </div>
            </div>
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
              <img src={eartCapitalLogo} alt="Earth Captial company logo" />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img src={lombardLogo} alt="Lombard company logo" />
            </div>
          </div>
        </div>
      </section>

      <section id="conference" className="container border-bottom">
        <div className="row">
          <div className="col-md-3">
            <h2>Sustainable Technology Conference</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <p>
                  We will establish an international conference with focus on
                  alternative, renewable, sustainable energy and ways of
                  combating pollution and global warming.
                </p>
                <p>
                  Participants will be invited from major suppliers and
                  consumers of such energy as well as scientists, corporate
                  leaders, politicians and legislators.
                </p>
                <p>
                  The objective is to look into the future and to present
                  hands-on solutions for global sustainability. Top keynote
                  speakers will be engaged accompanied by panel debates and
                  workshops.
                </p>
                <p>
                  The conference is planned to be held annually or bi-annually
                  and will circulate around the world.
                </p>
              </div>
              <div className="col-md-5 offset-md-1">
                <ImageOffset
                  src={treesImage}
                  backgroundColor={"bg-green"}
                  text={
                    "Creation a pollution-free, life-sustaining environment for all"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="container">
        <div className="row">
          <div className="col-md-2">
            <h2>News</h2>
          </div>
          <div className="col-md-10">
            <p className="c-green">March 24, 2018</p>
            <p>
              LONDON (Reuters) - Members of Sweden's Nobel family, best known
              for the prizes bearing their name, and the billionaire co-founter
              of...
            </p>
            <p>Read More</p>
          </div>
          <div className="offset-md-2 col-md-10">
            <p className="c-green">March 24, 2018</p>
            <p>
              LONDON (Reuters) - Members of Sweden's Nobel family, best known
              for the prizes bearing their name, and the billionaire co-founter
              of...
            </p>
            <p>Read More</p>
          </div>
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
    allFile(filter: { sourceInstanceName: { eq: "home" } }, limit: 1) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              heading
              title
              first_section {
                column_1
              }
            }
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
