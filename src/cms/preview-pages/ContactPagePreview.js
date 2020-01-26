import React from 'react'
import ContactPageTemplate from '../preview-templates/ContactPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const ContactPagePreview = ({ entry, widgetsFor }) => {
  return (
    <PreviewLayout>
      <ContactPageTemplate
        title={entry.getIn(['data', 'title'])}
        officeOne={{
          name: entry.getIn(['data', 'officeOne', 'name']),
          street: entry.getIn(['data', 'officeOne', 'street']),
          zip: entry.getIn(['data', 'officeOne', 'zip']),
          city: entry.getIn(['data', 'officeOne', 'city']),
          country: entry.getIn(['data', 'officeOne', 'country']),
        }}
        officeTwo={{
          name: entry.getIn(['data', 'officeTwo', 'name']),
          street: entry.getIn(['data', 'officeTwo', 'street']),
          zip: entry.getIn(['data', 'officeTwo', 'zip']),
          city: entry.getIn(['data', 'officeTwo', 'city']),
          country: entry.getIn(['data', 'officeTwo', 'country']),
        }}
        emails={widgetsFor('emails').map(email => ({
          name: email.getIn(['data', 'name']),
          email: email.getIn(['data', 'email']),
        }))}
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
