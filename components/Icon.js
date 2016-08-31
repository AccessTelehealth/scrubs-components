import React from 'react'
import Base from './Base'

const Icon = ({ icon, ...props }) => {
  return (
    <Base component={icon} {...props} />
  )
}

export default Icon
