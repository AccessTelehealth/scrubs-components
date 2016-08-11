/* @flow */

import React from 'react'
import HintString from '!raw!scrubs-components/Hint'
import { parse, } from 'react-docgen'
import { Hint, } from 'scrubs-components'

const example: React.Element<any> = (
  <Hint
    text="Passwords should be 8 characters in length"
    error
  />
)

const documentation: Object = parse(HintString)
export default { example, documentation, }
