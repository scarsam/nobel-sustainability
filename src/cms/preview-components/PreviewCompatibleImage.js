import React, { useEffect, useState } from 'react'

const PreviewCompatibleImage = ({ imageInfo, image, className = null }) => {
  if (!image) image = imageInfo.image

  const [path, setPath] = useState()

  useEffect(() => {
    resolveImage()
  }, [])

  async function resolveImage() {
    const response = await image
    setPath(response.url)
  }

  if (path) return <img class={className} src={path} alt={''} />

  return null
}

export default PreviewCompatibleImage
