import React from 'react'
import ArticlePreviewTemplate from '../preview-templates/ArticlePreviewTemplate'
import PropTypes from 'prop-types'

const ArticlePreview = ({ entry }) => {
  return (
    <ArticlePreviewTemplate
      title={entry.getIn(['data', 'title'])}
      text={entry.getIn(['data', 'body'])}
    />
  )
}

export default ArticlePreview

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}
