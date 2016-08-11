/* @flow */

import React from 'react'
import { Text, } from 'scrubs-components'

type Value = string

type PropsType = {
  text: string,
  error?: bool,
}

/** Hint for below form inputs */

const Hint = (props: PropsType): React.Element<any> => {
  const { text, error, } = props
  if (error) {
    return <Text small red greyDarkOnSiblingInputFocus>{text}</Text>
  } else {
    return <Text small greyDark>{text}</Text>
  }
}

export default Hint
