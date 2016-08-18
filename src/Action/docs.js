/* @flow */

import React from 'react'
import { Action } from '../'
import ActionString from '!raw!..//Action'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return <Action icon="arrowLeft" iconSide="left">Prev</Action>
}

const documentation: Object = parse(ActionString)
export default { Example, documentation }
