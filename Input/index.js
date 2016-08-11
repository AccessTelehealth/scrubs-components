/* @flow */

import React from 'react'
import styles from './index.css'

type Value = string

type PropsType = {
  onChange: (e: Event) => void,
  value: Value,
  placeholder: string,
  valid: boolean
}

/** Default form input styles and handlers */

const Input = (props: PropsType): React.Element<any> => {
  const { placeholder, value, onChange, valid, } = props
  const className = valid ? styles.InputNormal : styles.InputError
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
