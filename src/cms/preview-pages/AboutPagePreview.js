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
          boardMemberOne: {
            name: entry.getIn([
              'data',
              'sectionThree',
              'boardMemberOne',
              'name',
            ]),
            text: entry.getIn([
              'data',
              'sectionThree',
              'boardMemberOne',
              'text',
            ]),
            image: {
              image: getAsset(
                entry.getIn([
                  'data',
                  'sectionThree',
                  'boardMemberOne',
                  'image',
                  'image',
                ])
              ),
              alt: entry.getIn([
                'data',
                'sectionThree',
                'boardMemberOne',
                'image',
                'alt',
              ]),
            },
          },
          boardMemberTwo: {
            name: entry.getIn([
              'data',
              'sectionThree',
              'boardMemberTwo',
              'name',
            ]),
            text: entry.getIn([
              'data',
              'sectionThree',
              'boardMemberTwo',
              'text',
            ]),
            image: {
              image: getAsset(
                entry.getIn([
                  'data',
                  'sectionThree',
                  'boardMemberTwo',
                  'image',
                  'image',
                ])
              ),
              alt: entry.getIn([
                'data',
                'sectionThree',
                'boardMemberTwo',
                'image',
                'alt',
              ]),
            },
          },
        }}
        // sectionFour={{
        //   heading: entry.getIn(['data', 'sectionFour', 'heading']),
        //   employeeOne: widgetsFor('sectionFour', 'employeeOne').map(
        //     employee => {
        //       console.log(employee.getIn(['employeeOne']))
        //       return {
        //         name: employee.getIn(['data', 'employeeOne', 'name']),
        //         text: employee.getIn(['data', 'employeeOne', 'text']),
        //         image: {
        //           image: getAsset(
        //             employee.getIn(['data', 'employeeOne', 'image', 'image'])
        //           ),
        //           alt: employee.getIn(['data', 'employeeOne', 'image', 'alt']),
        //         },
        //       }
        //     }
        //   ),
        // }}
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
