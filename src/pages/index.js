import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageOffset from "../components/image_offset"
import IntroText from "../components/intro_text"

const Home = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const image = data.file.childImageSharp.fluid

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <p>home</p>
      <Link className="btn btn-primary" to="/about">
        About
      </Link>
      <Link className="btn btn-primary" to="/awards">
        Awards
      </Link>
      <Link className="btn btn-primary" to="/history">
        history
      </Link>
      <div className="col-4">
        <IntroText headline="A world in balance" subheading="We bring public awareness to the issues of pollution and clean energy and encouraging change" />
        <ImageOffset
          src={image}
          backgroundColor={"bg-green"}
          text={
            "Creation a pollution-free, life-sustaining environment for all"
          }
        />
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
