import React from "react"
import { Link } from "gatsby"

const header = props => {
  return (
    <React.Fragment>
      <h1>
        <Link to={`/`}>{props.title}</Link>
      </h1>
    </React.Fragment>
  )
}

export default header
