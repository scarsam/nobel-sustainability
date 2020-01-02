import React from "react"

const footer = () => {
  return (
    <React.Fragment>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </React.Fragment>
  )
}

export default footer
