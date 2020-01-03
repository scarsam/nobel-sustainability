import React from "react"
import PropTypes from "prop-types"

const IntroText = ({ headline, subheading }) => {
  return (
    <>
      <h1>{headline}</h1>
      <p>{subheading}</p>
    </>
  )
}

IntroText.propTypes = {
  headline: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
}

export default IntroText
