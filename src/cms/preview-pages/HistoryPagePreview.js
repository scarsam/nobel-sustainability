import React from 'react'
import HistoryPagePreviewTemplate from '../preview-templates/HistoryPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const HistoryPagePreview = ({ entry, getAsset }) => {
  return (
    <PreviewLayout>
      <HistoryPagePreviewTemplate
        title={entry.getIn(['data', 'title'])}
        subheading={entry.getIn(['data', 'subheading'])}
        sectionOne={{
          columnOne: {
            heading: entry.getIn([
              'data',
              'sectionOne',
              'columnOne',
              'heading',
            ]),
            text: entry.getIn(['data', 'sectionOne', 'columnOne', 'text']),
            image: {
              image: getAsset(
                entry.getIn([
                  'data',
                  'sectionOne',
                  'columnOne',
                  'image',
                  'image',
                ])
              ),
              alt: entry.getIn([
                'data',
                'sectionOne',
                'columnOne',
                'image',
                'alt',
              ]),
            },
          },
          columnTwo: {
            heading: entry.getIn([
              'data',
              'sectionOne',
              'columnTwo',
              'heading',
            ]),
            text: entry.getIn(['data', 'sectionOne', 'columnTwo', 'text']),
            image: {
              image: getAsset(
                entry.getIn([
                  'data',
                  'sectionOne',
                  'columnTwo',
                  'image',
                  'image',
                ])
              ),
              alt: entry.getIn([
                'data',
                'sectionOne',
                'columnTwo',
                'image',
                'alt',
              ]),
            },
          },
        }}
        sectionTwo={{
          heading: entry.getIn(['data', 'sectionTwo', 'heading']),
          column1: entry.getIn(['data', 'sectionTwo', 'column1']),
          column2: entry.getIn(['data', 'sectionTwo', 'column2']),
        }}
        sectionThree={{
          heading: entry.getIn(['data', 'sectionTwo', 'heading']),
          column1: entry.getIn(['data', 'sectionTwo', 'column1']),
          column2: entry.getIn(['data', 'sectionTwo', 'column2']),
        }}
      />
    </PreviewLayout>
  )
}

export default HistoryPagePreview

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
