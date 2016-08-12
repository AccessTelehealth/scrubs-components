/* @flow */

import React from 'react'
import RowString from '!raw!..//Row'
import { parse, } from 'react-docgen'
import { Row, Text, } from '../'

const example: React.Element<any> = (
  <Row>
    <Text small>Last prescribed</Text>
    <Text small>April 28 2016</Text>
  </Row>
)

const documentation: Object = parse(RowString)
export default { example, documentation, }
