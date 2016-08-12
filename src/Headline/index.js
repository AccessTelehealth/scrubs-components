/* @flow */

import React from 'react'
import Text from '..//Text'

type PropsType = {
  children: React.Element<any>
}

/** A headline for page titles */

const Headline = (props: PropsType) : React.Element<any> => {
  return (
    <Text bold tag="h1">{props.children}</Text>
  )
}

export default Headline
