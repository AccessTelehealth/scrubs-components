import React from 'react'
import Base from './Base'

const Text = (props) => {
  return (
    <Base
      sans textBlueDark antialiased fontSize={4}
      lineHeight={1} {...props}
    />
  )
}

export default Text
