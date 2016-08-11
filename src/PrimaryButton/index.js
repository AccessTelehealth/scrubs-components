/* @flow */

import React from 'react'
import Text from 'scrubs-components/Text'
import styles from './index.css'

type PropsType = {
  children: React.Element<any>,
}

/** A full width button for primary actions */

const PrimaryButton = (props: PropsType) : React.Element<any> => {
  return (
    <button className={styles.PrimaryButton}>
      <Text bold white>{props.children}</Text>
    </button>
  )
}

export default PrimaryButton
