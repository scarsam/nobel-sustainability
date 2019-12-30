import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
