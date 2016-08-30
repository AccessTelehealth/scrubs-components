/* @flow */

import React from 'react'
import ButtonString from '!raw!..//Button'
import { parse } from 'react-docgen'
import { Button } from '../'

const Example = (): React.Element<*> => {
  return (
    <Button padding='large' fontSize='h4' borderWidth='large'
      textColour='white' backgroundColour='blue' borderColour='white' >
      Need a break? Go offline
    </Button>
  )
}

const documentation: Object = parse(ButtonString)
export default { Example, documentation }
