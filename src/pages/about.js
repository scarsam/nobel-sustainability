import React from "react"
import Layout from "../components/layout"
import IntroText from "../components/intro_text"
import SEO from "../components/seo"
import ImageOffset from "../components/image_offset"

const About = ({ data }) => {
  const treesImage = data.trees.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About us" />
      <IntroText
        headline="About us"
        subheading="We encourage research, development, action and implementation of sustainable solutions"
      />

      <section id="foundation" className="container">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-5">
                <h2>The Background of Nobel Sustainability Trust</h2>
              </div>
              <div className="col-7">
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
            <div className="col-12">
              <ImageOffset src={treesImage} backgroundColor={"bg-green"} />
            </div>
          </div>
          <div className="col-5">
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
    trees: file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
