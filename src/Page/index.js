/* @flow */

import React from 'react'
import classnames from 'classnames'
import { p3 } from 'traits/padding.css'

type PropsType = {
  children?: React.Element<any>,
}

/** Default padding and layout for page sections */

const Page = (props: PropsType) : React.Element<any> => {
  return (
    <div className={pageClasses()}>
      {props.children}
    </div>
  )
}

const pageClasses = (): string => {
  return classnames(p3)
}

export default Page
