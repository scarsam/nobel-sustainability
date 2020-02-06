import React from 'react'
import ReactMarkdown from 'react-markdown'
import IntroText from '../../components/intro_text'

const AwardsPagePreviewTemplate = ({
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
    <>
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
              <ReactMarkdown source={sectionTwo.text} />
            </div>
          </div>
          <div className="row padding-bottom-30px">
            <div className="offset-md-3 col-lg-3 offset-lg-0">
              <h2>{sectionThree.heading}</h2>
            </div>
            <div className="offset-md-3 col-lg-9 offset-lg-0">
              <ReactMarkdown source={sectionThree.column1} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-3 col-lg-8 offset-lg-3 green-bullet-list">
              <ReactMarkdown source={sectionThree.column2} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container padding-bottom-none">
          <div className="row">
            <div className="col-lg-7 offset-lg-3">
              <h2>{sectionFour.heading}</h2>
              <ReactMarkdown source={sectionFour.text} />
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
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionFive.column1} />
              <h3 className="c-water border-top padding-top-20px">
                {sectionFive.subheading}
              </h3>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionFive.column2} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionSix.heading}</h2>
            </div>
            <div className="col-lg-8">
              <ReactMarkdown source={sectionSix.text} />
            </div>
          </div>
        </div>
      </section>

      <section className="city-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 padding-bottom-20px padding-bottom-lg-none">
              <h2>{sectionSeven.heading}</h2>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionSeven.column1} />
              <h3 className="c-water border-top padding-top-20px">
                {sectionSeven.subheading}
              </h3>
            </div>
            <div className="col-md-6 col-lg-4">
              <ReactMarkdown source={sectionSeven.column2} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardsPagePreviewTemplate
