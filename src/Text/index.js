/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  small?: bool,
  bold?: bool,
  large?: bool,
  blue?: bool,
  white?: bool,
  greyDark?: bool,
  red?: bool,
  italicised?: bool,
  greyDarkOnSiblingInputFocus?: bool,
  tag?: 'h1' | 'h2' | 'h3'
}

/** A wrapping component for all Text */

const Text = (props: PropsType) => {
  const {
    children, small, bold, large, blue, white, italicised, greyDark, red,
    tag, greyDarkOnSiblingInputFocus,
  } = props
  const size = getClassName([['Small', small,], ['Large', large,],], 'Medium')
  const weight = getClassName([['Bold', bold,],], 'Regular')
  const colour = getClassName([['Blue', blue,], ['White', white,], ['GreyDark', greyDark,], ['Red', red,],], 'BlueDark')
  const style = getClassName([['Italicised', italicised,],], 'Normal')
  const variants = getClassName([['GreyDarkOnSiblingInputFocus', greyDarkOnSiblingInputFocus,]], '')
  const className = styles[`Text${size}${weight}${style}${colour}${variants}`]
  const Tag = tag ? tag : 'span'
  return (
    <Tag className={className}>
      {children}
    </Tag>
  )
}

const getClassName = (variants, fallback) => {
  let textClassName = variants.reduce((className, variant) => {
    const variantClass = variant[0]
    const shouldAppend = !!variant[1]
    return shouldAppend ? className + variantClass : className
  }, '')
  return textClassName.length ? textClassName : fallback
}

export default Text
