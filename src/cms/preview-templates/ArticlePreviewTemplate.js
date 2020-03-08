import React from 'react'
import '../../styles/pages/about.scss'

export const ArticlePreviewTemplate = ({ title, date, body }) => {
  return (
    <>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <h3>{title}</h3>
          <p className="c-green">{date}</p>
          <section dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </>
  )
}

export default ArticlePreviewTemplate
