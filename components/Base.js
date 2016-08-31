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
    alignBaseline, alignTop, alignMiddle, alignBottom, inline, block,
    inlineBlock, table, tableCell, overflowHidden, overflowScroll, overflowAuto,
    clearfix, left, right, fit, fillWidth, fillHeight, borderBox,
    absolute, relative, fixed,
    margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    fontSize, lineHeight, fontSizeInherit, sans, fontFamilyInherit,
    textDecorationNone, bold, regular, italic, uppercase, spaced,
    leftAlign, centerAlign, rightAlign, justify, antialiased, truncate, underline,
    textBlue, textBlueDark, textGrey, textGreyDark, textRed, textGreen,
    textOffWhite, textWhite, textTransparent, fillBlue, fillBlueDark, fillGrey,
    fillGreyDark, fillRed, fillGreen, fillOffWhite, fillWhite, fillTransparent,
    bgBlue, bgBlueDark, bgGrey, bgGreyDark, bgRed, bgGreen, bgOffWhite, bgWhite,
    bgTransparent, borderBlue, borderBlueDark, borderGrey, borderGreyDark,
    borderRed, borderGreen, borderOffWhite, borderWhite, borderTransparent,
    cover, contain,
    border, borderTop, borderBottom, borderLeft, borderRight,
    rounded, roundedTop, roundedBottom, roundedLeft, roundedRight, circle,
    ...componentProps,
  } = props
  const Component = component || tagName || 'div'
  const className = classNames(
    layout({
      alignBaseline, alignTop, alignMiddle, alignBottom, inline, block,
      inlineBlock, table, tableCell, overflowHidden, overflowScroll, overflowAuto,
      clearfix, left, right, fit, fillWidth, fillHeight, borderBox,
      absolute, relative, fixed,
    }),
    margins({
      margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    }),
    paddings({
      padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    }),
    typography({
      fontSize, lineHeight, fontSizeInherit, sans, fontFamilyInherit,
      textDecorationNone, bold, regular, italic, uppercase, spaced,
      leftAlign, centerAlign, rightAlign, justify, antialiased, truncate, underline,
    }),
    colours({
      textBlue, textBlueDark, textGrey, textGreyDark, textRed, textGreen,
      textOffWhite, textWhite, textTransparent, fillBlue, fillBlueDark, fillGrey,
      fillGreyDark, fillRed, fillGreen, fillOffWhite, fillWhite, fillTransparent,
      bgBlue, bgBlueDark, bgGrey, bgGreyDark, bgRed, bgGreen, bgOffWhite, bgWhite,
      bgTransparent, borderBlue, borderBlueDark, borderGrey, borderGreyDark,
      borderRed, borderGreen, borderOffWhite, borderWhite, borderTransparent,
    }),
    images({
      cover, contain,
    }),
    borders({
      border, borderTop, borderBottom, borderLeft, borderRight,
      rounded, roundedTop, roundedBottom, roundedLeft, roundedRight, circle,
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
  component: React.Element
}
