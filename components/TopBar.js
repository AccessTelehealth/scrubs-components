import React from 'react'
import Base from './Base'

const TopBar = (props) => {
  return (
    <Base
      style={{height: '3.5rem'}} backgroundColour='blue'
      textAlign='center' position='relative' {...props }
    />
  )
}

export default TopBar
