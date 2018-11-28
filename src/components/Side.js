import React from 'react'
import Order from './Order'

const Side = (props) => {
  return (
    <div>
      { props.sides.join(", ") }
    </div>
  )
}

export default Side
