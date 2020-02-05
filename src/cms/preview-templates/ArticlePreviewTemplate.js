import React from 'react'
import '../../styles/pages/about.scss'
import ReactMarkdown from 'react-markdown'

export const ArticlePreviewTemplate = ({ title, date, text }) => {
  return (
    <>
      <div className="container">
        <div className="col-md-10">
          <h3>{title}</h3>
          /// TODO: Formatera datum med moment.js
          <p className="c-green">{date.toString()}</p>
          <div>
            <ReactMarkdown source={text} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePreviewTemplate
