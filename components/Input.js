import React from 'react'
import Base from './Base'

const Input = (props) => {
  return (
    <Base
      tagName='input' textBlueDark borderGrey border={1}
      padding={2} sourceSansPro rounded fontSize={3} fillWidth
      antialiased lineHeight={3} backgroundGrey {...props}
    />
  )
}

export default Input
