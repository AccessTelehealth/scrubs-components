import React from 'react'
import Base from './Base'

const Grid = (props) => {
  const style = {
    ...props.style,
    width: `${props.width * 100}%`,
  }
  return (
    <Base
      display='inlineBlock' verticalAlign='middle' boxSizing='borderBox'
      {...props} style={style}
    />
  )
}

export default Grid
