/* @flow */

import React from 'react'
import Text from '../Text'
import classnames from 'classnames'
import {
  bgBlueDark, bgGrey, bgRed, bgGreen, bgWhite, bgBlue, borderBlue, borderRed,
  borderBlueDark, borderWhite, borderGreen, bgTransparent, borderGrey, borderGreyDark,
} from 'traits/colours.css'
import { circle, borderSmall, borderLarge } from 'traits/borders.css'
import { px3, px4, py1, py2 } from 'traits/padding.css'
import { mt3 } from 'traits/margin.css'
import { inlineBlock } from 'traits/layout.css'
import { h1, h2, h3, h4, h5, caps, bold, letterSpacing } from 'traits/typography.css'


type PropsType = {
  children?: React.Element<any>,
  padding: 'small' | 'large',
  fontSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  textColour: 'blue' | 'red' | 'white' | 'grey' | 'greyDark',
  borderWidth: 'small' | 'large',
  backgroundColour: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'transparent' | 'blueDark',
  borderColour: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'blueDark',
}

/** A full width button for primary actions */

const Button = (props: PropsType) : React.Element<any> => {
  return (
    <button className={ButtonClasses(props)}>
      <Text colour={props.textColour} size={props.fontSize} bold>{props.children}</Text>
    </button>
  )
}

const ButtonClasses = (props: PropsType): string => {
  return classnames(
    circle, caps, inlineBlock, bold, letterSpacing,
    {
      [px4]: props.padding === 'large',
      [py2]: props.padding === 'large',
      [px3]: props.padding === 'small',
      [py1]: props.padding === 'small',
      [h1]: props.fontSize === 'h1',
      [h2]: props.fontSize === 'h2',
      [h3]: props.fontSize === 'h3',
      [h4]: props.fontSize === 'h4',
      [h5]: props.fontSize === 'h5',
      [borderSmall]: props.borderWidth === 'small',
      [borderLarge]: props.borderWidth === 'large',
      [bgBlue]: props.backgroundColour === 'blue',
      [bgBlueDark]: props.backgroundColour === 'blueDark',
      [bgTransparent]: props.backgroundColour === 'transparent',
      [bgWhite]: props.backgroundColour === 'white',
      [bgGreen]: props.backgroundColour === 'green',
      [bgRed]: props.backgroundColour === 'red',
      [bgGrey]: props.backgroundColour === 'grey',
      [borderBlue]: props.borderColour === 'blue',
      [borderBlueDark]: props.borderColour === 'blueDark',
      [borderWhite]: props.borderColour === 'white',
      [borderRed]: props.borderColour === 'red',
      [borderGreyDark]: props.borderColour === 'greyDark',
      [borderGrey]: props.borderColour === 'grey',
    }
  )
}

export default Button
