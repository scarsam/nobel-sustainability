import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../pages/contact'

const ContactPagePreview = ({ entry, widgetFor }) => {
  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
