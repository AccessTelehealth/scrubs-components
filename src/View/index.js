/* @flow */

import React from 'react'
import classnames from 'classnames'
import { fillHeight } from 'traits/layout.css'
import { ptBar } from 'traits/padding.css'




type PropsType = {
  children?: React.Element<any>,
  padTop?: bool
}

/** Wrapper for all routes or unique views */

const View = (props: PropsType) => {
  const { children } = props
  return (
    <div className={viewClasses(props)}>
      {children}
    </div>
  )
}

const viewClasses = (props: PropsType): string => {
  return classnames(
    fillHeight, {
      [ptBar]: props.padTop,
    }
  )
}

export default View
