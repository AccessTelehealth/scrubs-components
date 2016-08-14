/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  equal?: bool,
  right?: bool,
  centered?: bool,
}

/** A column to be used with a Row component */

const Column = (props: PropsType) : React.Element<any> => {
  const styleName = getClassName(props)
  return (
    <div className={styles[styleName]}>
      {props.children}
    </div>
  )
}

const getClassName = (props: PropsType): string => {
  const { equal, centered, right, } = props
  let className = 'Column'
  className = equal ? className + 'Equal' : className
  className = centered ? className + 'Centered' : right ? className + 'Right' : className
  return className
}

export default Column
