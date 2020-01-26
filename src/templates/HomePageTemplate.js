import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import ImageOffset from '../components/image_offset'
import IntroText from '../components/intro_text'
import Img from 'gatsby-image'

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
        <Img fluid={image.childImageSharp.fluid} />
      </section>

      <section id="awards" className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>{firstSection.heading}</h3>
          </div>
          <div className="col-md-5">
            <ReactMarkdown source={firstSection.column1} />
          </div>
          <div className="col-md-5">
            <ReactMarkdown source={firstSection.column2} />
          </div>
        </div>
      </section>

      <section id="partners" className="bg-grey-beige">
        <div className="container">
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h2>Partners</h2>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={partners.partner1.publicURL}
                alt="Earth Captial company logo"
              />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <img
                src={partners.partner2.publicURL}
                alt="Lombard company logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="conference" className="container border-bottom">
        <div className="row">
          <div className="col-md-2">
            <h3>{secondSection.heading}</h3>
          </div>
          <div className="col-md-5">
            <ReactMarkdown source={secondSection.column1} />
          </div>
          <div className="col-10 offset-1 col-md-5 offset-md-0 col-lg-3 offset-lg-1">
            <ImageOffset
              src={secondSection.image.childImageSharp.fluid}
              backgroundColor={'bg-green'}
              text={secondSection.imageText}
            />
          </div>
        </div>
      </section>

      <section id="news" className="container">
        <div className="row">
          <div className="col-md-2">
            <h2>News</h2>
          </div>
          {news &&
            news.map((article, index) => {
              return (
                <div key={index} className="col-md-10">
                  <p className="c-green">March 24, 2018</p>
                  <p>{article}</p>
                  <p>Read More</p>
                </div>
              )
            })}
        </div>
      </section>
    </Layout>
  )
}

export default HomePageTemplate
