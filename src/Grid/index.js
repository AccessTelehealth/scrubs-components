/* @flow */

import React from 'react'
import classnames from 'classnames'
import styles from './index.css'
import paddingStyles from 'traits/padding.css'
import { borderSmallBottom, borderSmallLeft } from 'traits/borders.css'
import { borderGrey } from 'traits/colours.css'


type PaddingType = 'small'|'medium'|'large'

type PaddingObjectType = {
  left?: PaddingType,
  right?: PaddingType,
  top?: PaddingType,
  bottom?: PaddingType,
}

type PropsType = {
  children?: React.Element<any>,
  cols?: 1|2|3|4|5|6|7|8|9|10|11|12,
  align?: 'top'|'middle'|'bottom'|'baseline',
  textAlign?: 'right'|'left'|'center',
  padding?: PaddingObjectType,
  borderBottom?: boolean,
  borderLeft?: boolean,
  borderRight?: boolean,
}

/** 12 column grid component for breaking up Rows */

const Grid = (props: PropsType): React.Element<any> => {
  const style = {
    width: props.cols ? `${props.cols / 12 * 100}%` : false
  }
  const align = props.align ? capitaliseFirstLetter(props.align) : 'Normal'
  const textAlign = props.textAlign ? capitaliseFirstLetter(props.textAlign) : 'Normal'
  const paddingClasses = props.padding ? getPaddingClasses(props.padding) : ''
  const gridClasses = getGridClasses(props)
  const className = `${styles[`Grid${align}${textAlign}`]} ${paddingClasses} ${gridClasses}`
  return (
    <div className={className} style={style}>
      {props.children}
    </div>
  )
}

function capitaliseFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getPaddingClasses(padding: PaddingObjectType): string {
  return Object.keys(padding).reduce((classes: string, key: string) => {
    const paddingClass = paddingStyles[`p${key.substring(0,1)}${getPaddingWidth(padding[key])}`]
    return `${classes} ${paddingClass}`
  }, '')
}

function getPaddingWidth(padding: PaddingType): number {
  switch (padding) {
  case 'small':
    return 1
  case 'medium':
    return 2
  case 'large':
    return 3
  default:
    return 2
  }
}


const getGridClasses = (props: PropsType): string => {
  return classnames(
    {
      [borderGrey]: props.borderLeft || props.borderRight || props.borderBottom,
      [borderSmallLeft]: props.borderLeft,
      [borderSmallBottom]: props.borderBottom,
    }
  )
}

export default Grid
