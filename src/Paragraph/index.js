/* @flow */

import React from 'react'
import Text from '../Text'
import classnames from 'classnames'
import { mb2 } from 'traits/margin.css'
import { center } from 'traits/typography.css'


type PropsType = {
  children?: React.Element<any>,
  centered?: bool
}

/** Wrapper for margin bottom and default text styles */

const Paragraph = (props: PropsType) : React.Element<any> => {
  const { children } = props
  return (
    <p className={paragraphClasses(props)}>
      <Text>{children}</Text>
    </p>
  )
}

const paragraphClasses = (props: PropsType): string => {
  return classnames(
      mb2, {
        [center]: props.centered,
      }
  )
}

export default Paragraph
