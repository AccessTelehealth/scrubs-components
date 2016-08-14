/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
}

/** List for items */

const List = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.List}>
      {props.children}
    </div>
  )
}

export default List
