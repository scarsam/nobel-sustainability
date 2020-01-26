import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, type }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  // useEffect(() => {
  //   resolveImage()
  // }, [])

  // async function resolveImage() {
  //   let response = await imageInfo.image
  //   console.log(response)
  // }

  if (type === 'fixed') {
    if (!!image && !!image.childImageSharp) {
      return <Img fixed={image.childImageSharp.fixed} alt={alt} />
    }

    if (!!childImageSharp) {
      return <Img fixed={childImageSharp.fixed} alt={alt} />
    }
  }

  if (type === 'fluid') {
    if (!!image && !!image.childImageSharp) {
      return <Img fluid={image.childImageSharp.fluid} alt={alt} />
    }

    if (!!childImageSharp) {
      return <Img fluid={childImageSharp.fluid} alt={alt} />
    }
  }

  if (!!image && typeof image === 'string') return <img src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
