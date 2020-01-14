import React from "react"
import PropTypes from "prop-types"

const IntroText = ({ headline, subheading }) => {
  return (
    <div className="container padding-bottom-30px">
      <h1>{headline}</h1>
      <p className="intro-text">{subheading}</p>
    </div>
  )
}

IntroText.propTypes = {
  headline: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
}

export default IntroText
