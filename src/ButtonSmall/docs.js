/* @flow */

import React from 'react'
import ButtonSmallString from '!raw!..//ButtonSmall'
import { parse } from 'react-docgen'
import { ButtonSmall } from '../'

const Example = (): React.Element<*> => {
  return (
    <ButtonSmall textColour='white' backgroundColour='blue' borderColour='blue' >
      This is a small button
    </ButtonSmall>
  )
}

const documentation: Object = parse(ButtonSmallString)
export default { Example, documentation }
