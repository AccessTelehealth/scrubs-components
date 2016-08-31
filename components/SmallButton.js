import React from 'react'
import Button from './Button'

const SmallButton = (props) => {
  return (
    <Button
      fontSize={5} paddingX={2} paddingY={1} border={1} borderRadius='circle' lineHeight={1}
      {...props}
    />
  )
}

export default SmallButton
