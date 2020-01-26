import React from 'react'
import IntroText from '../../components/intro_text'

const ContactPagePreviewTemplate = ({ title }) => {
  return (
    <>
      <IntroText headline={title} subheading={title} />
    </>
  )
}

export default ContactPagePreviewTemplate
