/* @flow */

import React from 'react'
import Grid from '../Grid'
import styles from './index.css'

type PropsType = {
  children?:Array<React.Element<any>> | React.Element<any>,
  fixed?: bool
}

/** Optionally fixed topbar for orientation and navigation */

const Topbar = (props: PropsType) : React.Element<any> => {
  const { fixed, children, } = props
  const className = fixed ? styles.TopbarFixed : styles.Topbar
  const contents = Array.isArray(children)
    ? renderChildren(children)
    : <Grid cols={12} align='middle' textAlign='center'>{children}</Grid>
  return (
    <div className={className}>
      {contents}
    </div>
  )
}

const renderChildren = (children) : React.Element<any> | false => {
  return (
    <div>
      <Grid cols={3} align='middle'>{children[0]}</Grid>
      <Grid cols={6} align='middle' textAlign='center'>{children[1]}</Grid>
      <Grid cols={3} align='middle' textAlign='right'>{children.length === 3 && children[2]}</Grid>
    </div>
  )
}

export default Topbar
