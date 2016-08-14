/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
}

/** Item component for breaking up lists */

const Item = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Item}>
      {props.children}
    </div>
  )
}

export default Item
