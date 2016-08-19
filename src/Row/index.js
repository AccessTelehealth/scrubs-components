/* @flow */

import React from 'react'
import classnames from 'classnames'
import { overflowNone } from 'traits/layout.css'


type PropsType = {
  children?: React.Element<any>,
}

/** A wrapper for laying out items justified */

const Row = (props: PropsType) : React.Element<any> => {
  return (
    <div className={rowClasses()}>
      {props.children}
    </div>
  )
}

const rowClasses = (): string => {
  return classnames( overflowNone )
}

export default Row
