import React from 'react'
import Grid from './Grid'

const Tab = (props) => {
  return (
    <Grid borderGrey borderTop={1} borderBottom={1}
      {...props}
    />
  )
}

export default Tab
