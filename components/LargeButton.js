import React from 'react'
import Button from './Button'

const LargeButton = (props) => {
  return (
    <Button
      fontSize={3} paddingY={2} paddingX={4} border={2}
      borderRadius='circle' lineHeight={3} {...props} />
  )
}

export default LargeButton
