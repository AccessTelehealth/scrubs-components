/* @flow */

import React from 'react'
import ButtonLargeString from '!raw!..//ButtonLarge'
import { parse } from 'react-docgen'
import { ButtonLarge } from '../'

const Example = (): React.Element<*> => {
  return (
    <ButtonLarge textColour='white' backgroundColour='blue' borderColour='white' >
      This is a large button
    </ButtonLarge>
  )
}

const documentation: Object = parse(ButtonLargeString)
export default { Example, documentation }
