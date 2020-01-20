import React from 'react'
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
                <p>{sectionOne.text1}</p>
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
            {/* {sectionTwo.column2} */}
            <p>
              <b>NST aims to contribute in the following areas:</b>
            </p>
            <ul className="padding-left-15px">
              <li>
                Climate change with emphasis on reduction of global warming;
              </li>
              <li>
                Advances in clean and renewable technologies and policies;
              </li>
              <li>A pollution-free, life-sustaining environment;</li>
              <li>Inspiration for present and future generations</li>
            </ul>
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
              <p>{sectionThree.boardMemberOne.text}</p>
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
                <Img
                  fixed={sectionFour.employeeOne.image.childImageSharp.fixed}
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
                <Img
                  fixed={sectionFour.employeeTwo.image.childImageSharp.fixed}
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
    </Layout>
  )
}

export default AboutPageTemplate
