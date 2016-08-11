/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children: React.Element<any>,
}

/** A box with spacing for user attention */

const Callout = (props: PropsType): React.Element<any> => {
  return (
    <div className={styles.Callout}>
      {props.children}
    </div>
  )
}

export default Callout
