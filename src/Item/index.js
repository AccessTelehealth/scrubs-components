/* @flow */

import React from 'react'
import classnames from 'classnames'
import { py2 } from 'traits/padding.css'
import { borderSmallTop, borderSmallBottom } from 'traits/borders.css'
import { borderGrey } from 'traits/colours.css'


type PropsType = {
  children?: React.Element<any>,
  borderTop?: boolean,
  borderBottom?: boolean
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
      [borderSmallBottom]: props.borderBottom,
      [borderSmallTop]: props.borderTop,
      [borderGrey]: props.borderTop || props.borderBottom,
    }
  )
}

export default Item
