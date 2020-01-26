import React from 'react'
import IntroText from '../../components/intro_text'
import squigglyLine from '../../images/about/squiggly-line.svg'
import '../../styles/pages/about.scss'
import PreviewCompatibleImage from '../preview-components/PreviewCompatibleImage'
import ReactMarkdown from 'react-markdown'

export const AboutPagePreviewTemplate = ({
  title,
  subheading,
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
}) => {
  return (
    <>
      <IntroText headline={title} subheading={subheading} />

      <section className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-5">
                <h2>{sectionOne.heading}</h2>
              </div>
              <div className="col-md-7">
                <p>{sectionOne.text1}</p>
              </div>
            </div>
            <div className="col-12 padding-top-30px padding-bottom-30px padding-bottom-md-none">
              {/* <ImageOffset
              src={sectionOne.image.childImageSharp.fluid}
              // backgroundColor={sectionOne.offsetimage.publicURL}
              backgroundColor={'bg-map'}
            /> */}
            </div>
          </div>
          <div className="col-md-5">
            <p>{sectionOne.text2}</p>
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
                <p>{sectionTwo.column1}</p>
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
                <PreviewCompatibleImage
                  imageInfo={sectionThree.boardMemberOne.image}
                  type="fixed"
                />
                <div className="padding-left-30px">
                  <h3>{sectionThree.boardMemberOne.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>{sectionThree.boardMemberOne.text}</p>
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <PreviewCompatibleImage
                  imageInfo={sectionThree.boardMemberTwo.image}
                  type="fixed"
                />
                <div className="padding-left-30px">
                  <h3>{sectionThree.boardMemberTwo.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>{sectionThree.boardMemberTwo.text}</p>
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
                <PreviewCompatibleImage
                  imageInfo={sectionFour.employeeOne.image}
                  type="fixed"
                />
                <div className="padding-left-30px">
                  <h3>{sectionFour.employeeOne.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>{sectionFour.employeeOne.text}</p>
            </div>
            <div className="col-md-5">
              <div className="d-flex align-items-center margin-bottom-30px">
                <PreviewCompatibleImage
                  imageInfo={sectionFour.employeeTwo.image}
                  type="fixed"
                />
                <div className="padding-left-30px">
                  <h3>{sectionFour.employeeTwo.name}</h3>
                  <img src={squigglyLine} alt="underline" />
                </div>
              </div>
              <p>{sectionFour.employeeTwo.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPagePreviewTemplate
