/* @flow */

import React from 'react'
import classnames from 'classnames'
import { mb1 } from 'traits/margin.css'
import { block } from 'traits/layout.css'
import { Text } from '../'

/** Label wrapper for form fields */

type PropsType = {
  text: string
}

const Label = (props: PropsType): React.Element<any> => {
  const { text } = props
  return (
    <label className={labelClasses()}>
      <Text size='h5' bold uppercase colour='greyDark'>{text}</Text>
    </label>
  )
}

const labelClasses = (): string => {
  return classnames(mb1, block)
}

export default Label
