import React from 'react'
import Text from './Text'

const Label = (props) => {
  return (
    <Text
      tagName='label' marginBottom={2} block uppercase spaced bold
      fontSize={5} textGreyDark {...props}
    />
  )
}

export default Label
