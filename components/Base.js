import React from 'react'
import classNames from 'classnames'
import layout from '../styles/layout'
import margins from '../styles/margins'
import paddings from '../styles/paddings'
import typography from '../styles/typography'
import colours from '../styles/colours'
import images from '../styles/images'
import borders from '../styles/borders'

const Base = (props: PropsType): React.Element<*> => {
  const {
    component, tagName, size, style, backgroundImage,

    verticalAlign, display, overflow, clearfix, float, width, height, borderBox, position,

    margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,

    padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,

    fontSize, lineHeight, fontFamily, fontWeight, textAlign, italic, uppercase,
    spaced, antialiased, truncate, underline,

    textColour, fillColour, backgroundColour, borderColour,

    backgroundSize,

    border, borderTop, borderBottom, borderLeft, borderRight, borderRadius,

    ...componentProps,
  } = props
  const Component = component || tagName || 'div'
  const className = classNames(
    layout({
      verticalAlign, display, overflow, clearfix, float, width, height, borderBox, position,
    }),
    margins({
      margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    }),
    paddings({
      padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    }),
    typography({
      fontSize, lineHeight, fontFamily, fontWeight, textAlign, italic, uppercase,
      spaced, antialiased, truncate, underline,
    }),
    colours({
      textColour, fillColour, backgroundColour, borderColour
    }),
    images({
      backgroundSize
    }),
    borders({
      border, borderTop, borderBottom, borderLeft, borderRight, borderRadius,
    }),
  )
  const styles = {
    width: size && `${size * 100}%`,
    backgroundImage: backgroundImage && `url('${backgroundImage}')`,
    ...style,
  }
  return (
    <Component className={className} style={styles} {...componentProps} />
  )
}
export default Base

type BasePropsType = {
  component: React.Element,
  style: StyleType,
  tagName: 'input' | 'button' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  size: number,

  display: 'inline' | 'block'| 'inlineBlock'| 'table'| 'tableCell',
  align: 'baseline' | 'top' | 'middle' | 'bottom',
  overflow: 'hidden' | 'scroll' | 'auto',
  clearfix: boolean,
  width: 'fit' | 'fill',
  height: 'fit' | 'fill',
  float: 'left' | 'right',
  borderBox: boolean,

  margin: 0 | 1 | 2 | 3 | 4,
  marginTop: 0 | 1 | 2 | 3 | 4,
  marginBottom: 0 | 1 | 2 | 3 | 4,
  marginLeft: 0 | 1 | 2 | 3 | 4,
  marginRight: 0 | 1 | 2 | 3 | 4,
  marginX: 0 | 1 | 2 | 3 | 4,
  marginY: 0 | 1 | 2 | 3 | 4,

  borderRadius: 'pill' | 'rounded' | 'circle',
  padding: 0 | 1 | 2 | 3 | 4,
  paddingTop: 0 | 1 | 2 | 3 | 4,
  paddingBottom: 0 | 1 | 2 | 3 | 4,
  paddingLeft: 0 | 1 | 2 | 3 | 4,
  paddingRight: 0 | 1 | 2 | 3 | 4,
  paddingX: 0 | 1 | 2 | 3 | 4,
  paddingY: 0 | 1 | 2 | 3 | 4,
  border: 1 | 2 | 3,
  borderTop: 1 | 2 | 3,
  borderBottom: 1 | 2 | 3,
  borderLeft: 1 | 2 | 3,
  borderRight: 1 | 2 | 3,


  fontSize: 1 | 2 | 3 | 4 | 5 | 'inherit',
  lineHeight: 0 | 1 | 2 | 3 |4 | 5,
  textAlign: 'left' | 'center'| 'right' | 'justify',
  fontWeight: 'bold' | 'regular' | 'inherit',
  family: 'sans' | 'inherit',
  textDecorationNone: boolean,
  italic: boolean,
  uppercase: boolean,
  spaced: boolean,
  antialiased: boolean,
  truncate: boolean,
  underline: boolean,

  backgroundSize: 'cover' | 'contain',
  backgroundImage: string,

   textColour: 'blue'| 'blueDark'| 'grey'| 'greyDark'| 'red'| 'green'
  | 'offWhite'| 'white'| 'transparent',
   fillColour: 'blue' | 'blueDark' | 'grey' | 'greyDark'
  | 'red' | 'green' | 'offWhite' | 'white' | 'transparent',
   backgroundColour: 'blue' | 'blueDark' | 'grey' | 'greyDark' | 'red'
  | 'green' | 'offWhite' | 'white' | 'transparent',
  borderColour: 'blue' | 'blueDark' | 'grey' | 'greyDark' | 'red' | 'green'
  | 'offWhite' | 'white' | 'transparent',

}
