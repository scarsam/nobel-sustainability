import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroText from '../components/intro_text'
import '../styles/pages/awards.scss'
import { graphql } from 'gatsby'

const Awards = ({ data }) => {
  const {
    title,
    subheading,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <SEO title="Awards" />
      <IntroText headline={title} subheading={subheading} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>{sectionOne.heading}</h2>
            </div>
            <div className="col-md-5 ">
              <p>{sectionOne.column1}</p>
            </div>
            <div className="col-md-4">
              {/* {sectionOne.column2} */}
              <p>
                <b>The Awards cermony will include:</b>
              </p>
              <ul className="padding-left-15px green-bullet-list">
                <li>The Sustainability Award </li>
                <li>
                  Four Runners-Up who will receive diplomas and other forms of
                  acknowledgement
                </li>
                <li>Two Scholarships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-beige squiggly-line-bg">
        <div className="container padding-bottom-none windmill-bg">
          <h2 className="text-left-sm text-center-md padding-bottom-25px">
            {sectionTwo.heading}
          </h2>
          <div className="row padding-bottom-60px">
            <div className="text-center-md col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <p>{sectionTwo.text1}</p>
            </div>
          </div>
          <div className="row padding-bottom-30px">
            <div className="col-md-3">
              <h2>{sectionTwo.subheading}</h2>
            </div>
            <div className="col-md-9">
              <p>{sectionTwo.text2}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-3 col-lg-8 offset-lg-3">
              {/* {sectionThree.text3} */}
              <p>
                <b>The Awards cermony will include:</b>
              </p>
              <ul className="padding-left-15px green-bullet-list padding-bottom-60px">
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged from 1873 in establishing, financing and operating the
                  BraNobel oil company in the Baku, the largest company in
                  Russia and the second largest oil company in the world.
                </li>
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged from 1873 in establishing, financing and operating the
                  BraNobel oil company in the Baku, the largest company in
                  Russia and the second largest oil company in the world. The
                  Nobel family is also represented at the Nobel Prizes Award
                  Ceremonies which are held in Stockholm on the 10th of December
                  every year since 1901.
                </li>
                <li>
                  It was formed by the descendants of Immanuel Nobel the
                  younger, i.e. the fater of Alfred, Ludvig, Robert and Emil
                  Nobel. The first three of the aforementioned brothers were
                  engaged .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container padding-bottom-none">
          <div className="row">
            <h2 className="col-md-7 offset-md-3">{sectionThree.heading}</h2>
          </div>

          <div className="row">
            <div className="col-md-7 offset-md-3">
              <p>{sectionThree.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>{sectionFour.heading}</h2>
            </div>
            <div className="col-md-4">
              <p>{sectionFour.column1}</p>
              <p className="border-bottom"></p>
              <h3 className="c-water">{sectionFour.subheading}</h3>
            </div>
            <div className="col-md-4">
              <p>{sectionFour.column2}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>{sectionFive.heading}</h2>
            </div>
            <div className="col-md-8">
              <p>{sectionFive.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="city-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>{sectionSix.heading}</h2>
            </div>
            <div className="col-md-4">
              <p>{sectionSix.column1}</p>
              <p className="border-bottom"></p>
              <h3 className="c-water">{sectionSix.subheading}</h3>
            </div>
            <div className="col-md-4">
              <p>{sectionSix.column2}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Awards

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/awards/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subheading
            sectionOne {
              heading
              column1
              column2
            }
            sectionTwo {
              heading
              subheading
              text1
              text2
              text3
            }
            sectionThree {
              heading
              text
            }
            sectionFour {
              heading
              subheading
              column1
              column2
            }
            sectionFive {
              heading
              text
            }
            sectionSix {
              heading
              subheading
              column1
              column2
            }
          }
        }
      }
    }
  }
`
