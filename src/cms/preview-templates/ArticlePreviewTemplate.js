import React from 'react'
import '../../styles/pages/about.scss'
import ReactMarkdown from 'react-markdown'

export const ArticlePreviewTemplate = ({ title, date, text }) => {
  return (
    <>
      <div className="container">
        <div className="col-md-10">
          <h3>{title}</h3>

          <p className="c-green">{date && date.toString()}</p>
          <div>
            <ReactMarkdown source={text} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePreviewTemplate
