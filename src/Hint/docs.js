/* @flow */

import React from 'react'
import HintString from '!raw!..//Hint'
import { parse } from 'react-docgen'
import { Hint, } from '../'

const Example = (): React.Element<*> => {
  return (
    <Hint
        text="Passwords should be 8 characters in length"
        error
      />
  )
}

const documentation: Object = parse(HintString)
export default { Example, documentation }
