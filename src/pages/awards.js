import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroText from '../components/intro_text'
import '../styles/pages/awards.scss'

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
              <ReactMarkdown source={sectionOne.column1} />
            </div>
            <div className="col-md-4 green-bullet-list">
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
            <div className="col-md-3">
              <h2>{sectionTwo.subheading}</h2>
            </div>
            <div className="col-md-9">
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
            <h2 className="col-md-7 offset-md-3">{sectionThree.heading}</h2>
          </div>

          <div className="row">
            <div className="col-md-7 offset-md-3">
              <ReactMarkdown source={sectionThree.text} />
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
              <ReactMarkdown source={sectionFour.column1} />
              <p className="border-bottom"></p>
              <h3 className="c-water">{sectionFour.subheading}</h3>
            </div>
            <div className="col-md-4">
              <ReactMarkdown source={sectionFour.column2} />
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
              <ReactMarkdown source={sectionFive.text} />
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
              <ReactMarkdown source={sectionSix.column1} />
              <p className="border-bottom"></p>
              <h3 className="c-water">{sectionSix.subheading}</h3>
            </div>
            <div className="col-md-4">
              <ReactMarkdown source={sectionSix.column2} />
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
