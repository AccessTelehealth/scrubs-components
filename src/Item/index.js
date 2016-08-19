/* @flow */

import React from 'react'
import classnames from 'classnames'
import { py2 } from 'traits/padding.css'
import { borderTop } from 'traits/borders.css'
import { borderGrey } from 'traits/colours.css'

type PropsType = {
  children?:React.Element<any>,
  border?: boolean
}

/** Item component for breaking up lists */

const Item = (props: PropsType) : React.Element<any> => {
  return (
    <div className={itemClasses(props)}>
      {props.children}
    </div>
  )
}

const itemClasses = (props: PropsType): string => {
  return classnames(
    py2, {
      [borderTop]: props.border,
      [borderGrey]: props.border,
    }
  )
}

export default Item
