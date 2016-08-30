/* @flow */

import React from 'react'
import classnames from 'classnames'
import {
  sans, antialiased, h1, h2, h3, h4, h5, bold, regular, italic, lineHeight1,
  lineHeight2, lineHeight3, caps,
} from 'traits/typography.css'
import {
  textBlueDark, textBlue, textRed, textGreyDark, textGrey, textWhite,
  textGreyDarkOnSiblingInputFocus
} from 'traits/colours.css'


type PropsType = {
  children?: React.Element<any>,
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  bold?: bool,
  italicised?: bool,
  uppercase?: bool,
  lineHeight?: 'small' | 'large' ,
  colour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark',
  inputFocusColour?: bool,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
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
      [h1]: props.size === 'h1',
      [h3]: props.size === 'h3',
      [h4]: props.size === 'h4',
      [h5]: props.size === 'h5',
      [regular]: !props.bold,
      [bold]: props.bold,
      [italic]: props.italicised,
      [caps]: props.uppercase,
      [textBlueDark]: !props.colour,
      [textBlue]: props.colour === 'blue',
      [textRed]: props.colour === 'red',
      [textWhite]: props.colour === 'white',
      [textGrey]: props.colour === 'grey',
      [textGreyDark]: props.colour === 'greyDark',
      [textGreyDarkOnSiblingInputFocus]: props.inputFocusColour,
      [lineHeight2]: !props.lineHeight,
      [lineHeight1]: props.lineHeight === 'small',
      [lineHeight3]: props.lineHeight === 'large',
    }
  )
}

export default Text
