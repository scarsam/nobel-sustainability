import React from 'react'
import ImageOffset from '../components/image_offset'
import ReactMarkdown from 'react-markdown'

const HistoryMidBreakpoint = ({ data }) => {
  return (
    <>
      <div className="row padding-bottom-60px">
        <div className="col-7 col-md-3 padding-bottom-30px padding-bottom-md-none">
          <ImageOffset
            src={data.columnOne.image.image.childImageSharp.fluid}
            backgroundColor={'bg-water'}
          />
        </div>
        <div className="col-md-6">
          <h2>{data.columnOne.heading}</h2>
          <ReactMarkdown source={data.columnOne.text} />
        </div>
      </div>
      <div className="row">
        <div className="col-7 col-md-3 offset-md-2 padding-bottom-30px padding-bottom-md-none">
          <ImageOffset
            src={data.columnTwo.image.image.childImageSharp.fluid}
            backgroundColor={'bg-green'}
          />
        </div>
        <div className="col-md-7 ">
          <h2>{data.columnTwo.heading}</h2>
          <ReactMarkdown source={data.columnTwo.text} />
        </div>
      </div>
    </>
  )
}

export default HistoryMidBreakpoint
