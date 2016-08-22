/* @flow */

import React from 'react'
import { my1 } from 'traits/margin.css'
import classnames from 'classnames'

type PropsType = {
  children?: React.Element<any>,
}

/** List for items */

const List = (props: PropsType) : React.Element<any> => {
  return (
    <div className={listClasses()}>
      {props.children}
    </div>
  )
}

const listClasses = (): string => {
  return classnames(my1)
}

export default List
