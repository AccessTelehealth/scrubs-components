/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
}

/** Default padding and layout for page sections */

const Page = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Page}>
      {props.children}
    </div>
  )
}

export default Page
