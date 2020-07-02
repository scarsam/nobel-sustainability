import React from 'react'
import { graphql } from 'gatsby'
import NewsPageTemplate from '../templates/NewsPageTemplate'
import SEO from '../components/seo'
import '../styles/pages/news.scss'

const NewsPage = ({ data }) => {
  const news = data.news.edges

  return (
    <>
      <SEO title="News" />
      <NewsPageTemplate news={news} />
    </>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/news/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "dddd, MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
