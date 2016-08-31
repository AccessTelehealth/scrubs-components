import React from 'react'
import LargeButton from './LargeButton'

const LargeBlueButton = (props) => {
  return (
    <LargeButton
       borderColour='blue' textColour='white' backgroundColour='blue'
       {...props}
    />
  )
}

export default LargeBlueButton
