/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children: React.Element<any>,
}

/** Masthead for padding that should sit at the top of a page */

const Masthead = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Masthead}>
      {props.children}
    </div>
  )
}

export default Masthead
