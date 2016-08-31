import React from 'react'
import Base from './Base'

const TopBar = (props) => {
  return (
    <Base style={{paddingLeft: '3.5rem', paddingRight: '3.5rem'}} textAlign='center' display='inline' style={{height: '3.5rem'}}>
      <Base display='table' style={{height: '3.5rem'}} width='fill'>
        <Base display='tableCell' verticalAlign='middle' {...props} />
      </Base>
    </Base>
  )
}

export default TopBar
