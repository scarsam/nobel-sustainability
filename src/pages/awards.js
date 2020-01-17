import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroText from '../components/intro_text'
import Img from 'gatsby-image'
import '../styles/pages/awards.scss'

const Awards = ({ data }) => {
  const windmillImage = data.windmill.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Awards" />
      <IntroText
        headline="Awards"
        subheading="The Award will be given to scientists or institutions who have made important discoveries of potential importance to the wellbeing of mankind"
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Sustainability Award</h2>
            </div>
            <div className="col-md-5 ">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut. Everyday carry blog YOLO
                air plant vegan keffiyeh viral four dollar toast. Taiyaki vegan
                deep v, jean shorts cronut vexillologist ennui skateboard ramps
                man bun selfies church-key brooklyn.
              </p>
            </div>
            <div className="col-md-4">
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
            Award Selection Procedures
          </h2>
          <div className="row padding-bottom-60px">
            <div className="text-center-md col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the fater of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in the Baku, the largest company in Russia and the
                second largest oil company in the world. The Nobel family is
                also represented at the Nobel Prizes Award Ceremonies which are
                held in Stockholm on the 10th of December every year since 1901.
                In 2007, the Nobel family archives, kept in the town archives of
                Lund, were inscribed in UNESCO's Memory of the World Register
              </p>
            </div>
          </div>
          <div className="row padding-bottom-30px">
            <div className="col-md-3">
              <h2>Role of the NST Representative</h2>
            </div>
            <div className="col-md-9">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the fater of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in the Baku, the largest company in Russia and the
                second largest oil company in the world. The Nobel family is
                also represented at the Nobel Prizes Award Ceremonies which are
                held in Stockholm on the 10th of December every year since 1901.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-3 col-lg-8 offset-lg-3">
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
        <div className="container">
          <div className="row">
            <h2 className="col-md-7 offset-md-3">
              The NST Conference on Sustainability
            </h2>
          </div>

          <div className="row">
            <div className="col-md-7 offset-md-3">
              <p>
                It was formed by the descendants of Immanuel Nobel the younger,
                i.e. the fater of Alfred, Ludvig, Robert and Emil Nobel. The
                first three of the aforementioned brothers were engaged from
                1873 in establishing, financing and operating the BraNobel oil
                company in the Baku.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>The Role of the Universities in the NST Network</h2>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut. Everyday carry blog YOLO
                air plant vegan keffiyeh viral four dollar toast. Taiyaki vegan
                deep v, jean shorts cronut vexillologist ennui skateboard ramps
                man bun selfies church-key brooklyn.
              </p>
              <p className="border-bottom"></p>
              <h3>
                Each of the university comittees will propose a maximum of five
                candidates
              </h3>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut. Everyday carry blog YOLO
                air plant vegan keffiyeh viral four dollar toast. Taiyaki vegan
                deep v, jean shorts cronut vexillologist ennui skateboard ramps
                man bun selfies church-key brooklyn. Post-ironic banh mi
                cold-pressed hashtag roof party. Iceland vice aesthetic,
                raclette meggings pork belly bicycle rights umami tousled
                pickled hexagon blue bottle. Skateboard etsy succulents,
                mumblecore flexitarian hammock hella pabst fashion axe tumeric
                lo-fi swag cronut. Everyday carry blog YOLO air plant vegan
                keffiyeh viral four dollar toast. Taiyaki vegan deep v, jean
                shorts cronut vexillologist ennui skateboard ramps man bun
                selfies church-key brooklyn
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>The Award Committee</h2>
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut. Everyday carry blog YOLO
                air plant vegan keffiyeh viral four dollar toast. Taiyaki vegan
                deep v, jean shorts cronut vexillologist ennui skateboard ramps
                man bun selfies church-key brooklyn. Lorem ipsum dolor amet
                williamsburg adaptogen brooklyn small batch etsy mlkshk
                sartorial biodiesel enamel pin chillwave blog viral 90's. Lomo
                ethical tousled skateboard swag master cleanse selvage neutra
                scenester. Cronut plaid YOLO woke tbh wolf aesthetic.
                Post-ironic banh mi cold-pressed hashtag roof party. Iceland
                vice aesthetic, raclette meggings pork belly bicycle rights
                umami tousled pickled hexagon blue bottle. Skateboard etsy
                succulents, mumblecore flexitarian hammock hella pabst fashion
                axe tumeric lo-fi swag cronut. Everyday carry blog YOLO air
                plant vegan keffiyeh viral four dollar toast. Taiyaki vegan deep
                v, jean shorts cronut vexillologist ennui skateboard ramps man
                bun selfies church-key brooklyn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="city-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>The Role of the Universities in the NST Network</h2>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut. Everyday carry blog YOLO
                air plant vegan keffiyeh viral four dollar toast. Taiyaki vegan
                deep v, jean shorts cronut vexillologist ennui skateboard ramps
                man bun selfies church-key brooklyn.
              </p>
              <p className="border-bottom"></p>
              <h3>
                Each of the university comittees will propose a maximum of five
                candidates
              </h3>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor amet williamsburg adaptogen brooklyn small
                batch etsy mlkshk sartorial biodiesel enamel pin chillwave blog
                viral 90's. Lomo ethical tousled skateboard swag master cleanse
                selvage neutra scenester. Cronut plaid YOLO woke tbh wolf
                aesthetic. Post-ironic banh mi cold-pressed hashtag roof party.
                Iceland vice aesthetic, raclette meggings pork belly bicycle
                rights umami tousled pickled hexagon blue bottle. Skateboard
                etsy succulents, mumblecore flexitarian hammock hella pabst
                fashion axe tumeric lo-fi swag cronut.
              </p>
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
    city: file(relativePath: { eq: "city.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    windmill: file(relativePath: { eq: "windmill.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
