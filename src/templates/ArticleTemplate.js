import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <h3>{post.title}</h3>
          <p className="c-green">{post.date}</p>
          <section
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
        <div className="col-md-8  offset-md-2">
          <div className="padding-top-20px">
            <a className="btn c-white" onClick={() => window.history.back()}>
              Back
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const PageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
