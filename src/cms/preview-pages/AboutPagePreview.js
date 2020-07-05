import React from 'react'
import AboutPagePreviewTemplate from '../preview-templates/AboutPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const AboutPagePreview = ({ entry, getAsset, widgetsFor }) => {
  return (
    <PreviewLayout>
      <AboutPagePreviewTemplate
        title={entry.getIn(['data', 'title'])}
        subheading={entry.getIn(['data', 'subheading'])}
        sectionOne={{
          heading: entry.getIn(['data', 'sectionOne', 'heading']),
          text1: entry.getIn(['data', 'sectionOne', 'text1']),
          text2: entry.getIn(['data', 'sectionOne', 'text2']),
          image: {
            image: getAsset(
              entry.getIn(['data', 'sectionOne', 'image', 'image'])
            ),
            alt: entry.getIn(['data', 'sectionOne', 'image', 'alt']),
          },
        }}
        sectionTwo={{
          heading: entry.getIn(['data', 'sectionTwo', 'heading']),
          column1: entry.getIn(['data', 'sectionTwo', 'column1']),
          column2: entry.getIn(['data', 'sectionTwo', 'column2']),
        }}
        sectionThree={{
          heading: entry.getIn(['data', 'sectionThree', 'heading']),
          boardMembers: entry
            .getIn(['data', 'sectionThree', 'boardMembers'])
            .map(boardMember => {
              return {
                name: boardMember.getIn(['name']),
                text: boardMember.getIn(['text']),
                image: {
                  image: getAsset(boardMember.getIn(['image', 'image'])),
                },
              }
            }),
        }}
        sectionFour={{
          heading: entry.getIn(['data', 'sectionFour', 'heading']),
          employeeOne: entry
            .getIn(['data', 'sectionFour', 'employeeOne'])
            .map(employeeOne => {
              return {
                name: employeeOne.getIn(['name']),
                title: employeeOne.getIn(['title']),
                text: employeeOne.getIn(['text']),
                image: {
                  image: getAsset(employeeOne.getIn(['image', 'image'])),
                },
              }
            }),
        }}
      />
    </PreviewLayout>
  )
}

export default AboutPagePreview

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
