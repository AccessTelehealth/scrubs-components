/* @flow */

import React from 'react'
import Text from '../Text'

type PropsType = {
  children?: React.Element<any>,
}

/** A byline to be used beneath a headline */

const Byline = (props: PropsType) : React.Element<any> => {
  return <Text colour={'blue'} tag="h2">{props.children}</Text>
}

export default Byline
