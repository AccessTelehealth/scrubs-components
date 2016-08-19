/* @flow */

import React from 'react'
import { Text, } from '../'

type Value = string

type PropsType = {
  text: string,
  error?: bool,
}

/** Hint for below form inputs */

const Hint = (props: PropsType): React.Element<any> => {
  const { text, error, } = props
  if (error) {
    return <Text size='small' colour='red' inputFocusColour>{text}</Text>
  } else {
    return <Text size='small' colour='greyDark'>{text}</Text>
  }
}

export default Hint
