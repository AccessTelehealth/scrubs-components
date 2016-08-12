/* @flow */

import React from 'react'
import Row from '..//Row'
import Column from '..//Column'
import styles from './index.css'

type PropsType = {
  children: Array<React.Element<any>> | React.Element<any>,
  fixed?: bool
}

/** Optionally fixed topbar for orientation and navigation */

const Topbar = (props: PropsType) : React.Element<any> => {
  const { fixed, children, } = props
  const className = fixed ? styles.TopbarFixed : styles.Topbar
  const contents = Array.isArray(children) ? renderChildren(children) : children
  return (
    <div className={className}>
      {contents}
    </div>
  )
}

const renderChildren = (children) : React.Element<any> | false => {
  switch (children.length) {
  case 2:
    return (
        <Row>
          <Column equal>{children[0]}</Column>
          <Column equal centered>{children[1]}</Column>
          <Column equal right></Column>
        </Row>
      )
  case 3:
    return (
        <Row>
          <Column equal>{children[0]}</Column>
          <Column equal centered>{children[1]}</Column>
          <Column equal right>{children[2]}</Column>
        </Row>
      )
  default:
    return false
  }
}

export default Topbar
