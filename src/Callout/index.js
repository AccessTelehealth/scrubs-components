/* @flow */

import React from 'react'
import classnames from 'classnames'
import { border, rounded } from 'traits/borders.css'
import { p3 } from 'traits/padding.css'
import { mb3 } from 'traits/margin.css'
import { borderGrey } from 'traits/colours.css'

type PropsType = {
  children?: React.Element<any>,
}

/** A box with spacing for user attention */

const Callout = (props: PropsType): React.Element<any> => {
  return (
    <div className={calloutClasses()}>
      {props.children}
    </div>
  )
}

const calloutClasses = (): string => {
  return classnames(border, rounded, p3, mb3, borderGrey)
}

export default Callout
