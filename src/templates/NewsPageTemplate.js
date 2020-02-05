import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const HomePageTemplate = ({ news }) => {
  console.log(news)
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h2>News</h2>
            </div>
            {news &&
              news.map(({ node }, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === 0
                        ? 'col-md-10 padding-bottom-20px'
                        : 'col-md-10 offset-md-2 padding-bottom-30px'
                    }
                  >
                    <h3>{node.frontmatter.title}</h3>
                    <p className="c-green">{node.frontmatter.date}</p>
                    <div className="article-markdown">
                      <ReactMarkdown source={node.frontmatter.text} />
                    </div>
                    <Link to={node.fields.slug}>Read More</Link>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePageTemplate
