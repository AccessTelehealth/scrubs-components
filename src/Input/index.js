/* @flow */

import React from 'react'
import classnames from 'classnames'
import { borderSmall, rounded } from 'traits/borders.css'
import { textBlueDark, bgGrey, textBlueOnFocus, borderBlueOnFocus, borderGrey, borderRed } from 'traits/colours.css'
import { h2, regular, sans, antialiased } from 'traits/typography.css'
import { fillWidth } from 'traits/layout.css'
import { p2 } from 'traits/padding.css'
import { mb1 } from 'traits/margin.css'

type Value = string

type PropsType = {
  onChange: (e: Event) => void,
  value: Value,
  placeholder: string,
  valid: boolean
}

/** Default form input styles and handlers */

const Input = (props: PropsType): React.Element<any> => {
  const { placeholder, value, onChange } = props
  return (
    <input
      className={inputClasses(props)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

  // const className = valid ? styles.InputNormal : styles.InputError

const inputClasses = (props: PropsType): string => {
  return classnames(
    borderSmall, rounded, textBlueDark, bgGrey, textBlueOnFocus, borderBlueOnFocus,
    h2, regular, sans, antialiased, fillWidth, p2, mb1,
    {
      [borderGrey]: props.valid,
      [borderRed]: !props.valid,
    }
  )
}


export default Input
