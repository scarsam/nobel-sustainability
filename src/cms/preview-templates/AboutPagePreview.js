import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../templates/AboutPageTemplate'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      subheading={entry.getIn(['data', 'subheading'])}
      sectionOne={{
        heading: entry.getIn(['data', 'sectionOne', 'heading']),
        text1: entry.getIn(['data', 'sectionOne', 'text1']),
        text2: entry.getIn(['data', 'sectionOne', 'text2']),
        // image: {
        //   image: getAsset(
        //     entry.getIn(['data', 'sectionOne', 'image', 'image'])
        //   ),
        //   childImageSharp: {
        //     childImageSharp: getAsset(
        //       entry.getIn(['data', 'sectionOne', 'image', 'childImageSharp'])
        //     ),
        //   },
        // },
      }}
      sectionTwo={{
        heading: entry.getIn(['data', 'sectionTwo', 'heading']),
        column1: entry.getIn(['data', 'sectionTwo', 'column1']),
        column2: entry.getIn(['data', 'sectionTwo', 'column2']),
      }}
      sectionThree={{
        heading: entry.getIn(['data', 'sectionThree', 'heading']),
        boardMemberOne: {
          name: entry.getIn(['data', 'sectionThree', 'boardMemberOne', 'name']),
          text: entry.getIn(['data', 'sectionThree', 'boardMemberOne', 'text']),
          // image: entry.getIn([
          //   'data',
          //   'sectionThree',
          //   'boardMemberOne',
          //   'image',
          // ]),
        },
        boardMemberTwo: {
          name: entry.getIn(['data', 'sectionThree', 'boardMemberTwo', 'name']),
          text: entry.getIn(['data', 'sectionThree', 'boardMemberTwo', 'text']),
          // image: entry.getIn([
          //   'data',
          //   'sectionThree',
          //   'boardMemberTwo',
          //   'image',
          // ]),
        },
      }}
      sectionFour={{
        heading: entry.getIn(['data', 'sectionFour', 'heading']),
        employeeOne: {
          name: entry.getIn(['data', 'sectionFour', 'employeeOne', 'name']),
          text: entry.getIn(['data', 'sectionFour', 'employeeOne', 'text']),
          // image: entry.getIn(['data', 'sectionFour', 'employeeOne', 'image']),
        },
        employeeTwo: {
          name: entry.getIn(['data', 'sectionFour', 'employeeTwo', 'name']),
          text: entry.getIn(['data', 'sectionFour', 'employeeTwo', 'text']),
          // image: entry.getIn(['data', 'sectionFour', 'employeeTwo', 'image']),
        },
      }}
    />
  )
}

export default AboutPagePreview

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}
