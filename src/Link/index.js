/* @flow */

import React from 'react'
import { inline } from 'traits/layout.css'
import classnames from 'classnames'

type PropsType = {
  children?: React.Element<any>,
  to?: string,
  onClick?: () => void,
}

/** Link wrapper for navigational links */

const Link = (props: PropsType) : React.Element<any> => {
  const { children, to, onClick } = props
  return (
    <a href={to && to} onClick={onClick && onClick} className={linkClasses()}>
      {children}
    </a>
  )
}

const linkClasses = (): string => {
  return classnames( inline )
}

export default Link
