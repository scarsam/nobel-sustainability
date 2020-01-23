import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import IntroText from '../components/intro_text'
import SEO from '../components/seo'
import ImageOffset from '../components/image_offset'
import Img from 'gatsby-image'
import squigglyLine from '../images/about/squiggly-line.svg'
import '../styles/pages/about.scss'

const AboutPageTemplate = ({
  title,
  subheading,
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
}) => {
  return (
    <Layout>
      <SEO title="About us" />
      <IntroText headline={title} subheading={subheading} />
      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-5">
                <h2>{sectionOne.heading}</h2>
              </div>
              <div className="col-md-7">
                <ReactMarkdown source={sectionOne.text1} />
              </div>
            </div>
            <div className="col-12 padding-top-30px padding-bottom-30px padding-bottom-md-none">
              <ImageOffset
                src={sectionOne.image.childImageSharp.fluid}
                // backgroundColor={sectionOne.offsetimage.publicURL}
                backgroundColor={'bg-map'}
              />
            </div>
          </div>
          <div className="col-md-5">
            <ReactMarkdown source={sectionOne.text2} />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-5">
                <h2>{sectionTwo.heading}t</h2>
              </div>
              <div className="col-md-7">
                <ReactMarkdown source={sectionTwo.column1} />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <ReactMarkdown source={sectionTwo.column2} />
          </div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>{sectionThree.heading}</h2>
            </div>
            <div className="col-md-5 offset-md-1 padding-bottom-30px padding-bottom-md-none">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img
                  fixed={
                    sectionThree.boardMemberOne.image.childImageSharp.fixed
                  }
                />
                <div className="padding-left-30px">
                  <h3>{sectionThree.boardMemberOne.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <ReactMarkdown source={sectionThree.boardMemberOne.text} />
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img
                  fixed={
                    sectionThree.boardMemberTwo.image.childImageSharp.fixed
                  }
                />
                <div className="padding-left-30px">
                  <h3>{sectionThree.boardMemberTwo.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <ReactMarkdown source={sectionThree.boardMemberTwo.text} />
            </div>
          </div>
        </div>
      </section>
      <section className="personell-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>{sectionFour.heading}</h2>
            </div>
            <div className="col-md-5 offset-md-1 padding-bottom-30px padding-bottom-md-none">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img
                  fixed={sectionFour.employeeOne.image.childImageSharp.fixed}
                />
                <div className="padding-left-30px">
                  <h3>{sectionFour.employeeOne.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <ReactMarkdown source={sectionFour.employeeOne.text} />
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <Img
                  fixed={sectionFour.employeeTwo.image.childImageSharp.fixed}
                />
                <div className="padding-left-30px">
                  <h3>{sectionFour.employeeTwo.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <ReactMarkdown source={sectionFour.employeeTwo.text} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPageTemplate
