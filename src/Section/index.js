/* @flow */

import React from 'react'
import classnames from 'classnames'
import { pb2 } from 'traits/padding.css'


type PropsType = {
  children?: React.Element<any>,
}

/** Sections with bottom spacing to break up information */

const Section = (props: PropsType) : React.Element<any> => {
  return (
    <div className={sectionClasses()}>
      {props.children}
    </div>
  )
}

const sectionClasses = (): string => {
  return classnames(pb2)
}

export default Section
