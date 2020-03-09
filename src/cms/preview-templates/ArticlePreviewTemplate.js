import React from 'react'
import '../../styles/pages/about.scss'
import ReactMarkdown from 'react-markdown'

export const ArticlePreviewTemplate = ({ title, text }) => {
  return (
    <>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <h3>{title}</h3>
          <ReactMarkdown source={text} />
          <section dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </>
  )
}

export default ArticlePreviewTemplate
