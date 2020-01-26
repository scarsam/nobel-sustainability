import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import ImageOffset from '../components/image_offset'
import IntroText from '../components/intro_text'
import HistoryMidBreakpoint from '../components/history_mid_breakpoint'

const HistoryPageTemplate = ({
  title,
  subheading,
  sectionOne,
  sectionTwo,
  sectionThree,
}) => {
  return (
    <Layout>
      <section>
        <IntroText headline={title} subheading={subheading} />
      </section>
      <section className="padding-top-none d-none d-block d-lg-none">
        <div className="container">
          <HistoryMidBreakpoint data={sectionOne} />
        </div>
      </section>

      <section className="padding-top-none d-none d-lg-block padding-bottom-none">
        <div className="container">
          <div className="row padding-bottom-60px">
            <div className="col-lg-3">
              <ImageOffset
                src={sectionOne.columnOne.image.image.childImageSharp.fluid}
                backgroundColor={'bg-water'}
              />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-5">
                  <h2>{sectionOne.columnOne.heading}</h2>
                  <ReactMarkdown source={sectionOne.columnOne.text} />
                </div>
                <div className="col-lg-12">
                  <div className="row padding-top-60px">
                    <div className="offset-lg-1 col-lg-4">
                      <ImageOffset
                        src={
                          sectionOne.columnTwo.image.image.childImageSharp.fluid
                        }
                        backgroundColor={'bg-green'}
                      />
                    </div>
                    <div className="col-lg-6">
                      <h2>{sectionOne.columnTwo.heading}</h2>
                      <ReactMarkdown source={sectionOne.columnTwo.text} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h3>{sectionTwo.heading}</h3>
            </div>
            <div className="col-md-5">
              <ReactMarkdown source={sectionTwo.column1} />
            </div>
            <div className="col-md-5">
              <ReactMarkdown source={sectionTwo.column2} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige">
        <div className="container">
          <h2 className="text-left-sm text-center-md padding-bottom-45px">
            {sectionThree.heading}
          </h2>
          <div className="row">
            <div className="col-md-6 green-bullet-list">
              <ReactMarkdown source={sectionThree.column1} />
            </div>
            <div className="col-md-6">
              <ReactMarkdown source={sectionThree.column2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HistoryPageTemplate
