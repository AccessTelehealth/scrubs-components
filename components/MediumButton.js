import React from 'react'
import LargeButton from './LargeButton'

const MediumButton = (props) => {
  return (
    <LargeButton
      fontSize={4} paddingX={3} paddingY={2} border={1} lineHeight={3}
      {...props}
    />
  )
}

export default MediumButton
