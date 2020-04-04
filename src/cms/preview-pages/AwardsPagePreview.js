import React from 'react'
import AwardsPagePreviewTemplate from '../preview-templates/AwardsPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const AwardsPagePreview = ({ entry }) => {
  return (
    <PreviewLayout>
      <AwardsPagePreviewTemplate
        title={entry.getIn(['data', 'title'])}
        subheading={entry.getIn(['data', 'subheading'])}
        sectionOne={{
          heading: entry.getIn(['data', 'sectionOne', 'heading']),
          column1: entry.getIn(['data', 'sectionOne', 'column1']),
          column2: entry.getIn(['data', 'sectionOne', 'column2']),
        }}
        sectionTwo={{
          heading: entry.getIn(['data', 'sectionTwo', 'heading']),
          text: entry.getIn(['data', 'sectionTwo', 'text']),
        }}
        sectionThree={{
          heading: entry.getIn(['data', 'sectionThree', 'heading']),
          column1: entry.getIn(['data', 'sectionThree', 'column1']),
          column2: entry.getIn(['data', 'sectionThree', 'column2']),
        }}
        sectionFour={{
          heading: entry.getIn(['data', 'sectionFour', 'heading']),
          text: entry.getIn(['data', 'sectionFour', 'text']),
        }}
        sectionFive={{
          heading: entry.getIn(['data', 'sectionFive', 'heading']),
          subheading: entry.getIn(['data', 'sectionFive', 'subheading']),
          column1: entry.getIn(['data', 'sectionFive', 'column1']),
          column2: entry.getIn(['data', 'sectionFive', 'column2']),
        }}
      />
    </PreviewLayout>
  )
}

export default AwardsPagePreview

AwardsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}
