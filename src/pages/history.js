import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import ImageOffset from "../components/image_offset"
import HistoryMidBreakpoint from "../components/history_mid_breakpoint"

const History = ({ data }) => {
  const immanuel = data.immanuel.childImageSharp.fluid
  const ludwig = data.ludwig.childImageSharp.fluid

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <Layout>
      <SEO title="History" />
      <IntroText
        headline="History"
        subheading="Members of the earlier Nobel family were known, not only for their interest in art but also for their inventive ability"
      />
      <section className="container padding-top-none">
        {width && width < 992 ? (
          <HistoryMidBreakpoint ludwig={ludwig} immanuel={immanuel} />
        ) : (
          <div className="row padding-bottom-60px">
            <div className="col-lg-3">
              <ImageOffset src={immanuel} backgroundColor={"bg-water"} />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-5">
                  <h2>Immanuel Nobel</h2>
                  <p>
                    Immanuel Nobel pioneered the development of underwater
                    mines, designed some of the first steam engines to power
                    russian ships, installed the first central heating systems
                    in Russian homes and was the first to develop modern
                    plywood, cut with a rotary lathe.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="row padding-top-60px">
                    <div className="offset-lg-1 col-lg-4">
                      <ImageOffset src={ludwig} backgroundColor={"bg-green"} />
                    </div>
                    <div className="col-lg-6">
                      <h2>Ludwig Nobel</h2>
                      <p>
                        One of his sons, Ludvig Nobel, was the founder of the
                        machine-building factory Ludvig Nobel, a great armaments
                        concern and the inventor of the Nobel wheel. Ludvig was
                        also the founder of BraNobel, the foremost Russian oil
                        industry in it's time, and launched the world's first
                        diesel-driven tugs, tankers and u-boats, besides
                        building the first European oil pipeline in Baku. Alfred
                        Nobel, a profilic inventor who acquired 355 patents
                        during his lifespan, was the creator of dynamite and the
                        blasting cap from which he made a substantial future of
                        which he left the bulk to form the Nobel Prizes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="foundation" className="container">
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

      <section className="nobel-family-society bg-grey-beige margin-bottom-60px">
        <div className="container">
          <h1 className="text-left-sm text-center-md">
            The Nobel Family Society Today
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p>
                <b>
                  The Nobel Family Society is a private association with the
                  following objectives
                </b>
              </p>
              <ul className="padding-left-15px">
                <li>
                  Climate change with emphasis on reduction of global warming;
                </li>
                <li>
                  Advances in clean and renewable technologies and policies;
                </li>
                <li>A pollution-free, life-sustaining environment;</li>
                <li>Inspiration for present and future generations</li>
              </ul>
            </div>
            <div className="col-md-6">
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
    immanuel: file(relativePath: { eq: "immanuel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ludwig: file(relativePath: { eq: "ludwig.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
