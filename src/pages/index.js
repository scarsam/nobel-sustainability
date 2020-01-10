import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageOffset from "../components/image_offset"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import eartCapitalLogo from "../images/partners/earth-capital-logo.svg"
import lombardLogo from "../images/partners/lombard-logo.svg"

const Home = props => {
  const { data } = props
  // const siteTitle = data.site.siteMetadata.title
  const treesImage = data.trees.childImageSharp.fluid
  const solarImage = data.solarImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <IntroText
        headline="A world in balance"
        subheading="We bring public awareness to the issues of pollution and clean energy and encouraging change"
      />
      <section id="banner">
        <ImageOffset src={solarImage} backgroundColor={"bg-sand"} />
      </section>

      <section id="awards" className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>Sustainability Award</h3>
          </div>
          <div className="col-md-5">
            <p>
              Lorem ipsum dolor amet williamsburg adaptogen brooklyn small batch
              etsy mlkshk sartorial biodiesel enamel pin chillwave blog viral
              90's. Lomo ethical tousled skateboard swag master cleanse selvage
              neutra scenester. Cronut plaid YOLO woke tbh wolf aesthetic.
              Post-ironic banh mi cold-pressed hashtag roof party. Iceland vice
              aesthetic, raclette meggings pork belly bicycle rights umami
              tousled pickled hexagon blue bottle. Skateboard etsy succulents,
              mumblecore flexitarian hammock hella pabst fashion axe tumeric
              lo-fi swag cronut. Everyday carry blog YOLO air plant vegan
              keffiyeh viral four dollar toast. Taiyaki vegan deep v, jean
              shorts cronut vexillologist ennui skateboard ramps man bun selfies
              church-key brooklyn.
            </p>
          </div>
          <div className="col-md-5">
            <p>
              Lorem ipsum dolor amet williamsburg adaptogen brooklyn small batch
              etsy mlkshk sartorial biodiesel enamel pin chillwave blog viral
              90's. Lomo ethical tousled skateboard swag master cleanse selvage
              neutra scenester. Cronut plaid YOLO woke tbh wolf aesthetic.
              Post-ironic banh mi cold-pressed hashtag roof party. Iceland vice
              aesthetic, raclette meggings pork belly bicycle rights umami
              tousled pickled hexagon blue bottle. Skateboard etsy succulents,
              mumblecore flexitarian hammock hella pabst fashion axe tumeric
              lo-fi swag cronut.
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-grey-beige">
        <div className="container">
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h3>Partners</h3>
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
          <div className="col-md-2">
            <h3>Sustainable Technology Conference</h3>
          </div>
          <div className="col-md-5">
            <p>
              Lorem ipsum dolor amet williamsburg adaptogen brooklyn small batch
              etsy mlkshk sartorial biodiesel enamel pin chillwave blog viral
              90's. Lomo ethical tousled skateboard swag master cleanse selvage
              neutra scenester. Cronut plaid YOLO woke tbh wolf aesthetic.
              Post-ironic banh mi cold-pressed hashtag roof party. Iceland vice
              aesthetic, raclette meggings pork belly bicycle rights umami
              tousled pickled hexagon blue bottle. Skateboard etsy succulents,
              mumblecore flexitarian hammock hella pabst fashion axe tumeric
              lo-fi swag cronut. Everyday carry blog YOLO air plant vegan
              keffiyeh viral four dollar toast. Taiyaki vegan deep v, jean
              shorts cronut vexillologist ennui skateboard ramps man bun selfies
              church-key brooklyn.
            </p>
          </div>
          <div className="col-md-5 col-lg-3 offset-lg-1">
            <ImageOffset
              src={treesImage}
              backgroundColor={"bg-green"}
              text={
                "Creation a pollution-free, life-sustaining environment for all"
              }
            />
          </div>
        </div>
      </section>

      <section id="news" className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>News</h3>
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
