/* @flow */

import React from 'react'
import { Action } from '../'
import ActionString from '!raw!..//Action'
import { parse } from 'react-docgen'

const example: React.Element<any> = (
  <Action icon="arrowLeft" iconSide="left">Prev</Action>
)

const documentation: Object = parse(ActionString)
export default { example, documentation }
