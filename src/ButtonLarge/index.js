/* @flow */

import React from 'react'
import Button from '../Button'

type PropsType = {
  children?: React.Element<any>,
  textColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark',
  backgroundColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'transparent' | 'blueDark',
  borderColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'blueDark',
}

/** A Large Button with text colour, background colour and border colour options */

const ButtonLarge = (props: PropsType) : React.Element<any> => {
  return (
    <Button fontSize='h3' borderWidth='large' padding='large' {...props}>
      {props.children}
    </Button>
  )
}

export default ButtonLarge
