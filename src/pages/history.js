import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/intro_text"
import ImageOffset from "../components/image_offset"
import HistoryMidBreakpoint from "../components/history_mid_breakpoint"
import "../styles/pages/history.scss"

const History = ({ data }) => {
  const immanuel = data.immanuel.childImageSharp.fluid
  const ludwig = data.ludwig.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="History" />
      <section>
        <IntroText
          headline="History"
          subheading={[
            "Members of the earlier Nobel family were known, not only",
            <span className="d-md-block">
              {" "}
              for their interest in art but also for their inventive ability
            </span>,
          ]}
        />
      </section>
      <section className="padding-top-none d-none d-block d-lg-none">
        <div className="container">
          <HistoryMidBreakpoint ludwig={ludwig} immanuel={immanuel} />
        </div>
      </section>

      <section className="padding-top-none d-none d-lg-block">
        <div className="container">
          <div className="row padding-bottom-60px">
            <div className="col-lg-3">
              <ImageOffset src={immanuel} backgroundColor={"bg-water"} />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-5">
                  <h3>Immanuel Nobel</h3>
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
                      <h3>Ludwig Nobel</h3>
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
        </div>
      </section>

      <section id="foundation">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>The Nobel Foundation</h2>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    The foundation, created to manage the estate of Alfred Nobel
                    and to implement the conditions of his testament. The Nobel
                    Family’s Social Commitment Under the leadership of Ludvig
                    Nobel, and later on by his oldest son Emmanuel, the BraNobel
                    Nafta company in Azerbaijan grew into the world’s second
                    largest in its field. The diesel engine factory in St.
                  </p>
                  <p>
                    Petersburg became the largest in the world. At this time the
                    Nobel industries in Russia were the country’s greatest and
                    most influential business organisation with more than 50.000
                    employees.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    The success of Ludvig was based on a humanitarian and
                    innovative way of doing things, combined with the mind of a
                    scientific entrepreneur. The world’s first oil
                    transportation ship and pipelines for oil were constructed
                    for the oil fields of Nobel in Baku. As a visionary leader
                    Ludvig strived to improve the conditions for the workers at
                    the Nobel industrial sites.
                  </p>
                  <p>
                    This was achieved by the introduction of shorter working
                    hours, adequate housing, schools and healthcare and
                    recreational facilities. He also opened a cooperative bank
                    for the employees and the world’s first profit sharing
                    system for the workers called “Nobelites”. Sustainability
                    and social commitment was the trademark of the Nobel
                    industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nobel-family-society bg-grey-beige">
        <div className="container">
          <h2 className="text-left-sm text-center-md padding-bottom-45px">
            The Nobel Family Society Today
          </h2>
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
