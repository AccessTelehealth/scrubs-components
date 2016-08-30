import React from 'react'
import Text from './Text'

const Label = (props) => {
  return (
    <Text
      tagName='label' marginBottom={2} display='block' uppercase spaced bold
      fontSize={5} textColour='greyDark' {...props}
    />
  )
}

export default Label
