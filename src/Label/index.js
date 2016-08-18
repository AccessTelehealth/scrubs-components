/* @flow */

import React from 'react'
import styles from './index.css'
import { Text } from '../'

/** Label wrapper for form fields */

type PropsType = {
  text: string
}

const Label = (props: PropsType): React.Element<any> => {
  const { text } = props
  return (
    <label className={styles.Label}>
      <Text small bold>{text}</Text>
    </label>
  )
}

export default Label
