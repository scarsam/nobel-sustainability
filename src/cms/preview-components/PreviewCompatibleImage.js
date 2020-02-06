import React, { useEffect, useState } from 'react'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', image } = imageInfo
  const [path, setPath] = useState()

  useEffect(() => {
    resolveImage()
  }, [])

  async function resolveImage() {
    let response = await image
    setPath(response.url)
  }

  if (path) return <img src={path} alt={alt} />

  return null
}

export default PreviewCompatibleImage
