/* @flow */

import React from 'react'
import { Text } from '../'

type PropsType = {
  children: React.Element<any>,
}

/** Styles for titles in topbars */

const Title = (props: PropsType) => {
  return (
    <Text bold small tag="h1">
      {props.children}
    </Text>
  )
}

export default Title
