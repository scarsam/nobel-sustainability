import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const NewsPageTemplate = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  console.log(data)

  return (
    <Layout>
      <div className="col-md-10">
        <h3>{post.title}</h3>
        <p className="c-green">{post.date}</p>
        <div>
          <ReactMarkdown source={post.text} />
        </div>
      </div>
    </Layout>
  )
}

export default NewsPageTemplate

export const PageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        text
      }
      fields {
        slug
      }
    }
  }
`
