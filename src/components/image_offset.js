import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const ImageOffset = ({ src, backgroundColor, text }) => {
  return (
    <div className="relative offset-image-wrapper">
      <Img className="z-index-2" fluid={src} />
      {text && (
        <p className="offset-image-text absolute z-index-3 c-white">{text}</p>
      )}
      <div className={`absolute z-index-1 offset-bg ${backgroundColor}`} />
    </div>
  )
}

ImageOffset.propTypes = {
  src: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default ImageOffset
