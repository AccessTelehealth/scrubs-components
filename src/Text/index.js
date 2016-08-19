/* @flow */

import React from 'react'
import classnames from 'classnames'
import {
  sans, antialiased, h1, h2, h3, bold, regular, italic, lineHeight1,
  lineHeight2, lineHeight3,
} from 'traits/typography.css'
import {
  textBlueDark, textBlue, textRed, textGreyDark, textGrey, textWhite,
  textGreyDarkOnSiblingInputFocus
} from 'traits/colours.css'


type PropsType = {
  children?: React.Element<any>,
  size?: 'small' | 'large',
  bold?: bool,
  italicised?: bool,
  lineHeight?: 'small' | 'large' ,
  colour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark',
  greyDarkOnSiblingInputFocus?: bool,
  tag?: 'h1' | 'h2' | 'h3'
}

/** A wrapping component for all Text */

const Text = (props: PropsType) => {
  const { children, tag } = props
  const Tag = tag ? tag : 'span'

  return (
    <Tag className={textClasses(props)}>
      {children}
    </Tag>
  )
}


const textClasses = (props: PropsType): string => {
  return classnames(
    sans, antialiased, {
      [h2]: !props.size,
      [h1]: props.size === 'large',
      [h3]: props.size === 'small',
      [regular]: !props.bold,
      [bold]: props.bold,
      [italic]: props.italicised,
      [textBlueDark]: !props.colour,
      [textBlue]: props.colour === 'blue',
      [textRed]: props.colour === 'red',
      [textWhite]: props.colour === 'white',
      [textGrey]: props.colour === 'grey',
      [textGreyDark]: props.colour === 'greyDark',
      [textGreyDarkOnSiblingInputFocus]: props.greyDarkOnSiblingInputFocus,
      [lineHeight2]: !props.lineHeight,
      [lineHeight1]: props.lineHeight === 'small',
      [lineHeight3]: props.lineHeight === 'large',
    }
  )
}

export default Text
