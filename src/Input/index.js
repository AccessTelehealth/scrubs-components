/* @flow */

import React from 'react'
import classnames from 'classnames'
import { borderSmall, rounded } from 'traits/borders.css'
import { textBlueDark, bgGrey, textGreyDark, textGrey, textBlueOnFocus, borderBlueOnFocus, borderGrey, borderRed } from 'traits/colours.css'
import { h5, regular, sans, antialiased } from 'traits/typography.css'
import { fillWidth } from 'traits/layout.css'
import { py2, pl4 } from 'traits/padding.css'
import { mb1 } from 'traits/margin.css'

type Value = string

type PropsType = {
  onChange: (e: Event) => void,
  value: Value,
  placeholder: string,
  valid: boolean,
  textColour?: 'greyDark' | 'grey',
  inputType?: string,
}

/** Default form input styles and handlers */

const Input = (props: PropsType): React.Element<any> => {
  const { placeholder, value, onChange, inputType } = props
  return (
    <input
      className={inputClasses(props)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={inputType}
    />
  )
}

const inputClasses = (props: PropsType): string => {
  return classnames(
    borderSmall, rounded, bgGrey, textBlueOnFocus, borderBlueOnFocus,
    h5, regular, sans, antialiased, fillWidth, pl4, py2, mb1,
    {
      [textBlueDark]: !props.textColour,
      [textGreyDark]: props.textColour === 'greyDark',
      [textGrey]: props.textColour === 'grey',
      [borderGrey]: props.valid,
      [borderRed]: !props.valid,
    }
  )
}


export default Input
