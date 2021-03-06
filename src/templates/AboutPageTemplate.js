import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import IntroText from '../components/intro_text'
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
      <IntroText headline={title} subheading={subheading} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-lg-5 padding-bottom-20px padding-bottom-lg-none">
                  <h2>{sectionOne.heading}</h2>
                </div>
                <div className="col-lg-7">
                  <ReactMarkdown source={sectionOne.text1} />
                </div>
              </div>
              <div className="col-12 padding-top-30px padding-bottom-30px padding-bottom-md-none">
                <ImageOffset
                  src={sectionOne.image.image.childImageSharp.fluid}
                  backgroundColor={'bg-map'}
                />
              </div>
            </div>
            <div className="col-md-5">
              <ReactMarkdown source={sectionOne.text2} />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-lg-5 padding-bottom-20px padding-bottom-lg-none">
                <h2>{sectionTwo.heading}t</h2>
              </div>
              <div className="col-lg-7">
                <ReactMarkdown source={sectionTwo.column1} />
              </div>
            </div>
          </div>
          <div className="col-md-5 green-bullet-list">
            <ReactMarkdown source={sectionTwo.column2} />
          </div>
        </div>
      </section>
      <section className="bg-sand board-members">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>{sectionThree.heading}</h2>
            </div>
            {sectionThree.boardMembers &&
              sectionThree.boardMembers.map((boardMember, index) => {
                return (
                  <div
                    className="col-md-5 offset-md-1 margin-top-md-20px padding-bottom-30px padding-bottom-md-none"
                    key={index}
                  >
                    <div className="d-flex align-items-center margin-bottom-30px">
                      <Img
                        className="board-member-image"
                        fixed={boardMember.image.image.childImageSharp.fixed}
                      />
                      <div className="padding-left-30px">
                        <h3 className="squiggly-line">{boardMember.name}</h3>
                      </div>
                    </div>
                    <ReactMarkdown source={boardMember.text} />
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      <section className="personell-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center padding-bottom-60px">
              <h2>{sectionFour.heading}</h2>
            </div>
            {sectionFour.employeeOne &&
              sectionFour.employeeOne.map(employee => (
                <div
                  key={employee.name}
                  className="col-md-5 offset-md-1 margin-top-md-20px padding-bottom-30px padding-bottom-md-none"
                >
                  <div className="d-flex align-items-center margin-bottom-30px">
                    <Img
                      className="personell-image"
                      fixed={employee.image.image.childImageSharp.fixed}
                    />
                    <div className="padding-left-30px">
                      <h3 className="margin-bottom-5px">{employee.name}</h3>
                      <strong className="d-block">{employee.title}</strong>
                    </div>
                  </div>
                  <ReactMarkdown source={employee.text} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPageTemplate
