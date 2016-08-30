import React from 'react'
import Base from './Base'

const Grid = (props) => {
  return (
    <Base
      display='inlineBlock' verticalAlign='middle' boxSizing='borderBox'
      {...props}
    />
  )
}

export default Grid
