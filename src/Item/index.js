/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  border?: boolean
}

/** Item component for breaking up lists */

const Item = (props: PropsType) : React.Element<any> => {
  const className = props.border ? styles.ItemBorder : styles.Item
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default Item
