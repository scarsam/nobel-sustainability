import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageOffset from "../components/image_offset"

const Home = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

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
