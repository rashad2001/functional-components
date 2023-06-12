import React from 'react'
import './style.css'

function Stylesheet(props) {

    let isPrimary = props.primary ? "primary" : "notPrimary"
  return (
    <div>
      <h1 className = {`${isPrimary} font-xl`}>HI bro</h1>
    </div>
  )
}

export default Stylesheet
