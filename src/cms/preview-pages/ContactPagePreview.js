import React from 'react'
import ContactPageTemplate from '../preview-templates/ContactPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const ContactPagePreview = ({ entry, widgetsFor }) => {
  return (
    <PreviewLayout>
      <ContactPageTemplate
        title={entry.getIn(['data', 'title'])}
        offices={widgetsFor('offices').map(office => ({
          name: office.getIn(['data', 'name']),
          street: office.getIn(['data', 'street']),
          zip: office.getIn(['data', 'zip']),
          city: office.getIn(['data', 'city']),
          country: office.getIn(['data', 'country']),
          lat: office.getIn(['data', 'lat']),
          long: office.getIn(['data', 'long']),
        }))}
        emails={widgetsFor('emails').map(email => ({
          name: email.getIn(['data', 'name']),
          email: email.getIn(['data', 'email']),
          phone: email.getIn(['data', 'phone']),
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
