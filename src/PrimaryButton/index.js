/* @flow */

import React from 'react'
import Text from '../Text'
import classnames from 'classnames'
import { fillWidth } from 'traits/layout.css'
import { bgBlue, borderBlueDark } from 'traits/colours.css'
import { rounded, borderSmallBottom } from 'traits/borders.css'
import { p3 } from 'traits/padding.css'
import { mt3 } from 'traits/margin.css'

type PropsType = {
  children?: React.Element<any>,
}

/** A full width button for primary actions */

const PrimaryButton = (props: PropsType) : React.Element<any> => {
  return (
    <button className={primaryButtonClasses(props)}>
      <Text bold white>{props.children}</Text>
    </button>
  )
}

const primaryButtonClasses = (): string => {
  return classnames(
      fillWidth, bgBlue, borderBlueDark,
      rounded, borderSmallBottom, p3, mt3
  )
}

export default PrimaryButton
