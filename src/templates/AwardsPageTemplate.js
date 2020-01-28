import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import IntroText from '../components/intro_text'

const AwardsPageTemplate = ({
  title,
  subheading,
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive,
  sectionSix,
  sectionSeven,
}) => {
  return (
    <Layout>
      <IntroText headline={title} subheading={subheading} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionOne.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-5">
              <ReactMarkdown source={sectionOne.column1} />
            </div>
            <div className="col-md-6 col-lg-4 green-bullet-list">
              <ReactMarkdown source={sectionOne.column2} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige squiggly-line-bg">
        <div className="container windmill-bg">
          <h2 className="text-left-sm text-center-md padding-bottom-25px">
            {sectionTwo.heading}
          </h2>
          <div className="row padding-bottom-60px">
            <div className="text-center-md col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <ReactMarkdown source={sectionTwo.text1} />
            </div>
          </div>
          <div className="row padding-bottom-30px">
            <div className="offset-md-3 col-lg-3 offset-lg-0">
              <h2>{sectionTwo.subheading}</h2>
            </div>
            <div className="offset-md-3 col-lg-9 offset-lg-0">
              <ReactMarkdown source={sectionTwo.text2} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-3 col-lg-8 offset-lg-3 green-bullet-list">
              <ReactMarkdown source={sectionTwo.text3} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container padding-bottom-none">
          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <h2>{sectionThree.heading}</h2>
              <ReactMarkdown source={sectionThree.text} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionFour.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionFour.column1} />
              <h3 className="c-water border-top padding-top-20px">
                {sectionFour.subheading}
              </h3>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionFour.column2} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionFive.heading}</h2>
            </div>
            <div className="col-lg-8">
              <ReactMarkdown source={sectionFive.text} />
            </div>
          </div>
        </div>
      </section>

      <section className="city-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionSix.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionSix.column1} />
              <h3 className="c-water border-top padding-top-20px">
                {sectionSix.subheading}
              </h3>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionSix.column2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AwardsPageTemplate
