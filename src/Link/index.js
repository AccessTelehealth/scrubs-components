/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  to?: string,
  onClick?: () => void,
}

/** Link wrapper for navigational links */

const Link = (props: PropsType) : React.Element<any> => {
  const { children, to, onClick, } = props
  return (
    <a href={to && to} onClick={onClick && onClick} className={styles.Link}>
      {children}
    </a>
  )
}

export default Link
