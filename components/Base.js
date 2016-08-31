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

    align, display, overflow, clearfix, float, width, height, borderBox, position,

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
      align, display, overflow, clearfix, float, width, height, borderBox, position,
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
   tagName: 'input' | 'button' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
   size: number,
   fontSize: 1 | 2 | 3 | 4 | 5,
   lineHeight: 0 | 1 | 2 | 3 |4 | 5,
   style: StyleType,
   backgroundImage: string,
   alignBaseline: boolean,
   alignTop: boolean,
   alignMiddle: boolean,
   alignBottom: boolean,
   inline: boolean,
   block: boolean,
   inlineBlock: boolean,
   table: boolean,
   tableCell: boolean,
   overflowHidden: boolean,
   overflowScroll: boolean,
   overflowAuto: boolean,
   clearfix: boolean,
   left: boolean,
   right: boolean,
   fit: boolean,
   fillWidth: boolean,
   fillHeight: boolean,
   borderBox: boolean,
   margin: 0 | 1 | 2 | 3 | 4,
   marginTop: 0 | 1 | 2 | 3 | 4,
   marginBottom: 0 | 1 | 2 | 3 | 4,
   marginLeft: 0 | 1 | 2 | 3 | 4,
   marginRight: 0 | 1 | 2 | 3 | 4,
   marginX: 0 | 1 | 2 | 3 | 4,
   marginY: 0 | 1 | 2 | 3 | 4,
   padding: 0 | 1 | 2 | 3 | 4,
   paddingTop: 0 | 1 | 2 | 3 | 4,
   paddingBottom: 0 | 1 | 2 | 3 | 4,
   paddingLeft: 0 | 1 | 2 | 3 | 4,
   paddingRight: 0 | 1 | 2 | 3 | 4,
   paddingX: 0 | 1 | 2 | 3 | 4,
   paddingY: 0 | 1 | 2 | 3 | 4,
   fontSizeInherit: number,
   sans: boolean,
   fontFamilyInherit: boolean,
   textDecorationNone: boolean,
   bold: boolean,
   regular: boolean,
   italic: boolean,
   uppercase: boolean,
   spaced: boolean,
   leftAlign: boolean,
   centerAlign: boolean,
   rightAlign: boolean,
   justify: boolean,
   antialiased: boolean,
   truncate: boolean,
   underline: boolean,
   textBlue: boolean,
   textBlueDark: boolean,
   textGrey: boolean,
   textGreyDark: boolean,
   textRed: boolean,
   textGreen: boolean,
   textOffWhite: boolean,
   textWhite: boolean,
   textTransparent: boolean,
   fillBlue: boolean,
   fillBlueDark: boolean,
   fillGrey: boolean,
   fillGreyDark: boolean,
   fillRed: boolean,
   fillGreen: boolean,
   fillOffWhite: boolean,
   fillWhite: boolean,
   fillTransparent: boolean,
   bgBlue: boolean,
   bgBlueDark: boolean,
   bgGrey: boolean,
   bgGreyDark: boolean,
   bgRed: boolean,
   bgGreen: boolean,
   bgOffWhite: boolean,
   bgWhite: boolean,
   bgTransparent: boolean,
   borderBlue: boolean,
   borderBlueDark: boolean,
   borderGrey: boolean,
   borderGreyDark: boolean,
   borderRed: boolean,
   borderGreen: boolean,
   borderOffWhite: boolean,
   borderWhite: boolean,
   borderTransparent: boolean,
   cover: boolean,
   contain: boolean,
   border: 1 | 2 | 3,
   borderTop: 1 | 2 | 3,
   borderBottom: 1 | 2 | 3,
   borderLeft: 1 | 2 | 3,
   borderRight: 1 | 2 | 3,
   rounded: boolean,
   roundedTop: boolean,
   roundedBottom: boolean,
   roundedLeft: boolean,
   roundedRight: boolean,
   circle: boolean,
}
