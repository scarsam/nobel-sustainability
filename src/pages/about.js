import React from "react"
import Layout from "../components/layout"
import IntroText from "../components/intro_text"
import SEO from "../components/seo"
import ImageOffset from "../components/image_offset"
import Img from "gatsby-image"
import squigglyLine from "../images/about/squiggly-line.svg"
import "../styles/pages/about.scss"

const About = ({ data }) => {
  const treesImage = data.trees.childImageSharp.fluid
  const peterNobelImage = data.peter.childImageSharp.fixed
  const michaelNobelImage = data.michael.childImageSharp.fixed
  const stinaNordlanderImage = data.stina.childImageSharp.fixed
  const jamesBurtonImage = data.james.childImageSharp.fixed

  return (
    <Layout>
      <SEO title="About us" />
      <IntroText
        headline="About us"
        subheading="We encourage research, development, action and implementation of sustainable solutions"
      />

      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-5">
                <h2>The Background of Nobel Sustainability Trust</h2>
              </div>
              <div className="col-md-7">
                <p>
                  NST is a Swiss foundation, established in 2007 by four members
                  of the Nobel family. Formerly known as the Nobel Charitable
                  Trust, its name was changed to the Nobel Sustainability Trust
                  in 2011 so as to represent its role and activities more
                  accurately. To promote the activities described above NST will
                  encourage research, development, action and implementation of
                  sustainable solutions. A key component will be the creation of
                  an Award for Sustainability. This award, given annually, will
                  be an accolade for those who make outstanding contributions to
                  sustainability.
                </p>
              </div>
            </div>
            <div className="col-12 padding-top-30px padding-bottom-30px padding-bottom-md-none">
              <ImageOffset src={treesImage} backgroundColor="bg-map" />
            </div>
          </div>
          <div className="col-md-5">
            <p>
              The winners will be presented with the award at a gala dinner held
              in connection with a symposium, organised by NST, in major cities
              around the world. NST, via its secretariat in Switzerland and its
              representative offices in Sweden and Costa Rica, will assist in
              the selection of universities from various countries, which will
              collect the proposed projects and candidates. One of these will
              also be the Award Coordinating University (the “ACU”), this
              centre, in consultation with NST, will select and maintain the
              list of sourcing universities. The ACU will form a committee, the
              Sustainability Award Committee, which will have final say in the
              selection of the award winners. This comittee will have members
              from outside the ACU. NST will plan and manage the annual
              conferences and related events.
            </p>
            <p>
              This comittee will have members from outside the ACU. NST will
              plan and manage the annual conferences and related events. It will
              liaise with the media and issue invitations for the award
              ceremonies. Stringent efforts will be made to ensure that the NST
              Awards will be recognised, by all concerned, as being independent
              of the traditional Nobel Prizes. NST’s financial support will come
              from sovereign entities, family offices and corporations who
              support its agenda. A clear understanding of the origin of these
              funds is essential, so NST will work with licensed and registered
              entities, which are regulated by the financial authorities in
              their respective jurisdictions.
            </p>
            <p>
              Funding has begun and success has already been achieved. In 2016,
              Innovator Capital (ICL) a specialist investment bank in London,
              facilitated the creation of the Nobel Sustainability Fund® (NSF).
              The fund, seeded by the Constitutional Reserve Fund of Monaco,
              with the support of H.S.H. Prince Albert II of Monaco and Stephen
              Lansdown, co-founder of Hargreaves Lansdown, is a multi-geography
              fund, managed by Earth Capital Partners (ECP), subsidiary of the
              SET3 organisation, which accelerates the development and growth of
              sustainable technology companies.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-5">
                <h2>The Mission of the Nobel Sustainability Trust</h2>
              </div>
              <div className="col-md-7">
                <p>
                  The Nobel family, founders of the Nobel Sustainability Trust
                  (“NST”) have, with great concern, been observing the
                  devastation of the world’s vital, natural and non-renewable
                  resources. This overconsumption has led to an increase in
                  global temperatures and pollution of land, food, water and
                  air. The founders believe that the economic and social health
                  of civilisation will, to a large extent, depend on the
                  availability of energy and a sustainable approach to
                  agriculture, forestry, industrial manufacturing and water
                  reclamation. This will require substantial intellectual and
                  financial effort. It is the aim of NST to assist with this
                  process. The objective of NST is to improve quality of life,
                  which is, today, threatened by pollution, climate change and
                  depletion of natural resources. Sufficient food, water, air
                  and energy, in clean conditions, is essential to reaching this
                  objective.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <p>
              <b>NST aims to contribute in the following areas:</b>
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
        </div>
      </section>
      <section className="bg-sand">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>The board</h2>
            </div>
            <div className="col-md-5 offset-md-1 padding-bottom-30px padding-bottom-md-none">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img fixed={michaelNobelImage} />
                <div className="padding-left-30px">
                  <h3>Michael Nobel</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>
                The chairman of NST, university professor Michael Nobel, PhD,
                participated in the introduction of magnetic resonance imaging
                as European vice president of Fonar Corp. From 1991 to 2007 he
                served as Executive Chairman of the MRAB Group, a company
                providing MRI services to Swedish hospitals. From 1991 to 2006
                he was Vice Chairman and Chairman of the Board of the Nobel
                Family. He has been consultant to Unesco in Paris and the United
                Nations Social Affairs Division in Geneva. Michael Nobel is
                presently chairman or board member of six international
                companies in medical diagnostics, treatment and information and
                in five non-for-profit organizations.
              </p>
              <p>
                He is appointed distinguished professor at the Advanced Research
                Institute of Natural Science and Technology at Osaka City
                University and as guest professor at the Seisa and Soka
                Universities in Japan. Michael Nobel has received twelve
                honorary doctorates and professorships from universities around
                the world and fourteen other types of awards for his work in
                medical innovation and conflict resolution as well as in other
                fields.
              </p>
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img fixed={peterNobelImage} />
                <div className="padding-left-30px">
                  <h3>Peter Nobel</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>
                Peter Nobel co-founded the Swedish clean tech company HeatCore
                AB which operates in the energy efficiency sector. The company
                is developing and marketing a highly compact and efficient heat
                cell for applications in the global heating industry. Peter has
                a degree of Master of Science in Material Science and
                Engineering from the Royal Institute of Technology in Stockholm
                and a degree in business administration from Lund University.
              </p>
              <p>
                He has a track record of over 25 years positioning companies for
                success and market share growth in various industrial markets.
                He possesses a long experience of holding executive positions in
                sales and marketing, R&D and manufacturing functions in global
                companies like Alfa Laval and SWEP International.
              </p>
              <p>
                He has significant expertise in successfully navigating long
                sales cycles for industrial components for various global
                industry sectors and was instrumental for developing heat
                transfer products into an exponential growth resulting in a €500
                million worldwide market.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="personell-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>Personell</h2>
            </div>
            <div className="col-md-5 offset-md-1 padding-bottom-30px padding-bottom-md-none">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img fixed={stinaNordlanderImage} />
                <div className="padding-left-30px">
                  <h3>Stina Nordlander</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>
                Miss Stina Nordlander graduated 2016 from junior college after
                studying natural sciences with the focus on biology. After
                graduating she worked as a natural science and mathematics
                teacher for 10-11 year old school children at a middle level
                school in the Northern Swedish town of Umeå.
              </p>
              <p>
                Early in 2015, Stina Nordlander began working at a local refugee
                accommodation as a Swedish teacher. Her programs went viral on
                Youtube.
              </p>
              <p>
                She has won multiple titles in beauty contests during recent
                years placing second in the Miss World Sweden competition of
                2015 and became the first runner-up for the Swedish
                representative to the competition of Miss World 2015. She was
                also crowned Miss Supranational Sweden 2015. Currently Miss
                Nordlander is working as Chief Operating Officer and Office
                Manager for the Nobel Sustainability Trust Foundation.
              </p>
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img fixed={jamesBurtonImage} />
                <div className="padding-left-30px">
                  <h3>James Burton</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>
                James is an expert in prize design and operations. He has
                advised organisations such as the World Bank, NASA, Coca Cola,
                Emerson Electric Co. and The Nigerian Ministry of Finance on
                structuring their own prizes and contributed to widely read
                books on the subject.
              </p>
              <p>
                Previously he served as Chief of Staff to XPRIZE founder Peter
                Diamandis and as head of prize development at HeroX. James holds
                an MSc and MBA from the University of Oxford, where he was a
                Pershing Square Scholar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    trees: file(relativePath: { eq: "about/trees2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    peter: file(relativePath: { eq: "about/peter.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    michael: file(relativePath: { eq: "about/michael.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stina: file(relativePath: { eq: "about/stina.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    james: file(relativePath: { eq: "about/james.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
