/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children: React.Element<any>,
}

/** Sections with bottom spacing to break up information */

const Section = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Section}>
      {props.children}
    </div>
  )
}

export default Section
