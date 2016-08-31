import React from 'react'
import Base from './Base'

const Button = ({ ...props }) => {
  return (
    <Base
      tagName='button' display='inlineBlock' sans antialiased
      uppercase fontWeight='bold' spaced fontSize={3} {...props}
    />
  )
}

export default Button
