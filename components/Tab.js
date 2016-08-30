import React from 'react'
import Grid from './Grid'

const Tab = (props) => {
  return (
    <Grid
      width={1/3} borderColour='grey' borderTop={1} borderBottom={1}
      {...props}
    />
  )
}

export default Tab
