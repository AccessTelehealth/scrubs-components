import React from 'react'
import Icon from './Icon'

const TopBar = ({ icon, ...props }) => {
  return (
    <Icon position='absolute' style={{height: '3.5rem', width: '3.5rem', left: 0}}
      icon={icon} fillColour='white' padding={2} {...props} />
  )
}

export default TopBar
