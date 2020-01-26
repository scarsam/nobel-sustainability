import React from 'react'
import ContactPageTemplate from '../preview-templates/ContactPagePreviewTemplate'
import PropTypes from 'prop-types'
import PreviewLayout from '../preview-components/PreviewLayout'

const ContactPagePreview = ({ entry }) => {
  return (
    <PreviewLayout>
      <ContactPageTemplate title={entry.getIn(['data', 'title'])} />
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
