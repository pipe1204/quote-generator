import React from 'react'

const Button = ({colorPicked, pickAgain}) => {
  return (
    <button onClick={pickAgain} style={{backgroundColor: colorPicked}}>Next</button>
  )
}

export default Button
