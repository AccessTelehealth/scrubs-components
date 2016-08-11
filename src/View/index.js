/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children: React.Element<any>,
  padTop?: bool
}

/** Wrapper for all routes or unique views */

const View = (props: PropsType) => {
  const { children, padTop, } = props
  const className = padTop ? styles.ViewPadTop : styles.View
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default View
