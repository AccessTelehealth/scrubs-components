import React from 'react'
import Base from './Base'

const Button = ({ blue, ...props }) => {
  return (
    <Base
      tagName='button' display='inlineBlock' fontFamily='sourceSansPro'
      textColour={blue ? 'white' : 'blue'}
      backgroundColour={blue && 'blue'}
      antialiased uppercase bold spaced fontSize={3} {...props}
    />
  )
}

export default Button
