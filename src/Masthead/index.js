/* @flow */

import React from 'react'
import { py3 } from 'traits/padding.css'
import { mb3 } from 'traits/margin.css'
import { center } from 'traits/typography.css'
import classnames from 'classnames'

type PropsType = {
  children?:React.Element<any>,
}

/** Masthead for padding that should sit at the top of a page */

const Masthead = (props: PropsType) : React.Element<any> => {
  return (
    <div className={mastheadClasses()}>
      {props.children}
    </div>
  )
}

const mastheadClasses = (): string => {
  return classnames(py3, mb3, center)
}

export default Masthead
