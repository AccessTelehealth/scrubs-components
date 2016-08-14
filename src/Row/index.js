/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
}

/** A wrapper for laying out items justified */

const Row = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Row}>
      {props.children}
    </div>
  )
}

export default Row
