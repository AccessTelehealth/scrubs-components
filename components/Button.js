import React from 'react'
import Base from './Base'

const Button = ({ ...props }) => {
  return (
    <Base
      tagName='button' display='inlineBlock' fontFamily='sans' antialiased
      fontWeight='bold' fontSize={3} borderRadius='circle' {...props}
    />
  )
}

export default Button
