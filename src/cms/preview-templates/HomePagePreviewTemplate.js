import React from 'react'
import ReactMarkdown from 'react-markdown'
import ImageOffset from '../../components/image_offset'
import IntroText from '../../components/intro_text'
import PreviewCompatibleImage from '../preview-components/PreviewCompatibleImage'

const HomePagePreviewTemplate = ({
  title,
  subheading,
  image,
  partners,
  news,
  firstSection,
  secondSection,
}) => {
  return (
    <>
      <IntroText headline={title} subheading={subheading} />
      <section id="banner">
        <PreviewCompatibleImage imageInfo={image} />
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
              <PreviewCompatibleImage imageInfo={partners.partner1.image} />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center">
              <PreviewCompatibleImage imageInfo={partners.partner2.image} />
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
            {/* <ImageOffset
              src={secondSection.image.image.childImageSharp.fluid}
              backgroundColor={'bg-green'}
              text={secondSection.image.text}
            /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePagePreviewTemplate
