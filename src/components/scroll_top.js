import React, { useState, useEffect } from "react"
import arrowIcon from "../images/double-arrow-up.svg"

const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisable(true)
    } else {
      setIsVisable(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="scroll-top fixed">
      {isVisable && (
        <div onClick={() => scrollToTop()}>
          <img src={arrowIcon} alt="" />
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
