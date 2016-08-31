import React from 'react'
import Button from './Button'

const SmallButton = (props) => {
  return (
    <Button
      fontSize={4} paddingX={3} paddingY={2} border={1} circle lineHeight={3}
      {...props}
    />
  )
}

export default SmallButton
