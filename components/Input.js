import React from 'react'
import Base from './Base'

const Input = (props) => {
  return (
    <Base
      tagName='input' textColour='greyBlue' borderColour='grey' border={1}
      padding={2} fontFamily='sans' borderRadius='rounded' fontSize={5} width='fill'
      antialiased lineHeight={3} backgroundColour='grey' {...props}
    />
  )
}

export default Input
