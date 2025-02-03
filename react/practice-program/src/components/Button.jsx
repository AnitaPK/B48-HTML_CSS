import React from 'react'

const Button = (props) => {
  return (
    <button style={{fontSize:'20px', backgroundColor:"red"}}>{props.buttonValue}</button>
  )
}

export default Button
