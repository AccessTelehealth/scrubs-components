/* @flow */

import React from 'react'
import styles from './index.css'
import Text from '../Text'

type PropsType = {
  children?:React.Element<any>
}

/** A heading, used to denote the start of a Section */

const Heading = (props: PropsType) : React.Element<any> => {
  return (
    <div className={styles.Heading}>
      <Text tag="h3" blue>
        {props.children}
      </Text>
    </div>
  )
}

export default Heading
