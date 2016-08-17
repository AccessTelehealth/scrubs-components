/* @flow */

import React from 'react'
import { Action, Row } from '../'
import ActionString from '!raw!..//Action'
import { parse } from 'react-docgen'

const example: React.Element<any> = (
  <Row>
    <Action icon="arrowLeft" iconSide="left">Prev</Action>
    <Action icon="arrowRight" iconSide="right">Next</Action>
  </Row>
)

const documentation: Object = parse(ActionString)
export default { example, documentation, }
