import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const PreviewImageOffset = ({ imageInfo, backgroundColor, text }) => {
  const [path, setPath] = useState()

  useEffect(() => {
    resolveImage()
  }, [])

  async function resolveImage() {
    let response = await imageInfo.image
    setPath(response.url)
  }
  return (
    <div className="relative offset-image-wrapper">
      <img className="z-index-2 img-fluid" src={path} />
      {text && (
        <p className="offset-image-text absolute z-index-3 c-white">{text}</p>
      )}
      {/* <div className={`absolute z-index-1 offset-bg ${backgroundColor}`} /> */}
    </div>
  )
}

PreviewImageOffset.propTypes = {
  src: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default PreviewImageOffset
