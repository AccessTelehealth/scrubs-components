import React from 'react'
import Base from './Base'

const Input = (props) => {
  return (
    <Base
      tagName='input' textColour='blueDark' border={1} borderColour='grey'
      padding={2} fontFamily='sourceSansPro' rounded fontSize={3} width='fill'
      antialiased lineHeight={3} backgroundColour='grey' {...props}
    />
  )
}

export default Input
