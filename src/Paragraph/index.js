/* @flow */

import React from 'react'
import Text from '../Text'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  centered?: bool
}

/** Wrapper for margin bottom and default text styles */

const Paragraph = (props: PropsType) : React.Element<any> => {
  const { children, centered, } = props
  const className = centered ? styles.ParagraphCentered : styles.Paragraph
  return (
    <p className={className}>
      <Text>{children}</Text>
    </p>
  )
}

export default Paragraph
