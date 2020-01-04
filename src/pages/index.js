import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ImageOffset from "../components/image_offset"
import IntroText from "../components/intro_text"

const Home = props => {
  const { data } = props
  // const siteTitle = data.site.siteMetadata.title
  const image = data.file.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="All posts" />
      <div className="container">
      <IntroText headline="A world in balance" subheading="We bring public awareness to the issues of pollution and clean energy and encouraging change" />
        <div className="col-4">
          <ImageOffset
            src={image}
            backgroundColor={"bg-green"}
            text={
              "Creation a pollution-free, life-sustaining environment for all"
            }
          />
        </div>
      </div>
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
    file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
