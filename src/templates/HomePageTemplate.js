import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import ImageOffset from '../components/image_offset'
import IntroText from '../components/intro_text'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const HomePageTemplate = ({
  title,
  subheading,
  image,
  partners,
  news,
  firstSection,
  secondSection,
}) => {
  return (
    <Layout>
      <IntroText headline={title} subheading={subheading} />
      <section id="banner">
        <Img fluid={image.image.childImageSharp.fluid} />
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 padding-bottom-20px padding-bottom-lg-none">
              <h2>{firstSection.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-5">
              <ReactMarkdown source={firstSection.column1} />
            </div>
            <div className="col-md-6 col-lg-5">
              <ReactMarkdown source={firstSection.column2} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <h2>Partners</h2>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={partners.partner1.image.image.publicURL}
                alt={partners.partner1.image.alt}
              />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={partners.partner2.image.image.publicURL}
                alt={partners.partner2.image.alt}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container border-bottom">
          <div className="row">
            <div className="col-lg-2 padding-bottom-20px padding-bottom-lg-none">
              <h2>{secondSection.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-5">
              <ReactMarkdown source={secondSection.column1} />
            </div>
            <div className="col-10 offset-1 col-md-5 offset-md-0 col-lg-3 offset-lg-1">
              <ImageOffset
                src={secondSection.image.image.childImageSharp.fluid}
                backgroundColor={'bg-green'}
                text={secondSection.image.text}
              />
            </div>
          </div>
        </div>
      </section>

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
                        ? 'col-md-10 padding-bottom-50px'
                        : 'col-md-10 offset-md-2 padding-bottom-50px'
                    }
                  >
                    <h3>{node.frontmatter.title}</h3>
                    <p className="c-green">{node.frontmatter.date}</p>
                    <div className="article-markdown">
                      <ReactMarkdown source={node.excerpt} />
                    </div>
                    <Link className="news-link" to={node.fields.slug}>
                      Read More
                    </Link>
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
