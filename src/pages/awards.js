import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import Img from "gatsby-image"

const Awards = ({ data }) => {
  const city = data.city.childImageSharp.fluid
  const windmill = data.windmill.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Awards" />
      <IntroText
        headline="Awards"
        subheading="The Award will be given to scientists or institutions who have made important discoveries of potential importance to the wellbeing of mankind"
      />
      <section className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>Sustainability Award</h3>
          </div>
          <div className="col-md-5 ">
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
          <div className="col-md-4">
            <p>
              <b>The Awards cermony will include:</b>
            </p>
            <ul className="padding-left-15px green-bullet-list">
              <li>The Sustainability Award </li>
              <li>
                Four Runners-Up who will receive diplomas and other forms of
                acknowledgement
              </li>
              <li>Two Scholarships</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <h1 className="text-left-sm text-center-md padding-bottom-45px">
            Award Selection Procedures
          </h1>
          <div className="row padding-bottom-60px">
            <div className="text-center-md col-md-8 offset-md-2">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the fater of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in the Baku, the largest company in Russia and the
                second largest oil company in the world. The Nobel family is
                also represented at the Nobel Prizes Award Ceremonies which are
                held in Stockholm on the 10th of December every year since 1901.
                In 2007, the Nobel family archives, kept in the town archives of
                Lund, were inscribed in UNESCO's Memory of the World Register
              </p>
            </div>
          </div>
          <div className="row padding-bottom-30px">
            <div className="col-md-2">
              <h3>Role of the NST Representative</h3>
            </div>
            <div className="col-md-9">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the fater of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in the Baku, the largest company in Russia and the
                second largest oil company in the world. The Nobel family is
                also represented at the Nobel Prizes Award Ceremonies which are
                held in Stockholm on the 10th of December every year since 1901.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-none d-lg-block">
              <Img fluid={windmill} alt="" />
            </div>
            <div className="offset-md-2 col-md-10 col-lg-9">
              <p>
                <b>The Awards cermony will include:</b>
              </p>
              <ul className="padding-left-15px green-bullet-list">
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged from 1873 in establishing, financing and operating the
                  BraNobel oil company in the Baku, the largest company in
                  Russia and the second largest oil company in the world.
                </li>
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged from 1873 in establishing, financing and operating the
                  BraNobel oil company in the Baku, the largest company in
                  Russia and the second largest oil company in the world. The
                  Nobel family is also represented at the Nobel Prizes Award
                  Ceremonies which are held in Stockholm on the 10th of December
                  every year since 1901.
                </li>
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Awards

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    city: file(relativePath: { eq: "city.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    windmill: file(relativePath: { eq: "windmill.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
