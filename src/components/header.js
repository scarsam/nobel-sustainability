import React from "react"
import { Link } from "gatsby"

const header = props => {
  return (
    <header>
      <h1>
        <Link to={`/`}>{props.title}</Link>
      </h1>
    </header>
  )
}

export default header
