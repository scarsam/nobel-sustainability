import React from 'react'
import PreviewHeader from '../preview-components/PreviewHeader'
import PreviewFooter from '../preview-components/PreviewFooter'
import '../../styles/nobel-sustainability.scss'

const PreviewLayout = ({ children }) => {
  return (
    <>
      <PreviewHeader />
      <main>{children}</main>
      <PreviewFooter />
    </>
  )
}

export default PreviewLayout
