import React from 'react'
import ContactPageTemplate from '../preview-templates/ContactPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const ContactPagePreview = ({ entry }) => {
  return (
    <PreviewLayout>
      <ContactPageTemplate
        title={entry.getIn(['data', 'title'])}
        officeOne={{
          officeOne: {
            name: entry.getIn(['data', 'officeOne', 'name']),
            street: entry.getIn(['data', 'officeOne', 'street']),
            zip: entry.getIn(['data', 'officeOne', 'zip']),
            city: entry.getIn(['data', 'officeOne', 'city']),
            city: entry.getIn(['data', 'officeOne', 'city']),
            country: entry.getIn(['data', 'officeOne', 'country']),
          },
        }}
        officeTwo={{
          officeTwo: {
            name: entry.getIn(['data', 'officeTwo', 'name']),
            street: entry.getIn(['data', 'officeTwo', 'street']),
            zip: entry.getIn(['data', 'officeTwo', 'zip']),
            city: entry.getIn(['data', 'officeTwo', 'city']),
            city: entry.getIn(['data', 'officeTwo', 'city']),
            country: entry.getIn(['data', 'officeTwo', 'country']),
          },
        }}
        emails={entry.getIn(['data', 'emails'])}
      />
    </PreviewLayout>
  )
}

export default ContactPagePreview

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
