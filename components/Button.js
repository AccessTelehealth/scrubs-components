import React from 'react'
import Base from './Base'

const Button = ({ ...props }) => {
  return (
    <Base
      tagName='button' inlineBlock sans antialiased
      uppercase bold spaced fontSize={3} {...props}
    />
  )
}

export default Button