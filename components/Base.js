import React from 'react'
import classNames from 'classnames'
import layout from '../styles/layout'
import margins from '../styles/margins'
import paddings from '../styles/paddings'
import typography from '../styles/typography'
import colours from '../styles/colours'
import borders from '../styles/borders'

const Base = (props: PropsType): React.Element<*> => {
  const {
    component, tagName, size, style,
    verticalAlign, display, overflow, clearfix, float, width, height, boxSizing,
    margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    fontSize, lineHeight, fontFamily, textDecoration, textAlign, bold, regular,
    italicised, uppercase, antialiased, truncate, underline, spaced,
    textColour, backgroundColour, borderColour, fillColour,
    border, borderTop, borderBottom, borderLeft, borderRight,
    rounded, roundedTop, roundedBottom, roundedLeft, roundedRight, circle,
    ...componentProps,
  } = props
  const Component = component || tagName || 'div'
  const className = classNames(
    layout({
      verticalAlign, display, overflow, clearfix, float, width, height, boxSizing,
    }),
    margins({
      margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    }),
    paddings({
      padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    }),
    typography({
      fontSize, lineHeight, fontFamily, textDecoration, textAlign, bold, regular,
      italicised, uppercase, antialiased, truncate, underline, spaced,
    }),
    colours({
      textColour, backgroundColour, borderColour, fillColour,
    }),
    borders({
      border, borderTop, borderBottom, borderLeft, borderRight,
      rounded, roundedTop, roundedBottom, roundedLeft, roundedRight, circle,
    }),
  )
  const styles = {
    width: `${size * 100}%`,
    ...styles,
  }
  return (
    <Component className={className} style={styles} {...componentProps} />
  )
}
export default Base
